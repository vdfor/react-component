module.exports = {
  presets: [
    require.resolve('@babel/preset-env'), [
      require.resolve('@babel/preset-typescript'),
      { isTSX: true, allExtensions: true }
    ],
    require.resolve('@babel/preset-react')
  ],
  plugins: [
    require.resolve('@babel/plugin-external-helpers'),
    require.resolve('@babel/plugin-syntax-dynamic-import'),
    require.resolve('@babel/plugin-transform-runtime'),
    require.resolve('@babel/plugin-proposal-class-properties'),
    require.resolve('@babel/plugin-proposal-object-rest-spread')
  ]
}