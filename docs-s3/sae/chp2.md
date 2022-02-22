---
title: Les composants du SAE (Norme OAIS)
sidebar_position: 2
---

# OAIS

- **O**pen **A**rchive **I**nformation **S**ystem
- Spécifie de manière générale **l'architecteur logique** et les **fonctionnalités** d'un SAE
- conserne la **préservation** numérique **à long terme**
- Norme internationale ISO.

# Les concepts de OAIS

1. **Acteurs et roles**: les intervenant et leur roles
2. **Modèle de données**: fichiers à préserver et métadata. Repose sur l'idée que l'information constitue des paquets et que ces paquests ne sont pas les memes.
3. **Modèle fonctionnel**: définit 6 entités comprenant 30 fonctions, certaines nécessitent le savoir-faire de personnes spécialisées, d'autres seront réalisées par des outils informatiques

# Paquets

- Contenu d'information (CI)
- Information de pérennisation (PDI)
- Information d'empaquetage (I Package-IP): association du _CI_ et de son _PDI_

## Types de paquets

1. **d'informations à verser (Submission Information Package - SIP)**: livré par le producteur à l'archive
2. **d'information archivé (Archival Information Package - AIP)**: CI + PDI conservés par l'archive
3. **d'informations diffusé (Dissemination Information Package - DIP)**: transformés par l'Archive à partir de l'AIP dans une forme plus facile à communiquer, notament sur le réseau.

# Entités

1. **Entrées (Ingest)**: reçoit, controle et valide les objets à archiver. ces objets eux-memes transmit à l'entité _stockage_. les métadatasont transmises à l'entité _gestion de données_
2. **Stockage (Archival Storage)**: assure la conservation physique des objets archivés. prend en charge la réalisation des _copies multiples_ et _le renouvellement_ des supports anciens.
3. **Gestion de données (Data Management)**: met à disposition toutes les infos utiles au fonctionnement de l'archive. Fournit aux autres entités les métadata.
4. **Administration (Administration)**: pilote le système. Coordination générale du système. Etablir les règles internes.
