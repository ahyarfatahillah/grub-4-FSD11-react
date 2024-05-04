import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareSquare as solidShare } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';

const ImgDetail = () => {
  return (
    <>
  
        <h1 className="font-bold text-[30px] max-sm:text-[15px]">SarNest - Designed with Nature</h1>
        <div className="image h-80 flex gap-2 rounded-lg overflow-hidden">
          <img className='w-1/2 h-full' src="https://a0.muscache.com/im/pictures/miso/Hosting-850769713572940614/original/44d344d3-e0d7-423e-8067-5865ae5e7c6d.png?im_w=960" alt="" />
          <div className="layout w-1/2 h-full flex flex-col gap-4 pb-4">
            <div className="layout-1 flex w-full h-1/2 gap-4">
              <div className="layout-children flex flex-col w-1/2">
                <img className='w-full h-full' src="https://a0.muscache.com/im/pictures/miso/Hosting-850769713572940614/original/b18991bd-465f-49c8-bf20-97c45ea4c279.jpeg?im_w=720" alt="" />
              </div>
              <div className="layout-children flex flex-col w-1/2">
                <img className='w-full h-full' src="https://a0.muscache.com/im/pictures/1b9fa206-3b6f-4af1-b4e5-c6b9df48bdb2.jpg?im_w=720" alt="" />
              </div>
            </div>
            <div className="layout-2 flex w-full h-1/2 gap-4">
              <div className="layout-children flex flex-col w-1/2">
                <img className='w-full h-full' src="https://a0.muscache.com/im/pictures/miso/Hosting-850769713572940614/original/9f18742a-2820-4f7d-b04e-9d64ea1f60d0.jpeg?im_w=720" alt="" />
              </div>
              <div className="layout-children flex flex-col w-1/2">
                <img className='w-full h-full' src="https://a0.muscache.com/im/pictures/1514828b-b1ee-4b47-93e9-e3a77025a992.jpg?im_w=720" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="image-copas flex flex-row overflow-x-auto gap-10 hidden">
          <img className='flex-shrink-0 w-full p-4 rounded-lg shadow-md border border-gray-300' src="https://a0.muscache.com/im/pictures/miso/Hosting-850769713572940614/original/44d344d3-e0d7-423e-8067-5865ae5e7c6d.png?im_w=960" alt="" />
          <img className='flex-shrink-0 w-full p-4 rounded-lg shadow-md border border-gray-300' src="https://a0.muscache.com/im/pictures/miso/Hosting-850769713572940614/original/b18991bd-465f-49c8-bf20-97c45ea4c279.jpeg?im_w=720" alt="" />
          <img className='flex-shrink-0 w-full p-4 rounded-lg shadow-md border border-gray-300' src="https://a0.muscache.com/im/pictures/1b9fa206-3b6f-4af1-b4e5-c6b9df48bdb2.jpg?im_w=720" alt="" />
          <img className='flex-shrink-0 w-full p-4 rounded-lg shadow-md border border-gray-300' src="https://a0.muscache.com/im/pictures/miso/Hosting-850769713572940614/original/9f18742a-2820-4f7d-b04e-9d64ea1f60d0.jpeg?im_w=720" alt="" />
          <img className='flex-shrink-0 w-full p-4 rounded-lg shadow-md border border-gray-300' src="https://a0.muscache.com/im/pictures/1514828b-b1ee-4b47-93e9-e3a77025a992.jpg?im_w=720" alt="" />
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
  )
}

export default ImgDetail
