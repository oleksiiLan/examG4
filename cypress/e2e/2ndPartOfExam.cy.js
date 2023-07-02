import user from "../fixtures/user.json";

it("Test 1 ", () => {
  cy.log("Get all posts. Verify HTTP response status code and content type.");

  cy.request("GET", "http://localhost:3000/posts").then((response) => {
    expect(response.status).to.be.equal(200);

    const contentType = response.headers["content-type"];
    expect(contentType).to.include("application/json");
  });
  cy.log;
});

it("Test 2", () => {
  cy.log(
    "Get only first 10 posts. Verify HTTP response status code. Verify that only first posts are returned"
  );
  cy.request("GET", "http://localhost:3000/posts?_start=0&_end=10").then(
    (response) => {
      expect(response.status).to.be.equal(200);

      const posts = response.body;
      expect(posts).to.have.lengthOf.at.most(10);

      const firstTenPosts = posts.slice(0, 10);
      expect(firstTenPosts).to.deep.equal(posts);
    }
  );
});

it("Test 3", () => {
  cy.log(
    "Get posts with id = 55 and id = 60. Verify HTTP response status code. Verify id values of returned records."
  );

  cy.request("GET", "http://localhost:3000/posts?id=55&id=60") // posts?id=1&id=2
    .then((response) => {
      expect(response.status).to.be.equal(200);

      const posts = response.body;
      expect(posts).to.have.lengthOf(2); //length = 2

      const postIds = posts.map((post) => post.id);
      expect(postIds).to.include.members([55, 60]);
    });
});

it("Test 4", () => {
  cy.log(" Create a post. Verify HTTP response status code. ");

  const newPost = {
    userId: 11,
    id: 111,
    title: "New post",
    body: "Create a post, test post.",
  };

  cy.request({
    method: "POST",
    url: "http://localhost:3000/664/posts",
    body: newPost,
    failOnStatusCode: false,
  }).then((response) => {
    expect(response.status).to.be.equal(401);
  });
});

it("Test 5", () => {
  cy.log(
    "Create post with adding access token in header. Verify HTTP response status code. Verify post is created."
  );

  const newPost = {
    userId: 12,
    id: 112,
    title: "test post 5",
    body: "Create post with adding access token in header. Verify HTTP response status code. Verify post is created",
  };

  cy.request({
    method: "POST",
    url: "http://localhost:3000/posts/664/posts",
    headers: {
      Authorization: "token here",
    },
    body: newPost,
    failOnStatusCode: false,
  }).then((response) => {
    expect(response.status).to.equal(201);

    const createdPost = response.body;
    expect(createdPost).to.deep.include(newPost);
  });
});

it("Test 6", () => {
  cy.log(
    "Create post entity and verify that the entity is created. Verify HTTP response status code. Use JSON in body."
  );
  const newPost = {
    userId: 13,
    id: 113,
    title: "Test post 6",
    body: "Create post entity and verify that the entity is created. Verify HTTP response status code. Use JSON in body.",
  };

  cy.request({
    method: "POST",
    url: "http://localhost:3000/posts",
    body: newPost,
    failOnStatusCode: false,
  }).then((response) => {
    expect(response.status).to.equal(201);

    const createdPost = response.body;
    expect(createdPost).to.deep.include(newPost);
  });
});

it("Test 7", () => {
  cy.log("Update non-existing entity. Verify HTTP response status code");
  const updatedPost = {
    userId: 14,
    id: 114,
    title: "Updated Post",
    body: "This is the updated content of the post",
  };

  cy.request({
    method: "PUT",
    url: "http://localhost:3000/posts",
    body: updatedPost,
    failOnStatusCode: false,
  }).then((response) => {
    expect(response.status).to.equal(404);
  });
});

it("Test 8", () => {
  cy.log(
    "Create post entity and update the created entity. Verify HTTP response status code and entity update"
  );
  const newPost = {
    userId: 15,
    id: 115,
    title: "New Post",
    body: "Create post entity and update the created entity. Verify HTTP response status code and entity update",
  };

  let createdPostId;

  cy.request({
    method: "POST",
    url: "http://localhost:3000/posts",
    body: newPost,
  }).then((response) => {
    expect(response.status).to.equal(201);

    const createdPost = response.body;
    createdPostId = createdPost.id;

    expect(createdPost).to.deep.include(newPost);

    const updatedPost = {
      userId: createdPost.userId,
      id: createdPostId,
      title: "test updated",
      body: "updated post",
    };

    cy.request({
      method: "PUT",
      url: `http://localhost:3000/posts/${createdPostId}`,
      body: updatedPost,
    }).then((response) => {
      expect(response.status).to.equal(200);

      const updatedPost = response.body;
      expect(updatedPost).to.deep.include(updatedPost);
    });
  });
});

it("Test 9", () => {
  cy.log("Delete non-existing post entity. Verify HTTP response status code");

  const nonExistingPostId = 123123;

  cy.request({
    method: "DELETE",
    url: `http://localhost:3000/posts/${nonExistingPostId}`,
    failOnStatusCode: false,
  }).then((response) => {
    expect(response.status).to.equal(404);
  });
});

it("Test 10", () => {
  cy.log(
    "Create post entity, update the created entity, and delete the entity. Verify HTTP response status code and verify that the entity is deleted"
  );
  const newPost = {
    userId: 16,
    id: 116,
    title: "New Post qweqwe",
    body: "Create post entity, update the created entity, and delete the entity. Verify HTTP response status code and verify that the entity is deleted.",
  };

  let createdPostId;

  cy.request({
    method: "POST",
    url: "http://localhost:3000/posts",
    body: newPost,
  }).then((response) => {
    expect(response.status).to.equal(201);

    const createdPost = response.body;
    createdPostId = createdPost.id;

    expect(createdPost).to.deep.include(newPost);

    const updatedPost = {
      id: createdPostId,
      userId: createdPost.userId,
      title: "123qwe",
      body: "updated post 123qwe",
    };

    cy.request({
      method: "PUT",
      url: `http://localhost:3000/posts/${createdPostId}`,
      body: updatedPost,
    }).then((response) => {
      expect(response.status).to.equal(200);

      const updatedPost = response.body;
      expect(updatedPost).to.deep.include(updatedPost);

      cy.request({
        method: "DELETE",
        url: `http://localhost:3000/posts/${createdPostId}`,
      }).then((response) => {
        expect(response.status).to.equal(200);
      });
    });
  });
});
