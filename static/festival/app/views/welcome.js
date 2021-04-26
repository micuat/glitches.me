// import choo's template helper
const html = require("choo/html");

// export module
module.exports = function (state, emit) {
  state.bighead = p([`festival.`, `glitches.me`])
    .color([0, 0.5], 0.1, 1).shadow().bg([1, 0], 1, 0).size(40)//.parent("#bighead")
    .font("VT323").scrollX([0, 0.1]).out(0)
  const blah = `The first edition of festival.glitches.me is an independent festival that investigates body, network and digitality through manifestation and question around institutions and the current society that form what is perceived as artistic activities and critically propose methodologies to speculate ideas that pose significant impact to cultural domains.`
  return html`
    <div>
    ${state.bighead}
    <p>April 25, 2021 - March 31, 2022</p>
    <p>${blah}</p>
    <h2>Artists</h2>
    <p>Naoto Hieda</p>
    <p>more to be announced</p>
    <h2>Events</h2>
    <p>Best Practices in Contemporary Dance (Practice)</p>
    <p>Best Practices in Contemporary Dance (Chat)</p>
    <p>Collective depressing session (24/7)</p>
    <h2>Tickets</h2>
    <p>Get your ticket <a href="/#tickets">here!</a></p>
    <h2>Open Call</h2>
    <p>call me: mail@naotohieda.com</p>
    <h2>Partners</h2>
    <p><a href="https://glitches.me">glitches.me</a></p>
    <p><a href="https://museum.glitches.me">museum.glitches.me</a></p>
    </div>
    `;
};