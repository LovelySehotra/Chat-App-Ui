import { getUserDetails } from '@/Redux/Slices/AuthSlice';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

function ProfilePage() {
  const dispatch = useDispatch()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSave = () => {
    // Handle save logic here (e.g., send data to an API)
    alert(`Saved: Name - ${name}, Email - ${email}`);
  };
  const userData = async () => {
    try {
      const response = await dispatch(getUserDetails())
      setName(response?.payload?.email ?? '');
      setEmail(response?.payload?.email ?? '');
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  };
  
  useEffect(() => {
    userData();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-8">Profile Page</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            placeholder="Enter your email"
          />
        </div>

        <button
          onClick={handleSave}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default ProfilePage;
