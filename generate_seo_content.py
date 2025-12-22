import json
import os

# Définition des villes prioritaires selon la stratégie fournie par l'utilisateur
PRIORITY_CITIES = {
    "Paris": ["75001", "75002", "75003", "75004", "75005", "75006", "75007", "75008", "75009", "75010", "75011", "75012", "75013", "75014", "75015", "75016", "75017", "75018", "75019", "75020"],
    "Val-de-Marne (94)": ["Créteil", "Vincennes", "Saint-Maur-des-Fossés", "Ivry-sur-Seine", "Vitry-sur-Seine"],
    "Lyon": ["69001", "69002", "69003", "69004", "69005", "69006", "69007", "69008", "69009"],
    "Bordeaux": ["33000"],
    "Marseille": ["13001", "13002", "13003", "13004", "13005", "13006", "13007", "13008", "13009", "13010", "13011", "13012", "13013", "13014", "13015", "13016"],
    "Lille": ["59000"],
    "Nantes": ["44000"],
    "Toulouse": ["31000"],
}

# Services principaux pour le balisage
SERVICES = [
    "Installation de caméras de surveillance",
    "Installation de systèmes d'alarme",
    "Contrôle d'accès",
    "Dépannage et maintenance d'équipements de sécurité"
]

def generate_html_grid(cities_data):
    """Génère le code HTML pour la grille des villes."""
    html_output = '<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8">\n'
    
    # Créer une liste de toutes les villes/quartiers pour la grille
    all_locations = []
    for city, codes in cities_data.items():
        if city.endswith(')'): # C'est une ville principale avec codes postaux/quartiers
            all_locations.append(city.split('(')[0].strip())
            all_locations.extend(codes)
        else:
            all_locations.append(city)
            
    # Retirer les doublons et les codes postaux
    unique_locations = sorted(list(set([loc for loc in all_locations if not loc.isdigit()])))

    # Limiter à un nombre raisonnable pour la grille (ex: 20 premières)
    for location in unique_locations[:20]:
        html_output += f'  <div class="text-sm font-medium text-primary hover:text-primary/80 transition-colors">\n'
        html_output += f'    <a href="/services?zone={location.replace(" ", "-")}">{location}</a>\n'
        html_output += f'  </div>\n'
        
    html_output += '</div>\n'
    
    return html_output

def generate_json_ld(cities_data):
    """Génère le balisage JSON-LD LocalBusiness pour les villes prioritaires."""
    json_ld_list = []
    
    for city, codes in cities_data.items():
        # Utiliser la ville principale pour le balisage
        city_name = city.split('(')[0].strip()
        
        # Créer une liste de zones de service
        service_areas = [{"@type": "Place", "address": {"@type": "PostalAddress", "addressLocality": code}} for code in codes]
        
        json_ld = {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "HD Connect - Sécurité et Vidéosurveillance",
            "image": "https://hdconnect.fr/logo.png", # Placeholder, à remplacer par l'URL réelle
            "url": "https://hdconnect.fr", # Placeholder, à remplacer par l'URL réelle
            "telephone": "+33 6 27 13 53 04",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": city_name,
                "addressCountry": "FR"
            },
            "hasMap": f"https://www.google.com/maps/search/?api=1&query=HD+Connect+{city_name}",
            "openingHoursSpecification": [
                {"@type": "OpeningHoursSpecification", "dayOfWeek": "Mo", "opens": "09:00", "closes": "18:00"},
                {"@type": "OpeningHoursSpecification", "dayOfWeek": "Tu", "opens": "09:00", "closes": "18:00"},
                {"@type": "OpeningHoursSpecification", "dayOfWeek": "We", "opens": "09:00", "closes": "18:00"},
                {"@type": "OpeningHoursSpecification", "dayOfWeek": "Th", "opens": "09:00", "closes": "18:00"},
                {"@type": "OpeningHoursSpecification", "dayOfWeek": "Fr", "opens": "09:00", "closes": "18:00"}
            ],
            "serviceType": SERVICES,
            "areaServed": service_areas
        }
        json_ld_list.append(json_ld)
        
    # Retourner le balisage pour la première ville (Paris) et les autres en commentaires
    return json.dumps(json_ld_list[0], indent=2)

def main():
    # Génération du HTML
    html_content = generate_html_grid(PRIORITY_CITIES)
    
    # Génération du JSON-LD
    json_ld_content = generate_json_ld(PRIORITY_CITIES)
    
    # Écriture des résultats dans des fichiers
    with open("seo_html_grid.txt", "w") as f:
        f.write(html_content)
        
    with open("seo_json_ld.txt", "w") as f:
        f.write(json_ld_content)
        
    print("Contenu SEO généré dans seo_html_grid.txt et seo_json_ld.txt")

if __name__ == "__main__":
    main()
