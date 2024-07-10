import React from 'react';

const TripHistoryCard = ({ name, image, dateFrom, dateUntil }) => {
  const [ratings, setRatings] = React.useState({
    cleanliness: 3,
    accuracy: 3,
    checkin: 3,
    communication: 3,
    location: 3,
    value: 3
  });
  const [comment, setComment] = React.useState('');

  const handleRatingChange = (event, type) => {
    const value = parseInt(event.target.value);
    setRatings({ ...ratings, [type]: value });
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted:', { ratings, comment });
  };

  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex border border-gray-300 rounded-lg p-4 mb-4 mr-4">
        <div className="flex items-center justify-center">
          <img
            src={image}
            alt={name}
            className="w-24 h-24 rounded-full mr-4"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="ml-3 flex-1">
          <h3 className="text-base font-semibold mb-1">{name}</h3>
          <p className="text-sm text-gray-600 mb-1"><span className="font-semibold">From:</span> {dateFrom}</p>
          <p className="text-sm text-gray-600 mb-1"><span className="font-semibold">To:</span> {dateUntil}</p>
          
          {/* Ratings */}
          {['cleanliness', 'accuracy', 'checkin', 'communication', 'location', 'value'].map((key) => (
            <div key={key} className="mt-2 flex justify-between items-center">
              <label className="block mb-1 capitalize">{key} Rate:</label>
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <label key={star} className="block">
                    <input
                      type="radio"
                      name={key}
                      value={star}
                      checked={ratings[key] === star}
                      onChange={(e) => handleRatingChange(e, key)}
                      className="sr-only"
                    />
                    <span className="text-gray-400 flex items-center">
                      {star <= ratings[key] ? (
                        <svg className="w-4 h-4 fill-current text-yellow-500 mr-1" viewBox="0 0 24 24">
                          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21L12 17.77L5.82 21L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4 fill-current text-gray-300 mr-1" viewBox="0 0 24 24">
                          <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21L12 17.77L5.82 21L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                        </svg>
                      )}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          ))}
          
          {/* Comment Input */}
          <form onSubmit={handleSubmit} className="mt-4 flex items-center justify-between">
            <input
              type="text"
              value={comment}
              onChange={handleCommentChange}
              placeholder="Add a comment..."
              className="border border-gray-300 rounded px-3 py-1 text-sm w-40"
            />
            <button type="submit" className="ml-2 bg-blue-500 text-white rounded px-3 py-1 text-sm hover:bg-blue-600">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TripHistoryCard;
