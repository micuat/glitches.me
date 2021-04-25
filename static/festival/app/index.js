// import choo
const choo = require("choo");
const html = require("choo/html");

// initialize choo
const app = choo({ hash: true });

app.route("/*", notFound);

function notFound() {
  return html`
    <div>
      <a href="/">
        404 with love ❤ back to top!
      </a>
    </div>
  `;
}

// import a template
const views = {
  welcome: require("./views/welcome.js"),
  tickets: require("./views/tickets.js"),
}

app.route("/", views.welcome);
app.route("#tickets", views.tickets);

app.use(require("./routes.js"));

let inited = true;
app.emitter.on("DOMContentLoaded", () => {
  if(inited) {
    inited = false;
    app.emitter.emit("navigate"); // for initialization
  }
})

// start app
app.mount("#app");

const domParty = new DomParty({ position: "relative" });
