module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    //新版本要这么写 element-ui 样式才会按需引入
    ["@babel/preset-env", { "modules": false }]
  ],
  plugins: [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
