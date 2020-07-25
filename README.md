
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

### refineIfDefined([how])(val)

If `how` is false-y, or `val` is undefined, return `val`.
Otherwise, call `how(val)` to obtain a possible replacement `better`.
If `better` is defined (i.e. not undefined), return it;
else return the original `val`.



Promise support
---------------

There's also a submodule `refine-if-defined/pr.js` that exports one function:

### promisedRefineIfDefined([how])(val)

It works as above but with async/Promise support in all parts.
Will always return a Promise.





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
