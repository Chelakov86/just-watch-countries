# Streaming Availability Search Web App

## Projektüberblick

Eine Full-Stack-Webanwendung, mit der Nutzer Filme und Serien nach Land und Streaming-Anbieter suchen können. Die Suche kann über TMDb, JustWatch oder Utelly APIs erfolgen. Ergebnisse werden normalisiert angezeigt.

## Features
- Suche nach Filmen/Serien nach Land und Anbieter
- Auswahl zwischen TMDb, JustWatch, Utelly APIs
- Ergebnisse werden einheitlich dargestellt

## Tech Stack
- **Frontend:** React + TypeScript, MUI, React Router, Axios, React Query
- **Backend:** Node.js (Express), TypeScript, Axios, dotenv
- **APIs:** TMDb, JustWatch, Utelly
- **Deployment:** Vercel/Netlify (Frontend), Render/Heroku (Backend)

## Projektstruktur

```
/client
	/src
		/api
		/components
		/pages
		/hooks
		/store
		/utils
		/assets
		App.tsx
		index.tsx
/server
	/src
		/controllers
		/routes
		/services
		/models
		/middlewares
		/utils
		app.ts
```

## Setup-Anleitung

### 1. API-Keys
- Lege eine `.env`-Datei im `server`-Verzeichnis an (siehe `.env.example`).
- Trage deine API-Keys für TMDb und RapidAPI (JustWatch/Utelly) ein.

### 2. Installation

```bash
# Frontend
cd client
npm install

# Backend
cd ../server
npm install
```

### 3. Entwicklung starten

```bash
# Backend
cd server
npm run dev

# Frontend (neues Terminal)
cd client
npm start
```

## API-Keys
- `TMDB_API_KEY` – [TMDb API](https://www.themoviedb.org/documentation/api)
- `RAPIDAPI_KEY` – [RapidAPI](https://rapidapi.com/) für JustWatch/Utelly

## Weiterentwicklung
- Datenbankanbindung (optional)
- Authentifizierung (optional)
- Verbesserte Fehlerbehandlung