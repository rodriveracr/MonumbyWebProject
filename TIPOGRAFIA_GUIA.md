# Guía de Tipografías - Monumby

Esta guía describe el sistema de tipografías implementado en el proyecto Monumby.

## Fuentes Disponibles

### 1. FranklinGothicDemi (Fuente Principal)

- **Uso:** Headers, títulos, branding
- **Peso:** 600 (semibold)
- **Ubicación del archivo:** `/public/fonts/franklin-gothic-demi.*`
- **Clases Tailwind:** `.font-franklin`

### 2. Fuente del Sistema (Sistema/Geist)

- **Uso:** Textos, párrafos, body general
- **Fallback:** Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif
- **Clases Tailwind:** ninguna especial (usa por defecto)

## Tamaños Personalizados

Los siguientes tamaños están predefinidos en Tailwind:

```tsx
// Clases de tamaño disponibles
text-h1      // 2.75rem - Para h1 (títulos principales)
text-h2      // 2.25rem - Para h2 (subtítulos grandes)
text-h3      // 1.75rem - Para h3 (subtítulos medianos)
text-tagline // 1.5rem  - Para taglines/eslóganes
text-body    // 1.15rem - Para párrafos y texto general
```

## Pesos de Fuente

```tsx
font-medium   // 500 - Texto normal/medium (no usar para Franklin)
font-semibold // 600 - Franklin Gothic Demi (usar con .font-franklin)
font-bold     // 700 - Para énfasis
```

## Ejemplos de Uso

### Headers / Títulos

```tsx
// H1 - Título principal con Franklin
<h1 className="font-franklin text-h1">Título Principal</h1>

// H2 - Subtítulo con Franklin
<h2 className="font-franklin text-h2">Subtítulo</h2>

// H3 - Subtítulo menor con Franklin
<h3 className="font-franklin text-h3">Subtítulo Pequeño</h3>

// Tagline con Franklin
<p className="font-franklin text-tagline">Tu eslogan aquí</p>
```

### Párrafos y Texto General

```tsx
// Párrafo normal (usa fuente del sistema por defecto)
<p className="text-body">Este es un párrafo de contenido normal.</p>

// Lista con tamaño correcto
<li className="text-body">Elemento de lista</li>

// Enlaces
<a href="/" className="text-body">Enlace de navegación</a>
```

## Componentes Actualizados

Los siguientes componentes ya usan el nuevo sistema:

- ✅ `Hero.tsx` - Títulos principales h1, h2, h3
- ✅ `Navbar.tsx` - Enlaces de navegación
- 🔄 `Footer.tsx` - Pendiente de actualizar
- 🔄 `ProductCarousel.tsx` - Pendiente de actualizar
- 🔄 Otras páginas - Revisar manualmente

## Instalación de Fuentes

### Paso 1: Obtener los Archivos

Necesitas los siguientes archivos de FranklinGothicDemi:

- `franklin-gothic-demi.woff2` (recomendado)
- `franklin-gothic-demi.woff` (fallback)
- `franklin-gothic-demi.ttf` (fallback)

### Paso 2: Ubicar los Archivos

Coloca los archivos en: `/public/fonts/`

### Paso 3: Verificar

Abre el proyecto en desarrollo:

```bash
npm run dev
```

Los títulos deberían mostrar la fuente Franklin Gothic.

## Fuentes de Descargas

Puedes descargar FranklinGothicDemi desde:

- [Google Fonts](https://fonts.google.com/)
- [Font Squirrel](https://www.fontsquirrel.com/)
- [FontGet](https://www.fontget.com/)
- [Adobe Fonts](https://fonts.adobe.com/)

## Convertir Fuentes a Formatos Web

Si tu fuente está en otro formato (TTF, OTF), conviértela a WOFF2/WOFF usando:

- [Font Squirrel Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator)
- [CloudConvert](https://cloudconvert.com/)
- [Online Font Converter](https://www.online-convert.com/)

## Archivos Modificados

Los siguientes archivos fueron actualizados:

1. **`src/styles/globals.css`**
   - Agregada regla `@font-face` para FranklinGothicDemi
   - Agregadas reglas base para h1-h6, .tagline, p, li, a

2. **`tailwind.config.js`**
   - Agregada familia de fuentes `.font-franklin`
   - Agregados tamaños personalizados (text-h1, text-h2, etc.)
   - Agregado peso de fuente para Franklin

3. **`src/components/Hero.tsx`**
   - Actualizado h1 principal con `.font-franklin text-h1`
   - Actualizado h2 de vídeo con `.font-franklin text-h2`
   - Actualizado h3 de carrusel con `.font-franklin text-h3`
   - Agregados `.text-body` a párrafos

4. **`src/components/Navbar.tsx` (CSS)**
   - Actualizada clase `.navbar-link` para usar Franklin

5. **`public/fonts/`**
   - Carpeta nueva para almacenar archivos de fuentes
   - README.md con instrucciones

## Próximos Pasos

- [ ] Copiar archivos de fuentes a `/public/fonts/`
- [ ] Actualizar `Footer.tsx` con tipografías
- [ ] Actualizar `ProductCarousel.tsx` con tipografías
- [ ] Revisar todas las páginas en `src/app/[locale]/` para consistencia
- [ ] Probar en múltiples navegadores
- [ ] Ajustar tamaños si es necesario según feedback

## Solución de Problemas

### Las fuentes no cargan

1. Verifica que los archivos estén en `/public/fonts/`
2. Comprueba que los nombres coincidan exactamente
3. Limpia el caché del navegador (Ctrl+Shift+Delete)
4. Reinicia el servidor de desarrollo (`npm run dev`)

### Los tamaños se ven incorrectos

1. Asegúrate de usar `.text-h1`, `.text-h2`, etc.
2. No mezcles tamaños de Tailwind con Tailwind personalizados
3. Verifica que las clases estén en el correcto elemento HTML

### El navegador muestra fallback (serif)

1. La fuente no está cargando correctamente
2. Revisa la consola del navegador (F12) para errores
3. Verifica que `@font-face` está en `globals.css`

## Variables CSS Relacionadas

Si necesitas ajustar colores o estilos relacionados, estas variables pueden ser útiles:

```css
--transition-speed: /* velocidad de transición */
--color-monumby-yellow: /* color amarillo Monumby */
--font-body: /* variable anterior de fuente (ahora deprecated) */
```
