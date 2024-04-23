import "../assets/styles/home.css";
import Card from "../components/cardproduct"
const Home = () => {
    return (
        <div className="home">
            <header>
                <div className="h-20 w-screen py-[10px] flex justify-between ps-8 pe-16 w-screen border-b-[1px] items-center fixed top-0 bg-white z-50">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png"
                        className=" object-cover w-28"
                    />
                    <div className="pl-[200px] px-8 max-sm:hidden">
                        <div className="flex items-center justify-start w-[340px] rounded-full shadow-sm hover:shadow-md h-12 border">
                            <button className="border-r-2 border-gray-100 px-4 text-sm font-medium">
                                Anywhere
                            </button>
                            <button className="border-r-2 border-gray-100 px-4 text-sm font-medium">
                                Any week
                            </button>
                            <button className="border-gray-100 px-4 gray-text text-sm font-medium">
                                Add guests
                            </button>
                            <i className="fa-solid fa-magnifying-glass bg-red-500 text-white rounded-full p-2 hover:bg-red-600" />
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-end items-center gap-1">
                            <button className="px-4 py-3 text-sm font-medium hover:bg-gray-100 hover:rounded-full">
                                Airbnb your home
                            </button>
                            <button className="p-3 flex items-center text-sm font-medium hover:bg-gray-100 hover:rounded-full">
                                <span className="material-symbols-outlined">language</span>
                            </button>
                            <a
                                href="../Login/index.html"
                                className="flex justify-evenly items-center gap-2 rounded-full border shadow-sm h-10 w-20 py-6 pl-3 pr-2 hover:shadow-md hover:cursor-pointer"
                            >
                                <i className="fa-solid fa-bars" />
                                <button className="bg-gray-500 text-white rounded-full text-center w-7 h-7">
                                    <i className="fa-solid fa-user" />
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                {/* Catagory */}
                <div className="flex items-center shadow-sm  h-24 w-screen space-x-5 fixed top-[80px] bg-white z-40 max-md:hidden">
                    <div className="flex items-center space-x-3">
                        <div className="flex flex-col items-center text-gray-400 hover:text-black gap-2 pl-8">
                            <img
                                src="https://a0.muscache.com/pictures/3fb523a0-b622-4368-8142-b5e03df7549b.jpg"
                                alt=""
                                className="h-7"
                            />
                            <p className="text-xs font-normal">Amazing pools</p>
                        </div>
                        <div className="flex flex-col items-center text-gray-400 hover:text-black gap-2">
                            <img
                                src="https://a0.muscache.com/pictures/f0c5ca0f-5aa0-4fe5-b38d-654264bacddf.jpg"
                                alt=""
                                className="h-7"
                            />
                            <p className="text-xs font-normal">Play</p>
                        </div>
                        <div className="flex flex-col items-center text-gray-400 hover:text-black gap-2">
                            <img
                                src="https://a0.muscache.com/pictures/33dd714a-7b4a-4654-aaf0-f58ea887a688.jpg"
                                alt=""
                                className="h-7"
                            />
                            <p className="text-xs font-normal">Historical homes</p>
                        </div>
                        <div className="flex flex-col items-center text-gray-400 hover:text-black gap-2">
                            <img
                                src="https://a0.muscache.com/pictures/6ad4bd95-f086-437d-97e3-14d12155ddfe.jpg"
                                alt=""
                                className="h-7"
                            />
                            <p className="text-xs font-normal">Countryside</p>
                        </div>
                        <div className="flex flex-col items-center text-gray-400 hover:text-black gap-2">
                            <img
                                src="https://a0.muscache.com/pictures/957f8022-dfd7-426c-99fd-77ed792f6d7a.jpg"
                                alt=""
                                className="h-7"
                            />
                            <p className="text-xs font-normal">Surfing</p>
                        </div>
                        <div className="flex flex-col items-center text-gray-400 hover:text-black gap-2">
                            <img
                                src="https://a0.muscache.com/pictures/aaa02c2d-9f0d-4c41-878a-68c12ec6c6bd.jpg"
                                alt=""
                                className="h-7"
                            />
                            <p className="text-xs font-normal">Farms</p>
                        </div>
                        <div className="flex flex-col items-center text-gray-400 hover:text-black gap-2">
                            <img
                                src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
                                alt=""
                                className="h-7"
                            />
                            <p className="text-xs font-normal">Amazing views</p>
                        </div>
                        <div className="flex flex-col items-center text-gray-400 hover:text-black gap-2">
                            <img
                                src="https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg"
                                alt=""
                                className="h-7"
                            />
                            <p className="text-xs font-normal">Rooms</p>
                        </div>
                        <div className="flex flex-col items-center text-gray-400 hover:text-black gap-2">
                            <img
                                src="	https://a0.muscache.com/pictures/677a041d-7264-4c45-bb72-52bff21eb6e8.jpg"
                                alt=""
                                className="h-7"
                            />
                            <p className="text-xs font-normal">Lakefront</p>
                        </div>
                        <div className="flex flex-col items-center text-gray-400 hover:text-black gap-2">
                            <img
                                src="	https://a0.muscache.com/pictures/bcd1adc0-5cee-4d7a-85ec-f6730b0f8d0c.jpg"
                                alt=""
                                className="h-7"
                            />
                            <p className="text-xs font-normal">Beachfront</p>
                        </div>
                        <div className="flex flex-col items-center text-gray-400 hover:text-black gap-2">
                            <img
                                src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"
                                alt=""
                                className="h-7"
                            />
                            <p className="text-xs font-normal">OMG!</p>
                        </div>
                        <div className="flex flex-col items-center text-gray-400 hover:text-black gap-2">
                            <img
                                src="https://a0.muscache.com/pictures/6b639c8d-cf9b-41fb-91a0-91af9d7677cc.jpg"
                                alt=""
                                className="h-7"
                            />
                            <p className="text-xs font-normal">Golfing</p>
                        </div>
                    </div>
                    <span className="material-symbols-outlined pl-4">arrow_circle_right</span>
                    <div className="flex justify-around items-center rounded-xl shadow-md h-12 w-24 border max-lg:hidden">
                        <span className="material-symbols-outlined">sync_alt</span>
                        <p className="text-xs font-normal">Filters</p>
                    </div>
                    <div className="flex justify-around items-center rounded-xl shadow-md h-12 w-[220px] border max-xl:hidden">
                        <p className="text-xs font-normal">Display total before taxes</p>
                        <span className="material-symbols-outlined">toggle_off</span>
                    </div>
                </div>
            </header>
            <main className="main-container sm:mt-[90px] md:mt-[180px] lg:mt-[200px]">
                {/* <section className="flex products"> */}
                    {/* <a href="../ProductDetail/index.html">
                        <div className="card-product">
                            <img
                                className="img-products"
                                src="https://a0.muscache.com/im/pictures/miso/Hosting-850769713572940614/original/b18991bd-465f-49c8-bf20-97c45ea4c279.jpeg?im_w=720"
                                alt="Honngsvag"
                            />
                            <div className="mx-2">
                                <div>
                                    <h2 className="text-fav">Guest favorite</h2>
                                    <div className="zoom love-product ">
                                        <i className="fa-regular fa-heart fill-white text-white" />
                                    </div>
                                    <div className="zoom arrow-product-r">
                                        <i className="fas fa-chevron-circle-right text-white" />
                                    </div>
                                    <div className="zoom arrow-product-l">
                                        <i className="fas fa-chevron-circle-left text-white" />
                                    </div>
                                </div>
                                <div className="rating">
                                    <h2>Honningsvåg, Norway</h2>
                                    <h2 className="right">★ 4.86</h2>
                                </div>
                                <p className="color-prdct">10.338 kilometers away</p>
                                <p className="color-prdct">Mar 7-12</p>
                                <p>
                                    <strong>Rp2,990,990</strong> night
                                </p>
                            </div>
                        </div>
                    </a> */}
                    <Card/>

                {/* </section> */}
                <div className="my-16 text-center">
                    <p className="font-bold">Continue exploring arctic homes</p>
                    <button className=" my-6 button button1">Show More</button>
                </div>
            </main>
            {/* footer */}
            <footer>
                <div className="px-10 border-t-[1px] w-screen bg-gray-100 py-10 ">
                    <h1 className="text-xl font-bold pb-5">
                        Inspiration for future getaways
                    </h1>
                    <div className="flex-wrap space-x-5 border-b-[1px] pb-8 ">
                        <a href="#" className="text-sm font-bold text-gray-700 pb-3">
                            Popular
                        </a>
                        <a href="#" className="text-sm font-bold text-gray-400">
                            Arts &amp; culture
                        </a>
                        <a href="#" className="text-sm font-bold text-gray-400">
                            Outdoors
                        </a>
                        <a href="#" className="text-sm font-bold text-gray-400">
                            Mountains
                        </a>
                        <a href="#" className="text-sm font-bold text-gray-400">
                            Beach
                        </a>
                        <a href="#" className="text-sm font-bold text-gray-400">
                            Unique stays
                        </a>
                        <a href="#" className="text-sm font-bold text-gray-400">
                            Categories
                        </a>
                        <a href="#" className="text-sm font-bold text-gray-400">
                            Things to do
                        </a>
                        <a href="#" className="text-sm font-bold text-gray-400">
                            Travel tips &amp; inspiration
                        </a>
                        <a href="#" className="text-sm font-bold text-gray-400">
                            Airbnb-friendly apartments
                        </a>
                    </div>
                    <div className="flex gap-12 mt-8 max-md:flex-col">
                        <div className="flex gap-12">
                            <div>
                                <div className="hover:cursor-pointer pb-4">
                                    <p className="text-sm font-medium">Canmore</p>
                                    <p className="text-sm text-gray-500">Apartment rentals</p>
                                </div>
                                <div className="hover:cursor-pointer pb-4">
                                    <p className="text-sm font-medium">Tucson</p>
                                    <p className="text-sm text-gray-500">Condo rentals</p>
                                </div>
                                <div className="hover:cursor-pointer pb-4">
                                    <p className="text-sm font-medium">Anaheim</p>
                                    <p className="text-sm text-gray-500">Apartment rentals</p>
                                </div>
                            </div>
                            <div>
                                <div className="hover:cursor-pointer pb-4">
                                    <p className="text-sm font-medium">Benalmádena</p>
                                    <p className="text-sm text-gray-500">Apartment rentals</p>
                                </div>
                                <div className="hover:cursor-pointer pb-4">
                                    <p className="text-sm font-medium">Jasper</p>
                                    <p className="text-sm text-gray-500">Cabin rentals</p>
                                </div>
                                <div className="hover:cursor-pointer pb-4">
                                    <p className="text-sm font-medium">Monterey</p>
                                    <p className="text-sm text-gray-500">Bungalow rentals</p>
                                </div>
                            </div>
                            <div>
                                <div className="hover:cursor-pointer pb-4">
                                    <p className="text-sm font-medium">Marbella</p>
                                    <p className="text-sm text-gray-500">Beachfront rentals</p>
                                </div>
                                <div className="hover:cursor-pointer pb-4">
                                    <p className="text-sm font-medium">Mountain View</p>
                                    <p className="text-sm text-gray-500">Vacation rentals</p>
                                </div>
                                <div className="hover:cursor-pointer pb-4">
                                    <p className="text-sm font-medium">Paso Robles</p>
                                    <p className="text-sm text-gray-500">Vacation rentals</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-12">
                            <div>
                                <div className="hover:cursor-pointer pb-4">
                                    <p className="text-sm font-medium">Mijas</p>
                                    <p className="text-sm text-gray-500">Apartment rentals</p>
                                </div>
                                <div className="hover:cursor-pointer pb-4">
                                    <p className="text-sm font-medium">Devonport</p>
                                    <p className="text-sm text-gray-500">Vacation rentals</p>
                                </div>
                                <div className="hover:cursor-pointer pb-4">
                                    <p className="text-sm font-medium">Santa Barbara</p>
                                    <p className="text-sm text-gray-500">House rentals</p>
                                </div>
                            </div>
                            <div>
                                <div className="hover:cursor-pointer pb-4">
                                    <p className="text-sm font-medium">Prescott</p>
                                    <p className="text-sm text-gray-500">Apartment rentals</p>
                                </div>
                                <div className="hover:cursor-pointer pb-4">
                                    <p className="text-sm font-medium">Mallacoota</p>
                                    <p className="text-sm text-gray-500">Condo rentals</p>
                                </div>
                                <div className="hover:cursor-pointer pb-4">
                                    <p className="text-sm font-medium">Sonoma</p>
                                    <p className="text-sm text-gray-500">House rentals</p>
                                </div>
                            </div>
                            <div>
                                <div className="hover:cursor-pointer pb-4">
                                    <p className="text-sm font-medium">Scottsdale</p>
                                    <p className="text-sm text-gray-500">Apartment rentals</p>
                                </div>
                                <div className="hover:cursor-pointer pb-4">
                                    <p className="text-sm font-medium">Tucson</p>
                                    <p className="text-sm text-gray-500">Condo rentals</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-10 grid grid-cols-3 gap-8 border-t-[1px] w-screen bg-gray-100 py-10">
                    <div className="flex flex-col">
                        <p className="text-sm font-bold text-gray-700 pb-1">Support</p>
                        <a
                            href="#"
                            className="text-sm font-base py-1 hover:underline hover:decoration-solid"
                        >
                            Help Center
                        </a>
                        <a
                            href="#"
                            className="text-sm font-base py-1 hover:underline hover:decoration-solid"
                        >
                            AirCover
                        </a>
                        <a
                            href="#"
                            className="text-sm font-base py-1 hover:underline hover:decoration-solid"
                        >
                            Anti-discrimination
                        </a>
                        <a
                            href="#"
                            className="text-sm font-base py-1 hover:underline hover:decoration-solid"
                        >
                            Disability support
                        </a>
                        <a
                            href="#"
                            className="text-sm font-base py-1 hover:underline hover:decoration-solid"
                        >
                            Cancellation options
                        </a>
                        <a
                            href="#"
                            className="text-sm font-base py-1 hover:underline hover:decoration-solid"
                        >
                            Report neighborhood concern
                        </a>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-sm font-bold text-gray-700 pb-1">Hosting</p>
                        <a
                            href="#"
                            className="text-sm font-base py-1 hover:underline hover:decoration-solid"
                        >
                            Airbnb your home
                        </a>
                        <a
                            href="#"
                            className="text-sm font-base py-1 hover:underline hover:decoration-solid"
                        >
                            AirCover for Hosts
                        </a>
                        <a
                            href="#"
                            className="text-sm font-base py-1 hover:underline hover:decoration-solid"
                        >
                            Hosting resources
                        </a>
                        <a
                            href="#"
                            className="text-sm font-base py-1 hover:underline hover:decoration-solid"
                        >
                            Community forum
                        </a>
                        <a
                            href="#"
                            className="text-sm font-base py-1 hover:underline hover:decoration-solid"
                        >
                            Hosting responsibly
                        </a>
                        <a
                            href="#"
                            className="text-sm font-base py-1 hover:underline hover:decoration-solid"
                        >
                            Airbnb-friendly apartments
                        </a>
                        <a
                            href="#"
                            className="text-sm font-base py-1 hover:underline hover:decoration-solid"
                        >
                            Join a free Hosting class
                        </a>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-sm font-bold text-gray-700 pb-1">Airbnb</p>
                        <a
                            href="#"
                            className="text-sm font-base py-1 hover:underline hover:decoration-solid"
                        >
                            Newsroom
                        </a>
                        <a
                            href="#"
                            className="text-sm font-base py-1 hover:underline hover:decoration-solid"
                        >
                            New features
                        </a>
                        <a
                            href="#"
                            className="text-sm font-base py-1 hover:underline hover:decoration-solid"
                        >
                            Careers
                        </a>
                        <a
                            href="#"
                            className="text-sm font-base py-1 hover:underline hover:decoration-solid"
                        >
                            Investors
                        </a>
                        <a
                            href="#"
                            className="text-sm font-base py-1 hover:underline hover:decoration-solid"
                        >
                            Gift cards
                        </a>
                        <a
                            href="#"
                            className="text-sm font-base py-1 hover:underline hover:decoration-solid"
                        >
                            Airbnb.org emergency stays
                        </a>
                    </div>
                </div>
                <div className="h-12 bottom-0 border-t-[1px] w-screen bg-gray-100 flex justify-between items-center px-10">
                    <div className="flex flex-wrap space-x-2 text-sm font-base max-sm:hidden">
                        <p>© 2023 Airbnb, Inc.</p>
                        <p>·</p>
                        <a href="#" className="hover:underline hover:decoration-solid">
                            Terms
                        </a>
                        <p>·</p>
                        <a href="#" className="hover:underline hover:decoration-solid">
                            Sitemap
                        </a>
                        <p>·</p>
                        <a href="#" className="hover:underline hover:decoration-solid">
                            Privacy
                        </a>
                        <p>·</p>
                        <div className="flex flex-row">
                            <a href="#" className="hover:underline hover:decoration-solid">
                                Your Privacy Choices
                            </a>
                            <span className="flex ps-2 items-center">
                                <svg width={26} height={12} fill="none">
                                    <rect
                                        x="0.5"
                                        y="0.5"
                                        width={25}
                                        height={11}
                                        rx="5.5"
                                        fill="#fff"
                                    />
                                    <path d="M14 1h7a5 5 0 010 10H11l3-10z" fill="#06F" />
                                    <path
                                        d="M4.5 6.5l1.774 1.774a.25.25 0 00.39-.049L9.5 3.5"
                                        stroke="#06F"
                                        strokeLinecap="round"
                                    />
                                    <path
                                        d="M16.5 3.5L19 6m0 0l2.5 2.5M19 6l2.5-2.5M19 6l-2.5 2.5"
                                        stroke="#fff"
                                        strokeLinecap="round"
                                    />
                                    <rect
                                        x="0.5"
                                        y="0.5"
                                        width={25}
                                        height={11}
                                        rx="5.5"
                                        stroke="#06F"
                                    />
                                </svg>
                            </span>
                        </div>
                    </div>
                    <div className="flex space-x-4 text-sm font-medium">
                        <span className="material-symbols-outlined">language</span>
                        <a href="#" className="hover:underline hover:decoration-solid">
                            English (US)
                        </a>
                        <p>
                            Rp{" "}
                            <a href="#" className="hover:underline hover:decoration-solid">
                                IDR
                            </a>
                        </p>
                        <div className="flex gap-5">
                            <a href="#">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/1051/1051309.png"
                                    alt=""
                                    className="h-5"
                                />
                            </a>
                            <a href="#">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/25/25347.png"
                                    alt=""
                                    className="h-5"
                                />
                            </a>
                            <a href="#">
                                <img
                                    src="https://cdn-icons-png.flaticon.com/512/1400/1400829.png"
                                    alt=""
                                    className="h-5"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
export default Home;