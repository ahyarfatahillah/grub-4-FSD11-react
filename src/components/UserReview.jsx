import React from 'react';

const UserReview = ({ property }) => {
    const reviews = property.reviews || [];

    // Split reviews into two columns
    const halfIndex = Math.ceil(reviews.length / 2);
    const firstColumnReviews = reviews.slice(0, halfIndex);
    const secondColumnReviews = reviews.slice(halfIndex);

    return (
        <div>
            <div className="border-b border-gray-300 pt-5 pb-5">
                <div className="review flex">
                    <div className="revside w-1/2">
                        {firstColumnReviews.map((review, index) => (
                            <div className="revbox m-2 leading-6" key={index}>
                                <div className="name flex gap-[10px] m-[10px]">
                                    <div className="photo">
                                        <img
                                            src={`https://a0.muscache.com/im/pictures/user/${index}.jpg?im_w=240`}
                                            width="50px"
                                            height="50px"
                                            className="rounded-full"
                                            id="hov"
                                            alt="User"
                                        />
                                    </div>
                                    <div>
                                        <b>Reviewer {index + 1}</b>
                                        <br />
                                        {review.location}
                                    </div>
                                </div>
                                <div className="value m-[10px]">★★★★★ • Some time ago</div>
                                <div>
                                    {review.reviewText}
                                    <br />
                                    <a href="">
                                        <b>Show more</b>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="revside w-1/2">
                        {secondColumnReviews.map((review, index) => (
                            <div className="revbox m-2 leading-6" key={halfIndex + index}>
                                <div className="name flex gap-[10px] m-[10px]">
                                    <div className="photo">
                                        <img
                                            src={`https://a0.muscache.com/im/pictures/user/${halfIndex + index}.jpg?im_w=240`}
                                            width="50px"
                                            height="50px"
                                            className="rounded-full"
                                            id="hov"
                                            alt="User"
                                        />
                                    </div>
                                    <div>
                                        <b>Reviewer {halfIndex + index + 1}</b>
                                        <br />
                                        {review.location}
                                    </div>
                                </div>
                                <div className="value m-[10px]">★★★★★ • Some time ago</div>
                                <div>
                                    {review.reviewText}
                                    <br />
                                    <a href="">
                                        <b>Show more</b>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <button className="showrev rounded-lg text-center m-5 bg-white p-4 font-bold border border-gray-300" id="hov">
                    Show all {reviews.length} reviews
                </button>
            </div>
        </div>
    );
};

export default UserReview;