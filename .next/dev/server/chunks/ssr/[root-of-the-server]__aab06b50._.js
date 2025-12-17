module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/GitHub/mob-cconnect-temp-release/app/verify/page.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VerifyPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/mob-cconnect-temp-release/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/GitHub/mob-cconnect-temp-release/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function VerifyPage() {
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deepLink, setDeepLink] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isRedirecting, setIsRedirecting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
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
            const timer = setTimeout(()=>setIsRedirecting(false), 3500);
            return ()=>clearTimeout(timer);
        } else {
            setIsRedirecting(false);
        }
    }, []);
    if (!mounted) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gray-50 dark:bg-gray-950"
    }, void 0, false, {
        fileName: "[project]/GitHub/mob-cconnect-temp-release/app/verify/page.jsx",
        lineNumber: 31,
        columnNumber: 26
    }, this);
    if (isRedirecting) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50 dark:bg-gray-950 flex flex-col items-center justify-center font-['Poppins',_sans-serif]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative mb-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 rounded-[2rem] bg-blue-500/20 animate-ping"
                        }, void 0, false, {
                            fileName: "[project]/GitHub/mob-cconnect-temp-release/app/verify/page.jsx",
                            lineNumber: 37,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-24 h-24 rounded-[2rem] shadow-2xl bg-white dark:bg-gray-800 p-1 flex items-center justify-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/images/cConnect.svg",
                                alt: "Logo",
                                className: "w-full h-full rounded-[1.8rem]"
                            }, void 0, false, {
                                fileName: "[project]/GitHub/mob-cconnect-temp-release/app/verify/page.jsx",
                                lineNumber: 39,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/GitHub/mob-cconnect-temp-release/app/verify/page.jsx",
                            lineNumber: 38,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/GitHub/mob-cconnect-temp-release/app/verify/page.jsx",
                    lineNumber: 36,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold flex items-center gap-1 text-gray-900 dark:text-white tracking-tight",
                    children: [
                        "Launching cConnect",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex text-blue-600",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "animate-bounce",
                                    children: "."
                                }, void 0, false, {
                                    fileName: "[project]/GitHub/mob-cconnect-temp-release/app/verify/page.jsx",
                                    lineNumber: 45,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "animate-bounce [animation-delay:0.2s]",
                                    children: "."
                                }, void 0, false, {
                                    fileName: "[project]/GitHub/mob-cconnect-temp-release/app/verify/page.jsx",
                                    lineNumber: 46,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "animate-bounce [animation-delay:0.4s]",
                                    children: "."
                                }, void 0, false, {
                                    fileName: "[project]/GitHub/mob-cconnect-temp-release/app/verify/page.jsx",
                                    lineNumber: 47,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/GitHub/mob-cconnect-temp-release/app/verify/page.jsx",
                            lineNumber: 44,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/GitHub/mob-cconnect-temp-release/app/verify/page.jsx",
                    lineNumber: 42,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/GitHub/mob-cconnect-temp-release/app/verify/page.jsx",
            lineNumber: 35,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 flex flex-col items-center justify-center min-h-screen p-6 font-['Poppins',_sans-serif]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-gray-900 rounded-[2rem] shadow-2xl shadow-gray-200/50 dark:shadow-black/50 max-w-5xl w-full mx-auto overflow-hidden grid md:grid-cols-2 border border-gray-100 dark:border-gray-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-12 md:p-16 flex flex-col justify-center relative overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/50 to-transparent dark:from-blue-900/10 dark:to-transparent pointer-events-none"
                            }, void 0, false, {
                                fileName: "[project]/GitHub/mob-cconnect-temp-release/app/verify/page.jsx",
                                lineNumber: 61,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative z-10",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-20 h-20 mb-8 rounded-2xl shadow-lg bg-white dark:bg-gray-800 p-1 flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/images/cConnect.svg",
                                            alt: "cConnect",
                                            className: "w-full h-full rounded-xl"
                                        }, void 0, false, {
                                            fileName: "[project]/GitHub/mob-cconnect-temp-release/app/verify/page.jsx",
                                            lineNumber: 65,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/GitHub/mob-cconnect-temp-release/app/verify/page.jsx",
                                        lineNumber: 64,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-4xl font-bold mb-6 tracking-tight text-gray-900 dark:text-white",
                                        children: "Verify Action"
                                    }, void 0, false, {
                                        fileName: "[project]/GitHub/mob-cconnect-temp-release/app/verify/page.jsx",
                                        lineNumber: 68,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg text-gray-600 dark:text-gray-300 leading-relaxed font-medium mb-10",
                                        children: "This link requires the cConnect app. If you have the app (Official or Beta) and it didn't open, tap below."
                                    }, void 0, false, {
                                        fileName: "[project]/GitHub/mob-cconnect-temp-release/app/verify/page.jsx",
                                        lineNumber: 71,
                                        columnNumber: 25
                                    }, this),
                                    deepLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>window.location.href = deepLink,
                                        className: "w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-xl shadow-blue-500/20 transition-all active:scale-[0.98] text-lg",
                                        children: "Open cConnect"
                                    }, void 0, false, {
                                        fileName: "[project]/GitHub/mob-cconnect-temp-release/app/verify/page.jsx",
                                        lineNumber: 76,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/GitHub/mob-cconnect-temp-release/app/verify/page.jsx",
                                lineNumber: 63,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/GitHub/mob-cconnect-temp-release/app/verify/page.jsx",
                        lineNumber: 59,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gray-50/50 dark:bg-gray-800/30 flex flex-col border-l border-gray-100 dark:border-gray-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-12 flex flex-col items-center border-b border-gray-100 dark:border-gray-800",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xs font-bold uppercase tracking-[0.2em] text-gray-400 dark:text-gray-500 mb-8",
                                        children: "Missing the app?"
                                    }, void 0, false, {
                                        fileName: "[project]/GitHub/mob-cconnect-temp-release/app/verify/page.jsx",
                                        lineNumber: 91,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-4 w-full max-w-[220px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://play.google.com/store/apps/details?id=com.cursor.cConnect",
                                                className: "group w-full py-2 px-4 bg-black text-white rounded-xl flex items-center gap-3 hover:bg-gray-900 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 border border-gray-800",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/images/playstore.svg",
                                                        alt: "",
                                                        className: "w-8 h-8"
                                                    }, void 0, false, {
                                                        fileName: "[project]/GitHub/mob-cconnect-temp-release/app/verify/page.jsx",
                                                        lineNumber: 94,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col items-start",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] font-medium uppercase leading-none opacity-80",
                                                                children: "Get it on"
                                                            }, void 0, false, {
                                                                fileName: "[project]/GitHub/mob-cconnect-temp-release/app/verify/page.jsx",
                                                                lineNumber: 96,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-lg font-bold leading-tight font-sans",
                                                                children: "Google Play"
                                                            }, void 0, false, {
                                                                fileName: "[project]/GitHub/mob-cconnect-temp-release/app/verify/page.jsx",
                                                                lineNumber: 97,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/GitHub/mob-cconnect-temp-release/app/verify/page.jsx",
                                                        lineNumber: 95,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/GitHub/mob-cconnect-temp-release/app/verify/page.jsx",
                                                lineNumber: 93,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://apps.apple.com/mt/app/connect-by-cursor/id6737701304",
                                                className: "group w-full py-2 px-4 bg-black text-white rounded-xl flex items-center gap-3 hover:bg-gray-900 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 border border-gray-800",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/images/apple.svg",
                                                        alt: "",
                                                        className: "w-7 h-7 ml-0.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/GitHub/mob-cconnect-temp-release/app/verify/page.jsx",
                                                        lineNumber: 101,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-col items-start ml-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-[10px] font-medium leading-none opacity-80",
                                                                children: "Download on the"
                                                            }, void 0, false, {
                                                                fileName: "[project]/GitHub/mob-cconnect-temp-release/app/verify/page.jsx",
                                                                lineNumber: 103,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-lg font-bold leading-tight font-sans",
                                                                children: "App Store"
                                                            }, void 0, false, {
                                                                fileName: "[project]/GitHub/mob-cconnect-temp-release/app/verify/page.jsx",
                                                                lineNumber: 104,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/GitHub/mob-cconnect-temp-release/app/verify/page.jsx",
                                                        lineNumber: 102,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/GitHub/mob-cconnect-temp-release/app/verify/page.jsx",
                                                lineNumber: 100,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/GitHub/mob-cconnect-temp-release/app/verify/page.jsx",
                                        lineNumber: 92,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/GitHub/mob-cconnect-temp-release/app/verify/page.jsx",
                                lineNumber: 90,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-12 flex flex-col items-center bg-blue-50/50 dark:bg-blue-900/10 flex-grow justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 mb-8",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "bg-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wider shadow-sm shadow-blue-200 dark:shadow-none",
                                                children: "Early Access"
                                            }, void 0, false, {
                                                fileName: "[project]/GitHub/mob-cconnect-temp-release/app/verify/page.jsx",
                                                lineNumber: 113,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-xs font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400",
                                                children: "Beta Program"
                                            }, void 0, false, {
                                                fileName: "[project]/GitHub/mob-cconnect-temp-release/app/verify/page.jsx",
                                                lineNumber: 114,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/GitHub/mob-cconnect-temp-release/app/verify/page.jsx",
                                        lineNumber: 112,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col gap-4 w-full max-w-[240px]",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://play.google.com/store/apps/details?id=com.cursor.cConnect",
                                                className: "group w-full py-4 px-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl text-sm font-bold flex items-center justify-center gap-4 hover:border-blue-200 dark:hover:border-blue-800 hover:shadow-md transition-all text-gray-700 dark:text-gray-200",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/images/playstore.svg",
                                                        alt: "",
                                                        className: "w-6 h-6 transition-transform group-hover:scale-110"
                                                    }, void 0, false, {
                                                        fileName: "[project]/GitHub/mob-cconnect-temp-release/app/verify/page.jsx",
                                                        lineNumber: 119,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Play Store Beta"
                                                    }, void 0, false, {
                                                        fileName: "[project]/GitHub/mob-cconnect-temp-release/app/verify/page.jsx",
                                                        lineNumber: 120,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/GitHub/mob-cconnect-temp-release/app/verify/page.jsx",
                                                lineNumber: 118,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "https://testflight.apple.com/join/6hGtkQKw",
                                                className: "group w-full py-4 px-6 bg-[#1C1C1E] text-white rounded-2xl text-sm font-bold flex items-center justify-center gap-4 hover:bg-black hover:shadow-xl hover:-translate-y-0.5 transition-all",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: "/images/apple.svg",
                                                        alt: "",
                                                        className: "w-6 h-6 transition-transform group-hover:scale-110"
                                                    }, void 0, false, {
                                                        fileName: "[project]/GitHub/mob-cconnect-temp-release/app/verify/page.jsx",
                                                        lineNumber: 123,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Join TestFlight"
                                                    }, void 0, false, {
                                                        fileName: "[project]/GitHub/mob-cconnect-temp-release/app/verify/page.jsx",
                                                        lineNumber: 124,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/GitHub/mob-cconnect-temp-release/app/verify/page.jsx",
                                                lineNumber: 122,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/GitHub/mob-cconnect-temp-release/app/verify/page.jsx",
                                        lineNumber: 117,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/GitHub/mob-cconnect-temp-release/app/verify/page.jsx",
                                lineNumber: 111,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/GitHub/mob-cconnect-temp-release/app/verify/page.jsx",
                        lineNumber: 87,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/GitHub/mob-cconnect-temp-release/app/verify/page.jsx",
                lineNumber: 56,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$GitHub$2f$mob$2d$cconnect$2d$temp$2d$release$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                className: "mt-12 text-center text-gray-400 dark:text-gray-600 text-sm font-medium",
                children: [
                    "© ",
                    new Date().getFullYear(),
                    " Cursor Ltd. All rights reserved."
                ]
            }, void 0, true, {
                fileName: "[project]/GitHub/mob-cconnect-temp-release/app/verify/page.jsx",
                lineNumber: 131,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/GitHub/mob-cconnect-temp-release/app/verify/page.jsx",
        lineNumber: 55,
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

//# sourceMappingURL=%5Broot-of-the-server%5D__aab06b50._.js.map