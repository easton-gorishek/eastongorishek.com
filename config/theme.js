import facepaint from 'facepaint';
import { darken } from 'polished';

const brand = {
  primary: '#0c0032',
  secondary: '#6f00ff',
};

const colors = {
  copy: '#f5f5f5',
  white: '#f5f5f5',
  smoke_black: '#100c08',
  electric_purple: brand.secondary,
  bg_color_light: '#f5f5f5',
  bg_color_dark: brand.primary,
  link_color: brand.secondary,
  link_color_hover: darken(0.05, brand.secondary),
};

const breakpoints = [375, 480, 576, 768, 1024];
const mq = facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`));

const theme = {
  brand,
  colors,
  mq,
};

export default theme;
