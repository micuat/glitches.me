const en = {
  tagline: jdom`<div><b>glitches.me</b> is a design studio exploring whateverness in whatever medium.</div>`,
}

const ja = {
  tagline: jdom`<div><b>グリッチズ・ミー</b>はなにがしかのメディアでなにがしかを追及するデザイン・スタジオです</div>`,
}

const langs = { en, ja };

class App extends Torus.StyledComponent {
  init() {
    this.lang = "en";
  }
  styles() {
    return css`
      .whatever {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: stretch;
        align-content: stretch;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
      }
      .cover {
        position: sticky;
        width: 100%;
        height: 100%;
        background-image: url("https://bild.glitches.me/images/2022/10/18/wm_qoT.jpg");
        background-size: cover;
        background-position: center center;
        opacity: 0.5;
      }
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
      header a {
        color: black;
      }
      header div {
        display: inline;
        margin: 0 1em 0 1em;
      }
    `;
  }
  compose() {
    return jdom`
    <div>
      <div class="cover">
      </div>
      <div class="whatever">
      <div class="container">
        <header>
          <div>
            <a href="#" onclick=${() => {
              this.lang = "en";
              this.render();
            }}>English</a>
          </div>
          <div>
            <a href="#" onclick=${() => {
              this.lang = "ja";
              this.render();
            }}>日本語</a>
          </div>
        </header>
        <div>
          <p class="tagline">${langs[this.lang].tagline}</p>
          <a style="color: black" href="https://portfolio.glitches.me">portfolio</a>
        </div>
        <footer>glitches.me 2023</footer>
      </div>
      </div>
    </div>`;
  }
  loaded() {
  }
}

const app = new App();
document.querySelector("div#app").appendChild(app.node);
app.loaded();
