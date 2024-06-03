# React + TypeScript + Vite

## Getting Started

Install and start development environment
```
pnpm install
pnpm run dev
```

Testing

```
pnpm run test
```

## Project Structure

```
├── src
│ ├── assets            
│ ├── component         
│ ├── config           
│ ├── features          
│ ├── hooks             
│ ├── layouts          
│ ├── libs              
│ ├── pages             
│ ├── services          
│ │ ├── apis           
│ │ ├── providers       
│ ├── types             
│ ├── utils             
```

- **`assets`**
  Contains static assets such as images and icons.

- **`components`**
  Contains reusable React components. 
  - if project is bigger, possiable to add subfolder e.g `ui` folder for UI primitve component

- **`config`**
  Configuration files and constants.

- **`features`**
  Contains feature-specific components and logic.
  - if project is bigger, separate each features into folder and may have same structure as `src` so all the code for each features will be inside e.g. `hooks`, `component`

- **`hooks`**
  Custom React hooks.

- **`layouts`**
  Layout components for the application.

- **`libs`**
  External libraries.

- **`pages`**
  Page components for the application. 

- **`services`**
  Contains all type of service that application may use include third-party and in-house e.g. APis, i18n, provider and context, global state management

  - **`api`** API service files.

  - **`provider`** Providers, context, reducer

- **`utils`**
  Utility functions and helpers. e.g. format, helper,


## Libraries and Technologies Used
Below is a list of the main tools used:

- [React](https://reactjs.org/) is UI framework

- [TypeScript](https://www.typescriptlang.org/) is to add type to JS.

- [Material-UI (MUI)](https://mui.com/) is UI library

- [Day.js](https://day.js.org/) is a lightweight JavaScript library for parsing, validating, manipulating, and displaying dates and times.

- [Axios](https://axios-http.com/) is a promise-based HTTP client for the browser and Node.js. 

- [React Router](https://reactrouter.com/) is a standard library for routing in React applications. 
