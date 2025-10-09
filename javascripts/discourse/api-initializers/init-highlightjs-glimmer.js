import { apiInitializer } from "discourse/lib/api";
import { glimmer, glimmerJavascript } from "../../vendor/highlightjs-glimmer";

export default apiInitializer((api) => {
  api.registerHighlightJSLanguage("glimmer", glimmer);
  api.registerHighlightJSLanguage("glimmer-javascript", glimmerJavascript);
});
