"use strict";
var learnjs = {};
learnjs.showView = function(hash) {
  var problemView = $("<div class='problem-view'>").text("Coming soon!");
  $(".view_container").empty().append(problemView);
}
