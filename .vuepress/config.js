module.exports = {
  theme:"antdocs",
  title: "杨某人的面试题库",
  description: "A lightweight creator for VuePress project.",
  base: "/frontEndInterviewDB/",
  head: [
    ["link",{ rel: "icon",href: "/assets/logo.png" }]
  ],
  markdown: {
    lineNumbers: false,
  },
  themeConfig: {
    smoothScroll: true,
    nav: require("./config/nav"),
    sidebar: require("./config/sidebar"),
    lastUpdated: "Last Updated",
    repo: "https://github.com/zpfz/vuepress-creator",
    editLinks: false,
  },
};
