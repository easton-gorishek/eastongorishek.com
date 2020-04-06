import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

const Link = ({ children, to, ...other }) => {
  return (
    <GatsbyLink
      to={to}
      {...other}
    >
      {children}
    </GatsbyLink>
  );
};

export default Link;
