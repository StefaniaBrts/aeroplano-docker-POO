 Gestión de Aeroplanos - Proyecto POO y Docker ✈️

Este proyecto consiste en una aplicación web completa (Full Stack) para la gestión de aeroplanos, desarrollada con **TypeScript** en el backend y orquestada mediante **Docker**. El objetivo principal es demostrar conceptos avanzados de Programación Orientada a Objetos (POO) y despliegue con contenedores.

 Características

- **Backend**: Servidor Express con TypeScript.
- **Frontend**: Interfaz web moderna con HTML, CSS y JavaScript.
- **Docker**: Orquestación de servicios mediante Docker Compose.
- **CRUD**: Implementación completa de Crear, Leer, Actualizar y Eliminar aeroplanos.

 Arquitectura de Software (POO)

El corazón del proyecto es la clase `Aeroplano`, la cual implementa las siguientes relaciones de objetos:

  Composición (Ciclo de vida dependiente)
1. **Helice**: Se instancia dentro del constructor de Aeroplano.
2. **Alas**: Se instancia dentro del constructor de Aeroplano.
*Si el objeto Aeroplano se destruye, sus hélices y alas también.*

# 🔗 Agregación (Ciclo de vida independiente)
1. **TrendeAterrizaje**: Se recibe como parámetro en el constructor.
2. **Cubierta**: Se recibe como parámetro en el constructor.
*Estos componentes pueden existir de forma independiente al aeroplano.*

 Tecnologías utilizadas

- **Lenguaje**: TypeScript
- **Framework Backend**: Express.js
- **Frontend**: Vanilla JS / HTML5 / CSS3
- **Contenedores**: Docker & Docker Compose
- **Servidor Web**: Nginx (para el frontend)

 Instalación y Ejecución

Para ejecutar este proyecto localmente, asegúrate de tener instalado **Docker** y **Docker Compose**.

1. Clona el repositorio:
   ```bash
   git clone https://github.com/StefaniaBrts/aeroplano-docker-POO.git

2. Entra en la carpeta del proyecto: 
  cd aeroplano-docker-POO

3. Levanta los servicios con Docker:
   docker-compose up --build

 Acceso a la aplicación
Una vez que los contenedores estén corriendo:

- Frontend : Accede a http://localhost
- Backend (API) : Disponible en http://localhost:8000/aeroplanos
