(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/NEXT.JS/EcoLoop/client/lib/api.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiFetch",
    ()=>apiFetch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/NEXT.JS/EcoLoop/client/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
async function apiFetch(endpoint, method = "GET", body = null, token = null) {
    const baseUrl = ("TURBOPACK compile-time value", "http://localhost:5000") || "http://localhost:5000";
    const headers = {
        "Content-Type": "application/json"
    };
    if (token) headers["Authorization"] = `Bearer ${token}`;
    const res = await fetch(`${baseUrl}${endpoint}`, {
        method,
        headers,
        body: body ? JSON.stringify(body) : null
    });
    if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "API request failed");
    }
    return res.json();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CompanyDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Desktop/NEXT.JS/EcoLoop/client/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NEXT.JS/EcoLoop/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NEXT.JS/EcoLoop/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NEXT.JS/EcoLoop/client/lib/api.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function CompanyDashboard() {
    _s();
    const [listings, setListings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [matches, setMatches] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [type, setType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("plastic");
    const [quantityKg, setQuantityKg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [frequency, setFrequency] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("once");
    const [notes, setNotes] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [formMessage, setFormMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [formError, setFormError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const CO2_FACTORS = {
        plastic: 1.5,
        metal: 2.0,
        organic: 0.5,
        paper: 1.0
    };
    const token = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem("token") : "TURBOPACK unreachable";
    // Fetch listings and matches
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CompanyDashboard.useEffect": ()=>{
            async function fetchData() {
                try {
                    const res = await fetch(`${("TURBOPACK compile-time value", "http://localhost:5000") || "http://localhost:5000"}/api/company/matches`, {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });
                    const data = await res.json();
                    setMatches(data || []);
                    setListings(data.map({
                        "CompanyDashboard.useEffect.fetchData": (item)=>item.listing
                    }["CompanyDashboard.useEffect.fetchData"]));
                } catch (err) {
                    console.error(err);
                } finally{
                    setLoading(false);
                }
            }
            if (token) fetchData();
        }
    }["CompanyDashboard.useEffect"], [
        token
    ]);
    const totalKg = listings.reduce((acc, entry)=>acc + (entry.quantityKg || 0), 0);
    const totalCO2 = listings.reduce((acc, entry)=>acc + (entry.quantityKg || 0) * (CO2_FACTORS[entry.materialType] || 0), 0);
    // Handle form submission
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!token) {
            setFormError("Please login first");
            return;
        }
        try {
            const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$lib$2f$api$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiFetch"])("/api/company/waste", "POST", {
                materialType: type,
                quantityKg: parseFloat(quantityKg),
                frequency,
                notes
            }, token);
            setFormMessage(response.message || "Waste listing created!");
            setFormError("");
            setType("plastic");
            setQuantityKg("");
            setFrequency("once");
            setNotes("");
            // Refresh listings
            setListings((prev)=>[
                    ...prev,
                    response.listing
                ]);
        } catch (err) {
            setFormError(err.message);
            setFormMessage("");
        }
    };
    if (loading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: loadingStyle,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Loading company dashboard..."
        }, void 0, false, {
            fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
            lineNumber: 85,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
        lineNumber: 84,
        columnNumber: 7
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: containerStyle,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                style: titleStyle,
                children: "Company Dashboard"
            }, void 0, false, {
                fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                lineNumber: 91,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: statsContainer,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: statCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: statLabel,
                                children: "Total Waste Listed"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: statValue,
                                children: [
                                    totalKg,
                                    " kg"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: statCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: statLabel,
                                children: "Estimated CO₂ Impact"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: statValue,
                                children: [
                                    totalCO2.toFixed(2),
                                    " kg"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: sectionStyle,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: sectionTitle,
                        children: "List New Waste"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                        lineNumber: 107,
                        columnNumber: 9
                    }, this),
                    formMessage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: "green",
                            textAlign: "center"
                        },
                        children: formMessage
                    }, void 0, false, {
                        fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                        lineNumber: 109,
                        columnNumber: 25
                    }, this),
                    formError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: "red",
                            textAlign: "center"
                        },
                        children: formError
                    }, void 0, false, {
                        fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                        lineNumber: 110,
                        columnNumber: 23
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        style: formStyle,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: "Material Type"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: type,
                                onChange: (e)=>setType(e.target.value),
                                style: inputStyle,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "plastic",
                                        children: "Plastic"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                                        lineNumber: 115,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "metal",
                                        children: "Metal"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                                        lineNumber: 116,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "organic",
                                        children: "Organic"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                                        lineNumber: 117,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "paper",
                                        children: "Paper"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                                        lineNumber: 118,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: "Quantity (kg)"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                placeholder: "Enter quantity in kg",
                                value: quantityKg,
                                onChange: (e)=>setQuantityKg(e.target.value),
                                required: true,
                                style: inputStyle
                            }, void 0, false, {
                                fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                                lineNumber: 122,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: "Frequency"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                                lineNumber: 131,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                value: frequency,
                                onChange: (e)=>setFrequency(e.target.value),
                                style: inputStyle,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "once",
                                        children: "Once"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                                        lineNumber: 133,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "daily",
                                        children: "Daily"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                                        lineNumber: 134,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "weekly",
                                        children: "Weekly"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                                        lineNumber: 135,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: "monthly",
                                        children: "Monthly"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                                        lineNumber: 136,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                children: "Notes (optional)"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                placeholder: "Any additional info",
                                value: notes,
                                onChange: (e)=>setNotes(e.target.value),
                                style: {
                                    ...inputStyle,
                                    height: "60px"
                                }
                            }, void 0, false, {
                                fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                                lineNumber: 140,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                style: buttonStyle,
                                children: "Create Listing"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                                lineNumber: 147,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: sectionStyle,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: sectionTitle,
                        children: "Your Waste Listings"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                        lineNumber: 155,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: listContainer,
                        children: listings.length ? listings.map((entry)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: cardStyle,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Type:"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                                                lineNumber: 161,
                                                columnNumber: 19
                                            }, this),
                                            " ",
                                            entry.materialType
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                                        lineNumber: 160,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Quantity:"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                                                lineNumber: 164,
                                                columnNumber: 19
                                            }, this),
                                            " ",
                                            entry.quantityKg,
                                            " kg"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                                        lineNumber: 163,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Frequency:"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                                                lineNumber: 167,
                                                columnNumber: 19
                                            }, this),
                                            " ",
                                            entry.frequency || "N/A"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                                        lineNumber: 166,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, entry._id, true, {
                                fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                                lineNumber: 159,
                                columnNumber: 15
                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: emptyMsg,
                            children: "No waste listings yet."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                            lineNumber: 172,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                        lineNumber: 156,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                lineNumber: 154,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: sectionStyle,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        style: sectionTitle,
                        children: "Matching Opportunities"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                        lineNumber: 179,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: listContainer,
                        children: matches.length ? matches.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: cardStyle,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Listing:"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                                                lineNumber: 185,
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
                                        lineNumber: 184,
                                        columnNumber: 17
                                    }, this),
                                    item.matches.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        style: matchList,
                                        children: item.matches.map((match)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
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
                                                lineNumber: 191,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                                        lineNumber: 189,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontStyle: "italic",
                                            marginTop: "4px"
                                        },
                                        children: "No matches yet"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                                        lineNumber: 198,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, idx, true, {
                                fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                                lineNumber: 183,
                                columnNumber: 15
                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: emptyMsg,
                            children: "No matching opportunities available."
                        }, void 0, false, {
                            fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                            lineNumber: 203,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
                lineNumber: 178,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/company/waste/page.js",
        lineNumber: 90,
        columnNumber: 5
    }, this);
}
_s(CompanyDashboard, "TjnT1BM7qjLNcOM4oMxOPs3MHqM=");
_c = CompanyDashboard;
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
const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "12px"
};
const inputStyle = {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "14px",
    boxSizing: "border-box"
};
const buttonStyle = {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    background: "#16a34a",
    color: "#fff",
    fontWeight: "bold",
    cursor: "pointer",
    fontSize: "16px"
};
var _c;
__turbopack_context__.k.register(_c, "CompanyDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_NEXT_JS_EcoLoop_client_40cec212._.js.map