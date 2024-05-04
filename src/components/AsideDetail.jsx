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
            <aside>
                <div className="card-reserv">
                    <div className="card-reserv1 flex">
                        <h2 className="font-bold text-[20px]" id='price'>Rp.{priceAtNight}</h2>
                        <p>night</p>
                    </div>
                    <div className="card-reserv2">
                        <div className="check">
                            <div className="caserv1">
                                <div className="checkin" >
                                    <label htmlFor="checkin-date">CHECK-IN</label>
                                    <input type="date" id="checkIn" onChange={(e) => setCheckIn(new Date(e.target.value))} />
                                </div>
                                <div className="checkout">
                                    <label htmlFor="checkout">CHECK-OUT</label>
                                    <input type="date" id="checkOut" onChange={(e) => setCheckOut(new Date(e.target.value))} />
                                </div>
                            </div>
                            <div className="caserv2">
                                <h5 className="font-bold">GUESTS</h5>
                                <input type="number" id="guest" value={guest} onChange={(e) => setGuest(parseInt(e.target.value))} />
                            </div>
                        </div>
                        <div className="reservasi">
                        <a href="../Reservation Page/index.html"><button><h3>Reserve</h3></button></a>
                        </div>
                    </div>
                    <div className="card-reserv3">
                        <p>You won't be charged yet</p>
                        <div className="desc-price">
                            <div className="dprice1">
                                <p>{priceAtNight} x {checkIn && checkOut && checkOut > checkIn ? Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24)) : 0} nights</p>
                                <p>Rp.{priceHotel}</p>
                            </div>
                        </div>
                        <div className="total-price">
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