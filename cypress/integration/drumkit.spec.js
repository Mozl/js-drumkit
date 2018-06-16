describe('My First Test', function() {
  it('Does not do much!', function() {
    expect(true).to.equal(true);
  })

  it('visits the drumkit page', function() {
    cy.visit('http://127.0.0.1:5500/index.html');
  });
});