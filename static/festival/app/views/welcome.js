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
    
    <h2>Code of Conduct</h2>
    <p>We support the <a href="https://berlincodeofconduct.org/">Berlin Code of Conduct</a>. Please make sure you agree with its content - we will not tolerate any harassment. If you have any questions, please contact the organizers.
    </p>
    
    <h2>Artists</h2>
    <div class="gridy">
      <ul>
        <li><a href="https://naotohieda.com">
          <img src="http://94.136.16.62/~hydrogen/wiki/images/profile.jpg">
          Naoto Hieda</a></li>
        <li>
        <img src="https://img.glitches.me/images/2021/04/26/imageae7d6dcf8134eced.png">
        NH</li>
        <li>more to be announced</li>
      </ul>
    </div>

    <h2>Events</h2>
    <div class="gridy">
      <ul>
        <li>
        <img src="https://img.glitches.me/images/2021/04/26/image7d400fea9c7b7cd5.png">
        April 25, 2021: Soft Opening (Website Launch)</li>
        <li><a href="https://depression.glitches.me/">
        <img src="https://img.glitches.me/images/2021/04/26/image8daef8001ccc12ac.png">
        April 26, 2021 - March 31, 2022: Collective depressing session (24/7)
        </a></li>
        <li>
        <img src="https://img.glitches.me/images/2021/04/27/Screenshot-from-2021-04-27-13-05-21.png">
        April 27, 2021: Talk at Ctrl-Space</li>
        <li>
        <img src="https://cdn.glitch.com/598358d5-7bf3-4992-8998-933254c78f4b%2F2020-09-03-best-practices-session.png">
        TBA: Best Practices in Contemporary Dance (Practice)</li>
        <li>
        <img src="https://cdn.glitch.com/598358d5-7bf3-4992-8998-933254c78f4b%2F201005chat.jpg">
        TBA: Best Practices in Contemporary Dance (Chat)</li>
      </ul>
    </div>
    
    <h2>Tickets</h2>
    <p>Get your ticket <a href="/#tickets">here!</a></p>
    
    <h2>Open Call</h2>
    <p>call me at mail@naotohieda.com</p>
    
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
      </ul>
    </div>

    </div>
    `;
};
