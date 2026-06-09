# PTR / Prompt maestro para IA desarrolladora

## Proyecto: Penny Kay Salon

---

## 1. Contexto y rol

Actúa como una IA desarrolladora senior especializada en sitios web premium para negocios locales de belleza, salones boutique y servicios de reserva.

Debes construir un sitio web moderno, elegante, exclusivo y orientado a conversión para **Penny Kay Salon**, un salón de cabello ubicado en Springfield, Queensland, Australia.

El sitio debe reemplazar o superar claramente la percepción actual del sitio existente, que todavía aparece como incompleto. El nuevo sitio debe transmitir profesionalismo, estilo boutique, confianza, calidez familiar y dominio técnico en coloración, blondes, balayage, foils, tratamientos capilares, cortes y eventos.

El resultado debe sentirse como un salón local de alto nivel, no como una plantilla genérica de peluquería.

---

## 2. Información base del negocio

**Nombre del negocio:** Penny Kay Salon
**Sector:** Belleza
**Subsector:** Hair salon / boutique hair salon
**País:** Australia
**Estado:** Queensland
**Ciudad / zona:** Springfield, Brisbane area
**Dirección confirmada:** 3/23 Commercial Drive, Springfield, QLD 4300
**Teléfono confirmado:** +61 487 097 954
**Correo confirmado:** [tau@pennykaysalon.com.au](mailto:tau@pennykaysalon.com.au)
**Sitio actual:** https://www.pennykaysalon.com.au/
**Sistema de reservas externo:** Timely / pennykaysalon.gettimely.com
**Idioma principal recomendado:** Inglés australiano
**Fecha de comprobación de la investigación comercial:** 2026-06-05
**Fecha de revisión web para este PTR:** 2026-06-09

---

## 3. Diagnóstico del sitio actual

### URL revisada

https://www.pennykaysalon.com.au/

### Estado general del sitio

El sitio actual tiene una base útil, pero se percibe incompleto, poco pulido y con señales visibles de abandono técnico o falta de finalización.

La home comunica explícitamente:

> “PENNY KAY SALON WEBSITE UNDER CONSTRUCTION”

También muestra el texto:

> “CLICK BOOK APPOINTMENT BUTTON FOR SERIVCES”

Esto genera un problema de confianza y percepción premium, especialmente para un salón boutique que depende de imagen, estilo, detalle visual y confianza antes de reservar.

### Problemas técnicos visibles

* Sitio en estado “under construction”.
* Errores de escritura visibles en llamadas a la acción.
* Menú funcional pero con estructura poco refinada.
* Galería prácticamente vacía o sin contenido visible relevante.
* Uso de textos Lorem Ipsum en secciones importantes.
* Contenido duplicado en la página About Us.
* Redacción inconsistente en inglés.
* Secciones con copy genérico no adaptado al salón.
* Aparición de redes sociales genéricas o poco claras, incluyendo Twitter/X y LinkedIn, que no necesariamente son prioritarias para un salón boutique.
* Algunas imágenes parecen provenir de Unsplash o stock, mientras otras parecen propias del salón.
* El sitio tiene información valiosa, pero está mal jerarquizada.

### Formularios o errores visibles

* El formulario de contacto aparece visualmente disponible, pero no se debe asumir que funciona.
* No implementar formulario funcional en el MVP si no existe endpoint o correo validado para recepción.
* Preparar formulario visual con validación frontend y estado “ready for integration”.

### Problemas de conversión

* La home no vende una experiencia premium.
* El principal mensaje visible es que el sitio está en construcción.
* El usuario debe buscar servicios y precios en páginas separadas con exceso de información.
* No hay una propuesta de valor fuerte en el primer pantallazo.
* No hay una selección clara de servicios destacados.
* No hay flujo visual elegante hacia reserva.
* La galería no aprovecha el valor comercial de los resultados antes/después.
* El equipo tiene historias útiles, pero no se presentan con diseño editorial premium.
* Falta una sección clara para nuevas clientas o clientes que explique cómo reservar, qué esperar y cómo elegir servicio.

### Problemas de SEO

