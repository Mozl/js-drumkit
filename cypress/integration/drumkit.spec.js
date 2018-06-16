describe('My First Test', function() {
  it('Does not do much!', function() {
    expect(true).to.equal(true);
  });

  it('visits the drumkit page', function() {
    cy.visit('http://127.0.0.1:5500/index.html');
  });

  it('finds Tom element', function() {
    cy.visit('http://127.0.0.1:5500/index.html');
    cy.contains('boom');
  });

  it('plays a sound', function() {
    cy.visit('http://127.0.0.1:5500/index.html');
    cy.get('#g').type('g');
  });

  it('checks error for non drum key', function() {
    cy.visit('http://127.0.0.1:5500/index.html');
    cy.get('#t').type("t");
    cy.get('.error').should('be.empty');
  });
});