// Données des villes pour les pages SEO locales
export interface CityData {
  name: string;
  slug: string;
  department: string;
  departmentCode: string;
  region: string;
  population: string;
  description: string;
  neighborhoods?: string[];
  nearbyTowns?: string[];
}

export const citiesData: CityData[] = [
  // Île-de-France - Prioritaires
  {
    name: "Paris",
    slug: "paris",
    department: "Paris",
    departmentCode: "75",
    region: "Île-de-France",
    population: "2,1 millions",
    description: "HD Connect, votre expert en sécurité à Paris. Installation de systèmes de vidéosurveillance, alarmes anti-intrusion, contrôle d'accès et domotique pour particuliers et professionnels. Intervention rapide dans tous les arrondissements parisiens.",
    neighborhoods: ["Le Marais", "Montmartre", "Saint-Germain", "Bastille", "Belleville", "Auteuil", "Passy", "Nation", "République", "Opéra"],
    nearbyTowns: ["Boulogne-Billancourt", "Neuilly-sur-Seine", "Levallois-Perret", "Vincennes", "Saint-Denis", "Montreuil"]
  },
  {
    name: "Créteil",
    slug: "creteil",
    department: "Val-de-Marne",
    departmentCode: "94",
    region: "Île-de-France",
    population: "92 000",
    description: "HD Connect intervient à Créteil et dans tout le Val-de-Marne pour vos installations de sécurité : caméras de surveillance, systèmes d'alarme, contrôle d'accès. Devis gratuit et intervention sous 24h.",
    neighborhoods: ["Centre-Ville", "Mont-Mesly", "La Source", "Préfecture", "L'Échat", "Bords de Marne"],
    nearbyTowns: ["Maisons-Alfort", "Saint-Maur-des-Fossés", "Alfortville", "Choisy-le-Roi", "Bonneuil-sur-Marne"]
  },
  {
    name: "Vitry-sur-Seine",
    slug: "vitry-sur-seine",
    department: "Val-de-Marne",
    departmentCode: "94",
    region: "Île-de-France",
    population: "95 000",
    description: "Expert en sécurité à Vitry-sur-Seine. HD Connect installe et maintient vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Intervention rapide pour particuliers et entreprises.",
    neighborhoods: ["Centre-Ville", "Port à l'Anglais", "Plateau", "Coteau", "Gare"],
    nearbyTowns: ["Ivry-sur-Seine", "Choisy-le-Roi", "Thiais", "Villejuif", "Alfortville"]
  },
  {
    name: "Saint-Maur-des-Fossés",
    slug: "saint-maur-des-fosses",
    department: "Val-de-Marne",
    departmentCode: "94",
    region: "Île-de-France",
    population: "76 000",
    description: "HD Connect, installateur de sécurité à Saint-Maur-des-Fossés. Vidéosurveillance HD, alarmes certifiées, domotique pour maisons et commerces. Devis gratuit, intervention rapide.",
    neighborhoods: ["La Varenne-Saint-Hilaire", "Saint-Maur Créteil", "Le Parc", "Adamville", "Champignol"],
    nearbyTowns: ["Créteil", "Joinville-le-Pont", "Bonneuil-sur-Marne", "Champigny-sur-Marne", "Sucy-en-Brie"]
  },
  // Grandes métropoles
  {
    name: "Lyon",
    slug: "lyon",
    department: "Rhône",
    departmentCode: "69",
    region: "Auvergne-Rhône-Alpes",
    population: "522 000",
    description: "HD Connect à Lyon : expert en sécurité électronique. Installation de caméras de surveillance, alarmes anti-intrusion, contrôle d'accès biométrique. Intervention dans tous les arrondissements lyonnais.",
    neighborhoods: ["Presqu'île", "Vieux Lyon", "Part-Dieu", "Croix-Rousse", "Confluence", "Gerland", "Villeurbanne"],
    nearbyTowns: ["Villeurbanne", "Vénissieux", "Caluire-et-Cuire", "Saint-Priest", "Vaulx-en-Velin", "Bron"]
  },
  {
    name: "Marseille",
    slug: "marseille",
    department: "Bouches-du-Rhône",
    departmentCode: "13",
    region: "Provence-Alpes-Côte d'Azur",
    population: "870 000",
    description: "HD Connect à Marseille : votre partenaire sécurité. Vidéosurveillance professionnelle, systèmes d'alarme, contrôle d'accès pour résidences et entreprises. Devis gratuit, intervention rapide.",
    neighborhoods: ["Vieux-Port", "Joliette", "Prado", "Castellane", "La Valentine", "Les Catalans", "Endoume"],
    nearbyTowns: ["Aix-en-Provence", "Aubagne", "Martigues", "Vitrolles", "Marignane", "La Ciotat"]
  },
  {
    name: "Toulouse",
    slug: "toulouse",
    department: "Haute-Garonne",
    departmentCode: "31",
    region: "Occitanie",
    population: "493 000",
    description: "Installation sécurité à Toulouse par HD Connect. Caméras HD, alarmes connectées, domotique intelligente. Expert en protection des biens pour particuliers et professionnels toulousains.",
    neighborhoods: ["Capitole", "Saint-Cyprien", "Compans-Caffarelli", "Minimes", "Rangueil", "Blagnac"],
    nearbyTowns: ["Blagnac", "Colomiers", "Tournefeuille", "Muret", "Balma", "L'Union"]
  },
  {
    name: "Bordeaux",
    slug: "bordeaux",
    department: "Gironde",
    departmentCode: "33",
    region: "Nouvelle-Aquitaine",
    population: "260 000",
    description: "HD Connect Bordeaux : solutions de sécurité complètes. Vidéosurveillance, alarmes, contrôle d'accès pour maisons, commerces et entreprises. Intervention rapide en Gironde.",
    neighborhoods: ["Chartrons", "Saint-Pierre", "Bacalan", "Bastide", "Caudéran", "Mériadeck"],
    nearbyTowns: ["Mérignac", "Pessac", "Talence", "Bègles", "Villenave-d'Ornon", "Gradignan"]
  },
  {
    name: "Lille",
    slug: "lille",
    department: "Nord",
    departmentCode: "59",
    region: "Hauts-de-France",
    population: "236 000",
    description: "Expert sécurité à Lille. HD Connect installe vos systèmes de vidéosurveillance, alarmes et contrôle d'accès. Protection optimale pour résidences et locaux professionnels dans le Nord.",
    neighborhoods: ["Vieux-Lille", "Wazemmes", "Vauban", "Centre", "Bois-Blancs", "Fives"],
    nearbyTowns: ["Roubaix", "Tourcoing", "Villeneuve-d'Ascq", "Marcq-en-Barœul", "Lambersart", "Wasquehal"]
  },
  {
    name: "Nantes",
    slug: "nantes",
    department: "Loire-Atlantique",
    departmentCode: "44",
    region: "Pays de la Loire",
    population: "320 000",
    description: "HD Connect à Nantes : installation et maintenance de systèmes de sécurité. Vidéosurveillance, alarmes anti-intrusion, domotique. Devis gratuit pour particuliers et professionnels.",
    neighborhoods: ["Centre-Ville", "Île de Nantes", "Doulon", "Chantenay", "Erdre", "Zola"],
    nearbyTowns: ["Saint-Herblain", "Rezé", "Orvault", "Saint-Nazaire", "Carquefou", "Vertou"]
  },
  {
    name: "Strasbourg",
    slug: "strasbourg",
    department: "Bas-Rhin",
    departmentCode: "67",
    region: "Grand Est",
    population: "287 000",
    description: "HD Connect Strasbourg : solutions de sécurité sur mesure. Caméras de surveillance, systèmes d'alarme certifiés, contrôle d'accès. Intervention dans toute l'Alsace.",
    neighborhoods: ["Grande Île", "Neudorf", "Cronenbourg", "Hautepierre", "Koenigshoffen", "Robertsau"],
    nearbyTowns: ["Illkirch-Graffenstaden", "Schiltigheim", "Lingolsheim", "Bischheim", "Hoenheim", "Ostwald"]
  },
  {
    name: "Nice",
    slug: "nice",
    department: "Alpes-Maritimes",
    departmentCode: "06",
    region: "Provence-Alpes-Côte d'Azur",
    population: "342 000",
    description: "Expert sécurité sur la Côte d'Azur. HD Connect Nice installe vos systèmes de vidéosurveillance, alarmes et domotique. Protection optimale pour villas, appartements et commerces.",
    neighborhoods: ["Vieux-Nice", "Promenade des Anglais", "Cimiez", "Libération", "Port", "Saint-Roch"],
    nearbyTowns: ["Cannes", "Antibes", "Cagnes-sur-Mer", "Grasse", "Saint-Laurent-du-Var", "Menton"]
  }
];

export const getCityBySlug = (slug: string): CityData | undefined => {
  return citiesData.find(city => city.slug === slug);
};

export const getCitiesByRegion = (region: string): CityData[] => {
  return citiesData.filter(city => city.region === region);
};

export const getCitiesByDepartment = (departmentCode: string): CityData[] => {
  return citiesData.filter(city => city.departmentCode === departmentCode);
};
