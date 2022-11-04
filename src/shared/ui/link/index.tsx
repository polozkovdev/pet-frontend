import React from 'react';
import {Link as ReactLink, LinkProps} from "react-router-dom";

export const Link: React.FC<LinkProps> = ({to, children, className, ...props}) => {
  return (
    <ReactLink to={to} className={className} {...props}>{children}</ReactLink>
  );
};
