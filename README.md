# Desarrollo Web Para una Organizacion - Entregable 5

**Trabajo Práctico - Interfaces de Usuario e Interacción**  
**Tecnicatura Universitaria en Desarrollo de Aplicaciones Informáticas (TUDAI)**  
**Tres Arroyos, 2025**

### Profesores:
- Ing. Hernández Gauna, Jorge G.  
- A.P. Nelson Garrido  
- Ayudante Alumno: Arana, Facundo  
- Alumna: Ledesma, Ingrid Milagros

---


## Descripción


# 🦢 CISNE Consultorios

> Proyecto web y panel de administración para Cisne Consultorios.

---

## 📖 Descripción

Este repositorio contiene dos secciones:

1. **Sitio público**: portal informativo con secciones de:

   * Servicios
   * Profesionales
   * Contacto (formulario con animaciones)
   * Ubicación
   * Instituciones
   * Noticias (buscador y filtros por categoría)
   * Recuperación de cuenta (reset de contraseña)

2. **Panel Admin**: interfaz privada para gestionar:

   * Flyers
   * Carrusel de imágenes
   * Profesionales (nombre, info, foto)

Ambas partes están desarrolladas con **HTML5**, **CSS3** (Flexbox / Grid) y **JavaScript (ES6)**, integrando **Bootstrap 5** para estilos básicos.

---

## 🛠️ Tecnologías

* **HTML5**
* **CSS3** (Flexbox, Grid, Media Queries)
* **JavaScript (ES6)**
* **Bootstrap 5**

---

## 📂 Estructura del Proyecto

```text
/ (raíz)
├── index.html             # Página principal
├── publicacion.html       # Sección Noticias
├── resetlogin.html        # Recuperar contraseña
├── indexadmin.html        # Panel Admin - login previo
├── dashboard.html         # Admin Dashboard
├── flyers.html            # Gestión de Flyers
├── carousel.html          # Gestión de Carrusel
├── professionals.html     # Gestión de Profesionales
│
├── css/
│   ├── styles.css         # Estilos sitio público
│   ├── noticias.css       # Estilos sección Noticias
│   ├── stylesreset.css    # Estilos resetlogin.html
│   └── cssadmin.css       # Estilos panel Admin
│
├── js/
│   ├── logica.js          # Lógica general (modales, menús)
│   └── admin.js           # Lógica Panel Admin
│
├── img/                   # Imágenes y recursos estáticos
└── README.md              # Documentación de este proyecto
```

---

## 🚀 Instalación y Ejecución

1. Clonar este repositorio:

   ```bash
   ```

git clone <url-del-repositorio>
cd CisneConsultorios

````

2. Abrir `index.html` en un navegador, o servir con `Live Server` / `http-server`:
   ```bash
npm install -g http-server
http-server .
````

3. Abrir `http://localhost:8080` (o el puerto que muestre) en tu navegador.

---

## 🎯 Uso del Sitio Público

* Navega por el menú superior o en móvil haz click en el ícono `☰`.
* Envía mensajes desde el formulario de **Contacto**.
* Recupera tu cuenta en `resetlogin.html`.
* Explora **Noticias** con buscador y filtros.

---

## 🔐 Panel de Administración

1. Accede al panel mediante el avatar de admin en el header.
2. El panel verifica `sessionStorage.isAdmin` y redirige al login si no existe.
3. Usa el menú lateral para seleccionar módulos:

   * **Dashboard**
   * **Flyers**
   * **Carrusel**
   * **Profesionales**
4. Haz click en tu avatar para desplegar **Editar perfil** / **Cerrar sesión**.

---

## 🧩 Módulos y Funcionalidades

| Módulo        | Descripción                             |
| ------------- | --------------------------------------- |
| Flyers        | Añadir/editar título e imagen de flyers |
| Carrusel      | CRUD de slides con leyenda e imagen     |
| Profesionales | CRUD de perfiles (nombre, info, foto)   |

---

## 👤 Autor

**Ingrid Ledesma** – Estudiante TUDAI – CISNE Consultorios

---

## 📄 Licencia

MIT © 2025 Cisne Consultorios

