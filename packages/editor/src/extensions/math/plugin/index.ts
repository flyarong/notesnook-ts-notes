/*---------------------------------------------------------
 *  Author: Benjamin R. Bray
 *  License: MIT (see LICENSE in project root for details)
 *--------------------------------------------------------*/

// core functionality
export { MathView, type ICursorPosObserver } from "./math-node-view";
export {
  mathPlugin,
  createMathView,
  type IMathPluginState
} from "./math-plugin";

// recommended plugins
export { mathBackspaceCmd } from "./plugins/math-backspace";

// optional / experimental plugins
export { mathSelectPlugin } from "./plugins/math-select";

// commands
export { insertMathNode } from "./commands/insert-math-node";

// utilities
export { mathSerializer } from "./utils/text-serializer";
export * from "./utils/types";
