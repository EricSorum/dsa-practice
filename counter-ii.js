var createCounter = function(init) {
    const counter = {
      original: init,
      init: init,
      increment: function() {
        this.init = this.init += 1;
      },
      decrement: function() {
        this.init = this.init +- 1;
      },
      reset: function() {
        this.init = this.original;
      }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */