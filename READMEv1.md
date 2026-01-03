# 🔐 HD CONNECT - Documentation Technique v4.0

> **Version**: 4.0 - Architecture SEO 5 Niveaux  
> **Date**: 03 Janvier 2025  
> **Statut**: ✅ FONCTIONNEL - Structure SEO complète implémentée

---

## 📊 ARCHITECTURE SEO IMPLÉMENTÉE

### Vue d'ensemble hiérarchique

```
Niveau 0:  /                           (Accueil - Priority 1.0)
           │
Niveau 1:  /services/*                 (11 pages services - Priority 0.85-0.9)
           │
Niveau 2:  /regions                    (Hub géographique - Priority 0.85)
           │
Niveau 3:  /regions/{region}           (13 pages régions - Priority 0.8)
           │
Niveau 4:  /villes/{ville}             (30+ pages villes - Priority 0.7-0.75)
           │
Niveau 5:  /villes/{ville}/{service}   (Phase 2 - À venir)
```

### Statistiques actuelles

| Niveau | Type | Nombre de pages | Priorité SEO |
|--------|------|-----------------|--------------|
| 0 | Accueil | 1 | 1.0 |
| 1 | Services nationaux | 11 | 0.85-0.9 |
| 2 | Hub régions | 1 | 0.85 |
| 3 | Pages régions | 13 | 0.8 |
| 4 | Pages villes | 30+ | 0.7-0.75 |
| - | Pages légales | 2 | 0.3 |
| **Total** | - | **58+** | - |

---

## 🗺️ ROUTING COMPLET (App.tsx)

```tsx
// Niveau 0 - Accueil
<Route path="/" element={<Index />} />

// Niveau 1 - Services nationaux
<Route path="/services/videosurveillance" element={<Videosurveillance />} />
<Route path="/services/alarme" element={<Alarme />} />
<Route path="/services/controle-acces" element={<ControleAcces />} />
<Route path="/services/domotique" element={<Domotique />} />
<Route path="/services/reseau" element={<Reseau />} />
<Route path="/services/maintenance" element={<Maintenance />} />
<Route path="/services/antenne-satellite" element={<AntenneSatellite />} />
<Route path="/services/portails-parking" element={<PortailsParking />} />
<Route path="/services/installation" element={<Installation />} />
<Route path="/services/depannage" element={<Depannage />} />
<Route path="/services/location" element={<Location />} />

// Niveau 2 - Hub géographique
<Route path="/regions" element={<RegionsHub />} />

// Niveau 3 - Pages régions (dynamique)
<Route path="/regions/:regionSlug" element={<RegionPage />} />

// Niveau 4 - Pages villes (dynamique)
<Route path="/villes/:citySlug" element={<CityPage />} />

// Pages légales
<Route path="/:type(mentions-legales|politique-confidentialite)" element={<LegalPage />} />
```

---

## 🔗 MAILLAGE INTERNE

### Règles de maillage appliquées

| Règle | Implémentation |
|-------|----------------|
| Chaque page reçoit ≥2 liens internes | ✅ Via ServiceLinks + breadcrumbs |
| Chaque page émet ≥3 liens internes | ✅ Services + régions + CTA |
| Liens verticaux (parent → enfant) | ✅ Région → Villes |
| Liens transversaux (frères) | ✅ Villes voisines, services liés |

### Composant ServiceLinks

```tsx
// Liens services (8 max)
otherServices.slice(0, 8).map(service => 
  <Link to={`/services/${service.slug}`}>

// Liens régions prioritaires (5)
priorityRegions.map(region =>
  <Link to={`/regions/${region.slug}`}>

// CTA Hub régions
<Link to="/regions">
```

### Structure de maillage par page

| Type de page | Liens émis |
|--------------|------------|
| Page service | → 7 autres services + 5 régions + hub |
| Page région | → Services + villes + régions voisines |
| Page ville | → Région parente + services + villes voisines |

---

## 📁 STRUCTURE DES FICHIERS

```
src/
├── data/
│   ├── regionsData.ts     # 13 régions avec départements, villes, highlights
│   ├── citiesData.ts      # 30+ villes avec descriptions SEO
│   ├── seoData.ts         # Données SEO services
│   └── content.ts         # Contenu textuel centralisé
│
├── pages/
│   ├── regions/
│   │   ├── RegionsHub.tsx    # /regions - Hub géographique
│   │   └── RegionPage.tsx    # /regions/:regionSlug
│   │
│   ├── villes/
│   │   ├── CityPage.tsx      # /villes/:citySlug - Router
│   │   └── CityServicePage.tsx # Composant multi-services
│   │
│   └── services/             # 11 pages services
│
├── components/
│   ├── ServiceLinks.tsx      # Maillage interne complet
│   ├── ServiceHero.tsx       # Hero avec 12 couleurs d'accent
│   └── ...
│
public/
└── sitemap.xml               # 58+ URLs structurées
```

---

## 🌍 DONNÉES RÉGIONS (regionsData.ts)

### 13 Régions métropolitaines

