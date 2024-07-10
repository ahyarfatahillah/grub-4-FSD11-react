import React from 'react';

const FormattedPrice = ({ price }) => {
    return (
        <p><strong>{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price)}</strong> night</p>
    );
};

export default FormattedPrice;
