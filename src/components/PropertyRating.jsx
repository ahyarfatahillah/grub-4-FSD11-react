import React from 'react';

const PropertyRating = ({ property }) => {
    const { averageRating } = property;

    // Calculate the overall average rating
    const ratings = Object.values(averageRating).map(Number);
    const overallRating = ratings.reduce((acc, rating) => acc + rating, 0) / ratings.length;

    return (
        <div className="headrate text-center mt-[25px]">
            <div className="rate text-5xl font-bold flex justify-center mt-10">
                <img 
                    src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-GuestFavorite/original/78b7687c-5acf-4ef8-a5ea-eda732ae3b2f.png" 
                    width="100px"
                    alt="Star"
                />
                <div className="text-[100px]">{overallRating.toFixed(2)}</div>
                <img 
                    src="https://a0.muscache.com/im/pictures/airbnb-platform-assets/AirbnbPlatformAssets-GuestFavorite/original/b4005b30-79ff-4287-860c-67829ecd7412.png" 
                    width="100px"
                    alt="Star"
                />
            </div>
            {overallRating > 4.00 ? (
                <>
                    <div className="fav font-bold mb-1 text-lg">Guest favorite</div>
                    <div className="favorite mb-[50px]">
                        One of the most loved homes on Airbnb
                        <br />
                        based on rating, review, and reliability
                    </div>
                </>
            ) : (
                <div className="not-favorite mb-[50px]">
                    This property has an average rating of less than 3.00
                    <br />
                    based on rating, review, and reliability
                </div>
            )}
        </div>
    );
};

export default PropertyRating;
