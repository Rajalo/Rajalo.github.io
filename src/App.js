'use strict'

import buildTabs from "./TabSelector.js"
import buildMode from "./DarkMode.js"
import buildPixelArt from "./PixelRender.js"


window.onload = function() {
    buildTabs();
    buildMode();
    buildPixelArt();
}
