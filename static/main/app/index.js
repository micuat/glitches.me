// import choo
import choo from "choo";
import html from "choo/html";

const app = choo({ hash: true });

import lang from "./stores/lang";
app.use(lang);

app.route("/*", notFound);

function notFound() {
  return html`
    <div>
      <a href="/"> 404 with love ❤ back to top! </a>
    </div>
  `;
}

// import a template
import mainView from "./views/main.js";

app.route("/", mainView);
app.route("#:lang", mainView);

// start app
app.mount("#choomount");
