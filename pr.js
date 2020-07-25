/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';
/*global Promise: true */

function promisedRefineIfDef(how) {
  if (!how) { return Promise.resolve.bind(Promise); }
  return function refine(valPr) {
    return Promise.resolve(valPr).then(function chk(val) {
      if (val === undefined) { return val; }
      return Promise.resolve(val).then(how).then(function ifDef(better) {
        return (better === undefined ? val : better);
      });
    });
  };
}

module.exports = promisedRefineIfDef;