* Títulos y estructura semántica mejorables.
* Keywords locales poco trabajadas.
* No hay evidencia de una estrategia SEO local clara para Springfield / Brisbane.
* Servicios relevantes no parecen tener páginas optimizadas individualmente.
* Faltan metadatos estratégicos por servicio.
* Faltan textos alternativos intencionales en imágenes.
* Falta schema local de salón de belleza / hair salon.

### Problemas de accesibilidad

* Revisar contraste de textos sobre imágenes.
* Evitar textos pequeños en fondos fotográficos.
* Usar landmarks semánticos.
* Asegurar navegación por teclado.
* Botones con aria-label cuando sea necesario.
* Formularios con labels explícitos.
* Estados focus visibles.
* Imágenes decorativas con alt vacío e imágenes informativas con alt descriptivo.

### Assets útiles detectados

Conservar, auditar y optimizar:

* Logotipo / marca textual “PENNY KAY SALON”.
* Fotografías del equipo: Prue Hope, Carolyn, Riannon, Maddi/Madi y Clara.
* Imágenes reales de resultados capilares usadas en servicios.
* Imágenes con nombres relacionados a trabajos del salón, por ejemplo balayage, blonde bob, colour melt, reverse balayage, foils.
* Contenido biográfico del equipo.
* Lista de servicios y precios.
* Información de contacto.
* Horarios.
* Enlace de booking externo.
* Imágenes de ambiente o stock que puedan servir como placeholders temporales si se usan con mucho cuidado.

### Assets que deben optimizarse

* Convertir imágenes pesadas a formatos modernos como WebP o AVIF.
* Redimensionar por breakpoint.
* Usar `next/image`.
* Mantener un estilo visual homogéneo: cálido, luminoso, elegante, editorial.
* No mezclar imágenes stock genéricas con imágenes reales sin una dirección visual clara.
* Priorizar imágenes reales de trabajos del salón.
* Evitar filtros agresivos.
* Usar recortes limpios y consistentes.
* Crear galería tipo editorial, no mosaico desordenado.
* Preparar assets en carpetas:

  * `/public/images/hero`
  * `/public/images/services`
  * `/public/images/team`
  * `/public/images/gallery`
  * `/public/images/brand`

### Contenido que puede conservarse

* Historia de Prue Hope como owner.
* Origen del nombre Penny Kay vinculado a sus hijas Penny y Kaya.
* Perfiles del equipo.
* Lista de servicios.
* Precios, con revisión antes de publicación.
* Datos de contacto.
* Horarios.
* Booking externo.
* Mención a servicios como blondes, foils, balayage, keratin therapy, colour correction, treatments, cuts, blow dry, upstyle y events.

### Contenido que debe reescribirse

* Todo Lorem Ipsum.
* Copy genérico de About Us.
* Copy de Contact Us.
* CTAs con errores.
* Secciones de facilities con descripciones falsas o placeholder.
* Valores genéricos.
* Mensajes repetidos.
* Textos de servicios para convertirlos en descripciones elegantes y útiles.
* Copy de gift vouchers si no hay información confirmada.
* Textos de redes sociales si no hay URLs oficiales confirmadas.

---

## 4. Problema que debe resolver el sitio

El sitio debe resolver un problema de percepción y conversión.

Penny Kay Salon ya cuenta con servicios, precios, equipo, booking y materiales visuales, pero el sitio actual comunica que está incompleto. Para un salón boutique, esto afecta directamente:

* Confianza.
* Percepción de calidad.
* Deseo de reservar.
* Imagen premium.
* Posicionamiento local.
* Claridad de servicios.
* Presentación del equipo.
* Capacidad de mostrar resultados.

El nuevo sitio debe hacer que la marca se sienta cuidada, confiable, moderna y deseable desde el primer pantallazo.

---

## 5. Objetivo principal del sitio

Convertir visitantes locales en reservas mediante un sitio elegante, claro y mobile-first.

Objetivos específicos:

* Elevar la percepción premium del salón.
* Mostrar servicios principales con claridad.
* Presentar precios de forma ordenada.
* Destacar el equipo y su especialización.
* Mostrar resultados visuales de cabello.
* Facilitar la reserva vía Timely.
* Mejorar SEO local para Springfield, QLD.
* Reemplazar la percepción de “sitio en construcción” por una experiencia boutique terminada.

---

## 6. Público objetivo

### Público principal

