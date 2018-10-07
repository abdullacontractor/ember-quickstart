module.exports = function() {
  return {
    name: "Ember Quickstart",
    short_name: "Quickstart",
    description: "An app to experiment with Ember PWAs",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#fff",

    icons: [
      {
        "src": "/assets/icons/atom.svg",
        "sizes": "192x192",
        "type":"image/svg"
      },
      {
        "src": "/assets/icons/atom.png",
        "sizes": "192x192",
        "type":"image/png"
      },
    ],

    apple: {
      statusBarStyle: 'black-translucent'
    },

    ms: {
      tileColor: '#ffffff'
    }
  }
}
