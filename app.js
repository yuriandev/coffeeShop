import Store from "./services/Store.js";
import { loadData } from "./services/Menu.js";

// I want to make Store to be global, outside the module
window.app = {};
app.store = Store;

window.addEventListener("DOMContentLoaded", async () => {
  loadData();
});