Personas en Springfield, Springfield Lakes, Greater Springfield, Brisbane western corridor y zonas cercanas que buscan servicios profesionales de cabello.

### Segmentos prioritarios

* Mujeres que buscan blondes, foils, balayage o colour correction.
* Clientas que quieren un salón confiable para mantenimiento de color.
* Personas que buscan cortes, blow dry o tratamientos capilares.
* Clientas nuevas que necesitan orientación para elegir servicio.
* Personas que preparan eventos y necesitan hair + makeup o upstyle.
* Familias locales que valoran un salón cercano, cálido y profesional.

### Nivel de mercado

Medio a medio-alto local.

La comunicación debe ser elegante, pero no fría. Debe sentirse premium, cercana y confiable.

---

## 7. Estilo de marca y tono

### Estilo visual

Exclusivo, minimalista, editorial, cálido y femenino sin caer en clichés.

### Dirección estética

* Fondo base: ivory, warm white, champagne, soft beige.
* Acentos: espresso, muted gold, soft blush, taupe.
* Tipografía de alto contraste para titulares.
* Tipografía sans-serif elegante para texto.
* Fotografías grandes, limpias y luminosas.
* Mucho espacio en blanco.
* Cards con bordes suaves.
* Transiciones sutiles.
* Diseño mobile-first.
* Sensación de salón boutique australiano, no spa genérico.

### Tono verbal

En inglés australiano:

* Warm.
* Confident.
* Polished.
* Personal.
* Boutique.
* Professional.
* Friendly, but not casual in excess.

Evitar:

* Exageraciones.
* Promesas absolutas.
* “Best salon in Australia” si no está validado.
* Copy agresivo.
* Frases genéricas de plantilla.

---

## 8. Idiomas recomendados

### Idioma principal

Inglés australiano.

### Estructura i18n

No es obligatoria para el MVP.

Preparar estructura técnica compatible con i18n si en el futuro se desean versiones para otros idiomas, pero no crear traducciones no solicitadas.

---

## 9. Arquitectura recomendada del sitio

### Navegación principal

* Home
* Services
* Pricing
* Gallery
* Team
* New Clients
* Contact
* Book Now

### Páginas recomendadas

1. `/`
2. `/services`
3. `/pricing`
4. `/gallery`
5. `/team`
6. `/new-clients`
7. `/contact`

### CTA global

“Book Appointment”

Debe enlazar al sistema externo Timely confirmado.

---

## 10. MVP obligatorio

El MVP debe incluir:

* Home premium terminada.
* Servicios principales.
* Precios organizados.
* Sección de booking.
* Contacto.
* Horarios.
* Ubicación.
* Equipo.
* Galería inicial optimizada.
* CTA fijo en móvil.
* SEO local básico.
* Schema.org.
* Diseño responsive.
* Accesibilidad básica.
* Optimización de imágenes existentes.

No incluir backend obligatorio.

No implementar pagos.

No crear sistema propio de reservas.

No inventar testimonios.

---

## 11. CTA y conversión

### CTA principal

**Book Appointment**

### CTAs secundarios

* View Services
* See Pricing
* Meet the Team
* Call the Salon
* Find Us in Springfield
* New Client? Start Here

### CTA móvil

Implementar barra fija inferior en móvil con:

* Book
* Call
* Directions

La opción “Directions” debe abrir Google Maps con la dirección confirmada.

La opción “Book” debe abrir el booking externo en nueva pestaña o misma pestaña según mejor UX.

---

## 12. Copy estratégico sugerido

El copy del sitio debe estar en inglés australiano.

### Hero principal

**Boutique hair colour, cuts & styling in Springfield**

Supporting your best hair days with thoughtful colour work, polished styling and a warm local salon experience.

CTA principal: **Book Appointment**
CTA secundario: **Explore Services**

### Subheadline alternativa

A Springfield hair salon specialising in blondes, foils, balayage, colour refreshes, style cuts and event-ready hair.

### Bloque de confianza

**Hair that feels personal, polished and beautifully you.**

From soft lived-in blondes to fresh cuts, treatments and special occasion styling, our team is here to help you feel confident from the chair to every day after.

### Servicios destacados

**Colour & blonding**
Blonde regrowth, foils, balayage and global colour services designed around your hair goals.

**Cuts & styling**
Style cuts, blow dry finishes and polished looks for everyday confidence.

