import React from 'react';
import ConverterDateUnix from '../Atoms/ConverterDateUnix.jsx';

const DateComponent = ({ timestamp }) => {
    const date = ConverterDateUnix(timestamp);
    return <span>{date}</span>;
};

export default DateComponent;