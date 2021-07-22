// https://github.com/jankiel7410/svelte-twemoji
import twemoji from "@discordapp/twemoji";
import { afterUpdate } from "svelte";
export function discordmoji(node, how) {
    if (how === void 0) { how = {}; }
    twemoji.parse(node, how);
    afterUpdate(function () {
        twemoji.parse(node, how);
    });
    return {
        update: function () {
            console.warn('Changing twemoji options after the action was mounted is not possible.');
        }
    };
}
