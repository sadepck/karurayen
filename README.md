# Karü Rayen - Vivero Boutique

Landing page inmersiva para un vivero boutique de plantas premium.

## Stack Tecnológico

- **Framework:** Next.js 14 (App Router)
- **Estilos:** Tailwind CSS
- **Animaciones:** Framer Motion
- **Iconos:** Lucide React
- **Fuentes:** Playfair Display + Inter

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Configuración

### WhatsApp
Edita el número de WhatsApp en `src/components/WhatsAppButton.tsx`:
```typescript
const WHATSAPP_NUMBER = "569XXXXXXXX"; // Reemplaza con tu número
```

### Logo
Coloca tu logo en `public/logo.png`

## Estructura del Proyecto

```
src/
├── app/
│   ├── globals.css      # Estilos globales y fuentes
│   ├── layout.tsx       # Layout principal
│   └── page.tsx         # Página principal
├── components/
│   ├── PlantCard.tsx    # Tarjeta de producto
│   └── WhatsAppButton.tsx # Botón de contacto
```

## Paleta de Colores (Lujo Orgánico)

- **Background (Deep Emerald):** #002A22
- **Accent (Electric Lime):** #D4FF00
- **Text (Champagne):** #F5E6CA
- **Surface:** #00382e

## Producción

```bash
npm run build
npm start
```
