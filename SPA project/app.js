// Components 替換內容的部份
const HomeComponent = {
  render: () => {
    return `
        <section>
          <h1>Home</h1>
          <p>This is just a test</p>
        </section>
      `;
  },
};

const Page1Component = {
  render: () => {
    return `
        <section>
          <h1>Page 1</h1>
          <p>This is just a test</p>
        </section>
      `;
  },
};

const Page2Component = {
  render: () => {
    return `
        <section>
          <h1>Page 2</h1>
          <p>This is just a test</p>
        </section>
      `;
  },
};

const ErrorComponent = {
  render: () => {
    return `
        <section>
          <h1>Error</h1>
          <p>This is just a test</p>
        </section>
      `;
  },
};

// Routes
const routes = [
  { path: "/", component: HomeComponent },
  { path: "/page1", component: Page1Component },
  { path: "/page2", component: Page2Component },
];

const parseLocation = () => {
  console.log(
    location.hash,
    location.hash.slice(1),
    location.hash.slice(1).toLowerCase()
  );
  return location.hash.slice(1).toLowerCase() || "/";
};
const findComponentByPath = (path, routes) => {
//   console.log(path, "123",routes,routes.find((r) => r.path.match(new RegExp(`^\\${path}$`, "gm"))) ||
//   undefined);

  return (
    routes.find((r) => r.path.match(new RegExp(`^\\${path}$`, "gm"))) ||
    undefined
  );
};

// const router = () => {
//   // TODO: Get the current path
//   // TODO: Find the component based on the current path
//   // TODO: If there's no matching route, get the "Error" component
//   // TODO: Render the component in the "app" placeholder
// };

const router = () => {
  // Find the component based on the current path
  const path = parseLocation();
  // If there's no matching route, get the "Error" component
  const { component = ErrorComponent } =
    findComponentByPath(path, routes) || {};
  // Render the component in the "app" placeholder
  document.getElementById("app").innerHTML = component.render();
};

window.addEventListener("hashchange", router);
window.addEventListener("load", router);
