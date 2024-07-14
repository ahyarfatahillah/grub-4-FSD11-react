import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareSquare as solidShare } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import AddressEllipsis from './Atoms/AddressEllipsis';


const ImgDetail = ({ property }) => {
  return (
    <>
      <AddressEllipsis address={property.address} country={property.country} className="font-bold text-[30px] max-sm:text-[15px]"/>
      <div className="image h-80 flex gap-2 rounded-lg overflow-hidden">
        <img className='w-1/2 h-full' src={property.Images[0]} alt="Main property image" />
        <div className="layout w-1/2 h-full flex flex-col gap-4 pb-4">
          <div className="layout-1 flex w-full h-1/2 gap-4">
            <div className="layout-children flex flex-col w-1/2">
              <img className='w-full h-full' src={property.Images[1]} alt="Property image 1" />
            </div>
            <div className="layout-children flex flex-col w-1/2">
              <img className='w-full h-full' src={property.Images[2]} alt="Property image 2" />
            </div>
          </div>
          <div className="layout-2 flex w-full h-1/2 gap-4">
            <div className="layout-children flex flex-col w-1/2">
              <img className='w-full h-full' src={property.Images[3]} alt="Property image 3" />
            </div>
            <div className="layout-children flex flex-col w-1/2">
              <img className='w-full h-full' src={property.Images[4]} alt="Property image 4" />
            </div>
          </div>
        </div>
      </div>
      <div className="image-copas flex flex-row overflow-x-auto gap-10 ">
        {property.Images.map((image, index) => (
          <img key={index} className='flex-shrink-0 w-full p-4 rounded-lg shadow-md border border-gray-300' src={image} alt={`Property image ${index}`} />
        ))}
      </div>
      <div className="flex justify-end gap-10 ">
        <div className='flex gap-[5px] items-center'>
          <FontAwesomeIcon icon={solidShare} />
          <a className='share' href="#">Share</a>
        </div>
        <div className='flex gap-[5px] items-center'>
          <FontAwesomeIcon icon={regularHeart} />
          <a className='save' href="#">Save</a>
        </div>
      </div>
    </>
  );
}

export default ImgDetail;
