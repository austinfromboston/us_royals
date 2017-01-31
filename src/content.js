require.context("./images/", true, /^\.\/.*\.png/);
require.context(".", true, /^\.\/.*\.json/);

import replaceRefs from './replaceRefs';

replaceRefs();
var finalTimer = setTimeout(replaceRefs, 5000);
var addonTimer = setInterval(replaceRefs, 60000);
