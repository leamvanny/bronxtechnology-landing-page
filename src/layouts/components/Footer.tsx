import React from "react";
import BronxLogo from "../../assets/images/bronx-logo-retina.png";

const Footer = () => {
  return (
    <div className="border-t bg-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
        <div className="col-span-2">
          <img src={BronxLogo} alt="MyLogo" className="h-10 w-fit mb-6" />
          <p className="text-text text-sm text-left">
            #1 Suite 1502, St. 360, Boeung Keng Kang I Phnom Penh, Cambodia
          </p>
          <div className="text-left text-text">
            <span>P: </span>
            <a
              href="tel:+855962229928"
              className="hover:text-blue-500 text-sm transition-all ease-in-out duration-200"
            >
              +855-96-222-9928
            </a>
          </div>
          <div className="text-left text-text">
            <span>E: </span>
            <a
              href="mailto:info@bronxtechnology.com"
              className="hover:text-blue-500 text-sm transition-all ease-in-out duration-200"
            >
              info@bronxtechnology.com
            </a>
          </div>

          <div className="text-left text-text mt-4">
            <a
              href="https://www.facebook.com/bronxtechnology"
              className="hover:text-blue-500 text-sm transition-all ease-in-out duration-200"
            >
              Facebook
            </a>
            <span className="mx-2">|</span>
            <a
              href="https://www.linkedin.com/company/bronxtechnology"
              className="hover:text-blue-500 text-sm transition-all ease-in-out duration-200"
            >
              LinkedIn
            </a>
            <span className="mx-2">|</span>
            <a
              href="https://www.instagram.com/bronxtechnology"
              className="hover:text-blue-500 text-sm transition-all ease-in-out duration-200"
            >
              Instagram
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-[16px] text-title font-medium text-left">
            Solutions
          </h3>
          <ul className="mt-2 text-sm text-text text-left space-y-2">
            <li className="hover:text-blue-500 transition-colors duration-200">
              <a href="#">Loyalty & Rewards</a>
            </li>
            <li className="hover:text-blue-500 transition-colors duration-200">
              <a href="#">HR & Payroll</a>
            </li>
            <li className="hover:text-blue-500 transition-colors duration-200">
              <a href="#">Payment & Wallet</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-[16px] text-title font-medium text-left">
            Industries
          </h3>
          <ul className="mt-2 text-sm text-text text-left space-y-2">
            <li className="hover:text-blue-500 transition-colors duration-200">
              <a href="#">Construction</a>
            </li>
            <li className="hover:text-blue-500 transition-colors duration-200">
              <a href="#">Education</a>
            </li>
            <li className="hover:text-blue-500 transition-colors duration-200">
              <a href="#">Financial</a>
            </li>
            <li className="hover:text-blue-500 transition-colors duration-200">
              <a href="#">Healthcare</a>
            </li>
            <li className="hover:text-blue-500 transition-colors duration-200">
              <a href="#">Logistic</a>
            </li>
            <li className="hover:text-blue-500 transition-colors duration-200">
              <a href="#">Manufacturing</a>
            </li>
            <li className="hover:text-blue-500 transition-colors duration-200">
              <a href="#">Retail and F&B</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-[16px] text-title font-medium text-left">
            Company
          </h3>
          <ul className="mt-2 text-sm text-text text-left space-y-2">
            <li className="hover:text-blue-500 transition-colors duration-200">
              <a href="#">About</a>
            </li>
            <li className="hover:text-blue-500 transition-colors duration-200">
              <a href="#">Our Team</a>
            </li>
            <li className="hover:text-blue-500 transition-colors duration-200">
              <a href="#">Locations</a>
            </li>
            <li className="hover:text-blue-500 transition-colors duration-200">
              <a href="#">News</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-[16px] text-title font-medium text-left">
            Support
          </h3>
          <ul className="mt-2 text-sm text-text text-left space-y-2">
            <li className="hover:text-blue-500 transition-colors duration-200">
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
