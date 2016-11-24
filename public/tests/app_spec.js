describe("LearnJS", function() {
  it("can show a problem view", function() {
    learnjs.showView("problem-view");
    expect($(".view-container .problem-view").length).toEqual(1);
  });
});
