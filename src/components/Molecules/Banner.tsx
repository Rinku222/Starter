import React, { memo } from "react";
import BackgroundImage from "../../assets/images/bg-sidebar-desktop.svg";
import MobileBackgroundImage from "../../assets/images/bg-sidebar-mobile.svg";

const Banner = () => {
  return (
    <div>
      <img
        src={BackgroundImage}
        className="h-screen hidden lg:block"
        alt="logo"
      />
      <img
        src={MobileBackgroundImage}
        className="w-screen block lg:hidden"
        alt="logo"
      />
    </div>
  );
};

export default memo(Banner);
