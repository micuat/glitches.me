(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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

app.state.scheduleMax = 10;
app.state.webring = html`<div id="megaring"></div>`;
document.body.appendChild(app.state.webring); // ghetto

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
},{"./routes.js":2,"./views/tickets.js":4,"./views/welcome.js":5,"choo":8,"choo/html":7}],2:[function(require,module,exports){
module.exports = function (state, emitter) {
  emitter.on("render", () => {
    console.log("rendered");
  });

  emitter.on("navigate", () => {
    console.log("navigated");
    // let title = `festival.`;
    // if (state.route !== "/") {
    //   title = state.route + ".";
    // }

    // const isWelcome = state.params.mode === undefined;
    // const isEditor = state.params.mode == "remix" || state.params.mode == "new";
    // if (isWelcome || isEditor) {
    //   // ok
    // }
    // else {
    //   emitter.emit("pushState", "/");
    //   return;
    // }

    // if (isWelcome) {
    //   // top page
    //   state.editorSetup = false;
    //   emitter.emit("requests:loadSessions");
    //   emitter.emit("engine:clearEditor");
    //   emitter.emit("mouse:stopRecord", () => { });
    // }
    // else if (isEditor) {
    //   // editor
    //   state.startTime = +new Date;
    //   const id = state.params.id;

    //   emitter.emit("engine:initPlayer");
    //   emitter.emit("engine:initRecorder");

    //   emitter.emit("editor:setup", id);
    // }
  });
}

},{}],3:[function(require,module,exports){
module.exports = [
  {
    title: `October 18, 2021: Risograph (Flor de Fuego & Naoto Hieda)`,
    url: "https://risograph.glitch.me/",
    img: "https://img.glitches.me/images/2021/10/20/Image.jpg",
  },
  {
    title: `October 18, 2021: Best Practices in Contemporary Dance: Chat (Annie Abrahams, Jorge Guevara & Naoto Hieda)`,
    url: "https://youtu.be/Dcx-9qNX9dM",
  },
  {
    title: `October 13, 2021: Risograph (Naoto Hieda)`,
    url: "https://risograph.glitch.me/",
    img: "https://cdn.glitch.me/1392ab99-9774-4414-a304-1b9a35d2897e%2FIMG_8311.JPG?v=1634155627349",
  },
  {
    title: `October 11, 2021: Risograph (Naoto Hieda)`,
    url: "https://risograph.glitch.me/",
    img: "https://cdn.glitch.me/1392ab99-9774-4414-a304-1b9a35d2897e%2FImage10.png.jpg?v=1633978203441",
  },
  {
    title: `October 4, 2021: Best Practices in Contemporary Dance: Chat (Jorge Guevara & Naoto Hieda)`,
    url: "https://youtu.be/6-KQQtdDLuo",
  },
  {
    title: `September 29, 2021: Best Practices in Contemporary Dance: Chat (Jorge Guevara & Naoto Hieda) [2]`,
    url: "https://youtu.be/8QAd-VyRWL4",
  },
  {
    title: `September 29, 2021: Best Practices in Contemporary Dance: Chat (Jorge Guevara & Naoto Hieda) [1]`,
    url: "https://youtu.be/fG-Zr_W3-XE",
    img: "https://img.glitches.me/images/2021/09/29/vlcsnap-2021-09-29-15h55m45s003.jpg"
  },
  {
    title: `September 28, 2021: Best Practices in Contemporary Dance: Chat (Jorge Guevara & Naoto Hieda) [2]`,
    url: "https://youtu.be/HxMXpRzUV-c",
    img: "https://img.glitches.me/images/2021/09/29/vlcsnap-2021-09-29-08h50m38s055.jpg"
  },
  {
    title: `September 28, 2021: Best Practices in Contemporary Dance (Jorge Guevara & Naoto Hieda)`,
    url: "https://youtu.be/w5qAER81o_U",
    img: "https://img.glitches.me/images/2021/09/29/vlcsnap-2021-09-29-08h51m47s569.jpg"
  },
  {
    title: `September 28, 2021: Best Practices in Contemporary Dance: Chat (Jorge Guevara & Naoto Hieda) [1]`,
    url: "https://youtu.be/3hs0E63vYjU",
    img: "https://img.glitches.me/images/2021/09/28/vlcsnap-2021-09-28-15h16m01s159.jpg"
  },
  {
    title: `September 26, 2021: Best Practices in Contemporary Dance: Chat (Jorge Guevara & Naoto Hieda)`,
    url: "https://youtu.be/7Xvc9k0rPDg",
    img: "https://img.glitches.me/images/2021/09/27/vlcsnap-2021-09-27-11h54m52s836.png"
  },
  {
    title: `September 25, 2021: Best Practices in Contemporary Dance (Jorge Guevara & Naoto Hieda)`,
    url: "https://youtu.be/hQM0J9eMMAs",
    img: "https://img.glitches.me/images/2021/09/26/210925.jpg"
  },
  {
    title: `September 23, 2021: Best Practices in Contemporary Dance: Chat (Jorge Guevara & Naoto Hieda) [2]`,
    url: "https://youtu.be/-KNzui9uN6c",
    img: "https://img.glitches.me/images/2021/09/26/210923chat2.jpg"
  },
  {
    title: `September 23, 2021: Best Practices in Contemporary Dance (Jorge Guevara & Naoto Hieda)`,
    url: "https://youtu.be/khDpWxA_YeA",
    img: "https://img.glitches.me/images/2021/09/26/210923practice.jpg"
  },
  {
    title: `September 23, 2021: Best Practices in Contemporary Dance: Chat (Jorge Guevara & Naoto Hieda) [1]`,
    url: "https://youtu.be/97sctZ7WXO0",
    img: "https://img.glitches.me/images/2021/09/26/210923chat1.jpg"
  },
  {
    title: `September 22, 2021: Best Practices in Contemporary Dance: Chat (Jorge Guevara & Naoto Hieda)`,
    url: "https://youtu.be/5cbqJzylRD0",
    img: "https://img.glitches.me/images/2021/09/26/210922.jpg"
  },
  {
    title: `September 20, 2021: Glitch Vacations (Flor de Fuego & Naoto Hieda)`,
    url: "https://youtu.be/d0KMUUOrUvs",
    img: "https://img.glitches.me/images/2021/09/20/vlcsnap-2021-09-20-19h11m28s562.jpg"
  },
  {
    title: `September 19, 2021: Best Practices in Contemporary Dance: Chat (Jorge Guevara & Naoto Hieda)`,
    url: "https://youtu.be/D4HbfgzSmdk",
    img: "https://img.glitches.me/images/2021/09/20/chat12c7665be8c83941.jpg"
  },
  {
    title: `September 18, 2021: Best Practices in Contemporary Dance: Chat at NEW NOW (Jorge Guevara & Naoto Hieda)`,
    url: "https://youtu.be/JqPZBdOrVlE",
    img: "https://img.glitches.me/images/2021/09/20/chat.jpg"
  },
  {
    title: `September 17, 2021: Best Practices in Contemporary Dance: Chat (Jorge Guevara & Naoto Hieda) [2]`,
    url: "https://youtu.be/7D5xSwIFRTU",
    img: "https://img.glitches.me/images/2021/09/19/chat2.jpg"
  },
  {
    title: `September 17, 2021: Best Practices in Contemporary Dance: Chat (Jorge Guevara & Naoto Hieda) [1]`,
    url: "https://youtu.be/XCTcsZI6-Bw",
    img: "https://img.glitches.me/images/2021/09/19/chat1.jpg"
  },
  {
    title: `September 5, 2021: Talkative Hydra (Naoto Hieda)`,
    url: "https://talkative-hydra.glitch.me/",
    img: "https://img.glitches.me/images/2021/09/07/talkative.jpg"
  },
  {
    title: `September 4, 2021: hydra-tree-stub (Naoto Hieda)`,
    url: "https://hydra-tree-stub.glitch.me/",
    img: "https://img.glitches.me/images/2021/09/05/hydra-tree.jpg"
  },
  {
    title: `August 27, 2021: Die Urbane. Eine HipHop Partei: Performance (Raphael Hillebrand; camera: Naoto Hieda)`,
    url: "https://youtu.be/6jxm8a3hoQE",
    img: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2Frh.png?v=1630336603964"
  },
  {
    title: `August 23, 2021: Best Practices in Contemporary Dance: Chat (Jo Caimo, Jorge Guevara & Naoto Hieda)`,
    url: "https://youtu.be/jksxNKJe3Uc",
    img: "https://img.glitches.me/images/2021/08/24/vlcsnap-2021-08-24-20h39m43s141.jpg"
  },
  {
    title: `August 22, 2021: Homepage Builders - Workshop (Flor de Fuego & Naoto Hieda)`,
    url: "https://ccfest-2021-homepage.glitch.me/",
    img: "https://img.glitches.me/images/2021/08/24/vlcsnap-2021-08-24-20h39m08s845.jpg"
  },
  {
    title: `August 18, 2021: Glitter Nails (Naoto Hieda)`,
    url: "https://glitter-nails.glitch.me/",
    img: "https://img.glitches.me/images/2021/08/18/canvas.jpg"
  },
  {
    title: `August 17, 2021: Hydra inside Livelab (Flor de Fuego & Naoto Hieda)`,
    img: "https://cdn.glitch.com/9b37fb18-5c29-4916-b8ad-624764fa77cb%2Flivelab.jpg?v=1629353882235"
  },
  {
    title: `August 17, 2021: YouTube at Aktion Kölner Litfasssäulen (Naoto Hieda)`,
    url: "https://en.khm.de/termine/news.5174.khm-open-2021-aktion-kolner-litfaSssaulen/",
    img: "https://img.glitches.me/images/2021/08/24/CD05E93B-8CC7-405A-8777-9E94597BC1E5.jpg"
  },
  {
    title: `August 16, 2021: Best Practices in Contemporary Dance: Chat (Jorge Guevara & Naoto Hieda)`,
    url: "https://youtu.be/73MwHqOW60c",
    img: "https://img.glitches.me/images/2021/08/16/vlcsnap-2021-08-16-21h11m16s734.jpg"
  },
  {
    title: `August 15, 2021: Best Practices in Contemporary Dance: Narration (Naoto Hieda)`,
    url: "https://youtu.be/3U5ER9NmmbE",
    img: "https://img.glitches.me/images/2021/08/16/Screenshot-2021-08-16.jpg"
  },
  {
    title: `August 14, 2021: Best Practices in Contemporary Dance: Chat (Jorge Guevara & Naoto Hieda)`,
    url: "https://youtu.be/odnK-qqMjnU",
    img: "https://img.glitches.me/images/2021/08/16/Screenshot-2021-08-14.jpg"
  },
  {
    title: `August 9, 2021: Best Practices in Contemporary Dance: Chat (Jorge Guevara & Naoto Hieda)`,
    url: "https://youtu.be/BdrJjP1P4GY",
    img: "https://img.glitches.me/images/2021/08/16/Screenshot-2021-08-09.jpg"
  },
  {
    title: `August 8, 2021: Hydra inside LiveLab (Naoto Hieda)`,
    url: "https://github.com/micuat/LiveLab/tree/hydra",
    img: "https://img.glitches.me/images/2021/08/08/livelab.jpg"
  },
  {
    title: `August 3, 2021: Best Practices in Contemporary Dance: Chat (Ulrike Kuchner, Jorge Guevara & Naoto Hieda)`,
    url: "https://youtu.be/fExStCywwd8",
    img: "https://img.glitches.me/images/2021/08/04/vlcsnap-2021-08-04-10h15m33s061.jpg"
  },
  {
    title: `August 2, 2021: Best Practices in Contemporary Dance: Chat (Jorge Guevara & Naoto Hieda)`,
    url: "https://youtu.be/Mk8egbXcDmg",
    img: "https://img.glitches.me/images/2021/08/02/vlcsnap-2021-08-02-19h36m29s573.jpg"
  },
  {
    title: `July 31, 2021: Best Practices in Contemporary Dance at IDOCDE: Chat (Jorge Guevara & Naoto Hieda)`,
    url: "https://youtu.be/uwWDDK-OI2Q",
    img: "https://img.glitches.me/images/2021/08/02/vlcsnap-2021-08-02-20h15m12s581.jpg"
  },
  {
    title: `July 31, 2021: Best Practices in Contemporary Dance at IDOCDE (Jorge Guevara & Naoto Hieda)`,
    url: "https://youtu.be/44Oaa1MMZhc",
    img: "https://img.glitches.me/images/2021/08/01/vlcsnap-2021-08-01-13h30m13s605.jpg"
  },
  {
    title: `July 30, 2021: Best Practices in Contemporary Dance: Chat (Liza Futerman, Jorge Guevara & Naoto Hieda)`,
    url: "https://youtu.be/mtl9W-YhLLc",
    img: "https://img.glitches.me/images/2021/07/31/bp.jpg"
  },
  {
    title: `July 29, 2021: Best Practices in Contemporary Dance: Chat (Jorge Guevara & Naoto Hieda)`,
    url: "https://youtu.be/0uip4OabhIc",
    img: "https://img.glitches.me/images/2021/07/29/vlcsnap-2021-07-29-21h09m29s003.jpg"
  },
  {
    title: `July 29, 2021: Best Practices in Contemporary Dance (Jorge Guevara & Naoto Hieda)`,
    url: "https://youtu.be/TJgV-x_mTmU",
    img: "https://img.glitches.me/images/2021/07/29/vlcsnap-2021-07-29-21h06m38s515.jpg"
  },
  {
    title: `July 27, 2021: Best Practices in Contemporary Dance: Chat (Jorge Guevara & Naoto Hieda)`,
    url: "https://youtu.be/LCA43GclEQE",
    img: "https://img.glitches.me/images/2021/07/28/vlcsnap-2021-07-28-12h48m03s246.jpg"
  },
  {
    title: `July 26, 2021: Best Practices in Contemporary Dance: Chat (Jorge Guevara & Naoto Hieda)`,
    url: "https://youtu.be/utvgxFZkaoY",
    img: "https://img.glitches.me/images/2021/07/27/vlcsnap-2021-07-27-11h30m14s208.png"
  },
  {
    title: `July 24, 2021: Performance at Silicon Friends Camp (Ekheo; Robotics: So Kanno & Hess Jeon; Visuals: Naoto Hieda)`,
    img: "https://img.glitches.me/images/2021/07/27/vlcsnap-2021-07-27-11h35m09s039.png"
  },
  {
    title: `July 22, 2021: Light in Gosau (Kanno So & Naoto Hieda)`,
    url: "https://silicon.glitches.me/",
    img: "https://img.glitches.me/images/2021/07/22/light.jpg"
  },
  {
    title: `July 21, 2021: Change Your Back Lookout Point (Naoto Hieda)`,
    img: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2FIMG_7631.jpg"
  },
  {
    title: `July 21, 2021: Best Practices in Under Construction (Naoto Hieda & Jorge Guevara)`,
    img: "https://img.glitches.me/images/2021/07/22/underconstruction.jpg"
  },
  {
    title: `July 21, 2021: ＫＨ門 Festival at KHM Open (ctrl-space)`,
    url: "http://khmn.khm.de/",
    img: "https://img.glitches.me/images/2021/07/22/khmn.jpg"
  },
  {
    title: `July 21, 2021: Netze Open at KHM Open (Netze)`,
    url: "http://netze.khm.de/",
    img: "https://img.glitches.me/images/2021/07/15/netzenetze.png"
  },
  {
    title: `July 20, 2021: Silicon Friend Camp`,
    url: "https://cwc.radical-openness.org/siliconfriendcamp/",
    img: "https://cdn.glitch.com/cada0ae2-f902-428d-81e3-6a68f5e589e5%2Fsebastian-avatars2.jpeg"
  },
  {
    title: `July 15, 2021: Best Practices in Contemporary Dance (Jorge Guevara & Naoto Hieda)`,
    url: "https://youtu.be/aWIDqTxxy8k",
    img: "https://img.glitches.me/images/2021/07/16/vlcsnap-2021-07-16-21h01m26s846.png"
  },
  {
    title: `July 12, 2021: Risograph (Naoto Hieda)`,
    url: "https://risograph.glitch.me/",
    img: "https://img.glitches.me/images/2021/07/12/2021-07-12-1.png"
  },
  {
    title: `July 10, 2021: Hydra in Svelte - Template (Naoto Hieda)`,
    url: "https://glitch.com/~hydra-svelte",
    img: "https://img.glitches.me/images/2021/07/11/image.png"
  },
  {
    title: `July 6, 2021: Best Practices in Contemporary Dance (Jorge Guevara & Naoto Hieda)`,
    url: "https://youtu.be/PYbN2FJ3BpU",
    img: "https://img.glitches.me/images/2021/07/06/vlcsnap-2021-07-06-21h16m27s663.png"
  },
  {
    title: `July 5, 2021: Risograph (Naoto Hieda)`,
    url: "https://risograph.glitch.me/",
    img: "https://img.glitches.me/images/2021/07/06/riso.png"
  },
  {
    title: `July 5, 2021: Best Practices in Contemporary Dance: Chat (Jorge Guevara & Naoto Hieda)`,
    url: "https://youtu.be/zDiNIxvz5pw",
    img: "https://img.glitches.me/images/2021/07/06/vlcsnap-2021-07-06-16h31m34s281.png"
  },
  {
    title: `July 1, 2021: p5imagearray 2 (Naoto Hieda)`,
    url: "https://p5imagearray-2.glitch.me/",
    img: "https://img.glitches.me/images/2021/07/02/Screenshot-2021-07-02-at-20-16-27-https-p5imagearray-2-glitch-me.png"
  },
  {
    title: `June 30, 2021: Best Practices in Contemporary Dance: Chat (Jorge Guevara & Naoto Hieda)`,
    url: "https://youtu.be/AgmqO_eD9cc",
    img: "https://img.glitches.me/images/2021/07/02/vlcsnap-2021-07-02-20h11m17s206.png"
  },
  {
    title: `June 28, 2021: Best Practices in Risograph (Naoto Hieda)`,
    img: "https://img.glitches.me/images/2021/06/29/678DAE7A-C36E-46A4-A3F9-EC6D475A7286.jpg"
  },
  {
    title: `June 25, 2021: MoveApp Event (Cocoon Dance)`,
    url: "https://www.cocoondance.de/moveapp-event/",
    img: "https://img.glitches.me/images/2021/06/24/cocoon.png"
  },
  {
    title: `June 25, 2021: Best Practices in Contemporary Dance: Chat (Jorge Guevara & Naoto Hieda)`,
    url: "https://youtu.be/c6gDV0zb0vw",
    img: "https://img.glitches.me/images/2021/06/29/vlcsnap-2021-06-29-10h46m53s050.png"
  },
  {
    title: `June 22, 2021: Lock Picking Intervention (Naoto Hieda)`,
    img: "https://img.glitches.me/images/2021/06/22/A27D9479-1B39-4037-9531-39A4B8827A05.jpg"
  },
  {
    title: `June 21, 2021: Hydra Tutorial: Hydra inside webpage 1 (Naoto Hieda)`,
    url: "https://youtu.be/VGS7HenIA6A",
    img: "https://img.glitches.me/images/2021/06/22/vlcsnap-2021-06-22-17h00m29s003.png"
  },
  {
    title: `June 20, 2021: Best Practices in Contemporary Dance: Chat (Jorge Guevara & Naoto Hieda)`,
    url: "https://youtu.be/GRZcuvPTqto",
    img: "https://img.glitches.me/images/2021/06/21/vlcsnap-2021-06-21-13h48m30s096.png"
  },
  {
    title: `June 20, 2021: Best Practices in Contemporary Dance (Jorge Guevara & Naoto Hieda)`,
    url: "https://youtu.be/QENHKpPJZew",
    img: "https://img.glitches.me/images/2021/06/21/vlcsnap-2021-06-21-13h46m47s826.png"
  },
  {
    title: `June 18, 2021: Sound in Bielefeld (Naoto Hieda)`,
    url: "https://sound-in-aframe-1.glitch.me/",
    img: "https://img.glitches.me/images/2021/06/18/image4b7876be4f92fa6f.png"
  },
  {
    title: `June 14, 2021: Best Practices in Contemporary Dance: Chat (Pigeon, Jorge Guevara & Naoto Hieda)`,
    url: "https://youtu.be/2gOS750neh4",
    img: "https://img.glitches.me/images/2021/06/18/vlcsnap-2021-06-18-20h14m29s326.png"
  },
  {
    title: `June 13, 2021: KHM at CityLeaks Extra Showing (KHM)`,
    img: "https://img.glitches.me/images/2021/06/13/96061AD4-3F6F-46DB-864B-4A3EC9C243EB.jpg"
  },
  {
    title: `June 13, 2021: KHM at CityLeaks Documentation (Naoto Hieda)`,
    url: "https://khm.glitch.me/#episodes/cityleaks",
    img: "https://cdn.glitch.com/bcaafd25-974f-486f-9a27-0e4b3bf5dce8%2FIMG_7264.JPG?v=1623577245612"
  },
  {
    title: `June 13, 2021: Flok Replay (Flor de Fuego & Naoto Hieda)`,
    url: "https://flok-replay.glitch.me/#replay/1623560102222",
    img: "https://img.glitches.me/images/2021/06/13/image.png"
  },
  {
    title: `June 11, 2021: Best Practices... But Alone (Naoto Hieda)`,
    url: "https://youtu.be/A5xfVHdT_zI",
    img: "https://img.glitches.me/images/2021/06/12/vlcsnap-2021-06-12-14h43m37s477.png"
  },
  {
    title: `June 10, 2021: CityLeaks Interview with Tobias Hartmann, Karin Lingnau & Max Schweder (Naoto Hieda)`,
    url: "https://youtu.be/20mI7zGIX00",
    img: "https://img.glitches.me/images/2021/06/13/interview.jpg"
  },
  {
    title: `June 6, 2021: Best Practices in Contemporary Dance: Chat (Flor de Fuego, Jorge Guevara & Naoto Hieda)`,
    url: "https://youtu.be/Ecne2NxF5vw",
    img: "https://img.glitches.me/images/2021/06/06/vlcsnap-2021-06-06-21h52m46s227.png"
  },
  {
    title: `June 6, 2021: Best Practices in Contemporary Dance: Development & Practice (Jorge Guevara & Naoto Hieda)`,
    url: "https://youtu.be/AN91uaPxIso",
    img: "https://img.glitches.me/images/2021/06/06/vlcsnap-2021-06-06-21h54m04s155.png"
  },
  {
    title: `June 5, 2021: Live Coding Online Workshop (Naoto Hieda, photo credit @konstantinjohanneshehl)`,
    url: "https://allyourbase.art/event/live-coding-workshop-with-naoto-hieda/",
    img: "https://img.glitches.me/images/2021/06/08/B68D82AB-F6B1-416D-9755-6D2288FF2639.jpg"
  },
  {
    title: `June 3, 2021: Patterns (Naoto Hieda)`,
    url: "https://hydra.glitches.me/?code=biUzRChzKSUzRCUzRW5vaXNlKHMpLmFkZChub2lzZShzKjIpJTJDMC41KS5hZGQobm9pc2UocyoyKSUyQzAuMiklMEFvc2MoMiUyQzAlMkMxLjUpLm1vZHVsYXRlKHNvbGlkKDIpKS5jb250cmFzdCgyKS5tb2R1bGF0ZSglMEFuKDEuNSkudGhyZXNoKDAuMDUlMkMwLjAzKS5kaWZmKG4oMS41KS50aHJlc2goMCUyQzAuMDMpKSUwQSUyMCUyMC5hZGQobigxLjYpLnRocmVzaCgwLjA0JTJDMC4xKSUyQzAuNSklMEElMjAlMjAuc2NhbGUoMiklMEElMjAlMjAucmVwZWF0KDIlMkMyKSUwQSUyMCUyMC5tb2R1bGF0ZVNjYWxlKG5vaXNlKDQwJTJDMC4xKS5tb2R1bGF0ZVBpeGVsYXRlKCUwQSUyMCUyMCUyMCUyMCUyMCUyMG5vaXNlKDQlMkMuMDEpLnBpeGVsYXRlKDQlMkM0KS50aHJlc2goKSUyQzEyJTJDNCkudGhyZXNoKC0uNSUyQzEpLnBvc3Rlcml6ZSg4KSUyQy0xLjUlMkMyKSUwQSUyMCUyMC5zdWIoZ3JhZGllbnQoKSkuYWRkKCUwQSUyMCUyMCUyMCUyMG5vaXNlKDQwJTJDMC4xKS5tb2R1bGF0ZVBpeGVsYXRlKCUwQSUyMCUyMCUyMCUyMCUyMCUyMG5vaXNlKDQlMkMuMDEpLnBpeGVsYXRlKDQlMkM0KS50aHJlc2goKSUyQzEyJTJDNCklMkMxKSUyQzEpLm91dCgpJTBB",
    img: "https://img.glitches.me/images/2021/06/03/patterns-LaZ6tzrqwGOmPYVb.png"
  },
  {
    title: `June 2, 2021: Razio (Guest: lizvlx)`,
    url: "https://razio.glitch.me/#episodes/lizvlx",
    img: "https://img.glitches.me/images/2021/06/02/vlcsnap-2021-06-02-12h10m57s598.png"
  },
  {
    title: `May 31, 2021: Presentation at "Ctrl-Space" (Naoto Hieda)`,
    img: "https://img.glitches.me/images/2021/05/31/image8db2fea0c86a2002.png"
  },
  {
    title: `May 30, 2021: Best Practices in Contemporary Dance: Development, Practice & Chat (Jorge Guevara & Naoto Hieda)`,
    url: "https://youtu.be/iUjASqcW74w",
    img: "https://img.glitches.me/images/2021/05/31/image.png"
  },
  {
    title: `May 29, 2021: osc purist (Naoto Hieda)`,
    url: "https://hydra.glitches.me/?code=c3JjKG8wKS5jb2xvcigwLjk4NSUyQzAuOTUlMkMwLjk1KS5jb2xvcmFtYSgwLjAwNCklMEElMjAlMjAubW9kdWxhdGUoJTBBJTIwJTIwb3NjKDYlMkMwJTJDMS41KS5tb2R1bGF0ZShzcmMobzApLnN1YihncmFkaWVudCgpKSUyQzEpLmJyaWdodG5lc3MoLS41KSUyQzAuMDAzKS5sYXllciglMEFvc2MoKS5tYXNrKHNoYXBlKDIlMkMwLjElMkMwKSklMEElMjAlMjAubW9kdWxhdGVTY2FsZShvc2MoMSUyQzEpJTJDMyklMEElMjAlMjAubW9kdWxhdGUob3NjKDElMkMwLjQpLmJyaWdodG5lc3MoLS41KS5jb2xvcigwJTJDMSklMkMxKSUwQSUyMCUyMC5tb2R1bGF0ZVJvdGF0ZShvc2MoMiUyQzAuNSklMkMzKSUwQSkub3V0KCk=",
    img: "https://img.glitches.me/images/2021/05/29/image.png"
  },
  {
    title: `May 28, 2021: The lightest dark is darker than the darkest light (Nien Tzu Weng, remix by Naoto Hieda)`,
    url: "https://ccov.org/en/explore/showing-nien-tzu-weng/",
    img: "https://img.glitches.me/images/2021/05/28/vlcsnap-2021-05-28-19h32m26s367.png"
  },
  {
    title: `May 26, 2021: Flok Replay (Flor de Fuego & Naoto Hieda)`,
    url: "https://flok-replay.glitch.me/#replay/1622061423433",
    img: "https://img.glitches.me/images/2021/05/27/image.png"
  },
  {
    title: `May 24, 2021: HDD Revisit: Meshes (Naoto Hieda)`,
    url: "https://hdd-revisit.glitch.me/#/2021-05-24",
    img: "https://img.glitches.me/images/2021/05/24/image.png"
  },
  {
    title: `May 20, 2021: Hydra A-Frame+Code (Naoto Hieda)`,
    url: "https://hydra-aframe-anime-9.glitch.me/",
    img: "https://img.glitches.me/images/2021/05/24/image27ceb8406241591e.png"
  },
  {
    title: `May 19, 2021: Hydra A-Frame (Naoto Hieda)`,
    url: "https://hydra-aframe-anime-7.glitch.me/",
    img: "https://img.glitches.me/images/2021/05/20/image.png"
  },
  {
    title: `May 18, 2021: Flok Replay (Flor de Fuego & Naoto Hieda)`,
    url: "https://flok-replay.glitch.me/",
    img: "https://img.glitches.me/images/2021/05/18/image.png"
  },
  {
    title: `May 16, 2021: Let's Bookmark (Naoto Hieda)`,
    url: "https://lets-bookmark.glitch.me/",
    img: "https://img.glitches.me/images/2021/05/16/image.png"
  },
  {
    title: `May 15, 2021: Intervention at CityLeaks (Naoto Hieda intervening/hijacking installation by Cylvester)`,
    url: "https://www.instagram.com/p/CO5uQLGqKQd/",
    img: "https://img.glitches.me/images/2021/05/15/image.png"
  },
  {
    title: `May 15, 2021: Razio (Guest: So Kanno)`,
    url: "https://razio.glitch.me/#episodes/so",
    img: "https://cdn.glitch.com/fce09100-6702-45dd-b818-65dc2117c886%2Fvlcsnap-2021-05-15-18h07m38s102.png?v=1621094936408"
  },
  {
    title: `May 15, 2021: Best Practices in Contemporary Dance: Chat (Jorge Guevara & Naoto Hieda)`,
    url: "https://youtu.be/Sxw5jV1SzFI",
    img: "https://img.glitches.me/images/2021/05/15/vlcsnap-2021-05-15-21h56m39s551.png"
  },
  {
    title: `May 14, 2021: Best Practices... But Alone (Naoto Hieda)`,
    url: "https://youtu.be/V_GIrQpE1Xs",
    img: "https://img.glitches.me/images/2021/05/14/image70adc94baabfc226.png"
  },
  {
    title: `May 13, 2021: Best Practices in Contemporary Dance: Chat (Joana Chicau, Jorge Guevara & Naoto Hieda)`,
    url: "https://youtu.be/fqxNOgyhucI",
    img: "https://img.glitches.me/images/2021/05/13/vlcsnap-2021-05-13-21h02m48s927.png"
  },
  {
    title: `May 13, 2021: Best Practices in Contemporary Dance: Development & Practice (Jorge Guevara & Naoto Hieda)`,
    url: "https://youtu.be/fqxNOgyhucI",
    img: "https://img.glitches.me/images/2021/05/13/vlcsnap-2021-05-13-21h04m32s366.png"
  },
  {
    title: `May 12, 2021: Flok Replay (Flor de Fuego & Naoto Hieda)`,
    url: "https://flok-replay.glitch.me/",
    img: "https://img.glitches.me/images/2021/05/13/image.png"
  },
  {
    title: `May 11, 2021: Razio (Guest: Luise Flügge)`,
    url: "https://razio.glitch.me/#episodes/luise",
    img: "https://cdn.glitch.com/fce09100-6702-45dd-b818-65dc2117c886%2Fvlcsnap-2021-05-11-23h14m32s972.png?v=1620767699624"
  },
  {
    title: `May 10, 2021: Flok Replay (Flor de Fuego & Naoto Hieda)`,
    url: "https://flok-replay.glitch.me/",
    img: "https://img.glitches.me/images/2021/05/11/image.png"
  },
  {
    title: `May 10, 2021: Best Practices in Contemporary Dance: Chat (Jorge Guevara & Naoto Hieda)`,
    url: "https://youtu.be/wafVx8RiDeE",
    img: "https://img.glitches.me/images/2021/05/11/vlcsnap-2021-05-11-01h26m22s384.png"
  },
  {
    title: `May 8, 2021: Best Practices... But Alone (Naoto Hieda)`,
    url: "https://youtu.be/oGHAVVSmAwc",
    img: "https://img.glitches.me/images/2021/05/09/image.png"
  },
  {
    title: `May 8, 2021: Best Practices in Contemporary Dance: Chat (Jorge Guevara & Naoto Hieda)`,
    url: "https://youtu.be/ENmQK0ZCbQw",
    img: "https://img.glitches.me/images/2021/05/08/vlcsnap-2021-05-08-19h38m34s258.png"
  },
  {
    title: `May 7, 2021: Presentation at "Gifts" (Naoto Hieda)`,
    url: "",
    img: "https://img.glitches.me/images/2021/05/07/image.png"
  },
  {
    title: `May 6, 2021: Hydra A-Frame (Naoto Hieda)`,
    url: "https://hydra-aframe-anime-4.glitch.me/",
    img: "https://img.glitches.me/images/2021/05/07/imagef5eb42879c4ef467.png"
  },
  {
    title: `May 5, 2021: Presentation at "Together" (Naoto Hieda)`,
    url: "",
    img: "https://img.glitches.me/images/2021/05/13/vlcsnap-2021-05-13-20h55m42s813.png"
  },
  {
    title: `May 4, 2021: Presentation at "Cats" (Naoto Hieda)`,
    url: "",
    img: "https://img.glitches.me/images/2021/05/04/vlcsnap-2021-05-04-21h56m37s298.png"
  },
  {
    title: `May 3, 2021: Best Practices in Contemporary Dance: Chat (Jorge Guevara & Naoto Hieda)`,
    url: "https://youtu.be/Kx8lVCxXLgA",
    img: "https://img.glitches.me/images/2021/05/03/vlcsnap-2021-05-03-17h36m46s282.png"
  },
  {
    title: `May 1, 2021: Best Practices in Contemporary Dance: Development, Practice & Chat (Jorge Guevara & Naoto Hieda)`,
    url: "https://youtu.be/fqxNOgyhucI",
    img: "https://img.glitches.me/images/2021/05/01/vlcsnap-2021-05-01-17h41m49s064.png"
  },
  {
    title: `April 30, 2021: hydra-xml (Naoto Hieda)`,
    url: "https://hydra-xml.glitch.me/",
    img: "https://img.glitches.me/images/2021/04/30/Screenshot-from-2021-04-30-22-53-14.png"
  },
  {
    title: `April 28, 2021: Intervention in Arium (Naoto Hieda)`,
    url: "https://arium.xyz/spaces/nh",
    img: "https://assets.vlts.pw/spaceUserAssets/nh/LQRdaF5y37cNtpe646xWF4GUXit2/default-meta-mlQBma4e.jpg"
  },
  {
    title: `April 28, 2021: Best Practices in Contemporary Dance: Chat (Jorge Guevara & Naoto Hieda)`,
    url: "https://www.youtube.com/watch?v=kC-7hzK0jgM",
    img: "https://img.glitches.me/images/2021/04/28/vlcsnap-2021-04-28-17h25m17s756.png"
  },
  {
    title: `April 27, 2021: Presentation at "Ctrl-Space" (Naoto Hieda)`,
    url: "",
    img: "https://img.glitches.me/images/2021/04/27/Screenshot-from-2021-04-27-13-05-21.png"
  },
  {
    title: "April 26, 2021: Collective depressing session (24/7)",
    url: "https://depression.glitches.me/",
    img: "https://img.glitches.me/images/2021/04/26/image8daef8001ccc12ac.png"
  },
  {
    title: "April 25, 2021: Soft Opening (Website Launch)",
    url: "",
    img: "https://img.glitches.me/images/2021/04/26/image7d400fea9c7b7cd5.png"
  },
]

},{}],4:[function(require,module,exports){
// import choo's template helper
const html = require("choo/html");

// export module
module.exports = function (state, emit) {
  state.bighead = p([`tickets.`, `glitches.me`])
    .color([0, 0.5], 0.1, 1).shadow().bg([1, 0], 1, 0).size(40)//.parent("#bighead")
    .font("VT323").scrollX([0, 0.1]).out(0)
  return html`
    <div>
    ${state.bighead}

    <section>
    <h2>Tickets</h2>
    <p>Tickets are a form of paper, which is processed fibers, that is printed with ink with a unique code that manifests the validity of the token.</p>

    
    <p><a href="/">back</a></p>
    </section>
    </div>
    `;
};
},{"choo/html":7}],5:[function(require,module,exports){
// import choo's template helper
const html = require("choo/html");

const schedule = require("./schedule.js")

// export module
module.exports = function (state, emit) {
  state.bighead = p([`festival.`, `glitches.me`])
    .color([0, 0.5], 0.1, 1).shadow().bg([1, 0], 1, 0).size(40)//.parent("#bighead")
    .font("VT323").scrollX([0, 0.1]).out(0)

  let count = 0;
  let isMore = false;
  const scheduleDom = schedule.map((e) => {
    if(count >= state.scheduleMax) {
      isMore = true;
      return;
    }
    count++;

    let img = e.img;
    // if (img.match(/.*img\.glitches\.me.*png/)) {
    //   img = img.replace(/png$/, "th.png");
    // }
    if (img === undefined) {
      const vId = /https:\/\/youtu.be\/(.*)/g.exec(e.url);
      img = `https://img.youtube.com/vi/${vId[1]}/0.jpg`
    }
    if (e.url !== undefined && e.url.length > 0) {
      return html`
      <li><a href="${e.url}" target="_blank">
      <img src="${img}">
      ${e.title}
      </a></li>`
    }
    else {
      return html`
      <li>
      <img src="${img}" loading="lazy">
      ${e.title}
      </li>`
    }
  })

  const blah = html`The first edition of <b>festival.glitches.me</b> is an independent festival that investigates body, network and digitality through manifestation and question around institutions and the current society that form what is perceived as artistic activities and critically propose methodologies to speculate ideas that pose significant impact to cultural domains.`
  return html`
    <div>
    ${state.bighead}

    <section>
    <h2>What</h2>
    <p>Dates: April 25, 2021 - March 31, 2022</p>
    <p>${blah}</p>
    </section>

    <section>
    <h2>Code of Conduct</h2>
    <p>We support the <a href="https://berlincodeofconduct.org/">Berlin Code of Conduct</a>. Please make sure you agree with its content - we will not tolerate any harassment. If you have any questions, please contact the organizers.
    </p>
    </section>

    <!--
    <section>
    <h2>Artists</h2>
    <div class="gridy">
      <ul>
        <li><a href="https://naotohieda.com">
          <img src="https://wiki.glitches.me/images/profile.jpg">
          Naoto Hieda</a></li>
        <li>
        <img src="https://img.glitches.me/images/2021/04/26/imageae7d6dcf8134eced.png">
        NH</li>
        <li>more to be announced...</li>
      </ul>
    </div>
    </section>-->

    <section>
    <h2>Events</h2>
    <div class="gridy">
      <ul>
        ${scheduleDom}
      </ul>
    </div>
    ${isMore?html`<p class="center-text"><a href="/#" onclick=${loadMore}>more...</a></p>`:""}
    </section>

    <section>
    <h2>Tickets</h2>
    <p class="center-text">Get your ticket <a href="/#tickets">here!</a></p>
    </section>

    <section>
    <h2>Open Call</h2>
    <p class="center-text">call me at mail@naotohieda.com</p>
    </section>

    <section>
    <h2>Partners</h2>
    <div class="gridy">
      <ul>
        <li><a href="https://studio.glitches.me">
        <img src="https://img.glitches.me/images/2021/04/26/imageaeaf7c70602b2a9c.png">
        glitches.me</a></li>
        <li><a href="https://museum.glitches.me">
        <img src="https://img.glitches.me/images/2021/04/26/image59fe6dd6c28b94f5.png">
        museum.glitches.me</a></li>
        <li>
        <a href="https://poemhub.glitches.me/">
        <img src="https://img.glitches.me/images/2021/04/26/image69b89e64c7173b40.png">
        Poemhub
        </a></li>
        <li>
        <a href="https://khm.glitches.me/">
        <img src="https://en.khm.de/d694dd4a83c32bccf8cf5457b0996abb./Schwarz_Film_L_Var-3.png?v=2">
        KHM
        </a></li>
      </ul>
    </div>
    </section>

    </div>
    `;

    function loadMore() {
      state.scheduleMax += 10;
      emit("render");
    }
};

},{"./schedule.js":3,"choo/html":7}],6:[function(require,module,exports){
var assert = require('assert')
var LRU = require('nanolru')

module.exports = ChooComponentCache

function ChooComponentCache (state, emit, lru) {
  assert.ok(this instanceof ChooComponentCache, 'ChooComponentCache should be created with `new`')

  assert.equal(typeof state, 'object', 'ChooComponentCache: state should be type object')
  assert.equal(typeof emit, 'function', 'ChooComponentCache: emit should be type function')

  if (typeof lru === 'number') this.cache = new LRU(lru)
  else this.cache = lru || new LRU(100)
  this.state = state
  this.emit = emit
}

// Get & create component instances.
ChooComponentCache.prototype.render = function (Component, id) {
  assert.equal(typeof Component, 'function', 'ChooComponentCache.render: Component should be type function')
  assert.ok(typeof id === 'string' || typeof id === 'number', 'ChooComponentCache.render: id should be type string or type number')

  var el = this.cache.get(id)
  if (!el) {
    var args = []
    for (var i = 2, len = arguments.length; i < len; i++) {
      args.push(arguments[i])
    }
    args.unshift(Component, id, this.state, this.emit)
    el = newCall.apply(newCall, args)
    this.cache.set(id, el)
  }

  return el
}

// Because you can't call `new` and `.apply()` at the same time. This is a mad
// hack, but hey it works so we gonna go for it. Whoop.
function newCall (Cls) {
  return new (Cls.bind.apply(Cls, arguments)) // eslint-disable-line
}

},{"assert":12,"nanolru":21}],7:[function(require,module,exports){
module.exports = require('nanohtml')

},{"nanohtml":17}],8:[function(require,module,exports){
var scrollToAnchor = require('scroll-to-anchor')
var documentReady = require('document-ready')
var nanotiming = require('nanotiming')
var nanorouter = require('nanorouter')
var nanomorph = require('nanomorph')
var nanoquery = require('nanoquery')
var nanohref = require('nanohref')
var nanoraf = require('nanoraf')
var nanobus = require('nanobus')
var assert = require('assert')

var Cache = require('./component/cache')

module.exports = Choo

var HISTORY_OBJECT = {}

function Choo (opts) {
  var timing = nanotiming('choo.constructor')
  if (!(this instanceof Choo)) return new Choo(opts)
  opts = opts || {}

  assert.equal(typeof opts, 'object', 'choo: opts should be type object')

  var self = this

  // define events used by choo
  this._events = {
    DOMCONTENTLOADED: 'DOMContentLoaded',
    DOMTITLECHANGE: 'DOMTitleChange',
    REPLACESTATE: 'replaceState',
    PUSHSTATE: 'pushState',
    NAVIGATE: 'navigate',
    POPSTATE: 'popState',
    RENDER: 'render'
  }

  // properties for internal use only
  this._historyEnabled = opts.history === undefined ? true : opts.history
  this._hrefEnabled = opts.href === undefined ? true : opts.href
  this._hashEnabled = opts.hash === undefined ? false : opts.hash
  this._hasWindow = typeof window !== 'undefined'
  this._cache = opts.cache
  this._loaded = false
  this._stores = [ondomtitlechange]
  this._tree = null

  // state
  var _state = {
    events: this._events,
    components: {}
  }
  if (this._hasWindow) {
    this.state = window.initialState
      ? Object.assign({}, window.initialState, _state)
      : _state
    delete window.initialState
  } else {
    this.state = _state
  }

  // properties that are part of the API
  this.router = nanorouter({ curry: true })
  this.emitter = nanobus('choo.emit')
  this.emit = this.emitter.emit.bind(this.emitter)

  // listen for title changes; available even when calling .toString()
  if (this._hasWindow) this.state.title = document.title
  function ondomtitlechange (state) {
    self.emitter.prependListener(self._events.DOMTITLECHANGE, function (title) {
      assert.equal(typeof title, 'string', 'events.DOMTitleChange: title should be type string')
      state.title = title
      if (self._hasWindow) document.title = title
    })
  }
  timing()
}

Choo.prototype.route = function (route, handler) {
  var routeTiming = nanotiming("choo.route('" + route + "')")
  assert.equal(typeof route, 'string', 'choo.route: route should be type string')
  assert.equal(typeof handler, 'function', 'choo.handler: route should be type function')
  this.router.on(route, handler)
  routeTiming()
}

Choo.prototype.use = function (cb) {
  assert.equal(typeof cb, 'function', 'choo.use: cb should be type function')
  var self = this
  this._stores.push(function (state) {
    var msg = 'choo.use'
    msg = cb.storeName ? msg + '(' + cb.storeName + ')' : msg
    var endTiming = nanotiming(msg)
    cb(state, self.emitter, self)
    endTiming()
  })
}

Choo.prototype.start = function () {
  assert.equal(typeof window, 'object', 'choo.start: window was not found. .start() must be called in a browser, use .toString() if running in Node')
  var startTiming = nanotiming('choo.start')

  var self = this
  if (this._historyEnabled) {
    this.emitter.prependListener(this._events.NAVIGATE, function () {
      self._matchRoute(self.state)
      if (self._loaded) {
        self.emitter.emit(self._events.RENDER)
        setTimeout(scrollToAnchor.bind(null, window.location.hash), 0)
      }
    })

    this.emitter.prependListener(this._events.POPSTATE, function () {
      self.emitter.emit(self._events.NAVIGATE)
    })

    this.emitter.prependListener(this._events.PUSHSTATE, function (href) {
      assert.equal(typeof href, 'string', 'events.pushState: href should be type string')
      window.history.pushState(HISTORY_OBJECT, null, href)
      self.emitter.emit(self._events.NAVIGATE)
    })

    this.emitter.prependListener(this._events.REPLACESTATE, function (href) {
      assert.equal(typeof href, 'string', 'events.replaceState: href should be type string')
      window.history.replaceState(HISTORY_OBJECT, null, href)
      self.emitter.emit(self._events.NAVIGATE)
    })

    window.onpopstate = function () {
      self.emitter.emit(self._events.POPSTATE)
    }

    if (self._hrefEnabled) {
      nanohref(function (location) {
        var href = location.href
        var hash = location.hash
        if (href === window.location.href) {
          if (!self._hashEnabled && hash) scrollToAnchor(hash)
          return
        }
        self.emitter.emit(self._events.PUSHSTATE, href)
      })
    }
  }

  this._setCache(this.state)
  this._matchRoute(this.state)
  this._stores.forEach(function (initStore) {
    initStore(self.state)
  })

  this._tree = this._prerender(this.state)
  assert.ok(this._tree, 'choo.start: no valid DOM node returned for location ' + this.state.href)

  this.emitter.prependListener(self._events.RENDER, nanoraf(function () {
    var renderTiming = nanotiming('choo.render')
    var newTree = self._prerender(self.state)
    assert.ok(newTree, 'choo.render: no valid DOM node returned for location ' + self.state.href)

    assert.equal(self._tree.nodeName, newTree.nodeName, 'choo.render: The target node <' +
      self._tree.nodeName.toLowerCase() + '> is not the same type as the new node <' +
      newTree.nodeName.toLowerCase() + '>.')

    var morphTiming = nanotiming('choo.morph')
    nanomorph(self._tree, newTree)
    morphTiming()

    renderTiming()
  }))

  documentReady(function () {
    self.emitter.emit(self._events.DOMCONTENTLOADED)
    self._loaded = true
  })

  startTiming()
  return this._tree
}

Choo.prototype.mount = function mount (selector) {
  var mountTiming = nanotiming("choo.mount('" + selector + "')")
  if (typeof window !== 'object') {
    assert.ok(typeof selector === 'string', 'choo.mount: selector should be type String')
    this.selector = selector
    mountTiming()
    return this
  }

  assert.ok(typeof selector === 'string' || typeof selector === 'object', 'choo.mount: selector should be type String or HTMLElement')

  var self = this

  documentReady(function () {
    var renderTiming = nanotiming('choo.render')
    var newTree = self.start()
    if (typeof selector === 'string') {
      self._tree = document.querySelector(selector)
    } else {
      self._tree = selector
    }

    assert.ok(self._tree, 'choo.mount: could not query selector: ' + selector)
    assert.equal(self._tree.nodeName, newTree.nodeName, 'choo.mount: The target node <' +
      self._tree.nodeName.toLowerCase() + '> is not the same type as the new node <' +
      newTree.nodeName.toLowerCase() + '>.')

    var morphTiming = nanotiming('choo.morph')
    nanomorph(self._tree, newTree)
    morphTiming()

    renderTiming()
  })
  mountTiming()
}

Choo.prototype.toString = function (location, state) {
  state = state || {}
  state.components = state.components || {}
  state.events = Object.assign({}, state.events, this._events)

  assert.notEqual(typeof window, 'object', 'choo.mount: window was found. .toString() must be called in Node, use .start() or .mount() if running in the browser')
  assert.equal(typeof location, 'string', 'choo.toString: location should be type string')
  assert.equal(typeof state, 'object', 'choo.toString: state should be type object')

  this._setCache(state)
  this._matchRoute(state, location)
  this.emitter.removeAllListeners()
  this._stores.forEach(function (initStore) {
    initStore(state)
  })

  var html = this._prerender(state)
  assert.ok(html, 'choo.toString: no valid value returned for the route ' + location)
  assert(!Array.isArray(html), 'choo.toString: return value was an array for the route ' + location)
  return typeof html.outerHTML === 'string' ? html.outerHTML : html.toString()
}

Choo.prototype._matchRoute = function (state, locationOverride) {
  var location, queryString
  if (locationOverride) {
    location = locationOverride.replace(/\?.+$/, '').replace(/\/$/, '')
    if (!this._hashEnabled) location = location.replace(/#.+$/, '')
    queryString = locationOverride
  } else {
    location = window.location.pathname.replace(/\/$/, '')
    if (this._hashEnabled) location += window.location.hash.replace(/^#/, '/')
    queryString = window.location.search
  }
  var matched = this.router.match(location)
  this._handler = matched.cb
  state.href = location
  state.query = nanoquery(queryString)
  state.route = matched.route
  state.params = matched.params
}

Choo.prototype._prerender = function (state) {
  var routeTiming = nanotiming("choo.prerender('" + state.route + "')")
  var res = this._handler(state, this.emit)
  routeTiming()
  return res
}

Choo.prototype._setCache = function (state) {
  var cache = new Cache(state, this.emitter.emit.bind(this.emitter), this._cache)
  state.cache = renderComponent

  function renderComponent (Component, id) {
    assert.equal(typeof Component, 'function', 'choo.state.cache: Component should be type function')
    var args = []
    for (var i = 0, len = arguments.length; i < len; i++) {
      args.push(arguments[i])
    }
    return cache.render.apply(cache, args)
  }

  // When the state gets stringified, make sure `state.cache` isn't
  // stringified too.
  renderComponent.toJSON = function () {
    return null
  }
}

},{"./component/cache":6,"assert":12,"document-ready":9,"nanobus":13,"nanohref":14,"nanomorph":22,"nanoquery":25,"nanoraf":26,"nanorouter":27,"nanotiming":29,"scroll-to-anchor":31}],9:[function(require,module,exports){
'use strict'

module.exports = ready

function ready (callback) {
  if (typeof document === 'undefined') {
    throw new Error('document-ready only runs in the browser')
  }
  var state = document.readyState
  if (state === 'complete' || state === 'interactive') {
    return setTimeout(callback, 0)
  }

  document.addEventListener('DOMContentLoaded', function onLoad () {
    callback()
  })
}

},{}],10:[function(require,module,exports){
module.exports = attributeToProperty

var transform = {
  'class': 'className',
  'for': 'htmlFor',
  'http-equiv': 'httpEquiv'
}

function attributeToProperty (h) {
  return function (tagName, attrs, children) {
    for (var attr in attrs) {
      if (attr in transform) {
        attrs[transform[attr]] = attrs[attr]
        delete attrs[attr]
      }
    }
    return h(tagName, attrs, children)
  }
}

},{}],11:[function(require,module,exports){
var attrToProp = require('hyperscript-attribute-to-property')

var VAR = 0, TEXT = 1, OPEN = 2, CLOSE = 3, ATTR = 4
var ATTR_KEY = 5, ATTR_KEY_W = 6
var ATTR_VALUE_W = 7, ATTR_VALUE = 8
var ATTR_VALUE_SQ = 9, ATTR_VALUE_DQ = 10
var ATTR_EQ = 11, ATTR_BREAK = 12
var COMMENT = 13

module.exports = function (h, opts) {
  if (!opts) opts = {}
  var concat = opts.concat || function (a, b) {
    return String(a) + String(b)
  }
  if (opts.attrToProp !== false) {
    h = attrToProp(h)
  }

  return function (strings) {
    var state = TEXT, reg = ''
    var arglen = arguments.length
    var parts = []

    for (var i = 0; i < strings.length; i++) {
      if (i < arglen - 1) {
        var arg = arguments[i+1]
        var p = parse(strings[i])
        var xstate = state
        if (xstate === ATTR_VALUE_DQ) xstate = ATTR_VALUE
        if (xstate === ATTR_VALUE_SQ) xstate = ATTR_VALUE
        if (xstate === ATTR_VALUE_W) xstate = ATTR_VALUE
        if (xstate === ATTR) xstate = ATTR_KEY
        if (xstate === OPEN) {
          if (reg === '/') {
            p.push([ OPEN, '/', arg ])
            reg = ''
          } else {
            p.push([ OPEN, arg ])
          }
        } else if (xstate === COMMENT && opts.comments) {
          reg += String(arg)
        } else if (xstate !== COMMENT) {
          p.push([ VAR, xstate, arg ])
        }
        parts.push.apply(parts, p)
      } else parts.push.apply(parts, parse(strings[i]))
    }

    var tree = [null,{},[]]
    var stack = [[tree,-1]]
    for (var i = 0; i < parts.length; i++) {
      var cur = stack[stack.length-1][0]
      var p = parts[i], s = p[0]
      if (s === OPEN && /^\//.test(p[1])) {
        var ix = stack[stack.length-1][1]
        if (stack.length > 1) {
          stack.pop()
          stack[stack.length-1][0][2][ix] = h(
            cur[0], cur[1], cur[2].length ? cur[2] : undefined
          )
        }
      } else if (s === OPEN) {
        var c = [p[1],{},[]]
        cur[2].push(c)
        stack.push([c,cur[2].length-1])
      } else if (s === ATTR_KEY || (s === VAR && p[1] === ATTR_KEY)) {
        var key = ''
        var copyKey
        for (; i < parts.length; i++) {
          if (parts[i][0] === ATTR_KEY) {
            key = concat(key, parts[i][1])
          } else if (parts[i][0] === VAR && parts[i][1] === ATTR_KEY) {
            if (typeof parts[i][2] === 'object' && !key) {
              for (copyKey in parts[i][2]) {
                if (parts[i][2].hasOwnProperty(copyKey) && !cur[1][copyKey]) {
                  cur[1][copyKey] = parts[i][2][copyKey]
                }
              }
            } else {
              key = concat(key, parts[i][2])
            }
          } else break
        }
        if (parts[i][0] === ATTR_EQ) i++
        var j = i
        for (; i < parts.length; i++) {
          if (parts[i][0] === ATTR_VALUE || parts[i][0] === ATTR_KEY) {
            if (!cur[1][key]) cur[1][key] = strfn(parts[i][1])
            else parts[i][1]==="" || (cur[1][key] = concat(cur[1][key], parts[i][1]));
          } else if (parts[i][0] === VAR
          && (parts[i][1] === ATTR_VALUE || parts[i][1] === ATTR_KEY)) {
            if (!cur[1][key]) cur[1][key] = strfn(parts[i][2])
            else parts[i][2]==="" || (cur[1][key] = concat(cur[1][key], parts[i][2]));
          } else {
            if (key.length && !cur[1][key] && i === j
            && (parts[i][0] === CLOSE || parts[i][0] === ATTR_BREAK)) {
              // https://html.spec.whatwg.org/multipage/infrastructure.html#boolean-attributes
              // empty string is falsy, not well behaved value in browser
              cur[1][key] = key.toLowerCase()
            }
            if (parts[i][0] === CLOSE) {
              i--
            }
            break
          }
        }
      } else if (s === ATTR_KEY) {
        cur[1][p[1]] = true
      } else if (s === VAR && p[1] === ATTR_KEY) {
        cur[1][p[2]] = true
      } else if (s === CLOSE) {
        if (selfClosing(cur[0]) && stack.length) {
          var ix = stack[stack.length-1][1]
          stack.pop()
          stack[stack.length-1][0][2][ix] = h(
            cur[0], cur[1], cur[2].length ? cur[2] : undefined
          )
        }
      } else if (s === VAR && p[1] === TEXT) {
        if (p[2] === undefined || p[2] === null) p[2] = ''
        else if (!p[2]) p[2] = concat('', p[2])
        if (Array.isArray(p[2][0])) {
          cur[2].push.apply(cur[2], p[2])
        } else {
          cur[2].push(p[2])
        }
      } else if (s === TEXT) {
        cur[2].push(p[1])
      } else if (s === ATTR_EQ || s === ATTR_BREAK) {
        // no-op
      } else {
        throw new Error('unhandled: ' + s)
      }
    }

    if (tree[2].length > 1 && /^\s*$/.test(tree[2][0])) {
      tree[2].shift()
    }

    if (tree[2].length > 2
    || (tree[2].length === 2 && /\S/.test(tree[2][1]))) {
      if (opts.createFragment) return opts.createFragment(tree[2])
      throw new Error(
        'multiple root elements must be wrapped in an enclosing tag'
      )
    }
    if (Array.isArray(tree[2][0]) && typeof tree[2][0][0] === 'string'
    && Array.isArray(tree[2][0][2])) {
      tree[2][0] = h(tree[2][0][0], tree[2][0][1], tree[2][0][2])
    }
    return tree[2][0]

    function parse (str) {
      var res = []
      if (state === ATTR_VALUE_W) state = ATTR
      for (var i = 0; i < str.length; i++) {
        var c = str.charAt(i)
        if (state === TEXT && c === '<') {
          if (reg.length) res.push([TEXT, reg])
          reg = ''
          state = OPEN
        } else if (c === '>' && !quot(state) && state !== COMMENT) {
          if (state === OPEN && reg.length) {
            res.push([OPEN,reg])
          } else if (state === ATTR_KEY) {
            res.push([ATTR_KEY,reg])
          } else if (state === ATTR_VALUE && reg.length) {
            res.push([ATTR_VALUE,reg])
          }
          res.push([CLOSE])
          reg = ''
          state = TEXT
        } else if (state === COMMENT && /-$/.test(reg) && c === '-') {
          if (opts.comments) {
            res.push([ATTR_VALUE,reg.substr(0, reg.length - 1)])
          }
          reg = ''
          state = TEXT
        } else if (state === OPEN && /^!--$/.test(reg)) {
          if (opts.comments) {
            res.push([OPEN, reg],[ATTR_KEY,'comment'],[ATTR_EQ])
          }
          reg = c
          state = COMMENT
        } else if (state === TEXT || state === COMMENT) {
          reg += c
        } else if (state === OPEN && c === '/' && reg.length) {
          // no-op, self closing tag without a space <br/>
        } else if (state === OPEN && /\s/.test(c)) {
          if (reg.length) {
            res.push([OPEN, reg])
          }
          reg = ''
          state = ATTR
        } else if (state === OPEN) {
          reg += c
        } else if (state === ATTR && /[^\s"'=/]/.test(c)) {
          state = ATTR_KEY
          reg = c
        } else if (state === ATTR && /\s/.test(c)) {
          if (reg.length) res.push([ATTR_KEY,reg])
          res.push([ATTR_BREAK])
        } else if (state === ATTR_KEY && /\s/.test(c)) {
          res.push([ATTR_KEY,reg])
          reg = ''
          state = ATTR_KEY_W
        } else if (state === ATTR_KEY && c === '=') {
          res.push([ATTR_KEY,reg],[ATTR_EQ])
          reg = ''
          state = ATTR_VALUE_W
        } else if (state === ATTR_KEY) {
          reg += c
        } else if ((state === ATTR_KEY_W || state === ATTR) && c === '=') {
          res.push([ATTR_EQ])
          state = ATTR_VALUE_W
        } else if ((state === ATTR_KEY_W || state === ATTR) && !/\s/.test(c)) {
          res.push([ATTR_BREAK])
          if (/[\w-]/.test(c)) {
            reg += c
            state = ATTR_KEY
          } else state = ATTR
        } else if (state === ATTR_VALUE_W && c === '"') {
          state = ATTR_VALUE_DQ
        } else if (state === ATTR_VALUE_W && c === "'") {
          state = ATTR_VALUE_SQ
        } else if (state === ATTR_VALUE_DQ && c === '"') {
          res.push([ATTR_VALUE,reg],[ATTR_BREAK])
          reg = ''
          state = ATTR
        } else if (state === ATTR_VALUE_SQ && c === "'") {
          res.push([ATTR_VALUE,reg],[ATTR_BREAK])
          reg = ''
          state = ATTR
        } else if (state === ATTR_VALUE_W && !/\s/.test(c)) {
          state = ATTR_VALUE
          i--
        } else if (state === ATTR_VALUE && /\s/.test(c)) {
          res.push([ATTR_VALUE,reg],[ATTR_BREAK])
          reg = ''
          state = ATTR
        } else if (state === ATTR_VALUE || state === ATTR_VALUE_SQ
        || state === ATTR_VALUE_DQ) {
          reg += c
        }
      }
      if (state === TEXT && reg.length) {
        res.push([TEXT,reg])
        reg = ''
      } else if (state === ATTR_VALUE && reg.length) {
        res.push([ATTR_VALUE,reg])
        reg = ''
      } else if (state === ATTR_VALUE_DQ && reg.length) {
        res.push([ATTR_VALUE,reg])
        reg = ''
      } else if (state === ATTR_VALUE_SQ && reg.length) {
        res.push([ATTR_VALUE,reg])
        reg = ''
      } else if (state === ATTR_KEY) {
        res.push([ATTR_KEY,reg])
        reg = ''
      }
      return res
    }
  }

  function strfn (x) {
    if (typeof x === 'function') return x
    else if (typeof x === 'string') return x
    else if (x && typeof x === 'object') return x
    else if (x === null || x === undefined) return x
    else return concat('', x)
  }
}

function quot (state) {
  return state === ATTR_VALUE_SQ || state === ATTR_VALUE_DQ
}

var closeRE = RegExp('^(' + [
  'area', 'base', 'basefont', 'bgsound', 'br', 'col', 'command', 'embed',
  'frame', 'hr', 'img', 'input', 'isindex', 'keygen', 'link', 'meta', 'param',
  'source', 'track', 'wbr', '!--',
  // SVG TAGS
  'animate', 'animateTransform', 'circle', 'cursor', 'desc', 'ellipse',
  'feBlend', 'feColorMatrix', 'feComposite',
  'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap',
  'feDistantLight', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR',
  'feGaussianBlur', 'feImage', 'feMergeNode', 'feMorphology',
  'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile',
  'feTurbulence', 'font-face-format', 'font-face-name', 'font-face-uri',
  'glyph', 'glyphRef', 'hkern', 'image', 'line', 'missing-glyph', 'mpath',
  'path', 'polygon', 'polyline', 'rect', 'set', 'stop', 'tref', 'use', 'view',
  'vkern'
].join('|') + ')(?:[\.#][a-zA-Z0-9\u007F-\uFFFF_:-]+)*$')
function selfClosing (tag) { return closeRE.test(tag) }

},{"hyperscript-attribute-to-property":10}],12:[function(require,module,exports){
assert.notEqual = notEqual
assert.notOk = notOk
assert.equal = equal
assert.ok = assert

module.exports = assert

function equal (a, b, m) {
  assert(a == b, m) // eslint-disable-line eqeqeq
}

function notEqual (a, b, m) {
  assert(a != b, m) // eslint-disable-line eqeqeq
}

function notOk (t, m) {
  assert(!t, m)
}

function assert (t, m) {
  if (!t) throw new Error(m || 'AssertionError')
}

},{}],13:[function(require,module,exports){
var splice = require('remove-array-items')
var nanotiming = require('nanotiming')
var assert = require('assert')

module.exports = Nanobus

function Nanobus (name) {
  if (!(this instanceof Nanobus)) return new Nanobus(name)

  this._name = name || 'nanobus'
  this._starListeners = []
  this._listeners = {}
}

Nanobus.prototype.emit = function (eventName) {
  assert.ok(typeof eventName === 'string' || typeof eventName === 'symbol', 'nanobus.emit: eventName should be type string or symbol')

  var data = []
  for (var i = 1, len = arguments.length; i < len; i++) {
    data.push(arguments[i])
  }

  var emitTiming = nanotiming(this._name + "('" + eventName.toString() + "')")
  var listeners = this._listeners[eventName]
  if (listeners && listeners.length > 0) {
    this._emit(this._listeners[eventName], data)
  }

  if (this._starListeners.length > 0) {
    this._emit(this._starListeners, eventName, data, emitTiming.uuid)
  }
  emitTiming()

  return this
}

Nanobus.prototype.on = Nanobus.prototype.addListener = function (eventName, listener) {
  assert.ok(typeof eventName === 'string' || typeof eventName === 'symbol', 'nanobus.on: eventName should be type string or symbol')
  assert.equal(typeof listener, 'function', 'nanobus.on: listener should be type function')

  if (eventName === '*') {
    this._starListeners.push(listener)
  } else {
    if (!this._listeners[eventName]) this._listeners[eventName] = []
    this._listeners[eventName].push(listener)
  }
  return this
}

Nanobus.prototype.prependListener = function (eventName, listener) {
  assert.ok(typeof eventName === 'string' || typeof eventName === 'symbol', 'nanobus.prependListener: eventName should be type string or symbol')
  assert.equal(typeof listener, 'function', 'nanobus.prependListener: listener should be type function')

  if (eventName === '*') {
    this._starListeners.unshift(listener)
  } else {
    if (!this._listeners[eventName]) this._listeners[eventName] = []
    this._listeners[eventName].unshift(listener)
  }
  return this
}

Nanobus.prototype.once = function (eventName, listener) {
  assert.ok(typeof eventName === 'string' || typeof eventName === 'symbol', 'nanobus.once: eventName should be type string or symbol')
  assert.equal(typeof listener, 'function', 'nanobus.once: listener should be type function')

  var self = this
  this.on(eventName, once)
  function once () {
    listener.apply(self, arguments)
    self.removeListener(eventName, once)
  }
  return this
}

Nanobus.prototype.prependOnceListener = function (eventName, listener) {
  assert.ok(typeof eventName === 'string' || typeof eventName === 'symbol', 'nanobus.prependOnceListener: eventName should be type string or symbol')
  assert.equal(typeof listener, 'function', 'nanobus.prependOnceListener: listener should be type function')

  var self = this
  this.prependListener(eventName, once)
  function once () {
    listener.apply(self, arguments)
    self.removeListener(eventName, once)
  }
  return this
}

Nanobus.prototype.removeListener = function (eventName, listener) {
  assert.ok(typeof eventName === 'string' || typeof eventName === 'symbol', 'nanobus.removeListener: eventName should be type string or symbol')
  assert.equal(typeof listener, 'function', 'nanobus.removeListener: listener should be type function')

  if (eventName === '*') {
    this._starListeners = this._starListeners.slice()
    return remove(this._starListeners, listener)
  } else {
    if (typeof this._listeners[eventName] !== 'undefined') {
      this._listeners[eventName] = this._listeners[eventName].slice()
    }

    return remove(this._listeners[eventName], listener)
  }

  function remove (arr, listener) {
    if (!arr) return
    var index = arr.indexOf(listener)
    if (index !== -1) {
      splice(arr, index, 1)
      return true
    }
  }
}

Nanobus.prototype.removeAllListeners = function (eventName) {
  if (eventName) {
    if (eventName === '*') {
      this._starListeners = []
    } else {
      this._listeners[eventName] = []
    }
  } else {
    this._starListeners = []
    this._listeners = {}
  }
  return this
}

Nanobus.prototype.listeners = function (eventName) {
  var listeners = eventName !== '*'
    ? this._listeners[eventName]
    : this._starListeners

  var ret = []
  if (listeners) {
    var ilength = listeners.length
    for (var i = 0; i < ilength; i++) ret.push(listeners[i])
  }
  return ret
}

Nanobus.prototype._emit = function (arr, eventName, data, uuid) {
  if (typeof arr === 'undefined') return
  if (arr.length === 0) return
  if (data === undefined) {
    data = eventName
    eventName = null
  }

  if (eventName) {
    if (uuid !== undefined) {
      data = [eventName].concat(data, uuid)
    } else {
      data = [eventName].concat(data)
    }
  }

  var length = arr.length
  for (var i = 0; i < length; i++) {
    var listener = arr[i]
    listener.apply(listener, data)
  }
}

},{"assert":12,"nanotiming":29,"remove-array-items":30}],14:[function(require,module,exports){
var assert = require('assert')

var safeExternalLink = /(noopener|noreferrer) (noopener|noreferrer)/
var protocolLink = /^[\w-_]+:/

module.exports = href

function href (cb, root) {
  assert.notEqual(typeof window, 'undefined', 'nanohref: expected window to exist')

  root = root || window.document

  assert.equal(typeof cb, 'function', 'nanohref: cb should be type function')
  assert.equal(typeof root, 'object', 'nanohref: root should be type object')

  window.addEventListener('click', function (e) {
    if ((e.button && e.button !== 0) ||
      e.ctrlKey || e.metaKey || e.altKey || e.shiftKey ||
      e.defaultPrevented) return

    var anchor = (function traverse (node) {
      if (!node || node === root) return
      if (node.localName !== 'a' || node.href === undefined) {
        return traverse(node.parentNode)
      }
      return node
    })(e.target)

    if (!anchor) return

    if (window.location.protocol !== anchor.protocol ||
        window.location.hostname !== anchor.hostname ||
        window.location.port !== anchor.port ||
      anchor.hasAttribute('data-nanohref-ignore') ||
      anchor.hasAttribute('download') ||
      (anchor.getAttribute('target') === '_blank' &&
        safeExternalLink.test(anchor.getAttribute('rel'))) ||
      protocolLink.test(anchor.getAttribute('href'))) return

    e.preventDefault()
    cb(anchor)
  })
}

},{"assert":12}],15:[function(require,module,exports){
'use strict'

var trailingNewlineRegex = /\n[\s]+$/
var leadingNewlineRegex = /^\n[\s]+/
var trailingSpaceRegex = /[\s]+$/
var leadingSpaceRegex = /^[\s]+/
var multiSpaceRegex = /[\n\s]+/g

var TEXT_TAGS = [
  'a', 'abbr', 'b', 'bdi', 'bdo', 'br', 'cite', 'data', 'dfn', 'em', 'i',
  'kbd', 'mark', 'q', 'rp', 'rt', 'rtc', 'ruby', 's', 'amp', 'small', 'span',
  'strong', 'sub', 'sup', 'time', 'u', 'var', 'wbr'
]

var VERBATIM_TAGS = [
  'code', 'pre', 'textarea'
]

module.exports = function appendChild (el, childs) {
  if (!Array.isArray(childs)) return

  var nodeName = el.nodeName.toLowerCase()

  var hadText = false
  var value, leader

  for (var i = 0, len = childs.length; i < len; i++) {
    var node = childs[i]
    if (Array.isArray(node)) {
      appendChild(el, node)
      continue
    }

    if (typeof node === 'number' ||
      typeof node === 'boolean' ||
      typeof node === 'function' ||
      node instanceof Date ||
      node instanceof RegExp) {
      node = node.toString()
    }

    var lastChild = el.childNodes[el.childNodes.length - 1]

    // Iterate over text nodes
    if (typeof node === 'string') {
      hadText = true

      // If we already had text, append to the existing text
      if (lastChild && lastChild.nodeName === '#text') {
        lastChild.nodeValue += node

      // We didn't have a text node yet, create one
      } else {
        node = el.ownerDocument.createTextNode(node)
        el.appendChild(node)
        lastChild = node
      }

      // If this is the last of the child nodes, make sure we close it out
      // right
      if (i === len - 1) {
        hadText = false
        // Trim the child text nodes if the current node isn't a
        // node where whitespace matters.
        if (TEXT_TAGS.indexOf(nodeName) === -1 &&
          VERBATIM_TAGS.indexOf(nodeName) === -1) {
          value = lastChild.nodeValue
            .replace(leadingNewlineRegex, '')
            .replace(trailingSpaceRegex, '')
            .replace(trailingNewlineRegex, '')
            .replace(multiSpaceRegex, ' ')
          if (value === '') {
            el.removeChild(lastChild)
          } else {
            lastChild.nodeValue = value
          }
        } else if (VERBATIM_TAGS.indexOf(nodeName) === -1) {
          // The very first node in the list should not have leading
          // whitespace. Sibling text nodes should have whitespace if there
          // was any.
          leader = i === 0 ? '' : ' '
          value = lastChild.nodeValue
            .replace(leadingNewlineRegex, leader)
            .replace(leadingSpaceRegex, ' ')
            .replace(trailingSpaceRegex, '')
            .replace(trailingNewlineRegex, '')
            .replace(multiSpaceRegex, ' ')
          lastChild.nodeValue = value
        }
      }

    // Iterate over DOM nodes
    } else if (node && node.nodeType) {
      // If the last node was a text node, make sure it is properly closed out
      if (hadText) {
        hadText = false

        // Trim the child text nodes if the current node isn't a
        // text node or a code node
        if (TEXT_TAGS.indexOf(nodeName) === -1 &&
          VERBATIM_TAGS.indexOf(nodeName) === -1) {
          value = lastChild.nodeValue
            .replace(leadingNewlineRegex, '')
            .replace(trailingNewlineRegex, ' ')
            .replace(multiSpaceRegex, ' ')

          // Remove empty text nodes, append otherwise
          if (value === '') {
            el.removeChild(lastChild)
          } else {
            lastChild.nodeValue = value
          }
        // Trim the child nodes but preserve the appropriate whitespace
        } else if (VERBATIM_TAGS.indexOf(nodeName) === -1) {
          value = lastChild.nodeValue
            .replace(leadingSpaceRegex, ' ')
            .replace(leadingNewlineRegex, '')
            .replace(trailingNewlineRegex, ' ')
            .replace(multiSpaceRegex, ' ')
          lastChild.nodeValue = value
        }
      }

      // Store the last nodename
      var _nodeName = node.nodeName
      if (_nodeName) nodeName = _nodeName.toLowerCase()

      // Append the node to the DOM
      el.appendChild(node)
    }
  }
}

},{}],16:[function(require,module,exports){
'use strict'

module.exports = [
  'async', 'autofocus', 'autoplay', 'checked', 'controls', 'default',
  'defaultchecked', 'defer', 'disabled', 'formnovalidate', 'hidden',
  'ismap', 'loop', 'multiple', 'muted', 'novalidate', 'open', 'playsinline',
  'readonly', 'required', 'reversed', 'selected'
]

},{}],17:[function(require,module,exports){
module.exports = require('./dom')(document)

},{"./dom":19}],18:[function(require,module,exports){
'use strict'

module.exports = [
  'indeterminate'
]

},{}],19:[function(require,module,exports){
'use strict'

var hyperx = require('hyperx')
var appendChild = require('./append-child')
var SVG_TAGS = require('./svg-tags')
var BOOL_PROPS = require('./bool-props')
// Props that need to be set directly rather than with el.setAttribute()
var DIRECT_PROPS = require('./direct-props')

var SVGNS = 'http://www.w3.org/2000/svg'
var XLINKNS = 'http://www.w3.org/1999/xlink'

var COMMENT_TAG = '!--'

module.exports = function (document) {
  function nanoHtmlCreateElement (tag, props, children) {
    var el

    // If an svg tag, it needs a namespace
    if (SVG_TAGS.indexOf(tag) !== -1) {
      props.namespace = SVGNS
    }

    // If we are using a namespace
    var ns = false
    if (props.namespace) {
      ns = props.namespace
      delete props.namespace
    }

    // If we are extending a builtin element
    var isCustomElement = false
    if (props.is) {
      isCustomElement = props.is
      delete props.is
    }

    // Create the element
    if (ns) {
      if (isCustomElement) {
        el = document.createElementNS(ns, tag, { is: isCustomElement })
      } else {
        el = document.createElementNS(ns, tag)
      }
    } else if (tag === COMMENT_TAG) {
      return document.createComment(props.comment)
    } else if (isCustomElement) {
      el = document.createElement(tag, { is: isCustomElement })
    } else {
      el = document.createElement(tag)
    }

    // Create the properties
    for (var p in props) {
      if (props.hasOwnProperty(p)) {
        var key = p.toLowerCase()
        var val = props[p]
        // Normalize className
        if (key === 'classname') {
          key = 'class'
          p = 'class'
        }
        // The for attribute gets transformed to htmlFor, but we just set as for
        if (p === 'htmlFor') {
          p = 'for'
        }
        // If a property is boolean, set itself to the key
        if (BOOL_PROPS.indexOf(key) !== -1) {
          if (String(val) === 'true') val = key
          else if (String(val) === 'false') continue
        }
        // If a property prefers being set directly vs setAttribute
        if (key.slice(0, 2) === 'on' || DIRECT_PROPS.indexOf(key) !== -1) {
          el[p] = val
        } else {
          if (ns) {
            if (p === 'xlink:href') {
              el.setAttributeNS(XLINKNS, p, val)
            } else if (/^xmlns($|:)/i.test(p)) {
              // skip xmlns definitions
            } else {
              el.setAttributeNS(null, p, val)
            }
          } else {
            el.setAttribute(p, val)
          }
        }
      }
    }

    appendChild(el, children)
    return el
  }

  function createFragment (nodes) {
    var fragment = document.createDocumentFragment()
    for (var i = 0; i < nodes.length; i++) {
      if (nodes[i] == null) continue
      if (Array.isArray(nodes[i])) {
        fragment.appendChild(createFragment(nodes[i]))
      } else {
        if (typeof nodes[i] === 'string') nodes[i] = document.createTextNode(nodes[i])
        fragment.appendChild(nodes[i])
      }
    }
    return fragment
  }

  var exports = hyperx(nanoHtmlCreateElement, {
    comments: true,
    createFragment: createFragment
  })
  exports.default = exports
  exports.createComment = nanoHtmlCreateElement
  return exports
}

},{"./append-child":15,"./bool-props":16,"./direct-props":18,"./svg-tags":20,"hyperx":11}],20:[function(require,module,exports){
'use strict'

module.exports = [
  'svg', 'altGlyph', 'altGlyphDef', 'altGlyphItem', 'animate', 'animateColor',
  'animateMotion', 'animateTransform', 'circle', 'clipPath', 'color-profile',
  'cursor', 'defs', 'desc', 'ellipse', 'feBlend', 'feColorMatrix',
  'feComponentTransfer', 'feComposite', 'feConvolveMatrix',
  'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feFlood',
  'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage',
  'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight',
  'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence', 'filter',
  'font', 'font-face', 'font-face-format', 'font-face-name', 'font-face-src',
  'font-face-uri', 'foreignObject', 'g', 'glyph', 'glyphRef', 'hkern', 'image',
  'line', 'linearGradient', 'marker', 'mask', 'metadata', 'missing-glyph',
  'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect',
  'set', 'stop', 'switch', 'symbol', 'text', 'textPath', 'title', 'tref',
  'tspan', 'use', 'view', 'vkern'
]

},{}],21:[function(require,module,exports){
module.exports = LRU

function LRU (opts) {
  if (!(this instanceof LRU)) return new LRU(opts)
  if (typeof opts === 'number') opts = {max: opts}
  if (!opts) opts = {}
  this.cache = {}
  this.head = this.tail = null
  this.length = 0
  this.max = opts.max || 1000
  this.maxAge = opts.maxAge || 0
}

Object.defineProperty(LRU.prototype, 'keys', {
  get: function () { return Object.keys(this.cache) }
})

LRU.prototype.clear = function () {
  this.cache = {}
  this.head = this.tail = null
  this.length = 0
}

LRU.prototype.remove = function (key) {
  if (typeof key !== 'string') key = '' + key
  if (!this.cache.hasOwnProperty(key)) return

  var element = this.cache[key]
  delete this.cache[key]
  this._unlink(key, element.prev, element.next)
  return element.value
}

LRU.prototype._unlink = function (key, prev, next) {
  this.length--

  if (this.length === 0) {
    this.head = this.tail = null
  } else {
    if (this.head === key) {
      this.head = prev
      this.cache[this.head].next = null
    } else if (this.tail === key) {
      this.tail = next
      this.cache[this.tail].prev = null
    } else {
      this.cache[prev].next = next
      this.cache[next].prev = prev
    }
  }
}

LRU.prototype.peek = function (key) {
  if (!this.cache.hasOwnProperty(key)) return

  var element = this.cache[key]

  if (!this._checkAge(key, element)) return
  return element.value
}

LRU.prototype.set = function (key, value) {
  if (typeof key !== 'string') key = '' + key

  var element

  if (this.cache.hasOwnProperty(key)) {
    element = this.cache[key]
    element.value = value
    if (this.maxAge) element.modified = Date.now()

    // If it's already the head, there's nothing more to do:
    if (key === this.head) return value
    this._unlink(key, element.prev, element.next)
  } else {
    element = {value: value, modified: 0, next: null, prev: null}
    if (this.maxAge) element.modified = Date.now()
    this.cache[key] = element

    // Eviction is only possible if the key didn't already exist:
    if (this.length === this.max) this.evict()
  }

  this.length++
  element.next = null
  element.prev = this.head

  if (this.head) this.cache[this.head].next = key
  this.head = key

  if (!this.tail) this.tail = key
  return value
}

LRU.prototype._checkAge = function (key, element) {
  if (this.maxAge && (Date.now() - element.modified) > this.maxAge) {
    this.remove(key)
    return false
  }
  return true
}

LRU.prototype.get = function (key) {
  if (typeof key !== 'string') key = '' + key
  if (!this.cache.hasOwnProperty(key)) return

  var element = this.cache[key]

  if (!this._checkAge(key, element)) return

  if (this.head !== key) {
    if (key === this.tail) {
      this.tail = element.next
      this.cache[this.tail].prev = null
    } else {
      // Set prev.next -> element.next:
      this.cache[element.prev].next = element.next
    }

    // Set element.next.prev -> element.prev:
    this.cache[element.next].prev = element.prev

    // Element is the new head
    this.cache[this.head].next = key
    element.prev = this.head
    element.next = null
    this.head = key
  }

  return element.value
}

LRU.prototype.evict = function () {
  if (!this.tail) return
  this.remove(this.tail)
}

},{}],22:[function(require,module,exports){
var assert = require('nanoassert')
var morph = require('./lib/morph')

var TEXT_NODE = 3
// var DEBUG = false

module.exports = nanomorph

// Morph one tree into another tree
//
// no parent
//   -> same: diff and walk children
//   -> not same: replace and return
// old node doesn't exist
//   -> insert new node
// new node doesn't exist
//   -> delete old node
// nodes are not the same
//   -> diff nodes and apply patch to old node
// nodes are the same
//   -> walk all child nodes and append to old node
function nanomorph (oldTree, newTree, options) {
  // if (DEBUG) {
  //   console.log(
  //   'nanomorph\nold\n  %s\nnew\n  %s',
  //   oldTree && oldTree.outerHTML,
  //   newTree && newTree.outerHTML
  // )
  // }
  assert.equal(typeof oldTree, 'object', 'nanomorph: oldTree should be an object')
  assert.equal(typeof newTree, 'object', 'nanomorph: newTree should be an object')

  if (options && options.childrenOnly) {
    updateChildren(newTree, oldTree)
    return oldTree
  }

  assert.notEqual(
    newTree.nodeType,
    11,
    'nanomorph: newTree should have one root node (which is not a DocumentFragment)'
  )

  return walk(newTree, oldTree)
}

// Walk and morph a dom tree
function walk (newNode, oldNode) {
  // if (DEBUG) {
  //   console.log(
  //   'walk\nold\n  %s\nnew\n  %s',
  //   oldNode && oldNode.outerHTML,
  //   newNode && newNode.outerHTML
  // )
  // }
  if (!oldNode) {
    return newNode
  } else if (!newNode) {
    return null
  } else if (newNode.isSameNode && newNode.isSameNode(oldNode)) {
    return oldNode
  } else if (newNode.tagName !== oldNode.tagName || getComponentId(newNode) !== getComponentId(oldNode)) {
    return newNode
  } else {
    morph(newNode, oldNode)
    updateChildren(newNode, oldNode)
    return oldNode
  }
}

function getComponentId (node) {
  return node.dataset ? node.dataset.nanomorphComponentId : undefined
}

// Update the children of elements
// (obj, obj) -> null
function updateChildren (newNode, oldNode) {
  // if (DEBUG) {
  //   console.log(
  //   'updateChildren\nold\n  %s\nnew\n  %s',
  //   oldNode && oldNode.outerHTML,
  //   newNode && newNode.outerHTML
  // )
  // }
  var oldChild, newChild, morphed, oldMatch

  // The offset is only ever increased, and used for [i - offset] in the loop
  var offset = 0

  for (var i = 0; ; i++) {
    oldChild = oldNode.childNodes[i]
    newChild = newNode.childNodes[i - offset]
    // if (DEBUG) {
    //   console.log(
    //   '===\n- old\n  %s\n- new\n  %s',
    //   oldChild && oldChild.outerHTML,
    //   newChild && newChild.outerHTML
    // )
    // }
    // Both nodes are empty, do nothing
    if (!oldChild && !newChild) {
      break

    // There is no new child, remove old
    } else if (!newChild) {
      oldNode.removeChild(oldChild)
      i--

    // There is no old child, add new
    } else if (!oldChild) {
      oldNode.appendChild(newChild)
      offset++

    // Both nodes are the same, morph
    } else if (same(newChild, oldChild)) {
      morphed = walk(newChild, oldChild)
      if (morphed !== oldChild) {
        oldNode.replaceChild(morphed, oldChild)
        offset++
      }

    // Both nodes do not share an ID or a placeholder, try reorder
    } else {
      oldMatch = null

      // Try and find a similar node somewhere in the tree
      for (var j = i; j < oldNode.childNodes.length; j++) {
        if (same(oldNode.childNodes[j], newChild)) {
          oldMatch = oldNode.childNodes[j]
          break
        }
      }

      // If there was a node with the same ID or placeholder in the old list
      if (oldMatch) {
        morphed = walk(newChild, oldMatch)
        if (morphed !== oldMatch) offset++
        oldNode.insertBefore(morphed, oldChild)

      // It's safe to morph two nodes in-place if neither has an ID
      } else if (!newChild.id && !oldChild.id) {
        morphed = walk(newChild, oldChild)
        if (morphed !== oldChild) {
          oldNode.replaceChild(morphed, oldChild)
          offset++
        }

      // Insert the node at the index if we couldn't morph or find a matching node
      } else {
        oldNode.insertBefore(newChild, oldChild)
        offset++
      }
    }
  }
}

function same (a, b) {
  if (a.id) return a.id === b.id
  if (a.isSameNode) return a.isSameNode(b)
  if (a.tagName !== b.tagName) return false
  if (a.type === TEXT_NODE) return a.nodeValue === b.nodeValue
  return false
}

},{"./lib/morph":24,"nanoassert":12}],23:[function(require,module,exports){
module.exports = [
  // attribute events (can be set with attributes)
  'onclick',
  'ondblclick',
  'onmousedown',
  'onmouseup',
  'onmouseover',
  'onmousemove',
  'onmouseout',
  'onmouseenter',
  'onmouseleave',
  'ontouchcancel',
  'ontouchend',
  'ontouchmove',
  'ontouchstart',
  'ondragstart',
  'ondrag',
  'ondragenter',
  'ondragleave',
  'ondragover',
  'ondrop',
  'ondragend',
  'onkeydown',
  'onkeypress',
  'onkeyup',
  'onunload',
  'onabort',
  'onerror',
  'onresize',
  'onscroll',
  'onselect',
  'onchange',
  'onsubmit',
  'onreset',
  'onfocus',
  'onblur',
  'oninput',
  'onanimationend',
  'onanimationiteration',
  'onanimationstart',
  // other common events
  'oncontextmenu',
  'onfocusin',
  'onfocusout'
]

},{}],24:[function(require,module,exports){
var events = require('./events')
var eventsLength = events.length

var ELEMENT_NODE = 1
var TEXT_NODE = 3
var COMMENT_NODE = 8

module.exports = morph

// diff elements and apply the resulting patch to the old node
// (obj, obj) -> null
function morph (newNode, oldNode) {
  var nodeType = newNode.nodeType
  var nodeName = newNode.nodeName

  if (nodeType === ELEMENT_NODE) {
    copyAttrs(newNode, oldNode)
  }

  if (nodeType === TEXT_NODE || nodeType === COMMENT_NODE) {
    if (oldNode.nodeValue !== newNode.nodeValue) {
      oldNode.nodeValue = newNode.nodeValue
    }
  }

  // Some DOM nodes are weird
  // https://github.com/patrick-steele-idem/morphdom/blob/master/src/specialElHandlers.js
  if (nodeName === 'INPUT') updateInput(newNode, oldNode)
  else if (nodeName === 'OPTION') updateOption(newNode, oldNode)
  else if (nodeName === 'TEXTAREA') updateTextarea(newNode, oldNode)

  copyEvents(newNode, oldNode)
}

function copyAttrs (newNode, oldNode) {
  var oldAttrs = oldNode.attributes
  var newAttrs = newNode.attributes
  var attrNamespaceURI = null
  var attrValue = null
  var fromValue = null
  var attrName = null
  var attr = null

  for (var i = newAttrs.length - 1; i >= 0; --i) {
    attr = newAttrs[i]
    attrName = attr.name
    attrNamespaceURI = attr.namespaceURI
    attrValue = attr.value
    if (attrNamespaceURI) {
      attrName = attr.localName || attrName
      fromValue = oldNode.getAttributeNS(attrNamespaceURI, attrName)
      if (fromValue !== attrValue) {
        oldNode.setAttributeNS(attrNamespaceURI, attrName, attrValue)
      }
    } else {
      if (!oldNode.hasAttribute(attrName)) {
        oldNode.setAttribute(attrName, attrValue)
      } else {
        fromValue = oldNode.getAttribute(attrName)
        if (fromValue !== attrValue) {
          // apparently values are always cast to strings, ah well
          if (attrValue === 'null' || attrValue === 'undefined') {
            oldNode.removeAttribute(attrName)
          } else {
            oldNode.setAttribute(attrName, attrValue)
          }
        }
      }
    }
  }

  // Remove any extra attributes found on the original DOM element that
  // weren't found on the target element.
  for (var j = oldAttrs.length - 1; j >= 0; --j) {
    attr = oldAttrs[j]
    if (attr.specified !== false) {
      attrName = attr.name
      attrNamespaceURI = attr.namespaceURI

      if (attrNamespaceURI) {
        attrName = attr.localName || attrName
        if (!newNode.hasAttributeNS(attrNamespaceURI, attrName)) {
          oldNode.removeAttributeNS(attrNamespaceURI, attrName)
        }
      } else {
        if (!newNode.hasAttributeNS(null, attrName)) {
          oldNode.removeAttribute(attrName)
        }
      }
    }
  }
}

function copyEvents (newNode, oldNode) {
  for (var i = 0; i < eventsLength; i++) {
    var ev = events[i]
    if (newNode[ev]) {           // if new element has a whitelisted attribute
      oldNode[ev] = newNode[ev]  // update existing element
    } else if (oldNode[ev]) {    // if existing element has it and new one doesnt
      oldNode[ev] = undefined    // remove it from existing element
    }
  }
}

function updateOption (newNode, oldNode) {
  updateAttribute(newNode, oldNode, 'selected')
}

// The "value" attribute is special for the <input> element since it sets the
// initial value. Changing the "value" attribute without changing the "value"
// property will have no effect since it is only used to the set the initial
// value. Similar for the "checked" attribute, and "disabled".
function updateInput (newNode, oldNode) {
  var newValue = newNode.value
  var oldValue = oldNode.value

  updateAttribute(newNode, oldNode, 'checked')
  updateAttribute(newNode, oldNode, 'disabled')

  // The "indeterminate" property can not be set using an HTML attribute.
  // See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox
  if (newNode.indeterminate !== oldNode.indeterminate) {
    oldNode.indeterminate = newNode.indeterminate
  }

  // Persist file value since file inputs can't be changed programatically
  if (oldNode.type === 'file') return

  if (newValue !== oldValue) {
    oldNode.setAttribute('value', newValue)
    oldNode.value = newValue
  }

  if (newValue === 'null') {
    oldNode.value = ''
    oldNode.removeAttribute('value')
  }

  if (!newNode.hasAttributeNS(null, 'value')) {
    oldNode.removeAttribute('value')
  } else if (oldNode.type === 'range') {
    // this is so elements like slider move their UI thingy
    oldNode.value = newValue
  }
}

function updateTextarea (newNode, oldNode) {
  var newValue = newNode.value
  if (newValue !== oldNode.value) {
    oldNode.value = newValue
  }

  if (oldNode.firstChild && oldNode.firstChild.nodeValue !== newValue) {
    // Needed for IE. Apparently IE sets the placeholder as the
    // node value and vise versa. This ignores an empty update.
    if (newValue === '' && oldNode.firstChild.nodeValue === oldNode.placeholder) {
      return
    }

    oldNode.firstChild.nodeValue = newValue
  }
}

function updateAttribute (newNode, oldNode, name) {
  if (newNode[name] !== oldNode[name]) {
    oldNode[name] = newNode[name]
    if (newNode[name]) {
      oldNode.setAttribute(name, '')
    } else {
      oldNode.removeAttribute(name)
    }
  }
}

},{"./events":23}],25:[function(require,module,exports){
var reg = /([^?=&]+)(=([^&]*))?/g
var assert = require('assert')

module.exports = qs

function qs (url) {
  assert.equal(typeof url, 'string', 'nanoquery: url should be type string')

  var obj = {}
  url.replace(/^.*\?/, '').replace(reg, function (a0, a1, a2, a3) {
    var value = decodeURIComponent(a3)
    var key = decodeURIComponent(a1)
    if (obj.hasOwnProperty(key)) {
      if (Array.isArray(obj[key])) obj[key].push(value)
      else obj[key] = [obj[key], value]
    } else {
      obj[key] = value
    }
  })

  return obj
}

},{"assert":12}],26:[function(require,module,exports){
'use strict'

var assert = require('assert')

module.exports = nanoraf

// Only call RAF when needed
// (fn, fn?) -> fn
function nanoraf (render, raf) {
  assert.equal(typeof render, 'function', 'nanoraf: render should be a function')
  assert.ok(typeof raf === 'function' || typeof raf === 'undefined', 'nanoraf: raf should be a function or undefined')

  if (!raf) raf = window.requestAnimationFrame
  var redrawScheduled = false
  var args = null

  return function frame () {
    if (args === null && !redrawScheduled) {
      redrawScheduled = true

      raf(function redraw () {
        redrawScheduled = false

        var length = args.length
        var _args = new Array(length)
        for (var i = 0; i < length; i++) _args[i] = args[i]

        render.apply(render, _args)
        args = null
      })
    }

    args = arguments
  }
}

},{"assert":12}],27:[function(require,module,exports){
var assert = require('assert')
var wayfarer = require('wayfarer')

// electron support
var isLocalFile = (/file:\/\//.test(
  typeof window === 'object' &&
  window.location &&
  window.location.origin
))

/* eslint-disable no-useless-escape */
var electron = '^(file:\/\/|\/)(.*\.html?\/?)?'
var protocol = '^(http(s)?(:\/\/))?(www\.)?'
var domain = '[a-zA-Z0-9-_\.]+(:[0-9]{1,5})?(\/{1})?'
var qs = '[\?].*$'
/* eslint-enable no-useless-escape */

var stripElectron = new RegExp(electron)
var prefix = new RegExp(protocol + domain)
var normalize = new RegExp('#')
var suffix = new RegExp(qs)

module.exports = Nanorouter

function Nanorouter (opts) {
  if (!(this instanceof Nanorouter)) return new Nanorouter(opts)
  opts = opts || {}
  this.router = wayfarer(opts.default || '/404')
}

Nanorouter.prototype.on = function (routename, listener) {
  assert.equal(typeof routename, 'string')
  routename = routename.replace(/^[#/]/, '')
  this.router.on(routename, listener)
}

Nanorouter.prototype.emit = function (routename) {
  assert.equal(typeof routename, 'string')
  routename = pathname(routename, isLocalFile)
  return this.router.emit(routename)
}

Nanorouter.prototype.match = function (routename) {
  assert.equal(typeof routename, 'string')
  routename = pathname(routename, isLocalFile)
  return this.router.match(routename)
}

// replace everything in a route but the pathname and hash
function pathname (routename, isElectron) {
  if (isElectron) routename = routename.replace(stripElectron, '')
  else routename = routename.replace(prefix, '')
  return decodeURI(routename.replace(suffix, '').replace(normalize, '/'))
}

},{"assert":12,"wayfarer":32}],28:[function(require,module,exports){
var assert = require('assert')

var hasWindow = typeof window !== 'undefined'

function createScheduler () {
  var scheduler
  if (hasWindow) {
    if (!window._nanoScheduler) window._nanoScheduler = new NanoScheduler(true)
    scheduler = window._nanoScheduler
  } else {
    scheduler = new NanoScheduler()
  }
  return scheduler
}

function NanoScheduler (hasWindow) {
  this.hasWindow = hasWindow
  this.hasIdle = this.hasWindow && window.requestIdleCallback
  this.method = this.hasIdle ? window.requestIdleCallback.bind(window) : this.setTimeout
  this.scheduled = false
  this.queue = []
}

NanoScheduler.prototype.push = function (cb) {
  assert.equal(typeof cb, 'function', 'nanoscheduler.push: cb should be type function')

  this.queue.push(cb)
  this.schedule()
}

NanoScheduler.prototype.schedule = function () {
  if (this.scheduled) return

  this.scheduled = true
  var self = this
  this.method(function (idleDeadline) {
    var cb
    while (self.queue.length && idleDeadline.timeRemaining() > 0) {
      cb = self.queue.shift()
      cb(idleDeadline)
    }
    self.scheduled = false
    if (self.queue.length) self.schedule()
  })
}

NanoScheduler.prototype.setTimeout = function (cb) {
  setTimeout(cb, 0, {
    timeRemaining: function () {
      return 1
    }
  })
}

module.exports = createScheduler

},{"assert":12}],29:[function(require,module,exports){
var scheduler = require('nanoscheduler')()
var assert = require('assert')

var perf
nanotiming.disabled = true
try {
  perf = window.performance
  nanotiming.disabled = window.localStorage.DISABLE_NANOTIMING === 'true' || !perf.mark
} catch (e) { }

module.exports = nanotiming

function nanotiming (name) {
  assert.equal(typeof name, 'string', 'nanotiming: name should be type string')

  if (nanotiming.disabled) return noop

  var uuid = (perf.now() * 10000).toFixed() % Number.MAX_SAFE_INTEGER
  var startName = 'start-' + uuid + '-' + name
  perf.mark(startName)

  function end (cb) {
    var endName = 'end-' + uuid + '-' + name
    perf.mark(endName)

    scheduler.push(function () {
      var err = null
      try {
        var measureName = name + ' [' + uuid + ']'
        perf.measure(measureName, startName, endName)
        perf.clearMarks(startName)
        perf.clearMarks(endName)
      } catch (e) { err = e }
      if (cb) cb(err, name)
    })
  }

  end.uuid = uuid
  return end
}

function noop (cb) {
  if (cb) {
    scheduler.push(function () {
      cb(new Error('nanotiming: performance API unavailable'))
    })
  }
}

},{"assert":12,"nanoscheduler":28}],30:[function(require,module,exports){
'use strict'

/**
 * Remove a range of items from an array
 *
 * @function removeItems
 * @param {Array<*>} arr The target array
 * @param {number} startIdx The index to begin removing from (inclusive)
 * @param {number} removeCount How many items to remove
 */
module.exports = function removeItems (arr, startIdx, removeCount) {
  var i, length = arr.length

  if (startIdx >= length || removeCount === 0) {
    return
  }

  removeCount = (startIdx + removeCount > length ? length - startIdx : removeCount)

  var len = length - removeCount

  for (i = startIdx; i < len; ++i) {
    arr[i] = arr[i + removeCount]
  }

  arr.length = len
}

},{}],31:[function(require,module,exports){
module.exports = scrollToAnchor

function scrollToAnchor (anchor, options) {
  if (anchor) {
    try {
      var el = document.querySelector(anchor)
      if (el) el.scrollIntoView(options)
    } catch (e) {}
  }
}

},{}],32:[function(require,module,exports){
/* eslint-disable node/no-deprecated-api */
var assert = require('assert')
var trie = require('./trie')

module.exports = Wayfarer

// create a router
// str -> obj
function Wayfarer (dft) {
  if (!(this instanceof Wayfarer)) return new Wayfarer(dft)

  var _default = (dft || '').replace(/^\//, '')
  var _trie = trie()

  emit._trie = _trie
  emit.on = on
  emit.emit = emit
  emit.match = match
  emit._wayfarer = true

  return emit

  // define a route
  // (str, fn) -> obj
  function on (route, cb) {
    assert.equal(typeof route, 'string')
    assert.equal(typeof cb, 'function')

    route = route || '/'

    if (cb._wayfarer && cb._trie) {
      _trie.mount(route, cb._trie.trie)
    } else {
      var node = _trie.create(route)
      node.cb = cb
      node.route = route
    }

    return emit
  }

  // match and call a route
  // (str, obj?) -> null
  function emit (route) {
    var matched = match(route)

    var args = new Array(arguments.length)
    args[0] = matched.params
    for (var i = 1; i < args.length; i++) {
      args[i] = arguments[i]
    }

    return matched.cb.apply(matched.cb, args)
  }

  function match (route) {
    assert.notEqual(route, undefined, "'route' must be defined")

    var matched = _trie.match(route)
    if (matched && matched.cb) return new Route(matched)

    var dft = _trie.match(_default)
    if (dft && dft.cb) return new Route(dft)

    throw new Error("route '" + route + "' did not match")
  }

  function Route (matched) {
    this.cb = matched.cb
    this.route = matched.route
    this.params = matched.params
  }
}

},{"./trie":33,"assert":12}],33:[function(require,module,exports){
/* eslint-disable node/no-deprecated-api */
var assert = require('assert')

module.exports = Trie

// create a new trie
// null -> obj
function Trie () {
  if (!(this instanceof Trie)) return new Trie()
  this.trie = { nodes: {} }
}

// create a node on the trie at route
// and return a node
// str -> obj
Trie.prototype.create = function (route) {
  assert.equal(typeof route, 'string', 'route should be a string')
  // strip leading '/' and split routes
  var routes = route.replace(/^\//, '').split('/')

  function createNode (index, trie) {
    var thisRoute = (has(routes, index) && routes[index])
    if (thisRoute === false) return trie

    var node = null
    if (/^:|^\*/.test(thisRoute)) {
      // if node is a name match, set name and append to ':' node
      if (!has(trie.nodes, '$$')) {
        node = { nodes: {} }
        trie.nodes.$$ = node
      } else {
        node = trie.nodes.$$
      }

      if (thisRoute[0] === '*') {
        trie.wildcard = true
      }

      trie.name = thisRoute.replace(/^:|^\*/, '')
    } else if (!has(trie.nodes, thisRoute)) {
      node = { nodes: {} }
      trie.nodes[thisRoute] = node
    } else {
      node = trie.nodes[thisRoute]
    }

    // we must recurse deeper
    return createNode(index + 1, node)
  }

  return createNode(0, this.trie)
}

// match a route on the trie
// and return the node
// str -> obj
Trie.prototype.match = function (route) {
  assert.equal(typeof route, 'string', 'route should be a string')

  var routes = route.replace(/^\//, '').split('/')
  var params = {}

  function search (index, trie) {
    // either there's no match, or we're done searching
    if (trie === undefined) return undefined
    var thisRoute = routes[index]
    if (thisRoute === undefined) return trie

    if (has(trie.nodes, thisRoute)) {
      // match regular routes first
      return search(index + 1, trie.nodes[thisRoute])
    } else if (trie.name) {
      // match named routes
      try {
        params[trie.name] = decodeURIComponent(thisRoute)
      } catch (e) {
        return search(index, undefined)
      }
      return search(index + 1, trie.nodes.$$)
    } else if (trie.wildcard) {
      // match wildcards
      try {
        params.wildcard = decodeURIComponent(routes.slice(index).join('/'))
      } catch (e) {
        return search(index, undefined)
      }
      // return early, or else search may keep recursing through the wildcard
      return trie.nodes.$$
    } else {
      // no matches found
      return search(index + 1)
    }
  }

  var node = search(0, this.trie)

  if (!node) return undefined
  node = Object.assign({}, node)
  node.params = params
  return node
}

// mount a trie onto a node at route
// (str, obj) -> null
Trie.prototype.mount = function (route, trie) {
  assert.equal(typeof route, 'string', 'route should be a string')
  assert.equal(typeof trie, 'object', 'trie should be a object')

  var split = route.replace(/^\//, '').split('/')
  var node = null
  var key = null

  if (split.length === 1) {
    key = split[0]
    node = this.create(key)
  } else {
    var head = split.join('/')
    key = split[0]
    node = this.create(head)
  }

  Object.assign(node.nodes, trie.nodes)
  if (trie.name) node.name = trie.name

  // delegate properties from '/' to the new node
  // '/' cannot be reached once mounted
  if (node.nodes['']) {
    Object.keys(node.nodes['']).forEach(function (key) {
      if (key === 'nodes') return
      node[key] = node.nodes[''][key]
    })
    Object.assign(node.nodes, node.nodes[''].nodes)
    delete node.nodes[''].nodes
  }
}

function has (object, property) {
  return Object.prototype.hasOwnProperty.call(object, property)
}

},{"assert":12}]},{},[1]);
