

it("GET pet by id", () => {
    cy.log(` Get all posts. Verify HTTP response status code and content type.`);
  
    //getCheck();
    // cy.request("GET", `http://localhost:3000/posts`).then((response) => {
    //   expect(response.status).to.be.equal(200);
    cy.request('http://localhost:3000/posts')
      .its('status')
      .should('eq', 200);

    cy.request('http://localhost:3000/posts')
      .its('headers')
      .its('content-type')
      .should('include', 'application/json');
    //   expect(response.body.id).to.be.equal(pet.id);
    //   expect(response.body.name).to.be.equal(pet.name);
    //   expect(response.body.category.id).to.be.equal(pet.category.id);
    //   expect(response.body.category.name).to.be.equal(pet.category.name);
    });