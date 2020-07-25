// -*- coding: utf-8, tab-width: 2 -*-

import test from 'p-tape';

import rid from '..';

const u = undefined;

test('Basics: value = undefined', async(t) => {
  t.plan(4);
  const v = u;
  t.same(rid()(v),            v);
  t.same(rid(null)(v),        v);
  t.same(rid(String)(v),      u);
  t.same(rid(Math.sqrt)(v),   u);
});

test('Basics: value = 9', async(t) => {
  t.plan(4);
  const v = 9;
  t.same(rid()(v),            v);
  t.same(rid(null)(v),        v);
  t.same(rid(String)(v),      '9');
  t.same(rid(Math.sqrt)(v),   3);
});







/* scroll */
