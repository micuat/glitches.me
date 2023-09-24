import html from "choo/html";
import { css } from "@emotion/css";

const mainCss = css`
display: flex;
flex-direction: row;
flex-wrap: nowrap;
justify-content: center;
align-items: stretch;
align-content: stretch;
width: 100%;

.container {
  position: relative;
  // max-width: 768px;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  align-content: stretch;
}
section {
  position: relative;
  min-height: 100vh;
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: center;
	align-content: stretch;
  width: 100%;
  font-size: 1.5rem;
  a {
    color: inherit;
  }
  div {
    max-width: 768px;
    position: relative;
  }
  .big {
    font-size: 2rem;
  }
  .desc {
    text-align: center;
    font-size: 1.5rem;
  }
  .photocredit {
    font-size: 1rem;
    position: absolute;
    bottom: 0;
    right: 0;
    color: #000;
    background-color: #fff;
  }
  .space-4rem {
    height: 4rem;
  }
}
.friends {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .friend {
    margin: 10px;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    align-content: stretch;
    img {
      width: 120px;
      height: auto;
    }
  }
}
header {
  z-index: 10;
  position: fixed;
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: center;
	align-content: stretch;
  width: 100%;
  a {
    color: black;
  }
  .inner {
    width: 768px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    div {
      display: inline;
      margin: 0 1em 0 0;
    }
  }
}
footer {
  width: 100%;
  text-align: center;
  padding: 1em 0 1em;
}
.bg-white {
  background-color: #fff;
  color: #000;
}
.bg-red {
  background-color: #f00;
  color: #fff;
}
.bg-yellow {
  background-color: #ff0;
  color: #000;
}
.bg-black {
  background-color: #000;
  color: #fff;
}
.bg-blue {
  background-color: #0ff;
  color: #000;
}
.bg-green {
  background-color: #0f0;
  color: #000;
}
.icade {
  background-image: url("images/icade.jpg");
  background-size: cover;
  background-position: center center;
  div {
    background-color: #fff;
  }
}
.xm {
  background-image: url("images/xmp.jpg");
  background-size: cover;
  background-position: center center;
  div {
    background-color: #000;
    color: #fff;
  }
}
.festival {
  background-image: url("images/festival.jpg");
  background-size: cover;
  background-position: center center;
  div {
    background-color: #000;
    color: #fff;
  }
}
`;

// export module
export default function(state, emit) {
  state.lang = state.params.lang !== undefined ? state.params.lang : "en";
  return html`
    <div class=${ mainCss }>
      <div class="container">
        <header class="bg-green">
          <div class="inner">
            <div>
              studio.glitches.me
            </div>
            <div>
              <div>
                <a href="#en" onclick=${() => {
                }}>English</a>
              </div>
              <div>
                <a href="#ja" onclick=${() => {
                }}>日本語</a>
              </div>
            </div>
          </div>
        </header>
        <section class="bg-blue">
          <div>
            <p class="tagline">${ state.langs[state.lang].tagline }</p>
          </div>
        </section>
        <section class="icade">
          <div>
            ICADE
          </div>
          <div class="desc">
            ${ state.langs[state.lang].icade_desc }
          </div>
          <div class="photocredit">
            Photo: Dörthe Boxberg
          </div>
        </section>
        <section class="bg-white">
          ${ state.langs[state.lang].whatever }
        </section>
        <section class="festival">
          <div>
            festival.naotohieda.com
          </div>
          <div class="desc">
            ${ state.langs[state.lang].festival_desc }
          </div>
          <div class="photocredit">
            Photo: Andrea Gamboa Betancourrth
          </div>
        </section>
        <section class="bg-yellow">
          <a href="https://glitches.me/portfolio">
            ${ state.langs[state.lang].portfolio }
          </a>
        </section>
        <section class="xm">
          <div>
            XM-Profiler
          </div>
          <div class="desc">
            ${ state.langs[state.lang].xmp_desc }
          </div>
        </section>
        <section class="bg-black">
          <div>
            ${ state.langs[state.lang].friends }
          </div>
          <div class="space-4rem">
          </div>
          <div class="friends">
            <div class="friend">
              <img class="friend" src="images/node.png" />
            </div>
            <div class="friend">
              <img class="friend" src="images/kolab.png" />
            </div>
            <div class="friend">
              <img class="friend" src="images/khm.png" />
            </div>
            <div class="friend">
              <img class="friend" src="images/cppd.png" />
            </div>
            <div class="friend">
              <img class="friend" src="images/maxlab.png" />
            </div>
            <div class="friend">
              <img class="friend" src="images/matilde.png" />
            </div>
          </div>
        </section>
        <footer class="bg-red">
          glitches.me 2023
        </footer>
      </div>
    </div>
  `;
}
