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
  padding: 2rem 0;
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
a {
  color: black;
  font-weight: bold;
}
header {
  font-size: 1.5rem;
  z-index: 10;
  position: fixed;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	align-content: stretch;
  width: 100%;
  .inner {
    width: 768px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
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
.bg-salmon {
  background-color: salmon;
  color: #fff;
}
.bg-crimson {
  background-color: crimson;
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
.hydra-dw {
  background-image: url("https://cdn.glitch.global/cada0ae2-f902-428d-81e3-6a68f5e589e5/53378405309_445f9d96f6_o.jpg?v=1708348159066");
  background-size: cover;
  background-position: center center;
  div {
    background-color: #fff;
  }
}
.hydra-aavistus {
  background-image: url("https://cdn.glitch.global/cada0ae2-f902-428d-81e3-6a68f5e589e5/Aavistus_2024_HKM_Workshop_NaotoHieda_SusseSeppa%CC%88la%CC%88-4.jpg?v=1731870232141");
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
            </div>
            <div>
              <a href="mailto:mail@naotohieda.com">mail@naotohieda.com</a>
            </div>
          </div>
        </header>
        <section class="bg-blue">
          <div>
            <p class="tagline">Mina olen Naoto Hieda, Jaapanist pärit kunstnik ja teadlane, kes elab Eestis ja õpib doktorantuuris Tallinna Ülikoolis. Mul on inseneriharidus – bakalaureusekraadi omandasin Tokyo Tehnoloogiainstituudis ja magistrikraadi McGilli Ülikoolis Kanadas. Lisaks olen õppinud meediakunsti Kölni Meediakunsti Akadeemias Saksamaal.</p>
            <p class="tagline">Tegutsen rahvusvaheliselt visuaalkunsti ja teatrilavastuste valdkonnas. Samuti viin läbi töötubasid, kus õpetan, kuidas luua abstraktseid ja generatiivseid visuaale koodimise abil. Osalejad saavad avastada loomingulise kodeerimise tehnikaid interaktiivses ja katsetustele avatud keskkonnas. </p>
          </div>
        </section>
        <section class="bg-yellow">
          <div>
            <p class="tagline">I am Naoto Hieda, an artist and researcher from Japan, living in Estonia and studying for a PhD at Tallinn University. I have a background in engineering, with a Bachelor's degree from Tokyo Institute of Technology and a Master's degree from McGill University in Canada. In addition, I have studied media arts at the Academy of Media Arts in Cologne, Germany.</p>
            <p class="tagline">I work internationally in the field of visual arts and theatre productions. I also run workshops where I teach how to create abstract and generative visuals using coding. Participants will be able to discover creative coding techniques in an interactive and experimental environment.</p>
          </div>
        </section>
        <section class="hydra-dw">
          <div>
          </div>
          <div class="desc">
          </div>
          <div class="photocredit">
            Photo: Lenz aka. Eray Aydin
          </div>
        </section>
        <section class="bg-white">
          <div>
            <p class="tagline">LOOVA KOODIMISE TÖÖTUBA NOORTELE</p>
            <p class="tagline">Viin läbi töötubasid, kus õpime looma abstraktseid ja generatiivseid visuaale koodimise abil. Peamise tööriistana kasutame Hydra platvormi, mis võimaldab reaalajas visuaale luua, katsetada ning avastada interaktiivses ja eksperimentaalses keskkonnas.</p>
            <p class="tagline">Töötuba ei eelda eelnevaid programmeerimisoskusi ja sobib igas vanuses õpilastele.</p>
            <p class="tagline">Sessiooni kestus on paindlik – see võib olla ühepäevane või kesta kuni nädala. Tegevus toimub inglise keeles, kuid vajadusel saab kaasata assistendi või tõlgi.</p>
            <p class="tagline">Samuti saan pakkuda lisamaterjali tehisintellekti abil piltide manipuleerimiseks kehaliigutuste kaudu.</p>
            <p class="tagline">Soovi korral saab õpilaste töödest kokku panna näituse, pakkudes võimalust oma loomingut laiemale publikule esitleda.</p>
          </div>
        </section>
        <section class="bg-crimson">
          <div>
            <p class="tagline">CREATIVE CODING WORKSHOP FOR YOUNG PEOPLE</p>
            <p class="tagline">I run workshops where we learn how to create abstract and generative visuals using coding. As a main tool, we will use the Hydra platform, which allows real-time visuals to be created, tested and explored in an interactive and experimental environment.</p>
            <p class="tagline">The workshop does not require any prior programming skills and is suitable for students of all ages.</p>
            <p class="tagline">The duration of the session is flexible - it can be one day or up to one week. The activities will be in English, but an assistant or interpreter can be provided if needed.</p>
            <p class="tagline">I can also provide additional material on using artificial intelligence to manipulate images through body movements.</p>
            <p class="tagline">If you wish, we can put together an exhibition of the students' work, offering the opportunity to show creation to a wider audience.</p>
          </div>
        </section>
        <section class="hydra-aavistus">
          <div>
          </div>
          <div class="desc">
          </div>
          <div class="photocredit">
            Photo: Susse Seppälä
          </div>
        </section>
        <section class="bg-yellow">
          <div>
            <p class="tagline">LOOVA KOODIMISE TÖÖTUBA TÄISKASVANUTELE</p>
            <p class="tagline">Viin läbi töötubasid, kus õpime looma abstraktseid ja generatiivseid visuaale koodimise abil. Peamise tööriistana kasutame Hydra platvormi, mis võimaldab reaalajas visuaale luua, katsetada ning avastada interaktiivses ja eksperimentaalses keskkonnas. Samuti saan pakkuda lisamaterjali tehisintellekti abil piltide manipuleerimiseks kehaliigutuste kaudu.</p>
            <p class="tagline">Töötuba ei eelda eelnevaid programmeerimisoskusi.</p>
            <p class="tagline">Sessiooni kestus on paindlik – see võib olla ühepäevane või kesta kuni nädala. Tegevus toimub inglise keeles, kuid vajadusel saab kaasata assistendi või tõlgi.</p>
            <p class="tagline">Soovi korral saab töödest kokku panna näituse, pakkudes võimalust oma loomingut laiemale publikule esitleda.</p>
          </div>
        </section>
        <section class="bg-white">
          <div>
            <p class="tagline">CREATIVE CODING WORKSHOP FOR ADULTS</p>
            <p class="tagline">I will run workshops where we will learn how to create abstract and generative visuals using coding. As a main tool, we will use the Hydra platform, which will allow you to create, test and discover real-time visuals in an interactive and experimental environment. I could also provide additional material for manipulating images using artificial intelligence through body movements. </p>
            <p class="tagline">The workshop does not require any prior programming skills.</p>
            <p class="tagline">The duration of the session is flexible - it can be one day or up to a week. The activities will be in English, but an assistant or interpreter can be provided if needed.</p>
            <p class="tagline">If desired, an exhibition of the work can be put together, offering the opportunity to showcase creation to a wider audience.</p>
          </div>
        </section>
        <footer class="bg-blue">
          glitches.me 2025 - <a href="mailto:mail@naotohieda.com">mail@naotohieda.com</a>
        </footer>
      </div>
    </div>
  `;
}
