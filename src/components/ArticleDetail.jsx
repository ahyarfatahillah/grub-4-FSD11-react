import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi, faCar, faUtensils, faPaw, faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';
import Calendar from './Calendar';

const ArticleDetail = () => {
  return (
    <div>
       <article className='mx-auto max-w-6xl px-4  section'>
                    <div className="about-village pb-10 border-b border-gray-300">
                        <p>
                            A cosy nature inspired cabin, on the way and close to the Northcape.
                            <br/>
                            Take it easy at this unique and relaxing getaway. 
                            <br/>
                            With private sauna and jacuzzi. 
                            <br/>
                            Surroundings are astonishing, and feeling in the cabin is so calming. 
                            <br/>
                            The idea came together with local artist who have inspired the owners and have 
                            <br/>
                            participated in renovation.
                        </p>
                    </div>
                    <div className="slider  pb-10 pt-10 flex flex-col gap-4 overflow-hidden relative">
                        <div className="slider-head flex items-center justify-between ">
                            <div className="shead1">
                                <h2 className="font-bold text-[25px] ">Where you'll sleep</h2>
                            </div>
                            <div className="shead2 flex gap-2 pr-2 items-center">
                                <p>1/2</p>
                                <button className="next">&#10095;</button>
                                <button className="prev">&#10094;</button>
                            </div>
                        </div>
                        <div className="slide w-full ">
                          <div className="slide flex w-[100%] gap-[20px]">
                             <div className="slide1 flex flex-col gap-[7px]">
                                 <img className='w-[300px] h-[200px] rounded-[15px]' src="https://a0.muscache.com/im/pictures/333a37cc-a492-46e2-b3a7-1fd18c126fda.jpg?im_w=320" alt="gambar1"/>
                                 <div>
                                     <h3 className="font-bold ">Bedroom 1</h3>
                                     <p>1 double bed</p>
                                 </div>
                             </div>
                             <div className="slide2 flex flex-col gap-[7px]">
                                 <img className=' w-[300px] h-[200px] rounded-[15px]' src="https://a0.muscache.com/im/pictures/c05cd091-be65-4ee1-b75d-06e42f63130b.jpg?im_w=320" alt="gambar2"/>
                                 <div>
                                     <h3 className="font-bold">Bedroom 2</h3>
                                     <p>1 double bed, 1 bunk bed</p>
                                 </div>
                             </div>
                             <div className="slide3 flex flex-col gap-[7px]">
                                 <img className='h-[200px] rounded-[15px]' src="https://a0.muscache.com/im/pictures/miso/Hosting-850769713572940614/original/44d344d3-e0d7-423e-8067-5865ae5e7c6d.png?im_w=320" alt="gambar3"/>
                                 <div className="">
                                     <h3 className="font-bold">Bedroom 3</h3>
                                     <p>1 king bed, 1 single bed</p>
                                 </div>
                             </div>
                          </div>
                        </div>
                    </div>
                    <div className="border-b border-gray-300 pt-5 " ></div>
                    <div className="service-room pt-8">
                        <h2 className="font-bold text-[25px] mb-3">What this place offers</h2>
                        <div className="servroom">
                            <div className="servroom1 flex gap-[25px] mb-10">
                                <div className="layserv1 flex flex-col gap-[15px]">
                                    <div className='flex gap-[7px] items-center'>
                                       <FontAwesomeIcon icon={faUmbrellaBeach} />
                                        <p>Waterfront</p>
                                    </div>
                                    <div  className='flex gap-[7px] items-center'>
                                       <FontAwesomeIcon icon={faWifi} />
                                        <p>Wifi</p>
                                    </div>
                                    <div  className='flex gap-[7px] items-center'>
                                        <FontAwesomeIcon icon={faCar}/>
                                        <p>Free parking on premises</p>
                                    </div>
                                    <div  className='flex gap-[7px] items-center'>
                                       <FontAwesomeIcon icon={faUmbrellaBeach} />
                                        <p>Private sauna</p>
                                    </div>
                                    <div  className='flex gap-[7px] items-center'>
                                       <FontAwesomeIcon icon={faUmbrellaBeach} />
                                        <p>Washer</p>
                                    </div>
                                </div>
                                <div className="layserv2 flex flex-col gap-[15px]">
                                    <div  className='flex gap-[7px] items-center'>
                                        <FontAwesomeIcon icon={faUtensils} />
                                        <p>Kitchen</p>
                                    </div >
                                    <div  className='flex gap-[7px] items-center'>
                                       <FontAwesomeIcon icon={faUmbrellaBeach} />
                                        <p>Dedicated workspace</p>
                                    </div>
                                    <div  className='flex gap-[7px] items-center'>
                                       <FontAwesomeIcon icon={faUmbrellaBeach} />
                                        <p>Private hot tub - available all year, open 24 hours</p>
                                    </div>
                                    <div  className='flex gap-[7px] items-center'>
                                        <FontAwesomeIcon icon={faPaw} />
                                        <p>Pets allowed</p>
                                    </div>
                                    <div className='flex gap-[7px] items-center'>
                                       <FontAwesomeIcon icon={faUmbrellaBeach} />
                                        <p>Carbon monoxide alarm</p>
                                    </div>
                                </div>
                            </div>
                            <div className="servroom1-copas hidden ">
                                <div className="layserv">
                                    <div>
                                       <FontAwesomeIcon icon={faUmbrellaBeach} />
                                        <p>Waterfront</p>
                                    </div>
                                    <div>
                                        <FontAwesomeIcon icon={faWifi}/>
                                        <p>Wifi</p>
                                    </div>
                                    <div>
                                        <FontAwesomeIcon icon={faCar}/>
                                        <p>Free parking on premises</p>
                                    </div>
                                    <div>
                                       <FontAwesomeIcon icon={faUmbrellaBeach} />
                                        <p>Private sauna</p>
                                    </div>
                                    <div>
                                       <FontAwesomeIcon icon={faUmbrellaBeach} />
                                        <p>Washer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="servroom2">
                                <button className='border border-gray-300 rounded px-10 py-4 text-base cursor-pointer bg-white'><h4 className="font-bold">Show all 55 aminites</h4></button>
                            </div>
                        </div>
                    </div>
                    <div className="border-b border-gray-300 pt-5 " ></div>
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
  )
}

export default ArticleDetail
