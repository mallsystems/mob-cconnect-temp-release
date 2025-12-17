"use client";

import React, { useState, useEffect } from 'react';

export default function VerifyPage() {
    const [mounted, setMounted] = useState(false);
    const [deepLink, setDeepLink] = useState(null);
    const [isRedirecting, setIsRedirecting] = useState(true);

    useEffect(() => {
        setMounted(true);
        const linkFont = document.createElement('link');
        linkFont.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap';
        linkFont.rel = 'stylesheet';
        document.head.appendChild(linkFont);

        const params = new URLSearchParams(window.location.search);
        const token = params.get('token');

        if (token) {
            const appLink = `cconnect://verify?token=${token}`;
            setDeepLink(appLink);
            window.location.href = appLink;
            const timer = setTimeout(() => setIsRedirecting(false), 3500);
            return () => clearTimeout(timer);
        } else {
            setIsRedirecting(false);
        }
    }, []);

    if (!mounted) return <div className="min-h-screen bg-gray-50 dark:bg-gray-950" />;

    if (isRedirecting) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col items-center justify-center font-['Poppins',_sans-serif]">
                <div className="relative mb-8">
                    <div className="absolute inset-0 rounded-[2rem] bg-blue-500/20 animate-ping"></div>
                    <div className="relative w-24 h-24 rounded-[2rem] shadow-2xl bg-white dark:bg-gray-800 p-1 flex items-center justify-center">
                        <img src="/images/cConnect.svg" alt="Logo" className="w-full h-full rounded-[1.8rem]" />
                    </div>
                </div>
                <h1 className="text-2xl font-bold flex items-center gap-1 text-gray-900 dark:text-white tracking-tight">
                    Launching cConnect
                    <span className="flex text-blue-600">
                        <span className="animate-bounce">.</span>
                        <span className="animate-bounce [animation-delay:0.2s]">.</span>
                        <span className="animate-bounce [animation-delay:0.4s]">.</span>
                    </span>
                </h1>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 flex flex-col items-center justify-center min-h-screen p-6 font-['Poppins',_sans-serif]">
            <div className="bg-white dark:bg-gray-900 rounded-[2rem] shadow-2xl shadow-gray-200/50 dark:shadow-black/50 max-w-5xl w-full mx-auto overflow-hidden grid md:grid-cols-2 border border-gray-100 dark:border-gray-800">

                {/* Left Section: Verify Action */}
                <div className="p-12 md:p-16 flex flex-col justify-center relative overflow-hidden">
                    {/* Background Decoration */}
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/50 to-transparent dark:from-blue-900/10 dark:to-transparent pointer-events-none" />

                    <div className="relative z-10">
                        <div className="w-20 h-20 mb-8 rounded-2xl shadow-lg bg-white dark:bg-gray-800 p-1 flex items-center justify-center">
                            <img src="/images/cConnect.svg" alt="cConnect" className="w-full h-full rounded-xl" />
                        </div>

                        <h1 className="text-4xl font-bold mb-6 tracking-tight text-gray-900 dark:text-white">
                            Verify Action
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-medium mb-10">
                            This link requires the cConnect app. If you have the app (Official or Beta) and it didn't open, tap below.
                        </p>

                        {deepLink && (
                            <button
                                onClick={() => window.location.href = deepLink}
                                className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-xl shadow-blue-500/20 transition-all active:scale-[0.98] text-lg"
                            >
                                Open cConnect
                            </button>
                        )}
                    </div>
                </div>

                {/* Right Section: Downloads */}
                <div className="bg-gray-50/50 dark:bg-gray-800/30 flex flex-col border-l border-gray-100 dark:border-gray-800">

                    {/* Official Release */}
                    <div className="p-12 flex flex-col items-center border-b border-gray-100 dark:border-gray-800">
                        <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 mb-8">Missing the app?</h2>
                        <div className="flex flex-col gap-4 w-full max-w-[220px]">
                            <a href="https://play.google.com/store/apps/details?id=com.cursor.cConnect" className="group w-full py-2 px-4 bg-black text-white rounded-xl flex items-center gap-3 hover:bg-gray-900 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 border border-gray-800">
                                <img src="/images/playstore.svg" alt="" className="w-8 h-8" />
                                <div className="flex flex-col items-start">
                                    <span className="text-[10px] font-medium uppercase leading-none opacity-80">Get it on</span>
                                    <span className="text-lg font-bold leading-tight font-sans">Google Play</span>
                                </div>
                            </a>
                            <a href="https://apps.apple.com/mt/app/connect-by-cursor/id6737701304" className="group w-full py-2 px-4 bg-black text-white rounded-xl flex items-center gap-3 hover:bg-gray-900 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 border border-gray-800">
                                <img src="/images/apple.svg" alt="" className="w-7 h-7 ml-0.5" />
                                <div className="flex flex-col items-start ml-1">
                                    <span className="text-[10px] font-medium leading-none opacity-80">Download on the</span>
                                    <span className="text-lg font-bold leading-tight font-sans">App Store</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Beta Program */}
                    <div className="p-12 flex flex-col items-center bg-blue-50/50 dark:bg-blue-900/10 flex-grow justify-center">
                        <div className="flex items-center gap-3 mb-8">
                            <span className="bg-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-sm shadow-blue-200 dark:shadow-none">Early Access</span>
                            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">Beta Program</h2>
                        </div>

                        <div className="flex flex-col gap-4 w-full max-w-[240px]">
                            <a href="https://play.google.com/store/apps/details?id=com.cursor.cConnect" className="group w-full py-4 px-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl text-sm font-bold flex items-center justify-center gap-4 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-md transition-all text-gray-700 dark:text-gray-200">
                                <img src="/images/playstore.svg" alt="" className="w-6 h-6 transition-transform group-hover:scale-110" />
                                <span>Play Store Beta</span>
                            </a>
                            <a href="https://testflight.apple.com/join/6hGtkQKw" className="group w-full py-4 px-6 bg-[#1C1C1E] text-white rounded-2xl text-sm font-bold flex items-center justify-center gap-4 hover:bg-black hover:shadow-xl hover:-translate-y-0.5 transition-all">
                                <img src="/images/apple.svg" alt="" className="w-6 h-6 transition-transform group-hover:scale-110" />
                                <span>Join TestFlight</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="mt-12 text-center text-gray-400 dark:text-gray-600 text-sm font-medium">
                &copy; {new Date().getFullYear()} Cursor Ltd. All rights reserved.
            </footer>
        </div>
    );
}