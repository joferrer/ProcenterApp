# ProcenterApp

## Pasos para iniciar el proyecto

1. git clone "https://github.com/joferrer/ProcenterApp.git"
2. Instalar el yarn: npm i --global yarn
3. Se paran en la carpeta raiz del proyecto .
4. yarn
5. yarn dev

## Pasos para conectarse a la rama

1. Tener ya el repositorio
2. git checkout sebaspro

## Pasos para hacer pull

1. Parado en la rama suya,"git pull origin main"

## Rutas disponibles para usuarios no autenticados

- `/` - Página de inicio (Home page)
- `/login` - Página de inicio de sesión (Login)
- `/restablecer-password` - Página de restablecimiento de contraseña
- `/catalogo` - Página del catálogo
- `/sobre-nosotros` - Página "Sobre nosotros"

Cualquier ruta no identificada será redirigida automáticamente a la página de inicio (`/`).

## Rutas disponibles para usuarios autenticados

### Asesores

- `/catalogo` - Catálogo de productos disponibles para la venta.
- `/registrar-venta` - Registrar la venta de un vehículo a nombre de un asesor.
- `/simulador` - Simulador de crédito
- `/registrar-adquisiciones`
- `/adquisiciones` - Vehículos adquiridos por la empresa.
- `/historialAsesor` - Ventas realizadas por el asesor.

Cualquier ruta no identificada será redirigida automáticamente a `/catalogo`.

### Publicista

- `/adquisiciones` - Vehículos pendientes de publicación.

### Administrador

Además de tener acceso a todas las rutas de los asesores, el administrador también puede acceder a:

- `/asesores` - Registrar un nuevo asesor o publicista.