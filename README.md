# Samishop - Challenge

Aplicación que te permite conocer el nombre, los datos, la especie y el mundo natal de los personajes de Star Wars mediante el uso de la API de [Star Wars](https://swapi.dev/api/people/).


## Demo

Puedes probar la aplicación en vivo en este [enlace](link-to-your-live-demo).

## Estructura del proyecto (Atomic Design)

El proyecto sigue la metodología de Atomic-design. Aquí está la estructura de carpetas:

src
├── components
│ ├── atoms
│ │ ├── DataCell.jsx
│ │ ├── HeaderTitle.jsx
│ │ ├── IconButton.jsx
│ │ ├── LoadingIndicator.jsx
│ │ ├── NoticeCell.jsx
│ │ └── SubDescription.jsx
│ ├── molecules
│ │ ├── MobileDetailHeader.jsx
│ │ └── PersonCell.jsx
│ │ └── SectionHeader.jsx
│ ├── organisms
│ │ ├── Content.jsx
│ │ ├── Header.jsx
│ │ ├── LoadingCell.jsx
│ │ └── Sidebar.jsx
│ └── templates
│ └── MainLayout.jsx
└── context
└── Context.jsx

## Dependencias

El proyecto utiliza las siguientes dependencias principales:

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)

Además, para las pruebas se usa:

- [Jest](https://jestjs.io/)
- [@testing-library/react](https://testing-library.com/docs/react-testing-library/intro/)

## Cómo correr el proyecto

1. Primero, clona el repositorio en tu máquina local con el comando `git clone`.

    ```bash
    git clone https://github.com/StefanoQuiroz/samishop-challenge
    ```

2. Navega hasta el directorio del proyecto.

    ```bash
    cd samishop-challenge
    ```

3. Instala las dependencias necesarias con `npm`.

    Con npm:

    ```bash
    npm install
    ```


4. Inicia la aplicación.

    Con npm:

    ```bash
    npm run dev
    ```