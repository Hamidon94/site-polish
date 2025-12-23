# CAHIER DES CHARGES - HD CONNECT SECURITY SOLUTIONS

## 1. PRÉSENTATION DU PROJET

**Client** : HD Connect  
**Secteur** : Sécurité & Technologie  
**Type de site** : Site vitrine professionnel avec génération de leads  

---

## 2. OBJECTIFS DU SITE

- Présenter les services de sécurité et domotique
- Générer des demandes de devis qualifiées
- Renforcer la crédibilité avec un design professionnel
- Optimiser le référencement local (SEO)
- Offrir une expérience utilisateur fluide sur mobile et desktop

---

## 3. STRUCTURE DU SITE

### 3.1 Pages principales

| Page | URL | Description |
|------|-----|-------------|
| Accueil | `/` | Hero, services, prestations, témoignages, FAQ, contact |
| Vidéosurveillance | `/services/videosurveillance` | Page détaillée caméras HD/4K |
| Alarme | `/services/alarme` | Systèmes anti-intrusion NF&A2P |
| Contrôle d'Accès | `/services/controle-acces` | Badges, biométrie, interphones |
| Domotique | `/services/domotique` | Maison intelligente |
| Réseau | `/services/reseau` | Infrastructure WiFi, câblage |
| Maintenance | `/services/maintenance` | Support et dépannage 24/7 |
| Zones d'intervention | `/zones-intervention` | Couverture géographique |
| Mentions légales | `/legal` | CGU, RGPD |

### 3.2 Structure type d'une page service

1. **Hero Section** - Image de fond plein écran avec titre, description, CTA
2. **Section "Pourquoi"** - Contenu expert avec image (50/50)
3. **Section Fonctionnalités** - Grille 4 colonnes avec icônes
4. **Section "Comment"** - Explication technique avec image
5. **Section Cas d'usage** - Solutions par secteur
6. **Section Avantages** - Pourquoi choisir HD Connect
7. **Section Zone géographique** - Couverture France
8. **Section Processus** - 4 étapes
9. **Galerie images** - 3 photos de réalisations
10. **FAQ Accordéon** - Questions fréquentes
11. **CTA Devis** - Formulaire de contact

---

## 4. DIRECTIVES VISUELLES APPLIQUÉES

### 4.1 Images

- **Page d'accueil "Nos Prestations"** : 3 images uniques générées
  - Installation : `prestations-installation.jpg`
  - Dépannage : `prestations-depannage.jpg`
  - Location : `prestations-location.jpg`

- **Heroes des pages services** : Images HD 1920x1080 uniques par service
  - `hero-videosurveillance.jpg`
  - `hero-alarme.jpg`
  - `hero-controle-acces.jpg`
  - `hero-domotique.jpg`
  - `hero-reseau.jpg`
  - `hero-maintenance.jpg`

- **Images de contenu** : 2-3 images stratégiques par page (pas de doublons)

### 4.2 Visibilité Hero

- Overlays réduits (60-70% au lieu de 80-90%)
- Conteneur texte semi-transparent avec backdrop-blur
- Image brightness/contrast améliorés
- Bouton CTA avec gradient et shadow

### 4.3 Composants réutilisables

- `ServiceHero` : Hero avec parallax et animations
- `ContentSection` : Section 50/50 texte/image
- `ServiceShowcase` : Galerie 3 images
- `FAQAccordion` : FAQ en accordéon animé
- `ImageBreak` : Image pleine largeur entre sections

---

## 5. CE QUI A ÉTÉ RÉALISÉ

### ✅ Terminé

1. **Images Accueil "Nos Prestations"**
   - 3 nouvelles images uniques générées et intégrées
   - Plus de doublons dans la section

2. **Amélioration ServiceHero**
   - Image de fond plus visible
   - Texte et boutons plus lisibles
   - Conteneur avec backdrop-blur

3. **Images uniques par service**
   - 6 nouvelles images hero (1920x1080)
   - 12 images de contenu stratégiques
   - Aucun doublon entre pages

4. **Mise à jour pages services**
   - Vidéosurveillance, Alarme, Contrôle d'Accès
   - Domotique, Réseau, Maintenance
   - Nouvelles images intégrées partout

---

## 6. CE QUI RESTE À FAIRE

### 🔲 En attente

1. **Images ImageBreak stratégiques**
   - Ajouter images entre sections "Comment" et "Pourquoi"
   - Composant `ImageBreak` créé mais pas encore intégré

2. **Pages Antenne/Satellite et Portails**
   - Créer ou améliorer ces pages avec le même template

3. **Vérification responsive complète**
   - Test mobile de toutes les pages
   - Ajustements espacements si nécessaire

4. **Animations parallaxe avancées**
   - Ajouter effets de parallaxe aux images de contenu
   - Transitions plus fluides entre sections

---

## 7. CHARTE TECHNIQUE

### Stack technologique
- React 18 + TypeScript
- Tailwind CSS avec tokens sémantiques
- Framer Motion pour animations
- Shadcn/UI pour composants
- React Router pour navigation

### Bonnes pratiques
- Images optimisées (lazy loading)
- SEO sémantique (H1, meta, schema.org)
- Design responsive mobile-first
- Tokens de couleurs (pas de valeurs hardcodées)

---

## 8. ASSETS GÉNÉRÉS

### Images créées (21 au total)

**Prestations accueil (3)**
- `prestations-installation.jpg`
- `prestations-depannage.jpg`
- `prestations-location.jpg`

**Heroes services (6)**
- `hero-videosurveillance.jpg`
- `hero-alarme.jpg`
- `hero-controle-acces.jpg`
- `hero-domotique.jpg`
- `hero-reseau.jpg`
- `hero-maintenance.jpg`

**Contenu services (12)**
- `vs-monitoring-room.jpg`, `vs-installation-outdoor.jpg`
- `alarm-motion-sensor.jpg`, `alarm-siren-outdoor.jpg`
- `access-badge-reader.jpg`, `access-interphone.jpg`
- `domotique-light-switch.jpg`, `domotique-thermostat.jpg`
- `reseau-switch.jpg`, `reseau-wifi.jpg`
- `maintenance-diagnostic.jpg`, `maintenance-team.jpg`

---

*Document généré le 23/12/2024*
