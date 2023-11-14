import React from "react";
import ThankYou from "../../../assets/images/icon-thank-you.svg";

const Confirmation = () => {
  return (
    <div className="flex flex-1 m-4">
      <div className="flex flex-col shadow-2xl sm:shadow-none justify-center items-center rounded mt-[-100px] sm:mt-[-200px] md:mt-[-300px] lg:mt-[0px] xl:mt-[0px] bg-white">
        <img src={ThankYou} alt="logo" />
        <div className="text-3xl xs:text-lg text-purple-shade-1 font-bold my-4">
          Thank you
        </div>
        <div className="text-center mx-20 text-gray-shade-5">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
