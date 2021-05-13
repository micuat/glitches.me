// import choo's template helper
const html = require("choo/html");

const schedule = [
  {
    title: "April 25, 2021: Soft Opening (Website Launch)",
    url: "",
    img: "https://img.glitches.me/images/2021/04/26/image7d400fea9c7b7cd5.png"
  },
  {
    title: "April 26, 2021 - March 31, 2022: Collective depressing session (24/7)",
    url: "https://depression.glitches.me/",
    img: "https://img.glitches.me/images/2021/04/26/image8daef8001ccc12ac.png"
  },
  {
    title: `April 27, 2021: Presentation at "Ctrl-Space"`,
    url: "",
    img: "https://img.glitches.me/images/2021/04/27/Screenshot-from-2021-04-27-13-05-21.png"
  },
  {
    title: `April 28, 2021: Best Practices in Contemporary Dance: Chat (Jorge Guevara & Naoto Hieda)`,
    url: "https://www.youtube.com/watch?v=kC-7hzK0jgM",
    img: "https://img.glitches.me/images/2021/04/28/vlcsnap-2021-04-28-17h25m17s756.png"
  },
  {
    title: `April 28, 2021: Intervention in Arium`,
    url: "https://arium.xyz/spaces/nh",
    img: "https://assets.vlts.pw/spaceUserAssets/nh/LQRdaF5y37cNtpe646xWF4GUXit2/default-meta-mlQBma4e.jpg"
  },
  {
    title: `April 30, 2021: hydra-xml`,
    url: "https://hydra-xml.glitch.me/",
    img: "https://img.glitches.me/images/2021/04/30/Screenshot-from-2021-04-30-22-53-14.png"
  },
  {
    title: `May 1, 2021: Best Practices in Contemporary Dance: Development, Practice & Chat (Jorge Guevara & Naoto Hieda)`,
    url: "https://youtu.be/fqxNOgyhucI",
    img: "https://img.glitches.me/images/2021/05/01/vlcsnap-2021-05-01-17h41m49s064.png"
  },
  {
    title: `May 3, 2021: Best Practices in Contemporary Dance: Chat (Jorge Guevara & Naoto Hieda)`,
    url: "https://youtu.be/Kx8lVCxXLgA",
    img: "https://img.glitches.me/images/2021/05/03/vlcsnap-2021-05-03-17h36m46s282.png"
  },
  {
    title: `May 4, 2021: Presentation at "Cats"`,
    url: "",
    img: "https://img.glitches.me/images/2021/05/04/vlcsnap-2021-05-04-21h56m37s298.png"
  },
  {
    title: `May 5, 2021: Presentation at "Together"`,
    url: "",
    img: "https://img.glitches.me/images/2021/05/13/vlcsnap-2021-05-13-20h55m42s813.png"
  },
  {
    title: `May 6, 2021: Hydra A-Frame`,
    url: "https://hydra-aframe-anime-4.glitch.me/",
    img: "https://img.glitches.me/images/2021/05/07/imagef5eb42879c4ef467.png"
  },
  {
    title: `May 7, 2021: Presentation at "Gifts"`,
    url: "",
    img: "https://img.glitches.me/images/2021/05/07/image.png"
  },
  {
    title: `May 8, 2021: Best Practices in Contemporary Dance: Chat (Jorge Guevara & Naoto Hieda)`,
    url: "https://youtu.be/ENmQK0ZCbQw",
    img: "https://img.glitches.me/images/2021/05/08/vlcsnap-2021-05-08-19h38m34s258.png"
  },
  {
    title: `May 8, 2021: Best Practices... But Alone`,
    url: "https://youtu.be/oGHAVVSmAwc",
    img: "https://img.glitches.me/images/2021/05/09/image.png"
  },
  {
    title: `May 10, 2021: Best Practices in Contemporary Dance: Chat (Jorge Guevara & Naoto Hieda)`,
    url: "https://youtu.be/wafVx8RiDeE",
    img: "https://img.glitches.me/images/2021/05/11/vlcsnap-2021-05-11-01h26m22s384.png"
  },
  {
    title: `May 10, 2021: Flok Replay (Flor de Fuego & Naoto Hieda)`,
    url: "https://flok-replay.glitch.me/",
    img: "https://img.glitches.me/images/2021/05/11/image.png"
  },
  {
    title: `May 11, 2021: Razio (Guest: Luise Flügge)`,
    url: "https://razio.glitch.me/luise",
    img: "https://cdn.glitch.com/fce09100-6702-45dd-b818-65dc2117c886%2Fvlcsnap-2021-05-11-23h14m32s972.png?v=1620767699624"
  },
  {
    title: `May 12, 2021: Flok Replay (Flor de Fuego & Naoto Hieda)`,
    url: "https://flok-replay.glitch.me/",
    img: "https://img.glitches.me/images/2021/05/13/image.png"
  },
  {
    title: `May 13, 2021: Best Practices in Contemporary Dance: Development & Practice (Jorge Guevara & Naoto Hieda)`,
    url: "https://youtu.be/fqxNOgyhucI",
    img: "https://img.glitches.me/images/2021/05/13/vlcsnap-2021-05-13-21h04m32s366.png"
  },
  {
    title: `May 13, 2021: Best Practices in Contemporary Dance: Chat (Joana Chicau, Jorge Guevara & Naoto Hieda)`,
    url: "https://youtu.be/fqxNOgyhucI",
    img: "https://img.glitches.me/images/2021/05/13/vlcsnap-2021-05-13-21h02m48s927.png"
  },
]

// export module
module.exports = function (state, emit) {
  state.bighead = p([`festival.`, `glitches.me`])
    .color([0, 0.5], 0.1, 1).shadow().bg([1, 0], 1, 0).size(40)//.parent("#bighead")
    .font("VT323").scrollX([0, 0.1]).out(0)

  const scheduleDom = schedule.map((e) => e.url.length > 0 ? html`
  <li><a href="${e.url}">
  <img src="${e.img}">
  ${e.title}
  </a></li>` : html`
  <li>
  <img src="${e.img}">
  ${e.title}
  </li>`
  )

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

    <section>
    <h2>Artists</h2>
    <div class="gridy">
      <ul>
        <li><a href="https://naotohieda.com">
          <img src="http://94.136.16.62/~hydrogen/wiki/images/profile.jpg">
          Naoto Hieda</a></li>
        <li>
        <img src="https://img.glitches.me/images/2021/04/26/imageae7d6dcf8134eced.png">
        NH</li>
        <li>more to be announced...</li>
      </ul>
    </div>
    </section>

    <section>
    <h2>Events</h2>
    <div class="gridy">
      <ul>
        ${scheduleDom}
      </ul>
    </div>
    </section>

    <section>
    <h2>Tickets</h2>
    <p>Get your ticket <a href="/#tickets">here!</a></p>
    </section>

    <section>
    <h2>Open Call</h2>
    <p>call me at mail@naotohieda.com</p>
    </section>

    <section>
    <h2>Partners</h2>
    <div class="gridy">
      <ul>
        <li><a href="https://glitches.me">
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
};
