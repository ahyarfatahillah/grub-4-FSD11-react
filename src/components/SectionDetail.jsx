import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faPagelines } from '@fortawesome/free-brands-svg-icons';
import { faCalendarAlt as regularCalendar, faDoorOpen, faPaw } from '@fortawesome/free-solid-svg-icons';
import AddressEllipsis from './Atoms/AddressEllipsis';


const SectionDetail = ({ property }) => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8 section-parents flex flex-col gap-8">
      <div className="homestay">
       <AddressEllipsis type={property.type} address={property.address} country={property.country} className="font-bold text-2xl"/>
        <div className='flex gap-2'>
          <p>{property.guestNumber} guests</p>
          <p>{property.bedroomsNumber} bedrooms </p>
          <p>{property.bathsNumber} beds</p>
        </div>
        {/* <p>{property.guestNumber} guests · {property.bedroomsNumber} bedrooms · {{property.bathsNumber} beds · {property.bathrooms} bath</p> */}
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
        {/* <div className="card3-section">
          <p className='text-center font-bold text-[17px]'>{property.rating}</p>
          <div className="star flex ">
            {[...Array(5)].map((_, i) => (
              <FontAwesomeIcon key={i} icon={faStar} className={`text-gray-900 ${i < property.rating ? 'text-yellow-500' : ''}`} />
            ))}
          </div>
        </div>
        <div className="card4-section border-r border-gray-300"></div>
        <div className="card5-section">
          <p className='text-center font-bold text-[17px]'>{property.reviews}</p>
          <a href="#" className="ml-2">Reviews</a>
        </div> */}
      </div>
      <div className="author flex items-center ">
        <img src={property.hostImage} alt="Host" className="rounded-full w-12 h-12 mr-4" />
        <div className="author-desc">
          <h4 className="font-bold">Hosted by {property.hostName}</h4>
          <p>Superhost · {property.hostYears} years hosting</p>
        </div>
      </div>
      <div className="border-b border-gray-300 pt-5 pb-5" ></div>
      <div className="about-reserv flex flex-col gap-[10px] ">
        <div className="aserv1 flex items-center gap-[7px]">
          <FontAwesomeIcon icon={regularCalendar} className="text-gray-700 mr-2" />
          <h4 className="font-bold">{property.cancellationPolicy}</h4>
        </div>
        <div className="aserv2 flex items-center gap-[7px]">
          <FontAwesomeIcon icon={faDoorOpen} className="text-gray-700 mr-2" />
          <div>
            <h4 className="font-bold">Self check-in</h4>
            <p>{property.checkInDetails}</p>
          </div>
        </div>
        <div className="aserv3 flex items-center gap-[7px]">
          <FontAwesomeIcon icon={faPaw} className="text-gray-700 mr-2" />
          <div>
            <h4 className="font-bold">Furry friends welcome</h4>
            <p>{property.petPolicy}</p>
          </div>
        </div>
        <div className="border-b border-gray-300 pt-5 pb-5"></div>
      </div>
    </section>
  );
}

export default SectionDetail;
