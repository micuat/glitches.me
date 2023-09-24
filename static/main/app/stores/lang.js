import html from "choo/html";

export default function(state, emitter) {
  const en = {
    tagline: html`
    <div id="tag-en">
      <b>glitches.me</b> is a design studio exploring whateverness in whatever medium.
    </div>`,
    whatever: html`
    <div>
      <div>
        <b>whatever</b>: <i>interjection</i> (used to indicate indifference to a state of affairs, situation, previous statement, etc.) −<i>dictionary.com</i>
      </div>
      <div class="space-4rem">
      </div>
      <div>
        <b>whateverness</b>: <i>noun</i> design process using JavaScript front- and back-end, custom code in C++, Java and Python, etc. for radical creation −<i>glitches.me</i>
      </div>
    </div>
    `,
    icade_desc: "web & installation design for KHM Rundgang 2022",
    xmp_desc: "real-time visualization in Tokyo, Sendai, Osaka and Kyoto",
    festival_desc: "exhibition design",
    portfolio: "portfolio",
    friends: "friends",
  }
  
  const ja = {
    tagline: html`
    <div id="tag-ja">
      <b>グリッチズ・ミー</b>はなにがしかのメディアでなにがしかを追及するデザイン・スタジオです。
    </div>`,
    whatever: html`
    <div>
      <div>
        <b>whatever</b> <i>副</i> 〈話〉（そんなことは）どうでもいい、何でもいいから、知るか −<i>eow.alc.co.jp</i>
      </div>
      <div class="space-4rem">
      </div>
      <div>
        <b>whateverness</b> <i>名</i> JavaScript フロント及びバック・エンド、C++, Java, Python などのカスタム・コードを使ったラディカルなデザイン・プロセス −<i>glitches.me</i>
      </div>
    </div>
    `,
    icade_desc: "ウェブ＆インスタレーション・デザイン（KHM Rundgang 2022）",
    xmp_desc: "東京・仙台・大阪・京都でのリアルタイム・ビジュアリゼーション",
    festival_desc: "展示デザイン",
    portfolio: "ポートフォリオ",
    friends: "フレンズ",
  }
  state.langs = { en, ja };
  state.lang = "en";
}