import facepaint from 'facepaint';
import { lighten } from 'polished';
const brand = {
  primary: '#0c0032',
  secondary: '#3500d3',
};

const colors = {
  copy: '#f5f5f5',
  white: '#f5f5f5',
  smoke_black: '#100c08',
  electric_purple: '#6f00ff',
  bg_color_light: brand.secondary,
  bg_color_dark: brand.primary,
  link_color: '#26b99a',
  link_color_hover: lighten(0.05, '#26b99a'),
};

const breakpoints = [375, 480, 576, 768, 1024];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

const theme = {
  brand,
  colors,
  mq,
};

export default theme;
