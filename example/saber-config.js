module.exports = {
  siteConfig: {
    title: "sadt.",
  },
  theme: "../src",
  permalinks: {
    post: "/labs/:slug",
    page: "/:slug",
  },
  themeConfig: {
    name: "Surya",
    job: "Software Engineer",
    socialMedia: [
      {
        text: "linkedin",
        link: "",
      },
      {
        text: "github",
        link: "",
      },
      {
        text: "dribbble",
        link: "",
      },
    ],
    nav: [
      {
        text: "Home",
        link: "/",
      },
      {
        text: "Labs",
        link: "/labs",
      },
    ],
  },
  plugins: [
    {
      resolve: "saber-plugin-query-posts",
      options: {
        paginationOptions: {
          perPage: 2,
        },
      },
    },
  ],
};
