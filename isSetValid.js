
    // this is a piece of code from google maps main js file
    // used to verify if Set is fully shimed (otherwise google maps will use its own shim)
    function isSetValid(){
      if (!Set || "function" != typeof Set || !Set.prototype.entries || "function" != typeof Object.seal)
          return !1;
      try  {
          var c = Object.seal({ x: 4 }), d = new Set(Ca([c]));
          if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({ x: 4 }) != d || 2 != d.size)
              return !1;
          var e = d.entries(), f = e.next();
          if (f.done || f.value[0] != c || f.value[1] != c)
              return !1;
          f = e.next();
          return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done;
      } catch (g) {
          return !1;
      }
    }

    // SO, the array iterator returned here doesn't have Symbol.iterator, so es6-shims SetShims will fail accepting it
    function Ca(a) {
        var iter = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return iter ? iter.call(a) : { next: getIterator(a) };
    };


     function getIterator(a) {
        var index = 0;
        return function () {
            return index < a.length ? { done: !1, value: a[index++] } : { done: !0 };
        };
    };
