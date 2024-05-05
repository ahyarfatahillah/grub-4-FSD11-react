import React from 'react'
const GetDateUnix = (data) => {
    const dateUnix = new Date(data * 1000);
    const dateNew = dateUnix.getDate();
    return (dateNew)
}
export default GetDateUnix;