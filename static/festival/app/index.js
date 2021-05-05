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

src(o1).modulate(
  osc(6,0,1.5).brightness(-.5).modulate(noise().sub(gradient()),1),0.01
).layer(
  osc(9,0.03).thresh(0.1,0).luma(0.5,0)
  .layer(osc(10,0.03).thresh(0.9,0).luma(0.5,0).invert()
  ).modulate(osc(1,.1),0.3)
  .modulateRotate(osc(2,.03).kaleid(999),
  () => document.body.scrollTop / 500 - .1)
  .modulatePixelate(src(o1).pixelate(24,24), -1000, 1064)
).out(o1)
src(o1).invert().out(o0)
let h = canvas().parent("#backtex").out(1)
h.style.height = "100vh";
h.children[0].style.height = "100vh"


const urlParams = new URLSearchParams(window.location.search);
let code = "";
const c = urlParams.get("code");
if (c !== null) code = decodeURIComponent(atob(c));

let enc = "";

function codeit(code) {
  enc = btoa(encodeURIComponent(code));
  console.log(enc);
  eval(code);
}

codeit(code);