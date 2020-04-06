import React from 'react';
import Header from './header';
import Paragraph from './paragraph';

export default {
  wrapper: ({ children }) => children,
  h1: props => <Header {...props} />,
  p: props => <Paragraph {...props} />,
};
