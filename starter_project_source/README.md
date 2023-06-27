# The simple responsive structure for website using React 🔎

## first workshop

---

### How it works: ⚡

- the entire application is rendered inside the `root` element in the `index.html` file
- `index.js` file is the entry point of the application
- `App.jsx` file is the root component of the application and is imported in the `index.js` file
- `index.scss` file contains the global styles for the application

---

- `App.jsx` is the parent component of `Header`, `Nav`, `Main` and `Footer` components (each of these components are imported in the `App.jsx` file)
  - each of the sub-components have props that are passed into their respective components. They also have their own `.scss` files within the `src/components/styles` folder
- the `Main` component is the parent of `Hello`, `Section`, `Aside` and `Article` components (each of these components are imported in the `Main.jsx` file)
  - each of the sub-components have props that are passed into their respective components. They also have their own `.scss` files within the `src/components/styles` folder

---

- `data.js` file contains the data that is passed into the components as props
- `getData.js` file contains the function that fetches the data from the `data.js` file
