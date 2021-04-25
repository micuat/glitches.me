module.exports = function (state, emitter) {
  emitter.on("render", () => {
  });

  emitter.on("navigate", () => {
    p(`festival.glitches.me`)
  .color([0, 0.5], 0.1, 1).shadow().bg([1, 0], 1, 0).size(40).parent("#bighead")
  .font("VT323").scrollX([0, 0.1]).out(0)

    // const isWelcome = state.params.mode === undefined;
    // const isEditor = state.params.mode == "remix" || state.params.mode == "new";
    // if (isWelcome || isEditor) {
    //   // ok
    // }
    // else {
    //   emitter.emit("pushState", "/");
    //   return;
    // }

    // if (isWelcome) {
    //   // top page
    //   state.editorSetup = false;
    //   emitter.emit("requests:loadSessions");
    //   emitter.emit("engine:clearEditor");
    //   emitter.emit("mouse:stopRecord", () => { });
    // }
    // else if (isEditor) {
    //   // editor
    //   state.startTime = +new Date;
    //   const id = state.params.id;

    //   emitter.emit("engine:initPlayer");
    //   emitter.emit("engine:initRecorder");

    //   emitter.emit("editor:setup", id);
    // }
  });
}
