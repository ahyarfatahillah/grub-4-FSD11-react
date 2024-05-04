import React, { useState, useEffect } from 'react';

const AsideDetail = () => {
    const [checkIn, setCheckIn] = useState(null);
    const [checkOut, setCheckOut] = useState(null);
    const [guest, setGuest] = useState(1);
    const pricePerGuest = 200000; // Biaya tambahan per guest setelah tamu pertama
    const priceAtNight = 2500000;
    const [priceHotel, setPriceHotel] = useState(0);

    useEffect(() => {
        const calculatePrice = () => {
            if (checkIn && checkOut && guest && checkOut > checkIn) {
                const checkDate = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24)); // Menghitung selisih hari

                // Harga kamar per malam
                let priceRoom = priceAtNight;

                // Perhitungan harga tamu tambahan
                if (guest > 2) {
                    const extraGuests = guest - 2; // Jumlah tamu tambahan setelah tamu pertama
                    const extraGuestPrice = extraGuests * pricePerGuest; // Total biaya tambahan untuk tamu tambahan
                    priceRoom += extraGuestPrice; // Tambahkan biaya tamu tambahan ke harga kamar per malam
                }

                const totalHotelPrice = priceRoom * checkDate; // Total harga hotel
                setPriceHotel(totalHotelPrice);
            }
        };

        calculatePrice();
    }, [checkIn, checkOut, guest]);

    return (
        <>
            <aside className='aside-parents w-[390px]'>
                <div className="card-reserv border border-gray-300 rounded-lg shadow-md p-6 flex flex-col gap-5 sticky top-20">
                    <div className="card-reserv1 flex items-center gap-[8px]">
                        <h2 className="font-bold text-[20px]" id='price'>Rp.{priceAtNight}</h2>
                        <p>night</p>
                    </div>
                    <div className="card-reserv2 flex flex-col gap-[15px]">
                        <div className="check border border-gray-300 rounded-lg">
                            <div className="caserv1 flex border border-gray-300">
                                <div className="checkin w-1/2 border-r border-gray-300 p-2" >
                                    <label className='w-full font-bold text-[12px]' htmlFor="checkin-date">CHECK-IN</label>
                                    <input className='block' type="date" id="checkIn" onChange={(e) => setCheckIn(new Date(e.target.value))} />
                                </div>
                                <div className="checkout w-1/2 border-r border-gray-300 p-2">
                                    <label className='w-full font-bold text-[12px]' htmlFor="checkout">CHECK-OUT</label>
                                    <input className='block' type="date" id="checkOut" onChange={(e) => setCheckOut(new Date(e.target.value))} />
                                </div>
                            </div>
                            <div className="caserv2 p-[10px]">
                                <h5 className="font-bold">GUESTS</h5>
                                <input type="number" id="guest" value={guest} onChange={(e) => setGuest(parseInt(e.target.value))} />
                            </div>
                        </div>
                        <div className="reservasi">
                        <a href="../Reservation Page/index.html"><button className='w-full p-4 bg-pink-500 text-white rounded-lg'><h3>Reserve</h3></button></a>
                        </div>
                    </div>
                    <div className="card-reserv3">
                        <p className='text-center text-[15px]'>You won't be charged yet</p>
                        <div className="desc-price flex flex-col gap-4 border-b border-gray-300 pb-5">
                            <div className="dprice1 flex justify-between text-[16px] pt-3">
                                <p>{priceAtNight} x {checkIn && checkOut && checkOut > checkIn ? Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24)) : 0} nights</p>
                                <p>Rp.{priceHotel}</p>
                            </div>
                        </div>
                        <div className="total-price flex justify-between text-[16px] pt-4">
                            <h4>Total before taxes</h4>
                            <h4>Rp.{priceHotel}</h4>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
}

export default AsideDetail;