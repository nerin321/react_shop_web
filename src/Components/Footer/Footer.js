import React from "react";

const Footer = () => {
    return(
        <footer class="bg-footerbg">
            <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div class="md:flex md:justify-between">
                    <div class="mb-6 md:mb-0">
                        <a href="/" class="flex items-center text-black font-JosefinSansBold text-4xl">
                            Hekto
                        </a>
                        <div class="relative py-3 pt-8">
                            <input type="search" id="default-search" class="block w-72 h-11 rounded-sm opacity-40" placeholder="Enter Email Address" required/>
                            <button type="submit" class="h-10 w-28 absolute end-1 bottom-3.5 rounded bg-pink text-17px not-italic text-white">Sign Up</button>
                        </div>
                        <div>
                            <span class="text-subtextcolor font-LatoRegular text-sm">
                                Contact Info
                                <br/>
                                17 Princess Road, London, Greater London NW1 8JR, UK
                            </span>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div className="pr-10">
                            <h2 class="mb-6 text-base font-JosefinSansBold text-gray-900">Categories</h2>
                            <ul class="font-LatoRegular text-sm text-subtextcolor">
                                <li class="mb-4">
                                    <a href="https://flowbite.com/" class="hover:underline">Laptops & Computers</a>
                                </li>
                                <li class="mb-4">
                                    <a href="https://tailwindcss.com/" class="hover:underline">Cameras & Photography</a>
                                </li>
                                <li class="mb-4">
                                    <a href="https://tailwindcss.com/" class="hover:underline">Smart Phones & Tablets</a>
                                </li>
                                <li class="mb-4">
                                    <a href="https://tailwindcss.com/" class="hover:underline">Video Games & Consoles</a>
                                </li>
                                <li class="mb-4">
                                    <a href="https://tailwindcss.com/" class="hover:underline">Waterproof Headphones</a>
                                </li>
                            </ul>
                        </div>
                        <div className="pr-10">
                            <h2 class="mb-6 text-base font-JosefinSansBold text-gray-900">Customer Care</h2>
                            <ul class="font-LatoRegular text-sm text-subtextcolor">
                                <li class="mb-4">
                                    <a href="https://flowbite.com/" class="hover:underline">My Account</a>
                                </li>
                                <li class="mb-4">
                                    <a href="https://flowbite.com/" class="hover:underline">Discount</a>
                                </li>
                                <li class="mb-4">
                                    <a href="https://flowbite.com/" class="hover:underline">Returns</a>
                                </li>
                                <li class="mb-4">
                                    <a href="https://flowbite.com/" class="hover:underline">Orders History</a>
                                </li>
                                <li class="mb-4">
                                    <a href="https://flowbite.com/" class="hover:underline">Order Tracking</a>
                                </li>
                            </ul>
                        </div>
                        <div className="pr-10">
                            <h2 class="mb-6 text-base font-JosefinSansBold text-gray-900">Pages</h2>
                            <ul class="font-LatoRegular text-sm text-subtextcolor">
                                <li class="mb-4">
                                    <a href="/blog" class="hover:underline">Blog</a>
                                </li>
                                <li class="mb-4">
                                    <a href="https://flowbite.com/" class="hover:underline">Browse the Shop</a>
                                </li>
                                <li class="mb-4">
                                    <a href="https://flowbite.com/" class="hover:underline">Category</a>
                                </li>
                                <li class="mb-4">
                                    <a href="https://flowbite.com/" class="hover:underline">Pre-Built Pages</a>
                                </li>
                                <li class="mb-4">
                                    <a href="https://flowbite.com/" class="hover:underline">Visual Composer Elements</a>
                                </li>
                                <li class="mb-4">
                                    <a href="https://flowbite.com/" class="hover:underline">WooCommerce Pages</a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <div class="sm:flex sm:items-center sm:justify-between">
                    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">©Webecy - All Rights Reserved</span>
                    <div class="flex mt-4 sm:justify-center sm:mt-0">
                        <a href="/" class="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                            <ion-icon name="logo-facebook"></ion-icon>
                        </a>
                        <a href="/" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <ion-icon name="logo-instagram"></ion-icon>
                        </a>
                        <a href="/" class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                            <ion-icon name="logo-twitter"></ion-icon>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
