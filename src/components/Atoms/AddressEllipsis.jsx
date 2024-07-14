import React from 'react';

const AddressEllipsis = ({ address, country, className, type }) => {
    const addressHome = type ? `${type} in ${address}, ${country}` : `${address}, ${country}`;
    const addressEllipsis = addressHome.length > 24 ? addressHome.substring(0, 20) + "..." : addressHome;
    return <h2 className={className}>{type ? addressHome : addressEllipsis}</h2>;
};

export default AddressEllipsis;