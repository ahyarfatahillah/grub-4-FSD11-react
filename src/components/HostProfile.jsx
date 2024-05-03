const HostProfile = () => {
    return (
        <div>
            <div className="host bg-yellow-100 rounded-2xl p-5 flex gap-10 flex-col md:flex-row items-center">
                <div className="md:w-[50%] flex flex-col text-wrap p-10">
                    <div className="bg-white p-5 rounded-3xl flex justify-between items-center md:flex-col">
                        <div className="hostname flex flex-col">
                            <img className="rounded-full" src="https://a0.muscache.com/im/pictures/user/11c61521-ca89-4bd7-b00f-34d57d029641.jpg?im_w=240" alt="Photo Profile" width="100px" height="100px"/>
                            <div className="text-center">
                                <h2 className="font-bold text-[23px]">Hosted by Ronald & Inese</h2>
                                <p className='text-[#757272]'>Joined in January 2017</p>
                            </div>
                        </div>
                        <div className="text-center flex flex-col gap-3 md:flex-row ">
                            <div className="border-b-2 border-black pb-3 md:border-none">
                                <div className="text-xl font-extrabold">1,489</div>
                                <div>Reviews</div>
                            </div>
                            <div className="border-b-2 border-black pb-3 md:border-none">
                                <div className="text-xl font-extrabold">4.89★</div>
                                <div>Rating</div>
                            </div>
                            <div>
                                <div className="text-xl font-extrabold">5</div>
                                <div>Year(s) Hosting</div>
                            </div>
                        </div>
                    </div>
                    <div className="p-5">
                        We are couple who loves to travel and idea about Airbnb in our place came from staying in Spain in some nice places.
                        Ronald is project manager and carpenter so his skills he…<br/><a href="" className='font-bold'>Show more</a>
                    </div>
                </div>
                <div>
                    <div >
                        <h3 className="font-bold text-[22px]">Ronald & Inese is a Superhost</h3>
                        <br/>
                        <div>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</div>
                    </div>
                    <div className="detail flex flex-col gap-[15px]">
                        <div className="mt-5 font-bold text-xl">Host details</div>
                        <div>
                            <p>Languages: Dansk, English, Norsk, Svenska</p>
                            <br/>
                            <p>Response rate: 100%</p>
                            <br/>
                            <p>Response time: within an hour</p>
                        </div>
                        <button>Contact Host</button>
                        <div>⚠️ To protect your payment, never transfer money or communicate outside of the Airbnb website or app.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HostProfile