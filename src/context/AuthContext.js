import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you are using axios for HTTP requests

// Create context
const AuthContext = createContext();

// Custom hook to use Auth Context
export const useAuth = () => {
    return useContext(AuthContext);
};

// Provider component
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        // Load user data from localStorage if it exists
        const savedUser = localStorage.getItem('user');
        return savedUser ? JSON.parse(savedUser) : null;
    });

    // Register function to handle user registration
    const register = async (userData) => {
        try {
            // Send a POST request to register the user
            const response = await axios.post('/api/register', userData);
            // Assuming the API returns the user data or a token after successful registration
            const registeredUser = response.data;
            setUser(registeredUser);
            localStorage.setItem('user', JSON.stringify(registeredUser)); // Store user in localStorage
        } catch (error) {
            console.error('Error registering user:', error);
            throw error; // Handle error as needed in your component
        }
    };

    // Login function to authenticate user
    const login = async (credentials) => {
        try {
            // Send a POST request to login the user
            const response = await axios.post('/api/login', credentials);
            // Assuming the API returns the user data or a token after successful login
            const loggedInUser = response.data;
            setUser(loggedInUser);
            localStorage.setItem('user', JSON.stringify(loggedInUser)); // Store user in localStorage
        } catch (error) {
            console.error('Error logging in user:', error);
            throw error; // Handle error as needed in your component
        }
    };

    // Logout function to clear user data
    const logout = () => {
        setUser(null);
        localStorage.removeItem('user'); // Remove user from localStorage
    };

    // Ensure user session persists on refresh by loading from localStorage
    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
