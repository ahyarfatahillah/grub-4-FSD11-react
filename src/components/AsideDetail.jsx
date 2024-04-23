import React from 'react'

const AsideDetail = () => {
  return (
    <>
      <aside>
                <div className="card-reserv">
                    <div className="card-reserv1 flex">
                        <h2 className="font-bold text-[20px]">Rp2,591,949</h2>
                        <p>night</p>
                    </div>
                    <div className="card-reserv2">
                        <div className="check">
                            <div className="caserv1">
                                <div className="checkin" >
                                    <label for="checkin-date">CHECK-IN</label>
                                    <input type="date" id="checkin-date"/>
                                </div>
                                <div className="checkout">
                                    <label for="checkout">CHECK-OUT</label>
                                    <input type="date" id="checkout"/>
                                </div>
                            </div>
                            <div className="caserv2">
                                <h5 className="font-bold">GUESTS</h5>
                                <p>1 guests</p>
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
                                <p>Rp2,591,949 x 8 nights</p>
                                <p>Rp20,735,592</p>
                            </div>
                            <div className="dprice2">
                                <p>Weekly stay discount</p>
                                <p className='text-[#3FA743]'>-Rp2,073,560</p>
                            </div>
                            <div className="dprice3">
                                <a href="#" className='text-[black]'>Cleaning fee</a>
                                <p>Rp741,829</p>
                            </div>
                            <div className="dprice4">
                                <a href="#"className='text-[black]' >Airbnb service fee</a>
                                <p>Rp3,040,712</p>
                            </div>
                        </div>
                        <div className="total-price">
                            <h4>Total before taxes</h4>
                            <h4>Rp22,444,573</h4>
                        </div>
                    </div>
                </div>
            </aside>
    </>
  )
}

export default AsideDetail