**Treatments**
Keratin therapy, basin treatments and colour-supporting care for smoother, shinier hair.

**Events**
In-salon hair and makeup for special moments, occasions and celebrations.

### Sección de reserva

**Ready for your next salon visit?**

Choose your service, select your preferred time and book directly through our online appointment system.

CTA: **Book Appointment**

### New clients

**New to Penny Kay Salon?**

Start with our services and pricing guide, or book a consultation if you are planning a colour change, correction or major transformation.

### Contact

**Visit us in Springfield**

Find Penny Kay Salon at 3/23 Commercial Drive, Springfield QLD 4300.

CTA: **Get Directions**

---

## 13. Servicios, productos o secciones a presentar

Organizar los servicios en categorías claras.

### Colour & blonding

* Blonde Regrowth Packages
* Half Head Foils
* Full Head Foils
* 10 Foils Package
* Balayage Package
* All Over Global Colour Refresh
* Semi Permanent / Permanent
* Toner
* Tip Out
* Colour Correction

### Cuts & styling

* Blow Dry
* Style Cuts + Packages
* High School Cut
* Primary School Cut
* Shampoo + Condition Massage
* Upstyle

### Treatments

* Kerasilk Keratin Therapy GOLDWELL
* Metal Detox Treatment
* L’Oréal Intense Basin Treatment
* L’Oréal Instant Shine Treatment

### Events

* In Salon Hair + Makeup
* Event styling
* Upstyle

### Gift vouchers

Incluir solo si está confirmado que el negocio ofrece gift vouchers actualmente.

Texto recomendado:

**Gift vouchers**

Treat someone special to a salon experience at Penny Kay Salon.

CTA: **Ask About Gift Vouchers**

Marcar como: **Pendiente de validación antes de publicación.**

---

## 14. Sección de pacientes, clientes o usuarios nuevos

Crear una página o bloque llamado:

**New Clients**

Contenido recomendado:

* Cómo elegir un servicio.
* Cuándo reservar consulta.
* Qué servicios requieren consulta previa.
* Recomendación para colour correction.
* Qué considerar antes de balayage o blonding.
* Cómo prepararse para eventos.
* Política de precios “from” cuando aplique.
* Enlace directo a booking.
* Teléfono para dudas.

Copy sugerido:

**Not sure what to book?**

If you are planning a big colour change, colour correction or a first-time blonding service, we recommend contacting the salon before booking so the team can guide you towards the right appointment.

---

## 15. Perfil del negocio, profesional, equipo o marca

### Owner

**Prue Hope**
Owner

Usar la historia existente como base, pero reescribirla con tono más editorial y sin duplicación.

Copy sugerido:

Prue Hope brings over a decade of experience in the hair and beauty industry and a lifelong dream of creating a salon where clients feel genuinely cared for. Penny Kay Salon is inspired by family, confidence and the joy of helping people feel beautiful in their own way.

### Equipo

Presentar perfiles del equipo con cards elegantes:

* Carolyn / Caz — Senior Stylist
* Riannon — Senior Stylist
* Maddi / Madi — Emerging Stylist o Senior Stylist según validación
* Clara — Emerging Stylist

Nota importante: existe una posible inconsistencia entre “Maddi”, “Madi” y su nivel de seniority/emerging stylist. Confirmar antes de publicación.

### Especialidades que deben destacarse

* Blondes.
* Foil work.
* Balayage.
* Colour refresh.
* Soft dimensional colour.
* Styling.
* Client confidence.
* Warm salon experience.

---

## 16. SEO local

### Keywords principales

* hair salon Springfield QLD
* hairdresser Springfield QLD
* boutique hair salon Springfield
* blonde specialist Springfield QLD
* balayage Springfield QLD
* foils Springfield QLD
* hair colour Springfield QLD
* hair salon near Springfield Lakes
* hairdresser Brisbane western suburbs

### Keywords de ciudad/zona

* Springfield QLD
* Springfield Lakes
* Greater Springfield
* Brisbane
* Commercial Drive Springfield
* Ipswich region, solo si aplica comercialmente

### Title tag recomendado

Penny Kay Salon | Boutique Hair Salon in Springfield QLD

### Meta description recomendada

