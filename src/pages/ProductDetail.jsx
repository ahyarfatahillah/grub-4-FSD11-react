import React from 'react'
import Navbar from '../components/Navbar'
import ImgDetail from '../components/ImgDetail'
import SectionDetail from '../components/SectionDetail'
import ArticleDetail from '../components/ArticleDetail'
import AsideDetail from '../components/AsideDetail'
import Footer from '../components/Footer'
import PropertyRating from '../components/PropertyRating'
import UserRating from '../components/UserRating'
import UserReview from '../components/UserReview'
import Maps from '../components/Maps'
import HostProfile from '../components/HostProfile'
import PropertyRules from '../components/PropertyRules'


const ProductDetail = () => {
  return (
    <>
      <Navbar/>
      <br />
      <div className="root-container mt-20">
      <ImgDetail/>
        <main>
            <div className="main-container">
                <SectionDetail/>
                <ArticleDetail/>
            </div>
            <AsideDetail/>
        </main>
        <div className="page">
            <PropertyRating />
            <UserRating />
            <UserReview />
            <Maps />
            <HostProfile />
            <PropertyRules />
        </div>
      </div>
     <Footer/>
    </>
  )
}

export default ProductDetail
