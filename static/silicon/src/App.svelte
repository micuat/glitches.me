<script>
  import io from "socket.io-client";
  // import MarkdownIt from "markdown-it";
  // import Entry from "./Entry.svelte";
  
  // const urlParams = new URLSearchParams(window.location.search);
  // const mode = urlParams.get('mode');
  let message;
  let status = "UNKNOWN STATUS";
  let picture;
  const socket = io("silicon.glitches.me");
  //socket.emit("hello", {})
  socket.on("welcome", (msg) => {
    console.log(msg);
    message = msg;
  });
  socket.on("status", (msg) => {
    console.log(msg);
    status = msg.res;
  });
  socket.on("picture", (msg) => {
    console.log(msg);
    picture = msg.data;
  });

  function handleClick(e) {
    socket.emit("hello", {});
  }
</script>

<main>
  <div id="main">
      <div id="backtex">
        <div id="backteximage">
        </div>
      </div>
      <div id="container">
        <section class="center-section">
  <h1>
    Hello! I am light :)
  </h1>
  <p>
currently I am {status}
  </p>
<button on:click={handleClick}>
	Toggle light
</button>
        </section>
{#if picture !== undefined}
        <section class="center-section">
<img class="fit" src={picture} />
        </section>
{/if}

      </div>
    </div>
</main>

<style>
  * {
    font-family: "roboto", sans-serif;
  }
p {
  margin: 1em;
}
.fit {
  width: 100%;
  max-width: 500px;
  height: auto;
}

button {
  width: 100%;
  height: 100px;
}
.center-section {
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: center;
	align-content: stretch;
}
  #backtex {
    position: absolute;
    z-index: 0;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  #backteximage {
    width: 100%;
    height: 100vh;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
/*    background-image: url("https://cdn.glitch.com/c872ab9a-264e-4ce2-91db-721811e90193%2FKunsthochschuleKoelnMedienLogo-B.png?v=1625781135407");
*/
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }


</style>
