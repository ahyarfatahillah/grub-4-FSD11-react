import React, { useState, useEffect } from 'react';

const EditProfileForm = () => {
    const port = import.meta.env.VITE_API_PORT;
    const [formData, setFormData] = useState({
        name: '',
        photoURL: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
        email: '',
        address: 'not filled in yet',
        password: '',
        governmentID: 'not filled in yet',
        phone: '',
        EmergencyContact: 'not filled in yet',
        paymentinfo: 'not filled in yet',
        tripHistory: 'no history',
        description: 'Hello There!',
        languanges: 'not filled in yet',
    });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem('_token');
                if (!token) {
                    throw new Error('No token found');
                }
                const jwtToken = token.replace('Bearer ', '');
                const decodedToken = JSON.parse(atob(jwtToken.split('.')[1]));
                const userID = decodedToken.id;

                setLoading(true);
                const response = await fetch(`http://localhost:${port}/api/users/${userID}`, {
                    method: 'GET',
                    headers: {
                        Authorization: `Bearer ${jwtToken}`,
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }

                const userData = await response.json();
                setFormData({
                    name: userData.name,
                    photoURL: userData.photoURL,
                    email: userData.email,
                    address: userData.address || 'not filled in yet',
                    password: userData.password || '',
                    governmentID: userData.governmentID || 'not filled in yet',
                    phone: userData.phone || '',
                    EmergencyContact: userData.EmergencyContact || 'not filled in yet',
                    paymentinfo: userData.paymentinfo || 'not filled in yet',
                    tripHistory: userData.tripHistory || 'no history',
                    description: userData.description || 'Hello There!',
                    languanges: userData.languanges || 'not filled in yet',
                });
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, [port]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('_token');
            if (!token) {
                throw new Error('No token found');
            }
            const jwtToken = token.replace('Bearer ', '');
            const decodedToken = JSON.parse(atob(jwtToken.split('.')[1]));
            const userID = decodedToken.id;

            setLoading(true);
            const response = await fetch(`http://localhost:${port}/api/users/${userID}`, {
                method: 'PUT',
                headers: {
                    Authorization: `Bearer ${jwtToken}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to update user data');
            }

            alert('Profile updated successfully!');
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async () => {
        const confirmDelete = window.confirm('Are you sure you want to delete your profile? This action cannot be undone.');
        if (!confirmDelete) {
            return;
        }
        
        try {
            const token = localStorage.getItem('_token');
            if (!token) {
                throw new Error('No token found');
            }
            const jwtToken = token.replace('Bearer ', '');
            const decodedToken = JSON.parse(atob(jwtToken.split('.')[1]));
            const userID = decodedToken.id;

            setLoading(true);
            const response = await fetch(`http://localhost:${port}/api/users/${userID}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${jwtToken}`,
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Failed to delete user');
            }

            localStorage.removeItem('_token');
            window.location.href = 'http://localhost:5173/';
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div className="py-16">
            <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
                <h2 className="text-2xl font-semibold mb-6">Edit Profile</h2>
                <form onSubmit={handleSubmit}>
                    {/* Form fields */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Government ID</label>
                        <input
                            type="text"
                            name="governmentID"
                            value={formData.governmentID}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Address</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            name="password"
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Phone</label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Emergency Contact</label>
                        <input
                            type="text"
                            name="EmergencyContact"
                            value={formData.EmergencyContact}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Payment Info</label>
                        <input
                            type="text"
                            name="paymentinfo"
                            value={formData.paymentinfo}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Trip History</label>
                        <input
                            type="text"
                            name="tripHistory"
                            value={formData.tripHistory}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            rows="3"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        ></textarea>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Languages</label>
                        <input
                            type="text"
                            name="languanges"
                            value={formData.languanges}
                            onChange={handleChange}
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                        />
                    </div>
                    {/* Add more fields as needed */}
                    <div className="mt-6">
                        <button
                            type="submit"
                            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
                <div className="mt-6">
                    <button
                        onClick={handleDelete}
                        className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                        Delete Profile
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditProfileForm;
