import React from 'react'
import Water from '../assets/img/water.jpg'
import Airbnb from '../assets/img/airbnb.png'
import { Facebook,Instagram,Apple,Mail} from 'lucide-react';
import {Link} from "react-router-dom";
const ReservationPage = () => {
    return (
        <div>
            <nav className="lg:ml-4 hidden md:block">
                <Link to="/">
                    <img src={Airbnb} alt="Icon" className="w-32" />
                </Link>
            </nav>
            <main className="grid grid-cols-1 md:grid-cols-2 md:gap-10 lg:gap-24 my-14 mx-10 md:mx-1 lg:mx-28">
                <section>
                    <span className="flex items-center relative">
                        {/* <ion-icon
                            name="chevron-back-outline"
                            className="absolute left-[-2rem]"
                        /> */}
                        <h1 className="text-3xl font-semibold">Request to book</h1>
                    </span>
                    <div className="flex gap-16 border border-zinc-300 py-3 px-5 rounded-lg mt-12">
                        <span>
                            <h1 className="text-base font-semibold">Good price.</h1>
                            <p className="text-base font-normal">
                                Your dates are Rp479,262 less than the avg. nightly rate over the
                                last 3 months.
                            </p>
                        </span>
                        <span className="text-4xl text-[#e31c5f] -rotate-90">
                            {/* <ion-icon name="pricetags-outline" /> */}
                        </span>
                    </div>
                    <div className="flex flex-col gap-y-5 py-5 border-b border-zinc-300">
                        <h1 className="text-xl font-semibold">Your trip</h1>
                        <div className="flex justify-between">
                            <span>
                                <p className="text-base font-semibold">Dates</p>
                                <p className="text-base font-normal">May 15-24</p>
                            </span>
                            <a href="#" className="text-base font-semibold underline">
                                Edit
                            </a>
                        </div>
                        <div className="flex justify-between">
                            <span>
                                <p className="text-base font-semibold">Guests</p>
                                <p className="text-base font-normal">1 guest</p>
                            </span>
                            <a href="#" className="text-base font-semibold underline">
                                Edit
                            </a>
                        </div>
                    </div>
                    <div className="py-5 border-b border-zinc-300">
                        <h1 className="text-xl font-semibold">Choose how to pay</h1>
                        <div className="flex justify-between mt-5 p-3 border-2 border-black rounded-t-lg">
                            <span>
                                <h1 className="text-base font-semibold">Pay in full</h1>
                                <p className="text-base font-normal">
                                    Pay the total (Rp24,946,610.00).
                                </p>
                            </span>
                            <span className="text-3xl cursor-pointer">
                                {/* <ion-icon name="radio-button-on-outline" /> */}
                            </span>
                        </div>
                        <div className="flex justify-between p-3 border border-zinc-300 rounded-b-lg">
                            <span>
                                <h1 className="text-base font-semibold">
                                    Pay part now, part later
                                </h1>
                                <p className="text-base font-normal">
                                    Rp12,473,305.00 due today, Rp12,473,305.00 on May 2, 2024. No
                                    extra fees.
                                    <a href="#" className="text-base font-semibold underline">
                                        More info
                                    </a>
                                </p>
                            </span>
                            <span className="text-3xl cursor-pointer">
                                {/* <ion-icon name="radio-button-off-outline" /> */}
                            </span>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-xl font-semibold my-5">
                            Log in or sign up to book
                        </h1>
                        <button
                            type="button"
                            className="relative w-full cursor-default rounded-t-lg bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:rounded-lg focus:ring-2 focus:ring-black sm:text-sm sm:leading-6"
                        >
                            <span className="flex flex-col">
                                <span className="opacity-60">Country code</span>
                                <p className="text-base font-normal">Indonesia(+62)</p>
                            </span>
                            <span className="absolute inset-y-0 right-0 flex items-center pr-3 text-xl">
                                {/* <ion-icon name="chevron-down-outline" /> */}
                            </span>
                        </button>
                        <input
                            type="number"
                            className="relative w-full cursor-default rounded-b-lg bg-white py-4 px-3 text-left placeholder:text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:rounded-lg focus:ring-2 focus:ring-black sm:text-sm sm:leading-6"
                            placeholder="Phone number"
                        />
                        <p className="text-xs my-2">
                            We’ll call or text you to confirm your number. Standard message and
                            data rates apply.
                            <a href="#" className="font-semibold underline">
                                Privacy Policy
                            </a>
                        </p>
                        <button className="bg-gradient-to-r from-[#e61e50] via-[#e31b5e] to-[#d80566] w-full mt-2 rounded-lg py-3 text-white text-base font-semibold">
                            Continue
                        </button>
                        <div className="flex items-center gap-2 my-4">
                            <div className="border-b w-[50%] h-1 border-zinc-300" />
                            <p className="text-xs">or</p>
                            <div className="border-b w-[50%] h-1 border-zinc-300" />
                        </div>
                        <div className="grid grid-cols-3 gap-5">
                            <div className="border border-black rounded-lg py-3 flex justify-center text-2xl">
                                <Facebook/>
                            </div>
                            <div className="border border-black rounded-lg py-3 flex justify-center text-2xl">
                                <Instagram/>
                            </div>
                            <div className="border border-black rounded-lg py-3 flex justify-center text-2xl">
                               <Apple/>
                            </div>
                        </div>
                        <div className="relative border border-black rounded-lg py-3 flex justify-center text-sm mt-4">
                            <span className="absolute left-5 text-xl">
                               <Mail/>
                            </span>
                            Continue with email
                        </div>
                    </div>
                </section>
                <section className="mt-20">
                    <div id="elementFix" className="border border-zinc-300 rounded-lg p-6">
                        <div className="flex gap-4 items-center border-b border-zinc-300 pb-6">
                            <img
                                src={Water}
                                alt="image"
                                className="w-28 h-28 rounded-xl object-cover"
                            />
                            <span className="overflow-hidden">
                                <h1 className="text-base font-semibold">
                                    SarNest - Designed with Nature
                                </h1>
                                <p className="text-base font-normal">Entire home</p>
                                <span className="flex gap-1 items-center text-sm font-normal">
                                    {/* <ion-icon name="star" /> */}
                                    <span className="text-sm font-semibold">4.89</span> (35 reviews) •
                                    {/* <ion-icon name="bulb" /> */}
                                    Superhost
                                </span>
                            </span>
                        </div>
                        <div className="border-b border-zinc-300 rounded-lg py-6">
                            <h1 className="text-xl font-semibold">Price details</h1>
                            <span className="flex justify-between mt-4 flex-wrap">
                                <p className="text-base font-normal">Rp2,571,716.00 x 9 nights</p>
                                <p className="text-base font-normal">Rp23,145,444.00</p>
                            </span>
                            <span className="flex justify-between flex-wrap mt-3">
                                <p className="text-base font-normal">Weekly stay discount</p>
                                <p className="text-base font-normal text-[#1e9722]">
                                    -Rp2,314,548.00
                                </p>
                            </span>
                            <span className="flex justify-between flex-wrap mt-3">
                                <a href="#" className="text-base font-normal underline">
                                    Cleaning fee
                                </a>
                                <p className="text-base font-normal">Rp736,038.00s</p>
                            </span>
                            <span className="flex justify-between flex-wrap mt-3">
                                <a href="#" className="text-base font-normal underline">
                                    Airbnb service fee
                                </a>
                                <p className="text-base font-normal">Rp3,379,676.00</p>
                            </span>
                        </div>
                        <div className="flex justify-between mt-6 text-base font-semibold">
                            <h1>Total(IDR)</h1>
                            <h1>Rp24,946,610.00</h1>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="border-t border-zinc-300 py-5 px-20 md:flex justify-between">
                <span className="text-sm font-normal flex gap-2">
                    © 2024 Airbnb,Inc. ·
                    <a href="#" className="hover:underline">
                        Terms
                    </a>{" "}
                    ·
                    <a href="#" className="hover:underline">
                        Sitemap
                    </a>{" "}
                    ·
                    <a href="#" className="hover:underline">
                        Privacy
                    </a>{" "}
                    ·
                    <a href="#" className="hover:underline">
                        Your Privacy Choices
                    </a>
                </span>
                <div className="flex gap-5">
                    <span className="flex items-center gap-2 text-sm font-semibold">
                        {/* <ion-icon name="globe-outline" /> */}
                        <h1>English(US)</h1>
                    </span>
                    <span className="text-sm font-semibold">
                        <h1>RP IDR</h1>
                    </span>
                    <span className="flex items-center gap-3 text-sm font-semibold">
                    <Facebook/>
                    <Instagram/>
                    <Apple/>
                    </span>
                </div>
            </footer>
        </div>
    )
}

export default ReservationPage
