import React from 'react'
import Navbar from '../components/Navbar'
import ImgDetail from '../components/ImgDetail'
import SectionDetail from '../components/SectionDetail'
import ArticleDetail from '../components/ArticleDetail'
import AsideDetail from '../components/AsideDetail'
import Footer from '../components/Footer'


const ProductDetail = () => {
  return (
    <>
      <Navbar/>
      <br />
      <div className="root-container mt-20">
      <ImgDetail/>
        <main>
            <div className="main-container">
                <SectionDetail/>
                <ArticleDetail/>
            </div>
            <AsideDetail/>
        </main>
        <div className="page">
            <div className="headrate">
                <div className="rate">
                    <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-GuestFavorite/original/78b7687c-5acf-4ef8-a5ea-eda732ae3b2f.png" width="100px"/>
                    <div>4.89</div>
                    <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-GuestFavorite/original/b4005b30-79ff-4287-860c-67829ecd7412.png" width="100px"/>
                </div>
                <div className="fav">Guest favorite</div>
                <div className="favorite">One of the most loved homes on Airbnb<br/>based on rating, review, and reliability</div>
            </div>
            <div className="rating">
                <div className="ratebox">
                    <div>Overal rating</div>
                    <div className="ratenumb">
                        5<hr width="90%" size="5" color="black" className="ratebar"/><hr width="10%" size="5" color="grey"/>
                    </div>
                    <div className="ratenumb">
                        4<hr width="10%" color="black" className="ratebar"/><hr width="90%" size="5" color="grey"/>
                    </div>
                    <div className="ratenumb">
                        3 <hr width="90%" size="5" color="grey" className="ratebar"/>
                    </div>
                    <div className="ratenumb">
                        2 <hr width="90%" size="5" color="grey" className="ratebar"/>
                    </div>
                    <div className="ratenumb">
                        1 <hr width="90%" size="5" color="grey" className="ratebar"/>
                    </div>
                </div>
                <div className="ratebox">
                    Cleanliness<br/>4.9<br/>
                    <img src="../source/clean.png" alt=""/>
                </div>
                <div className="ratebox">
                    Accuracy<br/>4.9<br/>
                    <img src="../source/acc.png" alt=""/>
                </div>
                <div className="ratebox">
                    Check-in<br/>5.0<br/>
                    <img src="../source/in.png" alt=""/>
                </div>
                <div className="ratebox">
                    Communication<br/>5.0<br/>
                    <img src="../source/com.png" alt=""/>
                </div>
                <div className="ratebox">
                    Location<br/>4.9<br/>
                    <img src="../source/loc.png" alt=""/>
                </div>
                <div className="ratebox">
                    Value<br/>4.7<br/>
                    <img src="../source/val.png" alt=""/>
                </div>
            </div>
            <div className="border-b border-gray-300 pt-5 pb-5" >
                <div className="review">
                    <div className="revside">
                        <div className="revbox">
                            <div className="name">
                                <div className="photo">
                                    <img src="https://a0.muscache.com/im/pictures/user/6d7f99de-8d03-4115-8d4f-2cb9050cefa8.jpg?im_w=240" width="50px" height="50px" className="rounded-full" id="hov"/>
                                </div>
                                <div><b>David</b><br/>Gladbeck, Germany</div>
                            </div>
                            <div className="value">★★★★★ • 2 weeks ago</div>
                            <div>The house was just super great.<br/>
                                It's so beautiful and thoughtfully decorated.<br/>
                                Especially the many small details make it special...<br/><a href=""><b>Show more</b></a></div>
                        </div>
                        <div className="revbox">
                            <div className="name">
                                <div className="photo">
                                    <img src="https://a0.muscache.com/im/pictures/user/523f28c9-5ef0-43c1-a967-b8bee846a41d.jpg?im_w=240" width="50px" height="50px" className="rounded-full" id="hov"/>
                                </div>
                                <div><b>Andreas</b><br/>2 years on Airbnb</div>
                            </div>
                            <div className="value">★★★★★ • 3 weeks ago</div>
                            <div>Very clean, extremely nice apartment with everything you need! Glad to come back</div>
                        </div>
                    </div>
                    <div className="revside">
                        <div className="revbox">
                            <div className="name">
                                <div className="photo">
                                    <img src="../source/emma.jpg" width="50px" height="50px" className="rounded-full" id="hov"/>
                                </div>
                                <div><b>Emma</b><br/>Bucharest, Romania</div>
                            </div>
                            <div className="value">★★★★★ • January 2024</div>
                            <div>Perfection! The location is straight up from a movie scene and the house is so well designed</div>
                        </div>
                        <div className="revbox">
                            <div className="name">
                                <div className="photo">
                                    <img src="../source/molly.jpg" width="50px" height="50px"className="rounded-full"id="hov"/>
                                </div>
                                <div><b>Molly</b><br/>Bremen, Germany</div>
                            </div>
                            <div className="value">★★★★★ • January 2024</div>
                            <div>Everything was as described, I had a lovely stay</div>
                        </div>
                    </div>
                    <div className="revside-copas">
                        <div className="revbox">
                            <div className="name">
                                <div className="photo">
                                    <img src="https://a0.muscache.com/im/pictures/user/6d7f99de-8d03-4115-8d4f-2cb9050cefa8.jpg?im_w=240" width="50px" height="50px" className="rounded-full" id="hov"/>
                                </div>
                                <div><b>David</b><br/>Gladbeck, Germany</div>
                            </div>
                            <div className="value">★★★★★ • 2 weeks ago</div>
                            <div>The house was just super great.<br/>
                                It's so beautiful and thoughtfully decorated.<br/>
                                Especially the many small details make it special...<br/><a href=""><b>Show more</b></a></div>
                        </div>
                        <div className="revbox">
                            <div className="name">
                                <div className="photo">
                                    <img src="https://a0.muscache.com/im/pictures/user/523f28c9-5ef0-43c1-a967-b8bee846a41d.jpg?im_w=240" width="50px" height="50px" className="rounded-full" id="hov"/>
                                </div>
                                <div><b>Andreas</b><br/>2 years on Airbnb</div>
                            </div>
                            <div className="value">★★★★★ • 3 weeks ago</div>
                            <div>Very clean, extremely nice apartment with everything you need! Glad to come back</div>
                        </div>
                        <div className="revbox">
                            <div className="name">
                                <div className="photo">
                                    <img src="../source/emma.jpg" width="50px" height="50px" className="rounded-full" id="hov"/>
                                </div>
                                <div><b>Emma</b><br/>Bucharest, Romania</div>
                            </div>
                            <div className="value">★★★★★ • January 2024</div>
                            <div>Perfection! The location is straight up from a movie scene and the house is so well designed</div>
                        </div>
                        <div className="revbox">
                            <div className="name">
                                <div className="photo">
                                    <img src="../source/molly.jpg" width="50px" height="50px" className="rounded-full" id="hov"/>
                                </div>
                                <div><b>Molly</b><br/>Bremen, Germany</div>
                            </div>
                            <div className="value">★★★★★ • January 2024</div>
                            <div>Everything was as described, I had a lovely stay</div>
                        </div>
                    </div>
                </div>
                <button className="showrev" id="hov">
                    Show all 35 reviews
                </button>
            </div>
            <div className="maps">
                <h2 className="font-bold text-[25px]">Where you'll be</h2>
                <br/>
                <div className="loc">Honningsvåg, Finnmark, Norway</div>
                <br/>
                <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1546.6415401789604!2d25.78493484887242!3d70.97558295985303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sHotel!5e0!3m2!1sid!2sid!4v1710769705603!5m2!1sid!2sid" width="100%" height="450rem" className="border" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <div className="mt-[25px]"><a href=""><b>Show more</b></a></div>
            </div>
            <div className="host">
                <div className="hostname">
                    <img src="../source/Ronald.png" alt="Photo Profile" width="100px" height="100px"/>
                    <div>
                        <h2 className="font-bold text-[23px]">Hosted by Ronald & Inese</h2>
                        <p className='text-[#757272]'>Joined in January 2017</p>
                    </div>
                </div>
                <div className="hostbox">
                    <div className="profile" >
                        <div className="profilebox" id="hov">
                                <div className='flex gap-[8px]' >
                                    <i className="fa-solid fa-star"></i>
                                    <p>1,498 Riviews</p>
                                </div>
                                <div className='flex gap-[8px]'>
                                    <i className="fa-solid fa-check-to-slot"></i>
                                    <p>Identity verified</p>
                                </div>
                                <div className='flex gap-[8px]'>
                                    <i className="fa-solid fa-user-check"></i>
                                    <p>Superhost</p>
                                </div>
                        </div>
                        <div>We are couple who loves to travel and idea about Airbnb in our place came from staying in Spain in some nice places.
                            Ronald is project manager and carpenter so his skills he…<br/><a href="" className='font-bold'>Show more</a></div>
                        <div>
                            <h3 className="font-bold text-[22px]">Ronald & Inese is a Superhost</h3>
                            <br/>
                            <div>Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</div>
                        </div>
                    </div>
                    <div className="detail flex flex-col gap-[15px]">
                        <h3>Host details</h3>
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
            <div className="ruless">
                <h2 className="font-bold text-[24px]">Things to know</h2>
                <div className="rules">
                    <div className="rulsetting1">
                        <h3>House rules</h3>
                        <div>Check-in after 3:00 PM <br/> Checkout before 11:00 AM <br/> 8 guest maximum <br/><a href="">Show more</a></div>
                    </div>
                    <div className="rulsetting2">
                        <h3>Safety & property</h3>
                        <div>Pool/hot tub without a gate or lock <br/> Nearby lake, river, other body of water <br/> Carbon monoxide detector not required <br/><a href="">Show more</a></div>
                    </div>
                    <div className="rulsetting3">
                        <h3>Cancellation policy</h3>
                        <div>Add your trip dates to get the cancellation details for this stay.<br/><a href="">Add dates</a></div>
                    </div>
                </div>
            </div>
        </div>
      </div>
     <Footer/>
    </>
  )
}

export default ProductDetail
