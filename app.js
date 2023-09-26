import Store from "./services/Store.js";
import { loadData } from "./services/Menu.js";
import Router from "./services/Router.js";

// I want to make Store to be global, outside the module
window.app = {};
app.store = Store;
app.router = Router;

window.addEventListener("DOMContentLoaded", async () => {
  loadData();
  app.router.init();
});
