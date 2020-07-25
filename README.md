
<!--#echo json="package.json" key="name" underline="=" -->
refine-if-defined
=================
<!--/#echo -->

<!--#echo json="package.json" key="description" -->
If a value is defined (!== undefined), call a function to potentially refine
it.
<!--/#echo -->



API
---

This module exports one function:

### refineIfDefined([how[, opt]])(val)

If `val` is undefined, return it.
Otherwise, call `how(val)` to obtain a possible replacement `better`.
If `better` is defined (i.e. not undefined), return it;
else return the original `val`.

`opts` is an optional options object that supports these keys:

* `async`: Boolean, whether `better` should be treated as a potential promise.
  When enabled, the result of `refineIfDefined` will be a Promise.




<!--#toc stop="scan" -->



Known issues
------------

* Needs more/better tests and docs.




&nbsp;


License
-------
<!--#echo json="package.json" key=".license" -->
ISC
<!--/#echo -->
