import React from 'react'
const GetMonthUnix = (data) => {
    const date = new Date(data * 1000);
    const month = date.getMonth();
    const monthList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const monthName = monthList[month];
    return (monthName)
}

export default GetMonthUnix;
