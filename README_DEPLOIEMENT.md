# HD Connect - Site Web de Sécurité

## 📋 Description du Projet

Site web professionnel pour HD Connect, entreprise spécialisée dans l'installation et la maintenance de systèmes de sécurité (caméras de surveillance, alarmes, contrôle d'accès, etc.).

**Version actuelle** : V3 - Avec formulaire en entonnoir intégré  
**Date de dernière mise à jour** : 15 novembre 2025

---

## 🎨 Caractéristiques Principales

### ✅ Fonctionnalités Implémentées

1. **Thème Blanc et Bleu** : Design moderne et professionnel avec palette de couleurs bleues
2. **Informations de Contact Réelles** :
   - Téléphones : +33 6 27 13 53 04 et +33 1 83 64 36 40
   - Emails : kamal@hdconnect.fr et hdconnect@hdconnect.fr
3. **Formulaire en Entonnoir (CTA)** :
   - Deux parcours : Demande de Devis et Demande d'Intervention
   - 4 étapes de qualification
   - Envoi autonome par email (système mailto)
4. **Sections Complètes** :
   - Hero avec appel à l'action
   - Services (6 services détaillés)
   - À Propos
   - Contact
   - Footer

### ⚠️ À Configurer (Supabase)

- Authentification utilisateur
- Stockage des demandes de contact/devis
- Panneau d'administration
- Envoi automatique d'emails de confirmation

---

## 🚀 Installation et Démarrage

### Prérequis

- Node.js 18+ et npm
- Git (optionnel)

### Installation

```bash
# 1. Extraire le projet (si ZIP)
unzip hdconnect-v3-final.zip
cd hdconnect-security-solutions-main

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

Le site sera accessible à l'adresse : `http://localhost:8080`

### Build de Production

```bash
# Créer le build de production
npm run build

# Prévisualiser le build
npm run preview
```

---

## 📁 Structure du Projet

```
hdconnect-security-solutions-main/
├── src/
│   ├── components/           # Composants React
│   │   ├── Header.tsx       # En-tête avec navigation
│   │   ├── Hero.tsx         # Section hero
│   │   ├── Services.tsx     # Section services
│   │   ├── QuoteFunnelSimple.tsx  # Formulaire en entonnoir
│   │   ├── About.tsx        # Section À Propos
│   │   ├── Contact.tsx      # Section Contact
│   │   └── Footer.tsx       # Pied de page
│   ├── pages/               # Pages de l'application
│   │   ├── Index.tsx        # Page d'accueil
│   │   ├── Auth.tsx         # Page d'authentification (à configurer)
│   │   └── Admin.tsx        # Page admin (à configurer)
│   ├── integrations/        # Intégrations externes
│   │   └── supabase/        # Configuration Supabase (à configurer)
│   ├── index.css            # Styles globaux et thème
│   └── main.tsx             # Point d'entrée de l'application
├── public/                  # Fichiers statiques
├── vite.config.ts           # Configuration Vite
├── tailwind.config.ts       # Configuration Tailwind CSS
├── package.json             # Dépendances du projet
└── README_DEPLOIEMENT.md    # Ce fichier
```

---

## 🔧 Configuration

### Variables d'Environnement (Supabase - À Venir)

Créer un fichier `.env.local` à la racine du projet :

```env
VITE_SUPABASE_URL=votre_url_supabase
VITE_SUPABASE_ANON_KEY=votre_cle_anon_supabase
```

### Serveur de Développement

Le fichier `vite.config.ts` est configuré pour :
- Port : 8080
- Host : 0.0.0.0 (accessible depuis l'extérieur)
- HMR (Hot Module Replacement) activé

---

## 📧 Fonctionnement du Formulaire en Entonnoir

### Mode Autonome (Actuel)

Le formulaire utilise le système `mailto:` pour envoyer les demandes :
1. L'utilisateur remplit le formulaire en 4 étapes
2. À la validation, un email pré-rempli s'ouvre dans son client de messagerie
3. L'email est envoyé à : kamal@hdconnect.fr et hdconnect@hdconnect.fr

### Mode Supabase (À Implémenter)

Lorsque Supabase sera configuré :
1. Les demandes seront stockées dans la base de données
2. Un email de confirmation sera envoyé automatiquement au client
3. Les demandes seront accessibles depuis le panneau d'administration

---

## 🎯 Prochaines Étapes

### Priorité 1 - Contenu

- [ ] Remplacer les images manquantes des services (Réseau, Domotique, Maintenance)
- [ ] Créer les pages Mentions légales et Politique de confidentialité
- [ ] Configurer les liens des réseaux sociaux dans le Footer

### Priorité 2 - Backend (Supabase)

- [ ] Créer un compte Supabase
- [ ] Configurer les variables d'environnement
- [ ] Créer les tables de base de données (demandes de contact, utilisateurs)
- [ ] Implémenter l'authentification
- [ ] Connecter le formulaire à Supabase
- [ ] Activer le panneau d'administration

### Priorité 3 - Optimisation

- [ ] Optimiser les images (compression, formats modernes)
- [ ] Ajouter des métadonnées SEO
- [ ] Configurer Google Analytics (optionnel)
- [ ] Tester la performance (Lighthouse)

---

## 📞 Support

Pour toute question ou assistance :
- Email : kamal@hdconnect.fr
- Téléphone : +33 6 27 13 53 04

---

## 📝 Historique des Modifications

### Version 3 (15/11/2025)
- ✅ Thème blanc et bleu implémenté
- ✅ Informations de contact mises à jour
- ✅ Formulaire en entonnoir (QuoteFunnelSimple) intégré
- ✅ Mode autonome (mailto) fonctionnel

### Version 2 (15/11/2025)
- ✅ Thème de couleurs modifié
- ✅ Coordonnées mises à jour dans tous les composants

### Version 1 (Initiale)
- ✅ Structure de base du site
- ✅ Sections principales créées
- ✅ Intégration Shadcn/ui et Tailwind CSS

---

## 📄 Licence

Tous droits réservés © 2025 HD Connect
