import React from 'react';
import TripHistoryCard from './Molecules/TripRating'; // Adjust the path as needed

const TripCard = () => {
  const tripHistory = [
    {
      name: 'Trip to Paris',
      image: 'https://a0.muscache.com/im/pictures/miso/Hosting-971680756471640368/original/2a418eb0-1c24-4ac8-aa3a-9f7f793d1fb7.jpeg?im_w=720', // Replace with actual image path or URL
      dateFrom: '2023-05-10',
      dateUntil: '2023-05-15'
    },
    {
      name: 'Beach Vacation',
      image: 'https://a0.muscache.com/im/pictures/miso/Hosting-47715196/original/337f0970-f996-4b12-9e2d-157a1bcd1b2e.jpeg?im_w=720', // Replace with actual image path or URL
      dateFrom: '2022-08-20',
      dateUntil: '2022-08-25'
    }
    // Add more trips as needed
  ];

  return (
    <div className=' pt-[85px] pb-8'>
      <div className="font-bold text-3xl px-16 py-4">Your Trips</div>
      <div className="flex flex-wrap justify-center">
        {tripHistory.map((trip, index) => (
          <TripHistoryCard
            key={index}
            name={trip.name}
            image={trip.image}
            dateFrom={trip.dateFrom}
            dateUntil={trip.dateUntil}
          />
        ))}
      </div>
    </div>
  );
};

export default TripCard;