| Région | Slug | Départements | Villes principales |
|--------|------|--------------|-------------------|
| Île-de-France | `ile-de-france` | 8 | Paris, Créteil, Versailles |
| Auvergne-Rhône-Alpes | `auvergne-rhone-alpes` | 12 | Lyon, Grenoble, St-Étienne |
| PACA | `provence-alpes-cote-d-azur` | 6 | Marseille, Nice, Cannes |
| Nouvelle-Aquitaine | `nouvelle-aquitaine` | 12 | Bordeaux, La Rochelle |
| Occitanie | `occitanie` | 13 | Toulouse, Montpellier |
| Hauts-de-France | `hauts-de-france` | 5 | Lille, Amiens |
| Grand Est | `grand-est` | 10 | Strasbourg, Nancy, Metz |
| Pays de la Loire | `pays-de-la-loire` | 5 | Nantes, Angers |
| Bretagne | `bretagne` | 4 | Rennes, Brest |
| Normandie | `normandie` | 5 | Rouen, Le Havre |
| Bourgogne-Franche-Comté | `bourgogne-franche-comte` | 8 | Dijon |
| Centre-Val de Loire | `centre-val-de-loire` | 6 | Orléans, Tours |
| Corse | `corse` | 2 | Ajaccio, Bastia |

### Structure RegionData

```typescript
interface RegionData {
  name: string;
  slug: string;
  description: string;
  seoDescription: string;
  departments: { name: string; code: string }[];
  mainCities: string[];
  economicHighlights: string[];
  clientTypes: string[];
}
```

---

## 🏙️ DONNÉES VILLES (citiesData.ts)

### 30+ Villes stratégiques

| Ville | Région | Dept | Population |
|-------|--------|------|------------|
| Paris | Île-de-France | 75 | 2,1M |
| Lyon | Auvergne-Rhône-Alpes | 69 | 522K |
| Marseille | PACA | 13 | 870K |
| Toulouse | Occitanie | 31 | 493K |
| Bordeaux | Nouvelle-Aquitaine | 33 | 260K |
| Lille | Hauts-de-France | 59 | 236K |
| Nice | PACA | 06 | 342K |
| Nantes | Pays de la Loire | 44 | 320K |
| Strasbourg | Grand Est | 67 | 287K |
| ... | ... | ... | ... |

### Structure CityData

```typescript
interface CityData {
  name: string;
  slug: string;
  department: string;
  departmentCode: string;
  region: string;
  regionSlug: string;          // Pour le maillage
  population: string;
  description: string;
  neighborhoods?: string[];
  nearbyTowns?: string[];
}
```

---

## 🎨 PAGES MULTI-SERVICES (Niveau 4)

### Contenu d'une page ville

1. **Hero** - Nom ville + région + badge département
2. **8 Services** - Grille avec liens vers /services/*
3. **3 Prestations** - Installation, Dépannage, Location
4. **4 Avantages** - Intervention 24-48h, Expertise, Devis, Support
5. **Zone Coverage** - Quartiers + villes voisines
6. **Villes voisines** - Liens maillage transversal
7. **6 FAQ** - Questions localisées
8. **CTA Final** - Lien vers contact
9. **ServiceLinks** - Maillage complet

### JSON-LD par page ville

```json
{
  "@type": "LocalBusiness",
  "name": "HD Connect - Sécurité {Ville}",
  "areaServed": { "@type": "City", "name": "{Ville}" },
  "serviceType": [
    "Installation vidéosurveillance",
    "Installation alarme",
    "Contrôle d'accès",
    "Domotique",
    "Réseau et câblage",
    "Maintenance sécurité",
    "Antenne satellite",
    "Portails et parking"
  ]
}
```

---

## 📋 SITEMAP.XML

### Structure

```
58+ URLs réparties en :
├── 1 page accueil (priority 1.0)
├── 11 pages services (priority 0.85-0.9)
├── 1 hub régions (priority 0.85)
├── 13 pages régions (priority 0.8)
├── 30+ pages villes (priority 0.7-0.75)
└── 2 pages légales (priority 0.3)
```

### Mise à jour

- **Dernière MAJ**: 03/01/2025
- **Fréquence accueil**: weekly
- **Fréquence services/régions**: monthly
- **Fréquence légales**: yearly

---

## ✅ TRAVAIL ACCOMPLI v4.0

### Nouvelle architecture SEO
- [x] Hub régions `/regions` créé
- [x] 13 pages régions dynamiques
- [x] 30+ pages villes multi-services
- [x] Maillage interne complet
- [x] Sitemap 58+ URLs

### Composants créés
- [x] `src/pages/regions/RegionsHub.tsx`
- [x] `src/pages/regions/RegionPage.tsx`
- [x] `src/data/regionsData.ts`
- [x] `src/data/citiesData.ts` enrichi (30+ villes)
- [x] `src/pages/villes/CityServicePage.tsx` restructuré

### Maillage
- [x] ServiceLinks avec régions prioritaires
- [x] Breadcrumbs hiérarchiques
- [x] Liens villes voisines
- [x] Liens régions voisines

---

## ⚠️ À FAIRE

### Phase 2 - Pages Service+Ville (Niveau 5)
- [ ] `/villes/paris/videosurveillance`
- [ ] `/villes/lyon/alarme`
- [ ] etc. (requêtes ultra-concurrentielles)

### Backend Supabase
- [ ] Connexion formulaires
- [ ] Stockage leads
- [ ] Authentification admin

### Autres
- [ ] Google Analytics
- [ ] Google Search Console
- [ ] Liens réseaux sociaux réels

---

## 🛠️ STACK TECHNIQUE

| Technologie | Version | Usage |
|-------------|---------|-------|
| React | 18.3 | Framework UI |
| TypeScript | 5.x | Typage |
| Vite | 5.x | Build tool |
| React Router | 6.x | Routing dynamique |
| Tailwind CSS | 3.x | Styling |
| Framer Motion | 12.x | Animations |
| Lucide React | Latest | Icônes |

---

**Document créé le 03 Janvier 2025**  
**Architecture SEO 5 niveaux opérationnelle**
