import { SprayCan, BadgeCheck, KeyRound, MessageSquare, Map, Tag } from "lucide-react"

const UserRating = () => {
    return (
        <div className="lg:flex hidden text-wrap">
            <div className="rating flex justify-center  border-b border-gray-300 pb-4">
                <div className="ratebox mx-7">
                    <div className="text-[20px] font-bold">Overal rating</div>
                    <div className="flex items-center">
                        <div className="mr-2">5</div><hr className="w-[90%] border-black border-2"/><hr className="w-[10%] border-gray-300 border-2"></hr>
                    </div>
                    <div className="flex items-center">
                        <div className="mr-2">4</div><hr className="w-[10%] border-black border-2"/><hr className="w-[90%] border-gray-300 border-2"></hr>
                    </div>
                    <div className="flex items-center">
                        <div className="mr-2">3</div><hr className="w-[100%] border-gray-300 border-2"></hr>
                    </div>
                    <div className="flex items-center">
                        <div className="mr-2">2</div><hr className="w-[100%] border-gray-300 border-2"></hr>
                    </div>
                    <div className="flex items-center">
                        <div className="mr-2">1</div><hr className="w-[100%] border-gray-300 border-2"></hr>
                    </div>
                </div>
                {/* -------------- */}
                <div className="ratebox mx-7 border-l border-black pl-3 mb-8">
                    <div className="text-[20px] font-bold">Cleanliness</div> 
                    <div>4.9</div>
                    <SprayCan />
                </div>
                <div className="ratebox mx-7 border-l border-black pl-3 mb-8 text-[20px] font-bold">
                    Accuracy<br/>4.9<br/>
                    <BadgeCheck />
                </div>
                <div className="ratebox mx-7 border-l border-black pl-3 mb-8 text-nowrap text-[20px] font-bold">
                    Check-in<br/>5.0<br/>
                    <KeyRound />
                </div>
                <div className="ratebox mx-7 border-l border-black pl-3 mb-8 text-[20px] font-bold">
                    Communication<br/>5.0<br/>
                    <MessageSquare />
                </div>
                <div className="ratebox mx-7 border-l border-black pl-3 mb-8 text-[20px] font-bold">
                    Location<br/>4.9<br/>
                    <Map />
                </div>
                <div className="ratebox mx-7 border-l border-black pl-3 mb-8 text-[20px] font-bold">
                    Value<br/>4.7<br/>
                    <Tag />
                </div>
            </div>
        </div>
    )
}

export default UserRating