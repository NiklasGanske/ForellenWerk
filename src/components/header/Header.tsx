import React, { ReactNode } from "react";

type HeaderProps = {
  children: ReactNode;
};

const Header: React.FC<HeaderProps> = ({ children }) => {
  return <div className="flex">{children}</div>;
};

export default Header;
