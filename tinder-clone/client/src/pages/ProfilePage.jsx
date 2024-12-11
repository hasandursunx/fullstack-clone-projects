import { useState } from "react";
import Header from "../components/Header"
import { useAuthStore } from "../store/useAuthStore"
import { useUserStore } from '../store/useUserStore'
import { useRef } from "react";

const ProfilePage = () => {
    const { authUser } = useAuthStore();
    const [name, setName] = useState(authUser.name || "");
    const [bio, setBio] = useState(authUser.bio || "");
    const [age, setAge] = useState(authUser.age || "");
    const [gender, setGender] = useState(authUser.gender || "");
    const [genderPreference, setGenderPreference] = useState(authUser.genderPreference || []);
    const [image, setImage] = useState(authUser.image || null);

    const fileInputRef = useRef(null);

    const { loading, updateProfile } = useUserStore()

    const handleSubmit = (e) => {
        e.preventDefault();
        updateProfile({ name, bio, age, gender, genderPreference, image });
    }


    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Header />
            <div>
                <div className="flex-grow flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Your Profile</h2>
                </div>
                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md ">
                    <div className="bg-white py-8 px-4 sm:rounded-lg shadow sm:px-10 border border-gray-200">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                <div className="mt-1">
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        value={name}
                                        required
                                        onChange={(e) => setName(e.target.value)}
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm
                                        placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm
                                        "
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
                                <div className="mt-1">
                                    <input
                                        id="age"
                                        name="age"
                                        type="number"
                                        value={age}
                                        required
                                        onChange={(e) => setAge(e.target.value)}
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm
                                        placeholder-gray-400 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm
                                        "
                                    />
                                </div>
                            </div>
                            <div>
                                <span className="block text-sm font-medium text-gray-700">Gender</span>
                                <div className="flex space-x-4">
                                    {
                                        ["Male", "Female"].map((option) => (
                                            <label key={option} className="inline-flex items-center">
                                                <input
                                                    type="radio"
                                                    className="form-radio text-pink-600"
                                                    name="gender"
                                                    value={option.toLowerCase()}
                                                    checked={gender === option.toLowerCase()}
                                                    onChange={() => setGender(option.toLowerCase())}
                                                />
                                                <span className="ml-2">{option}</span>
                                            </label>
                                        ))
                                    }
                                </div>
                            </div>
                            <div>
                                <span className="block text-sm font-medium text-gray-700">Gender Preference</span>
                                <div className="flex space-x-4">
                                    {
                                        ["Male", "Female", "Both"].map((option) => (
                                            <label key={option} className="inline-flex items-center">
                                                <input
                                                    type="checkbox"
                                                    className="form-radio text-pink-600"
                                                    name="gender"
                                                    value={option.toLowerCase()}
                                                    checked={genderPreference.toLowerCase() === option.toLowerCase()}
                                                    onChange={() => setGenderPreference(option.toLowerCase())}
                                                />
                                                <span className="ml-2">{option}</span>
                                            </label>
                                        ))
                                    }
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage