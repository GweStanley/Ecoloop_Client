module.exports = [
"[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CompanyDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NEXT.JS/EcoLoop/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NEXT.JS/EcoLoop/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function CompanyDashboard() {
    const [listings, setListings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [matches, setMatches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const CO2_FACTORS = {
        plastic: 1.5,
        metal: 2.0,
        organic: 0.5,
        paper: 1.0
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        async function fetchCompanyData() {
            const token = localStorage.getItem("token") || "";
            try {
                const res = await fetch(`${("TURBOPACK compile-time value", "http://localhost:5000") || "http://localhost:5000"}/api/company/matches`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                const data = await res.json();
                setMatches(data || []);
                const allListings = data.map((item)=>item.listing);
                setListings(allListings);
            } catch (err) {
                console.error(err);
            } finally{
                setLoading(false);
            }
        }
        fetchCompanyData();
    }, []);
    const totalKg = listings.reduce((acc, entry)=>acc + (entry.quantityKg || 0), 0);
    const totalCO2 = listings.reduce((acc, entry)=>acc + (entry.quantityKg || 0) * (CO2_FACTORS[entry.materialType] || 0), 0);
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: loadingStyle,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Loading company dashboard..."
        }, void 0, false, {
            fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
            lineNumber: 50,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
        lineNumber: 49,
        columnNumber: 7
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: containerStyle,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                style: titleStyle,
                children: "Company Dashboard"
            }, void 0, false, {
                fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                lineNumber: 56,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: statsContainer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: statCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: statLabel,
                                children: "Total Waste Listed"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: statValue,
                                children: [
                                    totalKg,
                                    " kg"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                                lineNumber: 61,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                        lineNumber: 59,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: statCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: statLabel,
                                children: "Estimated CO₂ Impact"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                                lineNumber: 64,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: statValue,
                                children: [
                                    totalCO2.toFixed(2),
                                    " kg"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                                lineNumber: 65,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: sectionStyle,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: sectionTitle,
                        children: "Your Waste Listings"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                        lineNumber: 70,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: listContainer,
                        children: listings.length ? listings.map((entry)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: cardStyle,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Type:"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                                                lineNumber: 76,
                                                columnNumber: 19
                                            }, this),
                                            " ",
                                            entry.materialType
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                                        lineNumber: 75,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Quantity:"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                                                lineNumber: 79,
                                                columnNumber: 19
                                            }, this),
                                            " ",
                                            entry.quantityKg,
                                            " kg"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                                        lineNumber: 78,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Frequency:"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                                                lineNumber: 82,
                                                columnNumber: 19
                                            }, this),
                                            " ",
                                            entry.frequency || "N/A"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                                        lineNumber: 81,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, entry._id, true, {
                                fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                                lineNumber: 74,
                                columnNumber: 15
                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: emptyMsg,
                            children: "No waste listings yet."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                            lineNumber: 87,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                        lineNumber: 71,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: sectionStyle,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: sectionTitle,
                        children: "Matching Opportunities"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                        lineNumber: 93,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: listContainer,
                        children: matches.length ? matches.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: cardStyle,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Listing:"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                                                lineNumber: 99,
                                                columnNumber: 19
                                            }, this),
                                            " ",
                                            item.listing.materialType,
                                            ",",
                                            " ",
                                            item.listing.quantityKg,
                                            " kg"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                                        lineNumber: 98,
                                        columnNumber: 17
                                    }, this),
                                    item.matches.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        style: matchList,
                                        children: item.matches.map((match)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: [
                                                    "Match: ",
                                                    match.materialType,
                                                    ", ",
                                                    match.quantityKg,
                                                    " kg from",
                                                    " ",
                                                    match.companyId || "unknown company"
                                                ]
                                            }, match._id, true, {
                                                fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                                                lineNumber: 105,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                                        lineNumber: 103,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontStyle: "italic",
                                            marginTop: "4px"
                                        },
                                        children: "No matches yet"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                                        lineNumber: 112,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, idx, true, {
                                fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                                lineNumber: 97,
                                columnNumber: 15
                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: emptyMsg,
                            children: "No matching opportunities available."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                            lineNumber: 117,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                lineNumber: 92,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
        lineNumber: 55,
        columnNumber: 5
    }, this);
}
/* ===================== STYLES ===================== */ const containerStyle = {
    padding: "24px",
    maxWidth: "1000px",
    margin: "80px auto 40px auto",
    fontFamily: "Arial, sans-serif"
};
const titleStyle = {
    fontSize: "28px",
    fontWeight: "700",
    marginBottom: "20px",
    color: "#16a34a"
};
const statsContainer = {
    display: "flex",
    gap: "16px",
    flexWrap: "wrap",
    marginBottom: "30px"
};
const statCard = {
    flex: "1 1 200px",
    background: "#ecfdf5",
    padding: "16px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
};
const statLabel = {
    fontSize: "14px",
    fontWeight: "500",
    color: "#065f46"
};
const statValue = {
    fontSize: "20px",
    fontWeight: "700",
    color: "#16a34a",
    marginTop: "6px"
};
const sectionStyle = {
    marginTop: "30px"
};
const sectionTitle = {
    fontSize: "20px",
    fontWeight: "600",
    marginBottom: "12px",
    color: "#374151"
};
const listContainer = {
    display: "flex",
    flexDirection: "column",
    gap: "12px"
};
const cardStyle = {
    background: "#fff",
    padding: "16px",
    borderRadius: "12px",
    boxShadow: "0 4px 16px rgba(0,0,0,0.08)"
};
const matchList = {
    marginTop: "8px",
    marginLeft: "16px",
    listStyleType: "disc"
};
const emptyMsg = {
    fontStyle: "italic",
    color: "#6b7280"
};
const loadingStyle = {
    padding: "40px",
    textAlign: "center",
    fontSize: "16px"
};
}),
];

//# sourceMappingURL=Desktop_NEXT_JS_EcoLoop_client_app_company_waste_page_a628bec5.js.map