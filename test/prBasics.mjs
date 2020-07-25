// -*- coding: utf-8, tab-width: 2 -*-

import test from 'p-tape';
import pImmediate from 'p-immediate';
import mustBe from 'typechecks-pmb/must-be';

import rid from '../pr';

const u = undefined;
const mustBeThenable = mustBe('thenable', 'promised result');

function ensurePromises(input) {
  return async function ep(refineHow) {
    async function refineSoon(x) {
      await pImmediate();
      return refineHow(x);
    }
    const pr = rid(refineHow && refineSoon)(input);
    mustBeThenable(pr);
    return pr;
  };
};

test('Promised: value = undefined', async(t) => {
  t.plan(4);
  const v = u;
  const ep = ensurePromises(v);
  t.same(await ep(),            v);
  t.same(await ep(null),        v);
  t.same(await ep(String),      u);
  t.same(await ep(Math.sqrt),   u);
});

test('Promised: value = 9', async(t) => {
  t.plan(4);
  const v = 9;
  const ep = ensurePromises(v);
  t.same(await ep(),            v);
  t.same(await ep(null),        v);
  t.same(await ep(String),      '9');
  t.same(await ep(Math.sqrt),   3);
});







/* scroll */
