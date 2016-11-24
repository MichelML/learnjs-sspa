"use strict";
var learnjs = {};
learnjs.showView = function(hash) {
  var problemView = $("<div class='" + hash + "'>").text("Coming soon!");
  $(".view-container").empty().append(problemView);
};
console.log(1);
