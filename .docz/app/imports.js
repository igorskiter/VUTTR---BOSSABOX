export const imports = {
  'src/components/UI/Button/Button.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-ui-button-button" */ 'src/components/UI/Button/Button.mdx'),
  'src/components/UI/Icon/Icon.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-ui-icon-icon" */ 'src/components/UI/Icon/Icon.mdx'),
}
