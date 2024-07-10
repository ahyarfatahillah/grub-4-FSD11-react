import React from 'react';
import ConverterMonthUnix from '../Atoms/ConverterMonthUnix.jsx';

const Month = ({ timestamp }) => {
    const month = ConverterMonthUnix(timestamp);
    return <span>{month}</span>;
};

export default Month;