export const compileStyleToCssClass = (styleObj) => {
  return Object.keys(styleObj).map(ss => ss).join(' ')

}