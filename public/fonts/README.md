# Carpeta de Fuentes Personalizadas

Esta carpeta contiene las fuentes tipográficas personalizadas del proyecto Monumby.

## Fuentes Requeridas

### FranklinGothicDemi

- **Uso:** Headers, títulos, branding
- **Peso:** 600 (semibold)
- **Formatos necesarios:**
  - `franklin-gothic-demi.woff2` (recomendado - formato moderno optimizado)
  - `franklin-gothic-demi.woff` (fallback para navegadores antiguos)
  - `franklin-gothic-demi.ttf` (fallback adicional)

## Instrucciones

1. Descarga los archivos de fuente en los formatos indicados
2. Coloca todos los archivos en esta carpeta
3. La configuración en `src/styles/globals.css` cargará automáticamente la fuente desde aquí

## Ejemplo de Descarga

Puedes obtener la fuente desde:

- [Google Fonts](https://fonts.google.com/)
- [Font Squirrel](https://www.fontsquirrel.com/)
- [FontGet](https://www.fontget.com/)
- Proveedores de fuentes premium como Monotype o Adobe Fonts

Una vez descargada, convierte la fuente a los formatos necesarios usando herramientas como:

- [Font Squirrel Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator)
- [CloudConvert](https://cloudconvert.com/)

## Configuración Actual

La fuente está configurada en:

- `src/styles/globals.css` - Definición con `@font-face`
- `tailwind.config.js` - Clase Tailwind `.font-franklin`
- Componentes - Usan `font-franklin` en clases

## Clases Disponibles

- `.font-franklin` - Aplica FranklinGothicDemi con peso 600
- `text-h1` - Tamaño 2.75rem
- `text-h2` - Tamaño 2.25rem
- `text-h3` - Tamaño 1.75rem
- `text-tagline` - Tamaño 1.5rem
- `text-body` - Tamaño 1.15rem
