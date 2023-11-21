import React from "react";
import Select from "react-dropdown-select";

const langopt = [
    {value: 'English', label: 'English'},
    {value: 'Vietnamese', label: 'Vietnamese'},
];

const money = [
    {value: 'USD', label: 'USD'},
    {value: 'VND', label: 'VND'}
];

const HeadingBar = () => {
    return (
        <header className="bg-violet w-full h-11 shrink-0 flex justify-between px-80 text-white py-0">
            <div className="flex space-x-4 pr-96">
                <div className="flex items-center mb-2 pr-6">
                    <ion-icon name="mail-outline"></ion-icon>
                    <p>example@example.com</p>
                </div>
                <div className="flex items-center mb-2 pl-6">
                    <ion-icon name="call-outline"></ion-icon>
                    <p>0123456789</p>
                </div>
            </div>
            <div className="flex space-x-4 ">
                <div className="flex items-center px-2">
                    <Select className="border-none items-center" options={langopt} values={[langopt[0]]}/>
                </div>
                <div className="flex items-center w-auto  px-2">
                    <Select options={money} values={[money[0]]}/>
                </div>
                <div className="flex items-center w-auto px-2">
                    <p>Login</p>
                </div>
                <div className="flex items-center px-2">
                    <p>Wishlist</p>
                </div>
                <div className="flex items-center px-2">
                    <ion-icon name="cart-outline"></ion-icon>
                </div>
            </div>
        </header>
    );
};

export default HeadingBar;