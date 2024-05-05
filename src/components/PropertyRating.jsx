const PropertyRating = () => {
    return (
        <div className="headrate text-center mt-[25px]">
            <div className="rate text-5xl font-bold flex justify-center mt-10">
                    <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-GuestFavorite/original/78b7687c-5acf-4ef8-a5ea-eda732ae3b2f.png" width="100px"/>
                    <div className="text-[100px]">4.89</div>
                    <img src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-GuestFavorite/original/b4005b30-79ff-4287-860c-67829ecd7412.png" width="100px"/>
                </div>
                <div className="fav font-bold mb-1 text-lg">Guest favorite</div>
                <div className="favorite mb-[50px]">One of the most loved homes on Airbnb<br/>based on rating, review, and reliability</div>
        </div>
    )
}

export default PropertyRating