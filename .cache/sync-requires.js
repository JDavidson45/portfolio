const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/justindavidson/Desktop/portfolio/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/justindavidson/Desktop/portfolio/src/pages/404.js"))),
  "component---src-pages-about-js": hot(preferDefault(require("/Users/justindavidson/Desktop/portfolio/src/pages/about.js"))),
  "component---src-pages-earbuds-js": hot(preferDefault(require("/Users/justindavidson/Desktop/portfolio/src/pages/Earbuds.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/justindavidson/Desktop/portfolio/src/pages/index.js"))),
  "component---src-pages-page-3-js": hot(preferDefault(require("/Users/justindavidson/Desktop/portfolio/src/pages/page-3.js"))),
  "component---src-pages-page-4-js": hot(preferDefault(require("/Users/justindavidson/Desktop/portfolio/src/pages/page-4.js"))),
  "component---src-pages-projects-js": hot(preferDefault(require("/Users/justindavidson/Desktop/portfolio/src/pages/projects.js"))),
  "component---src-pages-quarintini-js": hot(preferDefault(require("/Users/justindavidson/Desktop/portfolio/src/pages/Quarintini.js"))),
  "component---src-pages-skills-js": hot(preferDefault(require("/Users/justindavidson/Desktop/portfolio/src/pages/skills.js"))),
  "component---src-pages-using-typescript-tsx": hot(preferDefault(require("/Users/justindavidson/Desktop/portfolio/src/pages/using-typescript.tsx")))
}

