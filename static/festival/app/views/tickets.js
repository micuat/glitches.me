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
    <p>Dates: April 25, 2021 - March 31, 2022</p>
    </section>

    <div class="hline"></div>

    <section>
    <h2>Tickets</h2>
    <p>Tickets are a form of paper, which is processed fibers, that is printed with ink with a unique code that manifests the validity of the token.</p>
    </section>

    <div class="hline"></div>

    <section>
    <p><a href="/">back</a></p>
    </section>
    </div>
    `;
};