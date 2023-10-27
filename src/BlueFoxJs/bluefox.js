import { getProperty } from "BlueFoxJs/Util/GetProperty.js";
import { deepFreeze } from "BlueFoxJs/Util/DeepFreeze.js";
import { walkHorizontally } from "BlueFoxJs/Walker/WalkHorizontally.js";
import { walkVertically } from "BlueFoxJs/Walker/WalkVertically.js";
import { view } from "BlueFoxJs/Sync/View.js";

("use strict");
export const BlueFoxJs = (() => {
  let BlueFoxJs = {
    Util: {
      getProperty: getProperty,
    },
    Walker: {
      walkHorizontally: walkHorizontally,
      walkVertically: walkVertically,
    },
    Sync: {
      view: view,
    },
  };
  return deepFreeze(BlueFoxJs);
})();