Book your next hair appointment at Penny Kay Salon in Springfield QLD. Boutique colour, blondes, foils, balayage, cuts, treatments and event styling.

### H1 recomendado

Boutique Hair Salon in Springfield QLD

### NAP

**Name:** Penny Kay Salon
**Address:** 3/23 Commercial Drive, Springfield, QLD 4300
**Phone:** +61 487 097 954

### Open Graph

* `og:title`: Penny Kay Salon | Boutique Hair Salon in Springfield QLD
* `og:description`: Colour, blondes, balayage, foils, cuts and styling in Springfield QLD.
* `og:image`: Usar una imagen real optimizada del salón o equipo.
* `og:type`: website
* `og:locale`: en_AU

### Sitemap

Crear sitemap con:

* `/`
* `/services`
* `/pricing`
* `/gallery`
* `/team`
* `/new-clients`
* `/contact`

### Robots.txt

Permitir indexación general.

### Alt text recomendado

Ejemplos:

* “Blonde balayage result by Penny Kay Salon in Springfield”
* “Penny Kay Salon team member styling hair”
* “Hair colour transformation at Penny Kay Salon”
* “Boutique hair salon in Springfield QLD”
* “Soft blonde foils hair result”

No usar alt genéricos como “image” o “photo”.

### Estructura semántica

* Un solo H1 por página.
* H2 por secciones.
* Cards de servicios con heading estructurado.
* Footer con datos NAP.
* Schema local en JSON-LD.

---

## 17. Requisitos técnicos

Stack obligatorio salvo instrucción contraria:

* Next.js 16.2.7
* TypeScript
* Tailwind CSS
* shadcn/ui
* Componentes reutilizables
* Diseño responsive mobile-first
* SEO local
* Accesibilidad básica WCAG
* Preparado para i18n futuro
* Sin backend obligatorio en MVP
* Formulario preparado, pero no funcional si no hay endpoint validado
* Integración con booking externo mediante enlace seguro
* Optimización de imágenes con `next/image`
* Uso de metadata API de Next.js
* Sitemap y robots
* Schema.org en JSON-LD

---

## 18. Componentes requeridos

Crear componentes reutilizables:

* `HeroSection`
* `PrimaryCTA`
* `ServiceCard`
* `ServiceCategory`
* `PricingTable`
* `FeaturedServiceGrid`
* `TeamCard`
* `GalleryGrid`
* `BeforeAfterCard`
* `BookingBanner`
* `ContactCard`
* `OpeningHours`
* `MobileStickyCTA`
* `SEOJsonLd`
* `FAQAccordion`
* `ImageMarquee` o `EditorialGallery`
* `SectionHeader`
* `PageIntro`
* `Footer`
* `Navbar`

---

## 19. Diseño responsive

### Mobile-first

Priorizar móvil porque muchas reservas de salón ocurren desde Instagram, Google Maps o búsqueda móvil.

### Breakpoints

* Mobile: 360px+
* Tablet: 768px+
* Desktop: 1024px+
* Wide: 1280px+

### Reglas móviles

* Hero con CTA visible sin scroll excesivo.
* Botón fijo inferior.
* Menú limpio.
* Servicios en cards.
* Precios en acordeón o tabs por categoría.
* Galería ligera y optimizada.
* Contacto con botones grandes: Book, Call, Directions.

---

## 20. Accesibilidad

Cumplir accesibilidad básica WCAG:

* Contraste suficiente.
* Botones con texto claro.
* Estados focus visibles.
* Navegación por teclado.
* Labels en formulario.
* Alt text en imágenes informativas.
* No depender solo del color.
* Evitar animaciones agresivas.
* Respetar `prefers-reduced-motion`.
* Textos de mínimo 16px en cuerpo.
* Targets táctiles cómodos en móvil.

---

## 21. Restricciones legales, éticas o de datos

No inventar:

* Testimonios.
* Premios.
* Certificaciones.
* Servicios no confirmados.
* Precios nuevos.
* Promociones.
* Fotos reales no existentes.
* Garantías de resultado.
* Horarios no confirmados.
* Links de redes sociales no confirmados.
* Biografías no verificadas.
* Claims como “best hair salon” sin respaldo.

### Lenguaje prudente

Evitar:

