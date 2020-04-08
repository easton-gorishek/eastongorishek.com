import React from 'react';
import Header from './header';
import Subheader from './subheader';
import Paragraph from './paragraph';
import List from './list';
import Li from './li';

export default {
  wrapper: ({ children }) => children,
  h1: props => <Header {...props} />,
  h2: props => <Subheader {...props} />,
  p: props => <Paragraph {...props} />,
  ul: props => <List {...props} />,
  li: props => <Li {...props} />,
};
