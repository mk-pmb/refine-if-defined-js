/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';
/*global Promise: true */

function identity(x) { return x; }

function refineIfDef(how) {
  if (!how) { return identity; }
  return function refine(val) {
    if (val === undefined) { return val; }
    var better = how(val);
    return (better === undefined ? val : better);
  };
}

module.exports = refineIfDef;