* “Guaranteed transformation”.
* “Perfect results every time”.
* “Best salon in Brisbane”.
* “Damage-free blonding” si no está comprobado.
* “Medical-grade treatment” o afirmaciones técnicas no verificadas.

Usar:

* “designed to support”
* “tailored to your hair goals”
* “consultation recommended”
* “pricing may vary”
* “subject to hair length, condition and desired result”

---

## 22. Imágenes y estilo visual

### Objetivo

Usar imágenes del sitio actual como base visual, optimizarlas y reordenarlas para crear una experiencia boutique, editorial y exclusiva.

### Prioridad de imágenes

1. Resultados reales de cabello.
2. Fotografías del equipo.
3. Fotos del salón o ambiente real si existen.
4. Imágenes stock solo como apoyo temporal.
5. Evitar imágenes genéricas que rompan la autenticidad.

### Tratamiento visual

* Recorte editorial.
* Bordes suaves.
* Luz cálida.
* Fondos ivory o beige.
* No saturar.
* No abusar de filtros.
* Mantener piel y cabello naturales.
* Optimizar peso.
* Usar lazy loading en galerías.
* Preload solo del hero.
* Crear versiones responsive.

### Galería

La galería debe vender resultados.

Estructura recomendada:

* Featured transformations.
* Blondes.
* Balayage.
* Foils.
* Colour refresh.
* Event styling.
* Cuts & finish.

Si no hay suficientes imágenes reales, crear placeholders elegantes y marcar:

**Pendiente de carga de imágenes reales antes de publicación.**

---

## 23. Estructura sugerida de la Home

### 1. Hero premium

* Imagen editorial fuerte.
* H1 local.
* Subheadline.
* CTA Book Appointment.
* CTA Explore Services.

### 2. Trust strip

* Springfield QLD.
* Colour, cuts & styling.
* Online booking.
* Boutique local salon.

### 3. Featured services

Cards:

* Blondes & foils.
* Balayage.
* Colour refresh.
* Cuts & styling.
* Treatments.
* Events.

### 4. About teaser

Historia breve de Prue y Penny Kay Salon.

CTA: Meet the Team.

### 5. Gallery preview

Mosaico editorial de resultados.

CTA: View Gallery.

### 6. Pricing teaser

Mostrar “popular starting points” sin saturar.

CTA: View Pricing.

### 7. New clients

Bloque educativo.

CTA: New Client Guide.

### 8. Booking banner

“Ready for your next salon visit?”

CTA: Book Appointment.

### 9. Contact local

Dirección, teléfono, email, horarios y mapa.

### 10. Footer SEO

NAP, links, booking, redes confirmadas.

---

## 24. FAQ sugeridas

### Do I need a consultation before booking colour correction?

For colour correction or major colour changes, we recommend contacting the salon before booking so the team can guide you towards the right service and timing.

### Where is Penny Kay Salon located?

Penny Kay Salon is located at 3/23 Commercial Drive, Springfield QLD 4300.

### Can I book online?

Yes. Use the Book Appointment button to book through the salon’s online booking system.

### Do prices vary by hair length?

Yes. Many services are priced by short, medium, long or extra long hair. Final pricing may vary depending on hair length, condition and the desired result.

### Do you offer balayage?

Yes. Penny Kay Salon lists balayage packages for different hair lengths.

### Do you offer foils?

Yes. The salon lists half head foils, full head foils and 10 foils packages.

### Do you offer hair and makeup for events?

Yes. The salon lists in-salon hair and makeup for events. Final details should be confirmed with the salon before booking.

### What are the opening hours?

Current listed hours: Sunday and Monday closed, Tuesday to Friday 9am–5pm, Saturday 8am–4pm. Confirm before publication.

---

## 25. Schema.org sugerido

Implementar JSON-LD.

Tipo recomendado:

* `HairSalon`
* También puede utilizar `LocalBusiness` como base.

Campos:

* `@context`
* `@type`: `HairSalon`
* `name`: `Penny Kay Salon`
* `url`
* `telephone`
* `email`
* `address`
* `openingHoursSpecification`
* `sameAs`, solo con redes verificadas
* `priceRange`, pendiente de validación
* `image`, usando imagen optimizada real
* `areaServed`
* `hasOfferCatalog` para categorías de servicios

No inventar rating, reviews ni aggregateRating.

