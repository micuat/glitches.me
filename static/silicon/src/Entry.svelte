<script>
  export let value;
  import MarkdownIt from "markdown-it";
  import { discordmoji } from "./discordmoji.js";
  import Image from "./Image.svelte";

  const md = new MarkdownIt({ linkify: true, breaks: true });
  value.artist.id = value.artist.id;
  let attachments = value.attachments.filter((e) => e.width > 0);
  let withImage = attachments.length > 0;
  let medium = "text data";

  let content = "";
  content = value.content.length !== 0 ? md.render(value.content) : "Untitled";

  let bigtext = value.content.length < 20;

  if (withImage) {
    // content = md.render(`${value.content}, ${new Date(value.t).getFullYear()}`);

    let urlExt = attachments[0].url.split(".");
    urlExt = urlExt[urlExt.length - 1].toUpperCase();
    medium = `${urlExt} file`;
  }
  else {
    // content = md.render(value.content);
  }
</script>

<section class:withImage>
  <div class="thumbnail">
    {#if withImage}
      {#each attachments as attachment}
        <Image bind:value={attachment} />
      {/each}
    {:else}
      <div class="textframe" class:bigtext>
        <div class="textframeinner" use:discordmoji>
          {@html content}
        </div>
      </div>
    {/if}
  </div>
  <div class="caption-holder">
    <div class="caption">
      <div class="collabs"><p>{value.artist.id}</p></div>
      {#if withImage}
        <div class="desc" use:discordmoji>
          {@html content}
        </div>
      {/if}
      <div class="year">
        {new Date(value.t).getFullYear()}
      </div>
      <div class="medium">
        {medium}
      </div>
      <div class="id">
        {Math.floor(value.t / 1000)}-({String(value.t % 1000).padStart(3, '0')})
      </div>
    </div>
  </div>
</section>

<style>
  /* * {
    font-family: "roboto", sans-serif;
  } */
  .caption-holder {
    box-sizing: content-box;
    background-color: white;
    display: flex;
    justify-content: center;
    max-width: 500px;
    /* margin: 40px auto 40px auto; */
    max-width: 300px;
    margin-bottom: 30px;
  }

  .desc {
    margin-bottom: 1em;
  }

  .id {
    position: absolute;
    bottom: 1em;
    font-size: .8em;
  }

  .medium {
    font-size: .8em;
  }

  .caption {
    width: 90%;
    min-width: 300px;
    padding: 30px 10px 30px 10px;
    position: relative;
    box-shadow: 0 0.5px 2px #000;
    -webkit-box-shadow: 0 0.5px 2px #000;
    min-height: 10em;
    display: inline;
  }
  @media only screen and (max-width: 600px) {
    .caption {
      display: inline;
    }
  }

  section {
    margin: 50px auto 50px auto;
    min-width: 50%;
    display: flex;
    flex-wrap: wrap;
  	justify-content: space-around;
    align-items: flex-end;
  }

  /* .withImage {
    margin: 70px auto 120px auto;
  } */

  section > .title {
    font-weight: bold;
    font-size: 1.2em;
    float: left;
    margin-right: 1em;
  }

  .thumbnail {
    /* width: 100%; */
    display: flex;
    /* justify-content: center; */
    margin-bottom: 30px;
  }

  .textframe {
    margin: 0 5px 0 5px;
    width: 100%;
    min-width: 300px;
    max-width: 800px;
    background: linear-gradient(30deg, rgba(224,224,224,1) 0%, rgba(255,255,255,1) 100%);
    box-shadow: 0 0.5px 2px #000;
    -webkit-box-shadow: 0 0.5px 2px #000;
    /* border: 1px solid grey; */
    padding: 150px 20px 150px 20px;
    justify-content: center;
    display: flex;
  }

  .bigtext {
    font-size: 3em;
  }

  .collabs {
    font-weight: 500;
    text-transform: uppercase;
    margin-right: 20px;
    /* min-width: 5em;
    width: 100%; */
  }
  /* .withImage > div > .caption > .collabs {
    margin-bottom: 50px;
  } */
</style>
