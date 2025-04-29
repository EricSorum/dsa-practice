var argumentsLength = function(...args) {
  return Object.keys(args).length;
};
argumentsLength(1,2,3,4)

/**
 * argumentsLength(1, 2, 3); // 3
 */
