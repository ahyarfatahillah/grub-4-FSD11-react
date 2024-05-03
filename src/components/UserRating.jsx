import { SprayCan, BadgeCheck, KeyRound, MessageSquare, Map, Tag } from "lucide-react"

const UserRating = () => {
    return (
        <div>
            <div className="rating">
                <div className="ratebox">
                    <div>Overal rating</div>
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
                <div className="ratebox">
                    <div>Cleanliness</div> 
                    <div>4.9</div>
                    <SprayCan />
                </div>
                <div className="ratebox">
                    Accuracy<br/>4.9<br/>
                    <BadgeCheck />
                </div>
                <div className="ratebox text-nowrap">
                    Check-in<br/>5.0<br/>
                    <KeyRound />
                </div>
                <div className="ratebox">
                    Communication<br/>5.0<br/>
                    <MessageSquare />
                </div>
                <div className="ratebox">
                    Location<br/>4.9<br/>
                    <Map />
                </div>
                <div className="ratebox">
                    Value<br/>4.7<br/>
                    <Tag />
                </div>
            </div>
        </div>
    )
}

export default UserRating