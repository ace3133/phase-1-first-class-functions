

function receivesAFunction(callback) {
    callback();
  }
  
  function returnsANamedFunction() {
    return function namedFunction() {
        // funtion body
    };
  }
  
  function returnsAnAnonymousFunction() {
    return function() {
      // function body
    };
  }
  
  