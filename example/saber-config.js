module.exports = {
  siteConfig: {
    title: "sadt."
  },
  theme: "../src",
  themeConfig: {
    name: "Surya",
    job: "Software Engineer",
    socialMedia: [
      {
        text: "linkedin",
        link: ""
      },
      {
        text: "github",
        link: ""
      },
      {
        text: "dribbble",
        link: ""
      }
    ],
    nav: [
      {
        text: "Home",
        link: "/"
      },
      {
        text: "About Me",
        link: "/about/"
      },
      {
        text: "Blog",
        link: "/blog/"
      }
    ]
  },
  plugins: [
    {
      resolve: "saber-plugin-query-posts",
      options: {
        paginationOptions: {
          perPage: 2
        }
      }
    }
  ]
};
