
### FRONTEND

# INSTALACIÓN COMPLETA DE LARAVEL - GLOBAL
composer global require laravel/installer

# CREACIÓN DEL PROYECTO CON EL CLI LARAVEL:
laravel new laravel-vue-survey

# IR A PHP MY ADMIN (botón admin en XAMPP)

database name: laravel_survey
codificación: uft8mb4_unicode_ci

# INICIAR SERVIDOR PARA DESPLEGAR LARAVEL:
php artisan serve

- migración - migracion - artisan
## Migrar elementos por defecto de la base de datos
php artisan migrate

- Editor IDE
# EN EL FICHERO EDIT CONFIG:
[*.{js,css, less,scss,vue}]
indent_size = 2

- VUE 
npm init vite vue
## tener en cuenta selecionar:
vue => javascript 

## iniciar vue
- Una vez hecho esto se procede a acceder a la carpeta vue generada:
cd vue/ 
npm install && npm run dev

- instalar los siguientes paquetes para vue
npm i -S vuex@next

# STORE VUE
- accedemos a vue, creamos la carpeta store y el fichero de inicio index.js

# CSS
- tailwind
npm install -D tailwindcss postcss autoprefixer

- generar ficheros de configuración:
npx tailwindcss init -p

- en el tailwind.config agregar:
content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],

- en vue/src/index.css:
@tailwind base;
@tailwind components;
@tailwind utilities;

- en main.js importar el fichero css:
import './index.css';

- Instalar los siguientes paquetes:
npm install @headlessui/vue @heroicons/vue @tailwindcss/forms -S


# ROUTER
- Para instalar el ruteador:
npm i -S vue-router@next


import {createRouter, createWebHistory} from 'vue-router';
import Dashboard from '../views/Dashboard.vue'

const routes = [
  {
    path: '/',
    redirect: 'Dashboard',
    name: 'Dashboard',
    component: Dashboard
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;



### BACKEND

# Crear modelos
php artisan make:model Survey -m
php artisan make:model SurveyQuestion -m
php artisan make:model SurveyAnswer -m
php artisan make:model SurveyQuestionAnswer -m

- ejecutar migración
php artisan migrate

# Crear controlladores
- ejecutar el comando:
php artisan make:controller auth/AuthController --resource

