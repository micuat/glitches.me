<script>
  export let value;
  let urlExt = value.url.split(".");
  urlExt = urlExt[urlExt.length - 1].toLowerCase();
  let isVideo = urlExt == "mp4" || urlExt == "mov" || urlExt == "webm";
</script>

  {#if isVideo}
    <video muted loop playsinline autoplay>
      <source src={value.url}>
      Sorry, your browser doesn't support embedded videos.
  </video>
  {:else}
    <img src={value.url} alt={value.name} />
  {/if}

<style>
  img, video {
    box-shadow: 0 0.5px 2px #000;
    -webkit-box-shadow: 0 0.5px 2px #000;
    width: 100%;
    max-width: 800px;
    max-height: 800px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: auto;
    margin-top: auto;
  }
</style>
