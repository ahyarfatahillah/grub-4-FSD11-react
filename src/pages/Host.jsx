import React, { useEffect } from 'react';
import HostForm from '../components/HostForm';
import Header from '../components/Headerh';
import Footer from '../components/Footerh';

const Hostd = () => {
  useEffect(() => {
    // Fetch token from local storage
    const token = localStorage.getItem('_token');

    // Check if token exists
    if (!token) {
      alert('Token not found. Redirecting to login page.'); // Show alert if token doesn't exist
      // Redirect to login page
      window.location.href = 'http://localhost:5173/Login';
      return;
    }

    // Continue with your normal component rendering logic
  }, []);

  return (
    <div>
      <Header isHidden={true} />
      <HostForm />
      <Footer />
    </div>
  );
};

export default Hostd;
