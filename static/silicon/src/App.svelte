<script>
  import { onMount } from "svelte";

  import io from "socket.io-client";
  // import MarkdownIt from "markdown-it";
  // import Entry from "./Entry.svelte";
  
  // const urlParams = new URLSearchParams(window.location.search);
  // const mode = urlParams.get('mode');
  let message = "";
  let lightmessage = "Toggle light";
  let status = "UNKNOWN STATUS";
  let picture;
  const socket = io("silicon.glitches.me");
  //socket.emit("hello", {})
  socket.on("welcome", (msg) => {
    console.log(msg);
    //message = msg;
  });
  socket.on("status", (msg) => {
    console.log(msg);
    status = msg.res;
    if(status == "ON") lightmessage = "Turn me off"
    if(status == "OFF") lightmessage = "Turn me on"
  });

  let canvas = document.createElement("canvas")
  canvas.width = 320;
  canvas.height = 240;
  let results;

  socket.on("picture", (msg) => {
    if(msg != null){
      console.log(msg);
      picture = msg.data;

      if(objectDetector !== undefined) {
    var img = new window.Image();
    img.addEventListener("load", function () {
        canvas.getContext("2d").drawImage(img, 0, 0);
         objectDetector.detect(canvas, (err, r) => {
           results = "I see " + r.map(e=>e.label).join(",");
           console.log(results); // Will output bounding boxes of detected objects
           fetch(`https://silicon-friends.glitch.me/new/light/${(results)}`);
        });
   });
    img.setAttribute("src", msg.data);


      }


    }
  });

  function submit() {
    socket.emit("hello", {toggle: true, message});
    message = "";
  }
  const onKeyPress = e => {
    if (e.charCode === 13 && message !== "") submit();
  };
  function handleShutter(e) {
    socket.emit("hello", {toggle: false});
  }
  function handleToggle(e) {
    if(message !== "") {
      submit();
    }
  }

  let objectDetector;
  objectDetector = ml5.objectDetector('cocossd', {}, modelLoaded);
  function modelLoaded() {
    console.log('Model Loaded!');
  }
  onMount(async () => {

    handleShutter();
  })
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
<!--
<button on:click={handleToggle}>
	{lightmessage}
</button>
-->
<p>You are turning me {status == "ON" ? "OFF" : "ON"} because:</p>
<input on:keypress={onKeyPress} bind:value={message} />

<!-- <button on:click={handleShutter}>
	Update my view
</button> -->
        </section>
{#if picture !== undefined}
        <section class="center-section">
<img class="fit" id="lightview" src={picture} />
<p>
{ results }
</p>
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
input {
  width: 100%;
  height: 2em;
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
  .code {
    font-family: monospace;
    width: 100%;
    line-break: anywhere;
  }

</style>
