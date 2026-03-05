# Imágenes del sitio – Dónde colocar cada archivo

## Cómo funciona (importante)

- **Todas las imágenes van en la carpeta `public/`** de esta app.
- **No se usa localStorage**: los archivos forman parte del repositorio y del deploy. Cuando subas el proyecto a Vercel (o cualquier hosting), la carpeta `public/` se publica y **todos los usuarios** ven las mismas imágenes desde la nube.
- En el código se referencian por ruta desde la raíz, por ejemplo: `/hero-idea-realidad.jpg` → archivo físico: `public/hero-idea-realidad.jpg`.

---

## Estructura y listado de imágenes esperadas

Colocá cada imagen en la ruta indicada (todas relativas a `public/`).

### Raíz de `public/`

| Archivo | Uso |
|---------|-----|
| `hero-carousel-1.png` | Carrusel inicio (slide 1) |
| `hero-carousel-2.png` | Carrusel inicio (slide 2) |
| `hero-carousel-3.png` | Carrusel inicio (slide 3) |
| `hero-carousel-4.png` | Carrusel inicio (slide 4) |
| `obras-hero-1.png` | Carrusel página Obras (slide 1) |
| `obras-hero-2.png` | Carrusel página Obras (slide 2) |
| `obras-hero-3.png` | Carrusel página Obras (slide 3) |
| `hoqui-logo.png` | Logo (header y sección Nosotros) |
| `contacto-hero.jpg` | Hero página Contacto |
| `servicios-background.png` | Hero / fondo página Servicios |
| `ejecucion-obra-background.png` | Fondo hero de todas las subpáginas de Servicios (ejecución de obra, administración, desarrollos, remodelaciones, casas autosustentables, llave en mano, servicio post venta) |
| `quality-construction-detail.jpg` | Llave en mano – Calidad comprobable |
| `warranty-guarantee.jpg` | Llave en mano – Garantía |
| `llave-en-mano-background.jpg` | Fondo Llave en mano |
| `after-sales-service.jpg` | Servicio post venta |
| `personalized-service.jpg` | Trato personalizado |
| `construction-timeline.jpg` | Plazo cierto |
| `budget-planning.jpg` | Precio cierto |
| `modern-construction-values.jpg` | Página Valores |
| `terminaciones-hero.png` | Hero Terminaciones |
| `construction-team.jpg` | Nosotros – hero |

### `public/proyectos/`

Cada proyecto tiene su subcarpeta. Nombre de carpeta = nombre que aparece en la ruta (ej. `la-florida`, `casa-s-s`).

