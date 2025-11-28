"use client";

import React, { useState, useEffect } from 'react';

export default function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [statusMessage, setStatusMessage] = useState(""); 

    // 1. LOGIC: Handle the Email Redirect (Fixing the Gmail Issue)
    useEffect(() => {
        // Check if there is a token in the website URL (passed from the email)
        const params = new URLSearchParams(window.location.search);
        const token = params.get('token');

        if (token) {
            setStatusMessage("Launching cConnect...");
            
            // Attempt to open the app via Deep Link
            window.location.href = `cconnect://open?token=${token}`;
            
            // Optional: If app doesn't open in 3 seconds, show a message
            setTimeout(() => {
                 setStatusMessage("App didn't open? Please download it below.");
            }, 3000);
        }
    }, []);

    // 2. LOGIC: Fonts & Dark Mode (Your existing code)
    useEffect(() => {
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
        document.body.style.fontFamily = "'Poppins', sans-serif";

        return () => {
            document.head.removeChild(linkPreconnect1);
            document.head.removeChild(linkPreconnect2);
            document.head.removeChild(linkFont);
            document.body.style.fontFamily = ''; 
        };
    }, []);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e) => setIsDarkMode(e.matches);
        handleChange(mediaQuery);
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    const handleImageError = (e) => {
        e.target.src = 'https://placehold.co/128x128/cccccc/FFFFFF?text=Icon&font=inter';
    };

    return (
        <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col items-center justify-center min-h-screen p-4 transition-colors duration-300">

            {/* Status Message for Redirects */}
            {statusMessage && (
                <div className="mb-6 bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded shadow-md max-w-4xl w-full" role="alert">
                    <p className="font-bold">System Message</p>
                    <p>{statusMessage}</p>
                </div>
            )}

            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full mx-auto overflow-hidden grid md:grid-cols-2">
                
                {/* Left Side: Info */}
                <div className="p-8 md:p-12">
                    <img 
                        src="/images/cConnect.svg" 
                        alt="cConnect Icon" 
                        className="w-20 h-20 mb-6 rounded-2xl shadow-lg"
                        onError={handleImageError}
                    />
                    <h1 className="text-3xl md:text-4xl font-bold mb-2 text-gray-900 dark:text-white">Connect by Cursor</h1>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">Version 1.1</p>
                    <p className="text-base text-gray-700 dark:text-gray-300">
                        Welcome! You can get the official app directly from us here while we finalize our listing on the Google Play Store.
                    </p>
                </div>

                {/* Right Side: Action */}
                <div className="bg-gray-50 dark:bg-gray-900 p-8 md:p-12 flex flex-col items-center justify-center">
                    <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Get the App</h2>

                    <a 
                        href="https://github.com/mallsystems/mob-cconnect-temp-release/releases/download/v1.1/Connect.by.Cursor.apk" 
                        className="w-full text-center inline-block bg-[#AADEEC] text-gray-900 font-bold text-lg py-4 px-10 rounded-lg shadow-lg hover:bg-[#55A6DA] hover:text-white focus:outline-none focus:ring-4 focus:ring-[#55A6DA]/50 dark:focus:ring-[#AADEEC]/50 transition-all duration-300 transform hover:scale-105"
                    >
                       Download Application
                    </a>

                    <p className="text-sm text-center text-gray-500 dark:text-gray-400 mt-8">
                        You may need to "Allow installs from unknown sources" in your Android settings.
                    </p>
                </div>
            </div>

            {/* Powered by section */}
            <div className="flex items-center justify-center gap-6 py-8">
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