import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="bg-footerbg px-[200px] pt-[95px] pb-[100px]">
        <div class="grid grid-cols-5 gap-4 mx-auto w-full max-w-screen-xl">
          <div className="col-span-2">
            <div className="font-JosefinSansBold text-[38px] mb-[31px]">
              Hekto
            </div>
            <div className="p-[3px] bg-white w-[377px] rounded-md flex justify-between mb-[25px]">
              <input
                placeholder="Enter Email Address"
                className="focus:outline-none pl-5 placeholder:font-LatoBlack"
              ></input>
              <button className="bg-[#FB2E86] hover:opacity-70 font-LatoBlack rounded-md pt-[10px] pb-[10px]  text-white pl-[40px] pr-[40px]">
                Sign Up
              </button>
            </div>
            <div className="text-[#8A8FB9] text-[16px] font-LatoRegular mb-[10px]">
              Contact Info
            </div>
            <div className="text-[#8A8FB9] text-[16px] font-LatoRegular mb-[10px]">
              17 Princess Road, London, Greater London NW1 8JR, UK
            </div>
          </div>
          <div>
            <ul>
              <div className="font-JosefinSansBold font-semibold text-[22px] mb-[42px]">
                Catagories
              </div>
              <li className="text-[#8A8FB9] text-[16px] font-LatoRegular mb-[21px] cursor-pointer">
                Laptops & Computers
              </li>
              <li className="text-[#8A8FB9] text-[16px] font-LatoRegular mb-[21px] cursor-pointer">
                Cameras & Photography
              </li>
              <li className="text-[#8A8FB9] text-[16px] font-LatoRegular mb-[21px] cursor-pointer">
                Smart Phones & Tablets
              </li>
              <li className="text-[#8A8FB9] text-[16px] font-LatoRegular mb-[21px] cursor-pointer">
                Video Games & Consoles
              </li>
              <li className="text-[#8A8FB9] text-[16px] font-LatoRegular mb-[21px] cursor-pointer">
                Waterproof Headphones
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <div className="font-JosefinSansBold font-semibold text-[22px] mb-[42px]">
                Customer Care
              </div>
              <li className="text-[#8A8FB9] text-[16px] font-LatoRegular mb-[21px] cursor-pointer">
                My Account
              </li>
              <li className="text-[#8A8FB9] text-[16px] font-LatoRegular mb-[21px] cursor-pointer">
                Discount
              </li>
              <li className="text-[#8A8FB9] text-[16px] font-LatoRegular mb-[21px] cursor-pointer">
                Returns
              </li>
              <li className="text-[#8A8FB9] text-[16px] font-LatoRegular mb-[21px] cursor-pointer">
                Orders History
              </li>
              <li className="text-[#8A8FB9] text-[16px] font-LatoRegular mb-[21px] cursor-pointer">
                Order Tracking
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <div className="font-JosefinSansBold font-semibold text-[22px] mb-[42px]">
                Pages
              </div>
              <li className="text-[#8A8FB9] text-[16px] font-LatoRegular mb-[21px] cursor-pointer">
                Blog
              </li>
              <li className="text-[#8A8FB9] text-[16px] font-LatoRegular mb-[21px] cursor-pointer">
                Browse the Shop
              </li>
              <li className="text-[#8A8FB9] text-[16px] font-LatoRegular mb-[21px] cursor-pointer">
                Category
              </li>
              <li className="text-[#8A8FB9] text-[16px] font-LatoRegular mb-[21px] cursor-pointer">
                Pre-Built Pages
              </li>
              <li className="text-[#8A8FB9] text-[16px] font-LatoRegular mb-[21px] cursor-pointer">
                Visual Composer Elements
              </li>
              <li className="text-[#8A8FB9] text-[16px] font-LatoRegular mb-[21px] cursor-pointer">
                WooCommerce Pages
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#E7E4F8] h-[53px] pl-[377px] pr-[377px] leading-[53px] flex justify-between">
        <div className="text-[#8A8FB9] text-[16px] font-LatoRegular">
          ©Webecy - All Rights Reserved
        </div>
        <div className="flex gap-[10px] align-middle items-center">
          <ion-icon name="logo-facebook" className="align-middle"></ion-icon>
          <ion-icon name="logo-github" className="align-middle"></ion-icon>
          <ion-icon name="logo-twitter" className="align-middle items-center"></ion-icon>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
