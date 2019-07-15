module.exports = {
  presets: [
    '@vue/app',
    // ["@babel/env", { "modules": false }]
  ["@babel/env", { "modules": false }]
 ],
 "plugins": [
  [
    "component",
    {
      "libraryName": "element-ui",
      "styleLibraryName": "theme-chalk"
    }
  ],
],
plugins: [
  ['import', {
    libraryName: 'vant',
    libraryDirectory: 'es',
    style: true
  }, 'vant']
]

}
