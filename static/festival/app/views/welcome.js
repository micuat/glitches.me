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

    function loadMore() {
      state.scheduleMax += 10;
      emit("render");
    }
};
