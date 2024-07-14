import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi, faCar, faUtensils, faPaw, faUmbrellaBeach, faHome, faUser, faBed, faBath } from '@fortawesome/free-solid-svg-icons';
import Calendar from './Calendar';

const amenitiesMapping = [
  { icon: faUmbrellaBeach, label: 'Waterfront', key: 'scenicViews' },
  { icon: faWifi, label: 'Wifi', key: 'internet' },
  { icon: faCar, label: 'Free parking on premises', key: 'parking' },
  { icon: faHome, label: 'Private sauna', key: 'bathroom' },
  { icon: faUtensils, label: 'Kitchen', key: 'kitchen' },
  { icon: faUmbrellaBeach, label: 'Dedicated workspace', key: 'office' },
  { icon: faUmbrellaBeach, label: 'Private hot tub - available all year, open 24 hours', key: 'outdoor' },
  { icon: faPaw, label: 'Pets allowed', key: 'pets' },
  { icon: faUmbrellaBeach, label: 'Carbon monoxide alarm', key: 'coAlarm' },
  { icon: faBed, label: 'Bedrooms', key: 'bedroomsNumber' },
  { icon: faBath, label: 'Bathrooms', key: 'bathsNumber' },
];

const ArticleDetail = ({ property }) => {
  const activeAmenities = amenitiesMapping.filter(amenity => property[amenity.key]);

  // Split amenities into two columns
  const column1 = activeAmenities.slice(0, 5);
  const column2 = activeAmenities.slice(5);

  return (
    <div>
      <article className='mx-auto max-w-6xl px-4 section'>
        <div className="about-village pb-10 border-b border-gray-300">
          <p>{property.description}</p>
        </div>
        <div className="slider pb-10 pt-10 flex flex-col gap-4 overflow-hidden relative">
          <div className="slider-head flex items-center justify-between">
            <div className="shead1">
              <h2 className="font-bold text-[25px]">Where you'll sleep</h2>
            </div>
            <div className="shead2 flex gap-2 pr-2 items-center">
              <p>1/2</p>
              <button className="next">&#10095;</button>
              <button className="prev">&#10094;</button>
            </div>
          </div>
          <div className="slide w-full">
            <div className="slide flex w-[100%] gap-[20px]">
              <div className="slide1 flex flex-col gap-[7px]">
                <img className='w-[300px] h-[200px] rounded-[15px]' src={property.Images[1]} alt="gambar1" />
                <div>
                  <h3 className="font-bold">Bedroom 1</h3>
                  <p>1 double bed</p>
                </div>
              </div>
              <div className="slide2 flex flex-col gap-[7px]">
                <img className='w-[300px] h-[200px] rounded-[15px]' src={property.Images[3]} alt="gambar2" />
                <div>
                  <h3 className="font-bold">Bedroom 2</h3>
                  <p>1 double bed, 1 bunk bed</p>
                </div>
              </div>
              <div className="slide3 flex flex-col gap-[7px]">
                <img className='h-[200px] rounded-[15px]' src={property.Images[4]} alt="gambar3" />
                <div className="">
                  <h3 className="font-bold">Bedroom 3</h3>
                  <p>1 king bed, 1 single bed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-b border-gray-300 pt-5"></div>
        <div className="service-room pt-8">
          <h2 className="font-bold text-[25px] mb-3">What this place offers</h2>
          <div className="servroom flex flex-wrap gap-[25px] mb-10">
            <div className="layserv1 flex flex-col gap-[15px]">
              {column1.map((amenity, index) => (
                <div key={index} className='flex gap-[7px] items-center'>
                  <FontAwesomeIcon icon={amenity.icon} />
                  <p>{amenity.label}</p>
                </div>
              ))}
            </div>
            <div className="layserv2 flex flex-col gap-[15px]">
              {column2.map((amenity, index) => (
                <div key={index} className='flex gap-[7px] items-center'>
                  <FontAwesomeIcon icon={amenity.icon} />
                  <p>{amenity.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="servroom2">
            <button className='border border-gray-300 rounded px-10 py-4 text-base cursor-pointer bg-white'>
              <h4 className="font-bold">Show all 55 amenities</h4>
            </button>
          </div>
        </div>
        <div className="border-b border-gray-300 pt-5"></div>
        <div className="calendar flex flex-col items-center pt-[25px]">
          <h3 className="font-bold text-[25px]">Select check-in date</h3>
          <div>Add your travel dates for exact pricing</div>
          <div><Calendar /></div>
          <div className='flex gap-[210px] justify-between w-97p mb-8'>
            <div>⌨️</div>
            <a href="">Clear dates</a>
          </div>
        </div>
      </article>
    </div>
  );
}

export default ArticleDetail;
