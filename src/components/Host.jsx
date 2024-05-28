import React, { useState } from 'react';

function Host() {
    const [formData, setFormData] = useState({
        address: '',
        country: '',
        dateAvailableFrom: '',
        dateAvailableUntil: '',
        price: '',
        category: '',
        amenities: {
            tv: false,
            ac: false,
            wifi: false,
            bathroom: false,
            kitchen: false,
            freeParking: false,
        },
        images: []
    });

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;
        if (type === 'checkbox') {
            setFormData({
                ...formData,
                amenities: {
                    ...formData.amenities,
                    [name]: checked
                }
            });
        } else if (type === 'file') {
            const newImages = Array.from(files);
            setFormData({
                ...formData,
                images: [...formData.images, ...newImages]
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        // Handle form submission logic here
    };

    const handleRemoveImage = (index) => {
        setFormData({
            ...formData,
            images: formData.images.filter((_, i) => i !== index)
        });
    };

    return (
        <div className="py-24">
            <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg mt-10">
                <h1 className="text-2xl font-bold mb-6">Property Form</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">
                            Address:
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">
                            Country:
                            <input
                                type="text"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">
                            Date Available From:
                            <input
                                type="date"
                                name="dateAvailableFrom"
                                value={formData.dateAvailableFrom}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">
                            Date Available Until:
                            <input
                                type="date"
                                name="dateAvailableUntil"
                                value={formData.dateAvailableUntil}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">
                            Price:
                            <input
                                type="number"
                                name="price"
                                value={formData.price}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Category:</label>
                        <div className="flex items-center space-x-4">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="category"
                                    value="house"
                                    checked={formData.category === 'house'}
                                    onChange={handleChange}
                                    required
                                    className="mr-2"
                                />
                                House
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="category"
                                    value="mansion"
                                    checked={formData.category === 'mansion'}
                                    onChange={handleChange}
                                    required
                                    className="mr-2"
                                />
                                Mansion
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="category"
                                    value="apartment"
                                    checked={formData.category === 'apartment'}
                                    onChange={handleChange}
                                    required
                                    className="mr-2"
                                />
                                Apartment
                            </label>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">Amenities:</label>
                        <div className="flex flex-wrap space-x-4">
                            {['tv', 'ac', 'wifi', 'bathroom', 'kitchen', 'freeParking'].map((amenity) => (
                                <label key={amenity} className="flex items-center mb-2">
                                    <input
                                        type="checkbox"
                                        name={amenity}
                                        checked={formData.amenities[amenity]}
                                        onChange={handleChange}
                                        className="mr-2"
                                    />
                                    {amenity.charAt(0).toUpperCase() + amenity.slice(1)}
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">
                            Upload Images:
                            <input
                                type="file"
                                name="images"
                                onChange={handleChange}
                                multiple
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            />
                        </label>
                        <div className="flex flex-wrap mt-4">
                            {formData.images.map((image, index) => (
                                <div key={index} className="relative w-24 h-24 mr-4 mb-4">
                                    <img
                                        src={URL.createObjectURL(image)}
                                        alt={`upload-${index}`}
                                        className="w-full h-full object-cover rounded-md"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveImage(index)}
                                        className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                                    >
                                        &times;
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-red-500 text-white font-bold py-2 px-4 rounded-md hover:bg-red-600 transition duration-200"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Host;
