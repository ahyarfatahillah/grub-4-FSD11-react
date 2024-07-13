import React, { useState } from 'react';

function HostForm() {
    const [formData, setFormData] = useState({
        address: '',
        country: '',
        description: '',
        price: '',
        cleaningFee: '',
        availabilityDateFrom: '',
        availabilityDateTo: '',
        type: '',
        lon: '',
        lat: '',
        locationDesc: '',
        houseRules: '',
        safetyProperty: '',
        cancellationPolicy: '',
        bedroomsNumber: "1",
        bathsNumber: "1",
        services: '',
        notIncluded: '',
        userID: null, // Will be automatically filled from JWT
        pets: false,
        parties: false,
        smoking: false,
        coAlarm: false,
        smokeAlarm: false,
        scenicViews: false,
        laundry: false,
        family: false,
        heatingCooling: false,
        internet: false,
        office: false,
        diningRoom: false,
        outdoor: false,
        parking: false,
        bathroom: true,
        guestNumber: "1",
        hostedDate: Math.floor(Date.now() / 1000),
        kitchen: false,
        favorite: false,
    });

    const [urlInput, setUrlInput] = useState('');

    // Example JWT token (replace with your actual token)
    const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiZW1haWwiOiJlbWFpbDNAZXhhbXBsZS5jb20iLCJpYXQiOjE3MjA4NzE3OTl9.rawUcDMIWqJ8szX7BarE-mOdI7TSHbXgo_9X3OkGXQM';

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Extract userID from the JWT token
        const jwtToken = token.split(' ')[1]; // Remove 'Bearer ' prefix
        const decodedToken = JSON.parse(atob(jwtToken.split('.')[1]));
        const userID = decodedToken.id;
        const port = import.meta.env.VITE_API_PORT;
        const apiUrl = `http://localhost:${port}/api/properties`;

        try {
            // Step 1: Create the property and get PropertyID
            const propertyResponse = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': token
                },
                body: JSON.stringify({
                    ...formData,
                    availabilityDateFrom: new Date(formData.availabilityDateFrom).getTime() / 1000,
                    availabilityDateTo: new Date(formData.availabilityDateTo).getTime() / 1000,
                    userID: userID // Automatically add userID to formData
                })
            });

            if (!propertyResponse.ok) {
                console.error('Failed to create property.');
                return; // Exit if property creation fails
            }

            const property = await propertyResponse.json(); // Assuming the response contains the created property object
            const propertyID = property.id; // Adjust this according to the actual response structure
            console.log('Property created successfully!', propertyID);

            // Step 2: Post the URL with PropertyID
            const urlResponse = await fetch(`http://localhost:3001/api/images`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    url: urlInput,
                    PropertyID: propertyID
                })
            });

            if (!urlResponse.ok) {
                console.error('Failed to post URL.');
                return; // Exit if posting URL fails
            }

            console.log('URL posted successfully!');

            // Reset form or show success message
            setFormData({
                address: '',
                country: '',
                description: '',
                price: '',
                cleaningFee: '',
                availabilityDateFrom: '',
                availabilityDateTo: '',
                type: '',
                lon: '',
                lat: '',
                locationDesc: '',
                houseRules: '',
                safetyProperty: '',
                cancellationPolicy: '',
                bedroomsNumber: "1",
                bathsNumber: "1",
                services: '',
                notIncluded: '',
                userID: null, // Will be automatically filled from JWT
                pets: false,
                parties: false,
                smoking: false,
                coAlarm: false,
                smokeAlarm: false,
                scenicViews: false,
                laundry: false,
                family: false,
                heatingCooling: false,
                internet: false,
                office: false,
                diningRoom: false,
                outdoor: false,
                parking: false,
                bathroom: true,
                guestNumber: "1",
                hostedDate: Math.floor(Date.now() / 1000),
                kitchen: false,
                favorite: false,
            });
            setUrlInput('');

        } catch (error) {
            console.error('Error creating property or posting URL:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value, type, checked, files } = e.target;

        if (type === 'checkbox') {
            setFormData({
                ...formData,
                [name]: checked
            });
        } else if (type === 'file') {
            setFormData({
                ...formData,
                images: Array.from(files)
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };

    const handleUrlChange = (e) => {
        setUrlInput(e.target.value);
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
    Description:
    <textarea
        name="description"
        value={formData.description}
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
<label className="block text-gray-700 font-bold mb-2">
    Cleaning Fee:
    <input
        type="number"
        name="cleaningFee"
        value={formData.cleaningFee}
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
        name="availabilityDateFrom"
        value={formData.availabilityDateFrom}
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
        name="availabilityDateTo"
        value={formData.availabilityDateTo}
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
            name="type"
            value="TinyHomes"
            checked={formData.type === 'TinyHomes'}
            onChange={handleChange}
            required
            className="mr-2"
        />
        Tiny Home
    </label>
    <label className="flex items-center">
        <input
            type="radio"
            name="type"
            value="Mansions"
            checked={formData.type === 'Mansions'}
            onChange={handleChange}
            required
            className="mr-2"
        />
        Mansion
    </label>
    <label className="flex items-center">
        <input
            type="radio"
            name="type"
            value="Apartments"
            checked={formData.type === 'Apartments'}
            onChange={handleChange}
            required
            className="mr-2"
        />
        Apartment
    </label>
    <label className="flex items-center">
        <input
            type="radio"
            name="type"
            value="Rooms"
            checked={formData.type === 'Rooms'}
            onChange={handleChange}
            required
            className="mr-2"
        />
        Room
    </label>
    <label className="flex items-center">
        <input
            type="radio"
            name="type"
            value="Cabins"
            checked={formData.type === 'Cabins'}
            onChange={handleChange}
            required
            className="mr-2"
        />
        Cabin
    </label>
</div>
</div>
<div className="mb-4">
<label className="block text-gray-700 font-bold mb-2">
    Longitude:
    <input
        type="number"
        name="lon"
        value={formData.lon}
        onChange={handleChange}
        required
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
    />
</label>
</div>
<div className="mb-4">
<label className="block text-gray-700 font-bold mb-2">
    Latitude:
    <input
        type="number"
        name="lat"
        value={formData.lat}
        onChange={handleChange}
        required
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
    />
</label>
</div>
<div className="mb-4">
<label className="block text-gray-700 font-bold mb-2">
    Location Description:
    <textarea
        name="locationDesc"
        value={formData.locationDesc}
        onChange={handleChange}
        required
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
    />
</label>
</div>
<div className="mb-4">
<label className="block text-gray-700 font-bold mb-2">
    House Rules:
    <textarea
        name="houseRules"
        value={formData.houseRules}
        onChange={handleChange}
        required
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
    />
</label>
</div>
<div className="mb-4">
<label className="block text-gray-700 font-bold mb-2">
    Safety Features:
    <textarea
        name="safetyProperty"
        value={formData.safetyProperty}
        onChange={handleChange}
        required
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
    />
</label>
</div>
<div className="mb-4">
<label className="block text-gray-700 font-bold mb-2">
    Cancellation Policy:
    <textarea
        name="cancellationPolicy"
        value={formData.cancellationPolicy}
        onChange={handleChange}
        required
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
    />
</label>
</div>
<div className="mb-4">
<label className="block text-gray-700 font-bold mb-2">
    Services:
    <textarea
        name="services"
        value={formData.services}
        onChange={handleChange}
        required
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
    />
</label>
</div>
<div className="mb-4">
<label className="block text-gray-700 font-bold mb-2">
    Not Included:
    <textarea
        name="notIncluded"
        value={formData.notIncluded}
        onChange={handleChange}
        required
        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
    />
</label>
</div>
<div className="mb-4">
<label className="block text-gray-700 font-bold mb-2">Restrictions:</label>
<div className="flex flex-wrap space-x-4">
    {['pets', 'parties', 'smoking', 'coAlarm', 'smokeAlarm'].map((restriction) => (
        <label key={restriction} className="flex items-center mb-2">
            <input
                type="checkbox"
                name={restriction}
                checked={formData[restriction]}
                onChange={handleChange}
                className="mr-2"
            />
            {restriction.charAt(0).toUpperCase() + restriction.slice(1)}
        </label>
    ))}
</div>
</div>
<div className="mb-4">
<label className="block text-gray-700 font-bold mb-2">Features:</label>
<div className="flex flex-wrap space-x-4">
    {['scenicViews', 'laundry', 'family', 'heatingCooling', 'internet', 'office', 'diningRoom', 'outdoor', 'parking'].map((feature) => (
        <label key={feature} className="flex items-center mb-2">
            <input
                type="checkbox"
                name={feature}
                checked={formData[feature]}
                onChange={handleChange}
                className="mr-2"
            />
            {feature.charAt(0).toUpperCase() + feature.slice(1)}
        </label>
    ))}
</div>
</div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">
                            Input URL:
                            <input
                                type="text"
                                name="urlInput"
                                value={urlInput}
                                onChange={handleUrlChange}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
                            />
                        </label>
                    </div>

                    {/* Submit Button */}
                    <div className="mb-4">
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md shadow-sm hover:bg-blue-600"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default HostForm;