- **la-florida/** → 26 archivos `.png` con nombres exactos (ver `app/obras/la-florida/page.tsx`)
- **proyecto-sr/** → 4 archivos `.png` con nombres exactos (ver `app/obras/proyecto-sr/page.tsx`)
- **casa-s-s/** → 9 archivos `.png` con nombres exactos (ver `app/obras/casa-s-s/page.tsx`)
- **desarrollo-b612/** → 20 archivos `.png` con nombres exactos (incl. UUID); ver `app/obras/desarrollo-b612/page.tsx` para la lista.
- **proyecto-s/** → 6 archivos `.png` con nombres exactos (ver `app/obras/proyecto-s/page.tsx`)
- **proyecto-a/** → 7 archivos `.png` con nombres exactos (ver `app/obras/proyecto-a/page.tsx`; no hay -4)
- **proyecto-b/** → 8 archivos `.png` con nombres exactos (ver `app/obras/proyecto-b/page.tsx`)
- **proyecto-cerveceria-patagonia/** → 8 archivos `.png` con nombres exactos (ver `app/obras/proyecto-cerveceria-patagonia/page.tsx`)
- **proyecto-r/** → 8 archivos `.png` con nombres exactos (ver `app/obras/proyecto-r/page.tsx`)
- **proyecto-casa-rm/** → 6 archivos `.png` con nombres exactos (ver `app/obras/proyecto-casa-rm/page.tsx`)
- **confiteria-campanario/** → 4 archivos (1 Screenshot + 3 `campanario-*`.png con UUID); ver `app/obras/confiteria-campanario/page.tsx`
- **proyecto-arelauquen/** → 9 archivos `.png` con nombres exactos (ver `app/obras/proyecto-arelauquen/page.tsx`)
- **proyecto-casa-ch/** → 8 archivos `.png` con nombres exactos (ver `app/obras/proyecto-casa-ch/page.tsx`)
- **proyecto-casa-maiten/** → 5 archivos `.png` con nombres exactos (ver `app/obras/proyecto-casa-maiten/page.tsx`)
- **proyecto-d/** → 8 archivos `.png` con nombres exactos (ver `app/obras/proyecto-d/page.tsx`)
- **mirador-del-nautico/** → 6 archivos `.png` con nombres exactos (ver `app/obras/mirador-del-nautico/page.tsx`)
- **proyecto-c/** → 3 archivos `.png` con nombres exactos (ver `app/obras/proyecto-c/page.tsx`)
- **proyecto-cc/** → 10 archivos `.png` con nombres exactos (ver `app/obras/proyecto-cc/page.tsx`)
- **proyecto-cd/** → 3 archivos `.png` con nombres exactos (ver `app/obras/proyecto-cd/page.tsx`)
- **proyecto-capilla/** → 8 archivos `.png` con nombres exactos (ver `app/obras/proyecto-capilla/page.tsx`)
- **proyecto-m/** → 7 archivos Screenshot `.png` con nombres exactos (ver `app/obras/proyecto-m/page.tsx`)
- **proyecto-marenco/** → 12 archivos `.png` (IMG_* y Sugerencia__IMG_* con UUID); ver `app/obras/proyecto-marenco/page.tsx`
- **conjunto-viviendas-w1-1/** → 8 archivos Screenshot (nombres exactos en `app/obras/conjunto-viviendas-w1-1/page.tsx`) …

### `public/terminaciones/` – La Florida (carrusel)

Copiá estos archivos **con el mismo nombre** (no hace falta renombrar). El orden no importa.

| Nombre exacto del archivo en `public/terminaciones/` |
|-----------------------------------------------------|
| `cabinet-6f2098ee-783c-437e-984d-92a822dc3e16.png` |
| `curtain-detail-74b14680-ae38-4303-ace0-3c2ba656f8a1.png` |
| `door-detail-3b88a7ed-1ab6-40a5-8152-3f4b80f3bf7e.png` |
| `door-profile-e40cf743-6796-411e-aa0a-fdec0c3b4811.png` |
| `exterior-railing-ac59958b-ad7a-4a1e-aebd-34eb8a6691f9.png` |
| `frame-detail-5778824a-d112-4afb-9353-aa11f79eae2a.png` |
| `railing-detail-0d14b032-8fdb-4661-aae0-060293163ffc.png` |
| `signage-cbf6aeb6-3558-421b-ba81-b2af1a4c951a.png` |
| `staircase-interior-8ca785cb-1d52-4bda-87de-833d89b414ea.png` |
| `stairs-full-60b598a1-baf2-4377-98ee-04617bb57ad5.png` |

### `public/images/` – La Florida (detalles de obra, carrusel)

Copiá estos archivos **con el mismo nombre** (no hace falta renombrar). El orden no importa.

| Nombre exacto del archivo en `public/images/` |
|-----------------------------------------------|
| `detalles-20de-20obra-20-20la-20florida-20-20bma-20arq-20-205-20junio-202025-20-2013-3f72793d-4ea7-498a-ae42-834e171dce03.png` |
| `detalles-20de-20obra-20-20la-20florida-20-20bma-20arq-20-205-20junio-202025-20-2014-53b24e88-6434-49b3-a4da-15fb82c54935.png` |
| `detalles-20de-20obra-20-20la-20florida-20-20bma-20arq-20-205-20junio-202025-20-2015-5cdc2aa5-f54f-4c65-b056-d7ddd4f3519b.png` |
| `detalles-20de-20obra-20-20la-20florida-20-20bma-20arq-20-205-20junio-202025-20-2016-cdb0db93-dc9a-42b3-b9ad-630eb0f61e1c.png` |
| `detalles-20de-20obra-20-20la-20florida-20-20bma-20arq-20-205-20junio-202025-20-2017-624485d7-6de0-44be-b3dc-df942ed54cbe.png` |
| `detalles-20de-20obra-20-20la-20florida-20-20bma-20arq-20-205-20junio-202025-20-2017-20-281-29-083d40c7-078c-439c-a1e1-4b00908c992f.png` |
| `detalles-20de-20obra-20-20la-20florida-20-20bma-20arq-20-205-20junio-202025-20-2018-d09efbd4-8899-4072-904b-d1762e2ef5e4.png` |
| `detalles-20de-20obra-20-20la-20florida-20-20bma-20arq-20-205-20junio-202025-20-2021-37859f90-ae9a-4613-a901-8ac7461559e0.png` |
| `detalles-20de-20obra-20-20la-20florida-20-20bma-20arq-20-205-20junio-202025-20-2022-273801de-53d2-4308-be23-dad818842ff4.png` |
| `detalles-20de-20obra-20-20la-20florida-20-20bma-20arq-20-205-20junio-202025-20-2023-21680daf-240d-4f21-a1df-60cc49716198.png` |

### `public/images/` – B612 (terminaciones, carrusel)

Copiá estos archivos **con el mismo nombre** (no hace falta renombrar).

| Nombre exacto del archivo en `public/images/` |
|-----------------------------------------------|
| `a1-20-c5eb5329-3f13-49e0-a7a6-511431e0f79a.png` |
| `a1-26-4f11a3b2-868e-4050-8b00-c68510692b40.png` |
| `depto-1-19-e2f2379e-51ee-44f8-91cd-8a95a62bed30.png` |
| `depto-1-22-bcbdec90-e590-4520-b4e3-a07a1e2df8ca.png` |
| `depto-2-7-7c2400be-641d-4196-b2dd-1e533bda3b9b.png` |
| `depto-j29-4-3bad77c7-65dd-4b99-97f3-47564571425b.png` |

---

Cuando tengas la lista final de “qué imagen va en qué ruta”, se pueden copiar los archivos a estas carpetas y hacer commit + push; así las verán todos los usuarios en la web publicada.
