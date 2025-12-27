# HD Connect Security Solutions

**Site vitrine professionnel multi-pages** pour HD Connect, entreprise spécialisée en sécurité électronique, domotique et réseaux.

## 🌐 Aperçu

**URL Production** : https://hdconnect.fr  
**URL Lovable** : https://lovable.dev/projects/cfef176e-4824-41fc-a7a2-f4a1f35a89d4

---

## 📋 Services proposés (11 pages)

### Services principaux (8 pages)
| Service | Route | Description |
|---------|-------|-------------|
| Vidéosurveillance | `/services/videosurveillance` | Caméras HD/4K, NVR, stockage cloud |
| Alarme | `/services/alarme` | Systèmes anti-intrusion NF&A2P |
| Contrôle d'Accès | `/services/controle-acces` | Badges, biométrie, interphones IP |
| Domotique | `/services/domotique` | Maison intelligente, KNX, Zigbee |
| Réseau | `/services/reseau` | Infrastructure WiFi, câblage, fibre |
| Maintenance | `/services/maintenance` | Contrats, dépannage 24/7 |
| Antenne/Satellite | `/services/antenne-satellite` | TNT, paraboles, antennes collectives |
| Portails/Parking | `/services/portails-parking` | Motorisation, barrières, contrôle véhicules |

### Prestations (3 pages - NOUVELLES)
| Prestation | Route | Description |
|------------|-------|-------------|
| Installation | `/services/installation` | Services d'installation professionnelle |
| Dépannage | `/services/depannage` | Interventions urgentes 24/7 |
| Location | `/services/location` | Location de matériel de sécurité |

---

## 🗂 Architecture du site

```
/                           → Page d'accueil
├── /services/
│   ├── /videosurveillance  → Caméras HD/4K, NVR, stockage cloud
│   ├── /alarme             → Systèmes anti-intrusion NF&A2P
│   ├── /controle-acces     → Badges, biométrie, interphones IP
│   ├── /domotique          → Maison intelligente, KNX, Zigbee
│   ├── /reseau             → Infrastructure WiFi, câblage, fibre
│   ├── /maintenance        → Contrats, dépannage 24/7
│   ├── /antenne-satellite  → TNT, paraboles, antennes collectives
│   ├── /portails-parking   → Motorisation, barrières, contrôle véhicules
│   ├── /installation       → Services d'installation (NOUVEAU)
│   ├── /depannage          → Dépannage urgent (NOUVEAU)
│   └── /location           → Location matériel (NOUVEAU)
├── /zones-intervention     → Carte et liste des zones couvertes
├── /mentions-legales       → Mentions légales
├── /politique-confidentialite → Politique RGPD
└── /auth                   → Authentification admin (à configurer)
```

---

## 🎨 Design System

### Palette de couleurs (HSL)
```css
--primary: 215 100% 50%      /* Bleu professionnel */
--accent: 195 100% 45%       /* Cyan accent */
--background: 222 47% 11%    /* Fond sombre */
--foreground: 0 0% 95%       /* Texte clair */
```

### Technologies
- **React 18** + TypeScript
- **Vite** (build tool)
- **Tailwind CSS** + tokens sémantiques
- **Shadcn/UI** (composants)
- **Framer Motion** (animations)
- **React Router 6** (routing)

---

## 🔍 SEO

### Optimisations réalisées
- ✅ Meta tags dynamiques (hook `useSEO`)
- ✅ Schema.org (LocalBusiness, Service, FAQPage, BreadcrumbList)
- ✅ Sitemap.xml avec 15 URLs
- ✅ Couverture régionale France (12 régions)
- ✅ Breadcrumbs structurés
- ✅ URLs canoniques

### Pages dans le sitemap
- 1 page d'accueil (priorité 1.0)
- 8 pages services principaux (priorité 0.9)
- 3 pages prestations (priorité 0.85)
- 1 page zones d'intervention (priorité 0.85)
- 2 pages légales (priorité 0.3)

---

## ✅ Fonctionnalités réalisées

### Phase 1 : Structure
- [x] Architecture React + TypeScript
- [x] Configuration Tailwind CSS avec tokens sémantiques
- [x] Mise en place des routes React Router
- [x] Composants UI Shadcn/UI

### Phase 2 : Pages et contenu
- [x] Page d'accueil complète
- [x] 8 pages services complètes et harmonisées
- [x] 3 pages prestations (Installation, Dépannage, Location)
- [x] Page zones d'intervention
- [x] Pages mentions légales et confidentialité

### Phase 3 : Design et UX
- [x] ServiceHero avec parallaxe
- [x] Icônes colorées avec gradient et glow
- [x] Animations Framer Motion
- [x] Design responsive mobile-first
- [x] Boutons "En savoir plus" vers les pages appropriées

### Phase 4 : Images
- [x] 8 images hero HD (1920×1080)
- [x] 16+ images de contenu (1024×768)
- [x] 3 images prestations accueil
- [x] Images uniques sans doublons entre pages

### Phase 5 : SEO
- [x] Composant RegionCoverage sur toutes les pages
- [x] Hook useSEO pour meta tags dynamiques
- [x] Schema.org ServiceSchema
- [x] Breadcrumbs structurés
- [x] Sitemap.xml à jour

---

## 🔲 À faire (Backend - Supabase)

### Priorité haute
- [ ] Configuration Supabase Auth
- [ ] Connexion formulaire de devis à la base de données
- [ ] Edge Function pour envoi d'emails
- [ ] Page `/admin` fonctionnelle

### Priorité moyenne
- [ ] Google Analytics / Tag Manager
- [ ] Google Search Console
- [ ] Liens réseaux sociaux réels

### Priorité basse
- [ ] Chat en direct
- [ ] Blog/actualités
- [ ] Espace client connecté

---

## 🚀 Installation locale

```sh
# Cloner le repo
git clone <YOUR_GIT_URL>

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

---

## 📁 Structure des fichiers clés

```
src/
├── assets/              # Images (27 fichiers uniques)
├── components/          # Composants React
│   ├── ui/              # Shadcn UI components
│   ├── SEO/             # Composants SEO (Schema, Breadcrumbs)
│   └── ...              # Composants métier
├── data/                # Données (content.ts, seoData.ts)
├── hooks/               # Hooks personnalisés (useSEO, useAuth)
├── pages/               # Pages de l'application
│   └── services/        # 11 pages services
└── lib/                 # Utilitaires
```

---

## 📊 Métriques cibles

| Métrique | Objectif |
|----------|----------|
| Taux de conversion | > 3% |
| Temps de chargement | < 3s |
| Score Lighthouse mobile | > 90 |
| SEO régional | Top 10 |

---

**Version** : 3.1  
**Dernière mise à jour** : 27/12/2024  
**Développement** : Lovable AI
