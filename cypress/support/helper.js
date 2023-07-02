export function getCheck() {
  cy.request("GET", 'http://localhost:3000/posts')
  .then((response) => {
      expect(response.status).to.be.equal(200);
      expect(response.body.id).to.be.equal(post.id);
      expect(response.body.name).to.be.equal(post.name);
    });
}