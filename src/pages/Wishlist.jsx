import React from 'react'
import Header from "../components/Headerh"
import Footer from "../components/Footerh"
import CardWishlistProducts from '../components/CardWishlistProducts'
const Wishlist = () => {
    return (
        <div>
            <Header isHidden={true} />
            <CardWishlistProducts/>
            <Footer />
        </div>

    )
}
export default Wishlist