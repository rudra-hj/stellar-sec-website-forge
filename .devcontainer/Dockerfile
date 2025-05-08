FROM node:24-alpine

# Installer les dépendances utiles au développement
RUN apk add --no-cache git bash

# Définir le répertoire de travail
WORKDIR /workspace

# Installer des outils globaux
RUN npm install -g npm@latest

# Définir l'utilisateur par défaut
USER node

# Exposer le port utilisé par Vite
EXPOSE 8080
