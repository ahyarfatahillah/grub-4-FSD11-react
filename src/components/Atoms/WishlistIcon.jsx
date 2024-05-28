// AnotherComponent.js
import React from 'react';

function AnotherComponent({ itemId, isWishlisted, toggleWishlist }) {
    return (
        <div className="zoom fa-heart-container" onClick={() => toggleWishlist(itemId)}>
            <i className="fa-heart fa-regular fa-heart-outline"></i>
            {isWishlisted ?
                <i className="fa-heart fa-solid fa-heart-solid-red"></i> :
                <i className="fa-heart fa-solid fa-heart-solid-black"></i>
            }
        </div>
    );
}

export default AnotherComponent;
