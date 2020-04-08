import React from 'react';
import { Link as GatsbyLink } from 'gatsby';

const Link = ({ children, to, ...other }) => {
  if (to && to.startsWith('http')) {
    return (
      <a href={to} {...other}>
        {children}
      </a>
    );
  }
  return (
    <GatsbyLink to={to} {...other}>
      {children}
    </GatsbyLink>
  );
};

export default Link;
