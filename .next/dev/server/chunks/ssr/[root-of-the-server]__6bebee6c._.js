module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/GitHub/mob-cconnect-temp-release/app/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>App
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/mob-cconnect-temp-release/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/mob-cconnect-temp-release/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function App() {
    const [isDarkMode, setIsDarkMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [statusMessage, setStatusMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    // 1. LOGIC: Handle the Email Redirect (Fixing the Gmail Issue)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Check if there is a token in the website URL (passed from the email)
        const params = new URLSearchParams(window.location.search);
        const token = params.get('token');
        if (token) {
            setStatusMessage("Launching cConnect...");
            // Attempt to open the app via Deep Link
            window.location.href = `cconnect://open?token=${token}`;
            // Optional: If app doesn't open in 3 seconds, show a message
            setTimeout(()=>{
                setStatusMessage("App didn't open? Please download it below.");
            }, 3000);
        }
    }, []);
    // 2. LOGIC: Fonts & Dark Mode (Your existing code)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
        return ()=>{
            document.head.removeChild(linkPreconnect1);
            document.head.removeChild(linkPreconnect2);
            document.head.removeChild(linkFont);
            document.body.style.fontFamily = '';
        };
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e)=>setIsDarkMode(e.matches);
        handleChange(mediaQuery);
        mediaQuery.addEventListener('change', handleChange);
        return ()=>mediaQuery.removeEventListener('change', handleChange);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [
        isDarkMode
    ]);
    const handleImageError = (e)=>{
        e.target.src = 'https://placehold.co/128x128/cccccc/FFFFFF?text=Icon&font=inter';
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col items-center justify-center min-h-screen p-4 transition-colors duration-300",
        children: [
            statusMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6 bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded shadow-md max-w-4xl w-full",
                role: "alert",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-bold",
                        children: "System Message"
                    }, void 0, false, {
                        fileName: "[project]/GitHub/mob-cconnect-temp-release/app/page.jsx",
                        lineNumber: 82,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: statusMessage
                    }, void 0, false, {
                        fileName: "[project]/GitHub/mob-cconnect-temp-release/app/page.jsx",
                        lineNumber: 83,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/GitHub/mob-cconnect-temp-release/app/page.jsx",
                lineNumber: 81,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full mx-auto overflow-hidden grid md:grid-cols-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-8 md:p-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/images/cConnect.svg",
                                alt: "cConnect Icon",
                                className: "w-20 h-20 mb-6 rounded-2xl shadow-lg",
                                onError: handleImageError
                            }, void 0, false, {
                                fileName: "[project]/GitHub/mob-cconnect-temp-release/app/page.jsx",
                                lineNumber: 91,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl md:text-4xl font-bold mb-2 text-gray-900 dark:text-white",
                                children: "Connect by Cursor"
                            }, void 0, false, {
                                fileName: "[project]/GitHub/mob-cconnect-temp-release/app/page.jsx",
                                lineNumber: 97,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 dark:text-gray-400 mb-6 text-lg",
                                children: "Version 1.1"
                            }, void 0, false, {
                                fileName: "[project]/GitHub/mob-cconnect-temp-release/app/page.jsx",
                                lineNumber: 98,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base text-gray-700 dark:text-gray-300",
                                children: "Welcome! You can get the official app directly from us here while we finalize our listing on the Google Play Store."
                            }, void 0, false, {
                                fileName: "[project]/GitHub/mob-cconnect-temp-release/app/page.jsx",
                                lineNumber: 99,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/GitHub/mob-cconnect-temp-release/app/page.jsx",
                        lineNumber: 90,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-50 dark:bg-gray-900 p-8 md:p-12 flex flex-col items-center justify-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200",
                                children: "Get the App"
                            }, void 0, false, {
                                fileName: "[project]/GitHub/mob-cconnect-temp-release/app/page.jsx",
                                lineNumber: 106,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://github.com/mallsystems/mob-cconnect-temp-release/releases/download/v1.1/Connect.by.Cursor.apk",
                                className: "w-full text-center inline-block bg-[#AADEEC] text-gray-900 font-bold text-lg py-4 px-10 rounded-lg shadow-lg hover:bg-[#55A6DA] hover:text-white focus:outline-none focus:ring-4 focus:ring-[#55A6DA]/50 dark:focus:ring-[#AADEEC]/50 transition-all duration-300 transform hover:scale-105",
                                children: "Download Application"
                            }, void 0, false, {
                                fileName: "[project]/GitHub/mob-cconnect-temp-release/app/page.jsx",
                                lineNumber: 108,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-center text-gray-500 dark:text-gray-400 mt-8",
                                children: 'You may need to "Allow installs from unknown sources" in your Android settings.'
                            }, void 0, false, {
                                fileName: "[project]/GitHub/mob-cconnect-temp-release/app/page.jsx",
                                lineNumber: 115,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/GitHub/mob-cconnect-temp-release/app/page.jsx",
                        lineNumber: 105,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/GitHub/mob-cconnect-temp-release/app/page.jsx",
                lineNumber: 87,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-center gap-6 py-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col items-center justify-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm font-bold text-gray-500 dark:text-gray-400",
                            children: "Powered by"
                        }, void 0, false, {
                            fileName: "[project]/GitHub/mob-cconnect-temp-release/app/page.jsx",
                            lineNumber: 124,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/images/cursor.png",
                            alt: "CURSOR Logo",
                            className: "h-5 w-auto mt-1",
                            onError: (e)=>{
                                e.target.src = 'https://placehold.co/100x24/cccccc/FFFFFF?text=Logo&font=inter';
                            }
                        }, void 0, false, {
                            fileName: "[project]/GitHub/mob-cconnect-temp-release/app/page.jsx",
                            lineNumber: 125,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/GitHub/mob-cconnect-temp-release/app/page.jsx",
                    lineNumber: 123,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/GitHub/mob-cconnect-temp-release/app/page.jsx",
                lineNumber: 122,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/GitHub/mob-cconnect-temp-release/app/page.jsx",
        lineNumber: 77,
        columnNumber: 9
    }, this);
}
}),
"[project]/GitHub/mob-cconnect-temp-release/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else //TURBOPACK unreachable
            ;
        } else //TURBOPACK unreachable
        ;
    }
} //# sourceMappingURL=module.compiled.js.map
}),
"[project]/GitHub/mob-cconnect-temp-release/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/GitHub/mob-cconnect-temp-release/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
"[project]/GitHub/mob-cconnect-temp-release/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/GitHub/mob-cconnect-temp-release/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__6bebee6c._.js.map