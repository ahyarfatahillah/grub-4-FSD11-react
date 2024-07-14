import React from 'react';
import { SprayCan, BadgeCheck, KeyRound, MessageSquare, Map, Tag } from 'lucide-react';

const UserRating = ({ property }) => {
    const averageRating = property.averageRating || {};

    return (
        <div className="lg:flex hidden text-wrap">
            <div className="rating flex justify-center border-b border-gray-300 pb-4">
                <div className="ratebox mx-7">
                    <div className="text-[20px] font-bold">Overall rating</div>
                    <div className="flex items-center">
                        <div className="mr-2">{averageRating.cleanlinessRate}</div>
                        <hr className="w-[90%] border-black border-2" />
                        <hr className="w-[10%] border-gray-300 border-2" />
                    </div>
                    <div className="flex items-center">
                        <div className="mr-2">{averageRating.accuracyRate}</div>
                        <hr className="w-[10%] border-black border-2" />
                        <hr className="w-[90%] border-gray-300 border-2" />
                    </div>
                    <div className="flex items-center">
                        <div className="mr-2">{averageRating.checkInRate}</div>
                        <hr className="w-[100%] border-gray-300 border-2" />
                    </div>
                    <div className="flex items-center">
                        <div className="mr-2">{averageRating.communicationRate}</div>
                        <hr className="w-[100%] border-gray-300 border-2" />
                    </div>
                    <div className="flex items-center">
                        <div className="mr-2">{averageRating.locationRate}</div>
                        <hr className="w-[100%] border-gray-300 border-2" />
                    </div>
                    <div className="flex items-center">
                        <div className="mr-2">{averageRating.valueRate}</div>
                        <hr className="w-[100%] border-gray-300 border-2" />
                    </div>
                </div>
                {/* -------------- */}
                <div className="ratebox mx-7 border-l border-black pl-3 mb-8">
                    <div className="text-[20px] font-bold">Cleanliness</div> 
                    <div>{averageRating.cleanlinessRate}</div>
                    <SprayCan />
                </div>
                <div className="ratebox mx-7 border-l border-black pl-3 mb-8 text-[20px] font-bold">
                    Accuracy<br />{averageRating.accuracyRate}<br />
                    <BadgeCheck />
                </div>
                <div className="ratebox mx-7 border-l border-black pl-3 mb-8 text-nowrap text-[20px] font-bold">
                    Check-in<br />{averageRating.checkInRate}<br />
                    <KeyRound />
                </div>
                <div className="ratebox mx-7 border-l border-black pl-3 mb-8 text-[20px] font-bold">
                    Communication<br />{averageRating.communicationRate}<br />
                    <MessageSquare />
                </div>
                <div className="ratebox mx-7 border-l border-black pl-3 mb-8 text-[20px] font-bold">
                    Location<br />{averageRating.locationRate}<br />
                    <Map />
                </div>
                <div className="ratebox mx-7 border-l border-black pl-3 mb-8 text-[20px] font-bold">
                    Value<br />{averageRating.valueRate}<br />
                    <Tag />
                </div>
            </div>
        </div>
    );
}

export default UserRating;
