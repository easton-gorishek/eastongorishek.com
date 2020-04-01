import facepaint from 'facepaint';
const brand = {
  primary: '#0c0032',
  secondary: '#3500d3',
};

const colors = {
  copy: '#fffcec',
  white: '#fffcec',
  smoke_black: '#100c08',
  bg_color_light: brand.secondary,
  bg_color_dark: brand.primary,
  link_color: '#fffcec',
  link_color_hover: '#b9e1cc',
};

const breakpoints = [375, 480, 576, 768, 1024];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

const theme = {
  brand,
  colors,
  mq,
};

export default theme;

