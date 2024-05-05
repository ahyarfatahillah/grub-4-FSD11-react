import React from 'react';
import { Link } from "react-router-dom";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

function ImageSlider({ data }) {
    if (data.length < 2) {
        return <Link to="ProductDetail"><img className="img-product" src={data} alt="img-card" /></Link>
    } else {
        return (
            <div className='slide'>
                <Slide autoplay={false}>
                    {data.map((each, index) => (
                        <Link key={index} to="ProductDetail">
                            <img className="img-product" src={each} alt={`image-${index}`} />
                        </Link>
                    ))}
                </Slide>
            </div>
        );
    }
}

export default ImageSlider;
