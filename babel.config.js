module.exports = {
  presets: [
// <<<<<<< HEAD
    '@vue/app',
    ["@babel/env", { "modules": false }]
  ],
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant'],
    [
          "component",
          {
            "libraryName": "element-ui",
            "styleLibraryName": "theme-chalk"
          }
        ],
  ]
// =======
//     '@vue/app',
//     // ["@babel/env", { "modules": false }]
//   ["@babel/env", { "modules": false }]
//  ],
//  "plugins": [
//   [
//     "component",
//     {
//       "libraryName": "element-ui",
//       "styleLibraryName": "theme-chalk"
//     }
//   ],
// ],
// plugins: [
//   ['import', {
//     libraryName: 'vant',
//     libraryDirectory: 'es',
//     style: true
//   }, 'vant']
// ]

// >>>>>>> xiaodou
}
