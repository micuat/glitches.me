// import choo's template helper
const html = require("choo/html");

// export module
module.exports = function (state, emit) {
  return html`
    <div>
    <p>April 25, 2021 - March 31, 2022</p>
    <h2>Tickets</h2>
    <p>Tickets are a form of paper, which is processed fibers, that is printed with ink with a unique code that manifests the validity of the token.</p>
    <p><a href="/">back</a></p>
    </div>
    `;
};