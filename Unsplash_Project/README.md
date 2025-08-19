# Unsplash Project

A React project using the **Unsplash API** with features like dark mode, search, and React Query for data fetching.

## Steps

#### Setup

- `npm install`
- `npm run dev`

#### Structure

- Components: `ThemeToggle`, `SearchForm`, `Gallery`
- Global Context for state management

#### Features

- **Dark Mode**: toggle with React Icons (sun/moon), persists with localStorage, supports user system preference
- **Search**: form input to query Unsplash images
- **Unsplash API**: fetch images via search/photos endpoint using API key
- **React Query**: handle fetching, caching, and dev tools support

#### Deployment

- ENV variables managed with **Vite** (`.env` in `.gitignore`)
- Hosted on **Netlify** with API key stored in environment settings

## Tech Stack

- React + Vite
- Context API
- React Query
- Unsplash API
- Netlify (deployment)

## Notes

- Dark theme uses CSS variables + `.dark-theme` class
- User preference + localStorage support for theme
- `useQuery` re-fetches based on `searchValue`
