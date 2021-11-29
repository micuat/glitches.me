
class App extends Torus.StyledComponent {
  init() {
  }
  styles() {
    return css`
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: stretch;
      align-content: stretch;
      height: 100%;
      .container {
        max-width: 768px;
        width: 100%;
        height: 100%;
      
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        align-content: stretch;
      }
      .tagline {
        font-size: 2em;
      }
      
      header, footer {
        text-align: center;
        padding: 1em 0 1em;
      }
    `;
  }
  compose() {
    return jdom`
    <div>
      <div class="container">
        <header></header>
        <div>
          <p class="tagline">glitches.me is a design studio exploring whateverness in whatever medium.</p>
          <a style="color: black" href="https://portfolio.glitches.me">portfolio</a>
        </div>
        <footer>glitches.me 2021</footer>
      </div>
    </div>`;
  }
  loaded() {
  }
}

const app = new App();
document.querySelector("div#app").appendChild(app.node);
app.loaded();