---

## 26. Entregables esperados

La IA desarrolladora debe entregar:

* Proyecto Next.js 16.2.7 funcional.
* Código TypeScript limpio.
* Tailwind configurado.
* shadcn/ui instalado y usado.
* Componentes reutilizables.
* Home completa.
* Páginas internas del MVP.
* SEO metadata.
* Sitemap.
* Robots.txt.
* Schema JSON-LD.
* Imágenes optimizadas.
* Galería responsive.
* Pricing organizado.
* Team section.
* Contact section.
* Mobile sticky CTA.
* README con instrucciones.
* Lista de datos pendientes de validación.
* No backend obligatorio.

---

## 27. Criterios de aceptación

El sitio será aceptado si cumple:

* La home ya no comunica “sitio en construcción”.
* El diseño se percibe premium, boutique y terminado.
* El CTA de reserva es visible en desktop y móvil.
* El booking externo funciona como enlace.
* Los datos NAP aparecen correctamente.
* Los servicios principales están organizados.
* Los precios están legibles y no saturan.
* La galería usa imágenes optimizadas y coherentes.
* El equipo aparece con presentación profesional.
* No hay Lorem Ipsum.
* No hay errores ortográficos visibles.
* No hay testimonios inventados.
* No hay claims falsos.
* El sitio carga correctamente en móvil.
* Lighthouse básico debe ser razonable:

  * Performance: objetivo 85+
  * Accessibility: objetivo 90+
  * Best Practices: objetivo 90+
  * SEO: objetivo 90+
* Imágenes servidas con formatos modernos.
* Estructura semántica correcta.
* Metadata local implementada.
* Schema sin datos inventados.

---

## 28. Restricciones importantes

* No inventar información.
* No cambiar precios sin validación.
* No crear promociones.
* No afirmar que todos los servicios están disponibles si no aparecen en fuente.
* No usar fotos de terceros como si fueran trabajos reales.
* No usar imágenes stock como before/after.
* No crear sistema de reservas propio.
* No solicitar datos sensibles.
* No publicar formulario funcional sin endpoint validado.
* No añadir WhatsApp si no hay confirmación de que el número opera como WhatsApp comercial.
* No usar tono médico para tratamientos capilares.
* No prometer resultados.

---

## 29. Idea comercial del sitio

El sitio debe vender la transición de Penny Kay Salon desde una presencia digital incompleta hacia una marca boutique lista para convertir.

La idea central:

**Un salón local con corazón familiar, especialización en colour work y una experiencia cuidada que merece un sitio tan pulido como sus resultados.**

El sitio debe hacer que una persona piense:

* “Este lugar se ve profesional.”
* “Puedo confiarles mi color.”
* “Se nota que tienen equipo real.”
* “Entiendo qué servicios ofrecen.”
* “Puedo reservar rápido.”
* “Este salón se siente cercano pero premium.”

---

## 30. Mensaje interno para la IA desarrolladora

No construyas una plantilla genérica de hair salon.

Construye una experiencia boutique, elegante y comercialmente clara.

El principal problema actual no es la ausencia total de información, sino que la información está dentro de un sitio que se ve incompleto. Tu trabajo es rescatar los mejores assets existentes —servicios, precios, equipo, historia, ubicación, booking e imágenes— y convertirlos en una web premium, coherente y lista para generar reservas.

Prioriza:

* Primer pantallazo fuerte.
* Booking claro.
* Servicios ordenados.
* Galería visual.
* Equipo humano.
* SEO local.
* Móvil impecable.
* Copy limpio en inglés australiano.
* Sensación exclusiva sin exageración.

---

## 31. Resultado esperado

El resultado debe ser un sitio web premium para Penny Kay Salon que funcione como una propuesta comercial fuerte y visualmente convincente.

Debe parecer un sitio real, terminado y listo para publicación, con datos pendientes claramente marcados cuando falten validaciones.

El usuario final debe poder:

* Entender qué ofrece el salón.
* Ver servicios principales.
* Consultar precios.
* Conocer al equipo.
* Ver resultados.
* Reservar online.
* Llamar.
* Obtener dirección.
* Confiar en la marca.

El sitio debe elevar la percepción de Penny Kay Salon de “website under construction” a “boutique hair salon worth booking”.
