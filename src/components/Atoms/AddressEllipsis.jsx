import React from 'react';

const AddressEllipsis = ({ address, country }) => {
    const addressHome = `${address}, ${country}`;
    const addressEllipsis = addressHome.length > 24 ? addressHome.substring(0, 20) + "..." : addressHome;
    return <h2>{addressEllipsis}</h2>;
};

export default AddressEllipsis;