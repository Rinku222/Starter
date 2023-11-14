import React, { ReactNode } from "react";

interface LayoutInterface {
  children: ReactNode;
}

const Layout = ({ children }: LayoutInterface) => {
  return (
    <div className="flex flex-1 flex-col px-0 sm:px-14">
      <div className="flex flex-1">{children}</div>
    </div>
  );
};

export default Layout;
