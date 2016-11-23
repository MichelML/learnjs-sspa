describe('LearnJS', function() {
  it('can show a problem view', function() {
    learnjs.showView("#problem-1");
    expect($('.view_container .problem-view').length).toEqual(1);
  });
})
