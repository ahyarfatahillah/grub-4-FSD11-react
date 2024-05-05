import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faPagelines } from '@fortawesome/free-brands-svg-icons';
import { faCalendarAlt as regularCalendar, faDoorOpen, faPaw } from '@fortawesome/free-solid-svg-icons';

const SectionDetail = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 section-parents flex flex-col gap-8">
      <div className="homestay">
        <h2 className="font-bold text-2xl">Entire home in Honningsvåg, Norway</h2>
        <p>8 guests · 3 bedrooms · 6 beds · 1 bath</p>
      </div>
      <div className=" section-guest flex items-center border border-gray-300 rounded-lg p-4 gap-9">
        <div className="card1-section flex items-center justify-center gap-2">
          <FontAwesomeIcon icon={faPagelines} className="text-gray-900 mr-2 text-[40px]" id='fav-left' />
          <p>Guest favorite</p>
          <FontAwesomeIcon icon={faPagelines} className="text-gray-900 ml-2 text-[40px]" />
        </div>
        <div className="card2-section">
          <p>One of the most loved homes on Airbnb, according to guests</p>
        </div>
        <div className="card3-section">
          <p className='text-center font-bold text-[17px]'>4.88</p>
          <div className="star flex ">
          <FontAwesomeIcon icon={faStar} className="text-gray-900" />
          <FontAwesomeIcon icon={faStar} className="text-gray-900" />
          <FontAwesomeIcon icon={faStar} className="text-gray-900" />
          <FontAwesomeIcon icon={faStar} className="text-gray-900" />
          <FontAwesomeIcon icon={faStar} className="text-gray-900" />
          </div>
        </div>
        <div className="card4-section border-r border-gray-300"></div>
        <div className="card5-section">
          <p  className='text-center font-bold text-[17px]'>34</p>
          <a href="#" className="ml-2">Reviews</a>
        </div>
      </div>
      <div className="author flex items-center ">
        <img src="https://a0.muscache.com/im/pictures/user/a2dfc749-465e-4863-b103-b4d47c3e50c0.jpg?im_w=240" alt="Host" className="rounded-full w-12 h-12 mr-4" />
        <div className="author-desc">
          <h4 className="font-bold">Hosted by Ronald & Inese</h4>
          <p>Superhost · 7 years hosting</p>
        </div>
      </div>
      <div className="border-b border-gray-300 pt-5 pb-5" ></div>
      <div className="about-reserv flex flex-col gap-[10px] ">
        <div className="aserv1 flex items-center gap-[7px]">
          <FontAwesomeIcon icon={regularCalendar} className="text-gray-700 mr-2" />
          <h4 className="font-bold">Free cancellation before March 29</h4>
        </div>
        <div className="aserv2 flex items-center gap-[7px]">
          <FontAwesomeIcon icon={faDoorOpen} className="text-gray-700 mr-2" />
          <div>
            <h4 className="font-bold">Self check-in</h4>
            <p>Check yourself in with the smart lock.</p>
          </div>
        </div>
        <div className="aserv3 flex items-center gap-[7px]">
          <FontAwesomeIcon icon={faPaw} className="text-gray-700 mr-2" />
          <div>
            <h4 className="font-bold">Furry friends welcome</h4>
            <p>Bring your pets along for the stay.</p>
          </div>
        </div>
      <div className="border-b border-gray-300 pt-5 pb-5" ></div>
      </div>
    </section>
  );
}

export default SectionDetail;
