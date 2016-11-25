"use strict";
learnjs.problems = [
  {
    description: ' What is the truth?',
    code: 'function problem() {return __; }'
  },
  {
    description: 'Simple Math',
    code: "function problem() { return 42 === 6 * __; }"
  }
];


var learnjs = {};

learnjs.problemView = function(problemNumber) {
  var view = $('.templates .problem-view').clone();
  view.find('.title').text('Problem #' + problemNumber);
  return view;
};

learnjs.showView = function(hash) {
  var routes = {
    "#problem": learnjs.problemView
  };
  var hashParts = hash.split('-');
  var viewFn = routes[hashParts[0]];
  if (viewFn) $(".view-container").empty().append(viewFn(hashParts[1]));
};

learnjs.appOnReady = function() {
  window.onhashchange = function() {
    learnjs.showView(window.location.hash);
  };
  learnjs.showView(window.location.hash);
};
