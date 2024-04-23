import React from 'react'
import Pical from '../assets/1.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi, faCar, faUtensils, faPaw, faUmbrellaBeach } from '@fortawesome/free-solid-svg-icons';


const ArticleDetail = () => {
  return (
    <div>
       <article>
                    <div className="about-village">
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
                    <div className="slider">
                        <div className="slider-head">
                            <div className="shead1">
                                <h2 className="font-bold text-[20px]">Where you'll sleep</h2>
                            </div>
                            <div className="shead2">
                                <p>1/2</p>
                                <button className="next">&#10095;</button>
                                <button className="prev">&#10094;</button>
                            </div>
                        </div>
                        <div className="slides">
                          <div className="slide">
                            <div className="slide1">
                                <img src="https://a0.muscache.com/im/pictures/333a37cc-a492-46e2-b3a7-1fd18c126fda.jpg?im_w=320" alt="gambar1"/>
                                <div>
                                    <h3 className="font-bold">Bedroom 1</h3>
                                    <p>1 double bed</p>
                                </div>
                            </div>
                            <div className="slide2">
                                <img src="https://a0.muscache.com/im/pictures/c05cd091-be65-4ee1-b75d-06e42f63130b.jpg?im_w=320" alt="gambar2"/>
                                <div>
                                    <h3 className="font-bold">Bedroom 2</h3>
                                    <p>1 double bed, 1 bunk bed</p>
                                </div>
                            </div>
                            <div className="slide3">
                                <img src="https://a0.muscache.com/im/pictures/miso/Hosting-850769713572940614/original/44d344d3-e0d7-423e-8067-5865ae5e7c6d.png?im_w=320" alt="gambar3"/>
                                <div className="mt-[15px]">
                                    <h3 className="font-bold">Bedroom 3</h3>
                                    <p>1 king bed, 1 single bed</p>
                                </div>
                            </div>
                          </div>
                        </div>
                    </div>
                    <div className="service-room">
                        <h2 className="font-bold text-[25px]">What this place offers</h2>
                        <div className="servroom">
                            <div className="servroom1">
                                <div className="layserv1">
                                    <div>
                                       <FontAwesomeIcon icon={faUmbrellaBeach} />
                                        <p>Waterfront</p>
                                    </div>
                                    <div>
                                       <FontAwesomeIcon icon={faWifi} />
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
                                <div className="layserv2">
                                    <div>
                                        <FontAwesomeIcon icon={faUtensils} />
                                        <p>Kitchen</p>
                                    </div>
                                    <div>
                                       <FontAwesomeIcon icon={faUmbrellaBeach} />
                                        <p>Dedicated workspace</p>
                                    </div>
                                    <div>
                                       <FontAwesomeIcon icon={faUmbrellaBeach} />
                                        <p>Private hot tub - available all year, open 24 hours</p>
                                    </div>
                                    <div>
                                        <FontAwesomeIcon icon={faPaw} />
                                        <p>Pets allowed</p>
                                    </div>
                                    <div>
                                       <FontAwesomeIcon icon={faUmbrellaBeach} />
                                        <p>Carbon monoxide alarm</p>
                                    </div>
                                </div>
                            </div>
                            <div className="servroom1-copas">
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
                                <button><h4 className="font-bold">Show all 55 aminites</h4></button>
                            </div>
                        </div>
                    </div>
                    <div className="calendar">
                        <h3 className="font-bold text-[25px]">Select check-in date</h3>
                        <div>Add your travel dates for exact pricing</div>
                        <img src={Pical} width="100%" id="hov"/>
                        <div className='flex justify-between w-97p mb-8'>
                            <div>⌨️</div>
                            <a href="">Clear dates</a>
                        </div>
                    </div>
                </article>
    </div>
  )
}

export default ArticleDetail
