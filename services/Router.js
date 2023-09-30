const Router = {
  init: () => {
    document.querySelectorAll("a.navlink").forEach((a) => {
      a.addEventListener("click", (event) => {
        event.preventDefault();
        const url = event.target.getAttribute("href");
        Router.go(url);
      });
    });

    //Check the inital URL
    Router.go(location.pathname);
  },
  go: (route, addToHistory = true) => {
    console.log(`Going to ${route}`);

    if (addToHistory) {
      history.pushState({ route }, "", route);
    }

    let pageElement = null;

    switch (route) {
      case "/":
        pageElement = document.createElement("h1");
        pageElement.textContent = "Menu";
        break;
      case "/order":
        pageElement = document.createElement("h1");
        pageElement.textContent = "Your Order";
        break;
    }

    if (pageElement) {
      const cache = document.querySelector("main");
      //first metod
      cache.innerHTML = "";

      //second method
      // cache.children[0].remove();

      cache.appendChild(pageElement);

      //good practice
      window.scrollX = 0;
      window.scrollY = 0;
    }
  },
};

export default Router;
