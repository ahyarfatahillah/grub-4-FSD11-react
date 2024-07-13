import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ImgDetail from '../components/ImgDetail';
import SectionDetail from '../components/SectionDetail';
import ArticleDetail from '../components/ArticleDetail';
import AsideDetail from '../components/AsideDetail';
import Footer from '../components/Footer';
import PropertyRating from '../components/PropertyRating';
import UserRating from '../components/UserRating';
import UserReview from '../components/UserReview';
import Maps from '../components/Maps';
import HostProfile from '../components/HostProfile';
import PropertyRules from '../components/PropertyRules';
import { fetchData } from '../services/Properties';

const ProductDetail = () => {
  const { id } = useParams(); // Mengambil ID dari URL
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const getPropertyData = async () => {
      const data = await fetchData();
      const propertyData = data.find(item => item.id === parseInt(id));
      setProperty(propertyData);
    };

    getPropertyData();
  }, [id]);

  if (!property) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <br />
      <div className="root-container mt-2 w-screen mx-auto p-20 gap-5 flex flex-col">
        <ImgDetail property={property} />
        <main className='flex gap-[15px] justify-between'>
          <div className="main-container w-[70%]">
            <SectionDetail property={property} />
            <ArticleDetail property={property} />
          </div>
          <AsideDetail property={property} />
        </main>
        <div className="border-b border-gray-300 pt-5 "></div>
        <div className="page">
          <PropertyRating property={property} />
          <UserRating property={property} />
          <UserReview property={property} />
          <Maps property={property} />
          <HostProfile property={property} />
          <PropertyRules property={property} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductDetail;
