"use client";

import React, { useState, useEffect } from 'react';

// This single component contains all the logic and JSX for your landing page.
export default function App() {
    // State to manage dark mode
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Effect to add Poppins font and set font family
    useEffect(() => {
        // Create and append the font links to the document head
        const linkPreconnect1 = document.createElement('link');
        linkPreconnect1.rel = 'preconnect';
        linkPreconnect1.href = 'https://fonts.googleapis.com';
        
        const linkPreconnect2 = document.createElement('link');
        linkPreconnect2.rel = 'preconnect';
        linkPreconnect2.href = 'https://fonts.gstatic.com';
        linkPreconnect2.crossOrigin = 'true';
        
        const linkFont = document.createElement('link');
        linkFont.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap';
        linkFont.rel = 'stylesheet';

        document.head.appendChild(linkPreconnect1);
        document.head.appendChild(linkPreconnect2);
        document.head.appendChild(linkFont);

        // Apply the font to the whole page
        document.body.style.fontFamily = "'Poppins', sans-serif";

        // Cleanup function to remove elements if component unmounts
        return () => {
            document.head.removeChild(linkPreconnect1);
            document.head.removeChild(linkPreconnect2);
            document.head.removeChild(linkFont);
            document.body.style.fontFamily = ''; // Reset font
        };
    }, []);

    // Effect to check system preference and local storage on load
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        // Function to update state based on system preference
        const handleChange = (e) => {
            setIsDarkMode(e.matches);
        };

        // Set initial state
        handleChange(mediaQuery);

        // Add listener for changes in system preference
        mediaQuery.addEventListener('change', handleChange);
        
        // Cleanup listener on unmount
        return () => {
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);

    // Effect to update the <html> tag and local storage when state changes
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    // Function to toggle dark mode - REMOVED

    // Handle image placeholder error
    const handleImageError = (e) => {
        e.target.src = 'https://placehold.co/128x128/cccccc/FFFFFF?text=App&font=inter';
    };

    return (
        <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col items-center justify-center min-h-screen p-4 transition-colors duration-300">

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full mx-auto overflow-hidden grid md:grid-cols-2">
                
                {/* Left Side: Info */}
                <div className="p-8 md:p-12">
                    {/* App Icon Placeholder */}
                    <img 
                        src="/images/cConnect.svg" 
                        alt="cConnect Icon" 
                        className="w-20 h-20 mb-6 rounded-2xl shadow-lg"
                        onError={handleImageError}
                    />

                    {/* App Name */}
                    <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900 dark:text-white">Connect by Cursor</h1>
                    
                    {/* Version / Subtitle */}
                    <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
                        Version 1.1
                    </p>
                    
                    {/* Short Description */}
                    <p className="text-base text-gray-700 dark:text-gray-300">
                        Welcome! You can get the official app directly from us here while we finalize our listing on the Google Play Store.
                    </p>
                
                    
                </div>

                {/* Right Side: Action */}
                <div className="bg-gray-50 dark:bg-gray-900 p-8 md:p-12 flex flex-col items-center justify-center">
                    
                    <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Get the App</h2>

                    {/* Download Button */}
                    <a 
                        href="https://github.com/mallsystems/mob-cconnect-temp-release/releases/download/v1.1/Connect.by.Cursor.apk" /* TODO: Replace '#' with the direct link to your APK file */
                        className="w-full text-center inline-block bg-[#AADEEC] text-gray-900 font-bold text-lg py-4 px-10 rounded-lg shadow-lg hover:bg-[#55A6DA] hover:text-white focus:outline-none focus:ring-4 focus:ring-[#55A6DA]/50 dark:focus:ring-[#AADEEC]/50 transition-all duration-300 transform hover:scale-105"
                    >
                       Download Application
                    </a>

                    {/* Disclaimer */}
                    <p className="text-sm text-center text-gray-500 dark:text-gray-400 mt-8">
                        You may need to "Allow installs from unknown sources" in your Android settings.
                    </p>
                </div>

            </div>

            {/* --- New "Powered by" section --- */}
            <div className="flex items-center justify-center gap-6 py-8">
                
                {/* PHC Logo */}
                <img 
                    src="/images/phc.png" 
                    alt="PHC Logo" 
                    className="h-14 w-auto"
                    onError={(e) => { e.target.src = 'https://placehold.co/100x32/cccccc/FFFFFF?text=Logo&font=inter'; }}
                />

                {/* Powered by Cursor (Vertical Stack) */}
                <div className="flex flex-col items-center justify-center">
                    <span className="text-sm font-bold text-gray-500 dark:text-gray-400">Powered by</span>
                    <img 
                        src="/images/cursor.png" 
                        alt="CURSOR Logo" 
                        className="h-5 w-auto mt-1"
                        onError={(e) => { e.target.src = 'https://placehold.co/100x24/cccccc/FFFFFF?text=Logo&font=inter'; }}
                    />
                </div>

            </div>

        </div>
    );
}