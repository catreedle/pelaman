exports.createPages = ({ actions: { createPage } }) => {
    createPage({
      path: "/post/",
      component: require.resolve("./src/templates/post.js"),
    })
  }