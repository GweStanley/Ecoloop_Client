module.exports = [
"[project]/Desktop/NEXT.JS/EcoLoop/client/app/dashboard/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Dashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NEXT.JS/EcoLoop/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/NEXT.JS/EcoLoop/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const API = ("TURBOPACK compile-time value", "http://localhost:5000") || "http://localhost:5000";
function Dashboard() {
    const [stats, setStats] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [role, setRole] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [redeemAmount, setRedeemAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [redeemMsg, setRedeemMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [loadingRedeem, setLoadingRedeem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const token = localStorage.getItem("token");
        if (!token) return;
        try {
            const payload = JSON.parse(atob(token.split(".")[1]));
            setRole(payload.role);
            fetch(`${API}/api/waste/stats`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then((res)=>res.json()).then((data)=>setStats(data)).catch(()=>setStats(null));
        } catch  {
            setStats(null);
        }
    }, []);
    const handleRedeem = async ()=>{
        if (!redeemAmount || redeemAmount <= 0) {
            setRedeemMsg("Enter a valid amount");
            return;
        }
        if (redeemAmount > stats.points) {
            setRedeemMsg("Insufficient points");
            return;
        }
        setLoadingRedeem(true);
        setRedeemMsg("");
        try {
            // 🔒 BACKEND ENDPOINT YOU’LL ADD:
            // POST /api/rewards/redeem
            const token = localStorage.getItem("token");
            const res = await fetch(`${API}/api/rewards/redeem`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({
                    points: Number(redeemAmount),
                    provider: "mtn_momo"
                })
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.message);
            setRedeemMsg("✅ Redemption request sent. MTN MoMo payout processing.");
            setStats({
                ...stats,
                points: stats.points - redeemAmount
            });
            setRedeemAmount("");
        } catch (err) {
            setRedeemMsg(err.message || "Redemption failed");
        } finally{
            setLoadingRedeem(false);
        }
    };
    if (!stats) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            style: {
                padding: "120px 20px"
            },
            children: "Loading dashboard…"
        }, void 0, false, {
            fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/dashboard/page.js",
            lineNumber: 81,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        style: page,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                style: {
                    marginBottom: "30px"
                },
                children: "Your Impact Overview"
            }, void 0, false, {
                fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/dashboard/page.js",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: grid,
                children: [
                    role === "household" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                title: "Waste Posted",
                                value: stats.entries
                            }, void 0, false, {
                                fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/dashboard/page.js",
                                lineNumber: 91,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                title: "Pickups Completed",
                                value: stats.pickups
                            }, void 0, false, {
                                fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/dashboard/page.js",
                                lineNumber: 92,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                title: "CO₂ Saved",
                                value: `${stats.co2.toFixed(2)} kg`
                            }, void 0, false, {
                                fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/dashboard/page.js",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                title: "Eco Points",
                                value: stats.points,
                                highlight: true
                            }, void 0, false, {
                                fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/dashboard/page.js",
                                lineNumber: 94,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true),
                    role === "collector" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                title: "Pickups Completed",
                                value: stats.pickups
                            }, void 0, false, {
                                fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/dashboard/page.js",
                                lineNumber: 100,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                title: "Waste Collected",
                                value: `${stats.weight} kg`
                            }, void 0, false, {
                                fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/dashboard/page.js",
                                lineNumber: 101,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                title: "CO₂ Offset",
                                value: `${stats.co2.toFixed(2)} kg`
                            }, void 0, false, {
                                fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/dashboard/page.js",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true),
                    role === "company" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                title: "Waste Acquired",
                                value: `${stats.weight} kg`
                            }, void 0, false, {
                                fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/dashboard/page.js",
                                lineNumber: 108,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                title: "Matches Found",
                                value: stats.matches
                            }, void 0, false, {
                                fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/dashboard/page.js",
                                lineNumber: 109,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatCard, {
                                title: "CO₂ Reduced",
                                value: `${stats.co2.toFixed(2)} kg`
                            }, void 0, false, {
                                fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/dashboard/page.js",
                                lineNumber: 110,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/dashboard/page.js",
                lineNumber: 88,
                columnNumber: 7
            }, this),
            role === "household" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                style: redeemSection,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Redeem Eco Points"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/dashboard/page.js",
                        lineNumber: 118,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: muted,
                        children: [
                            "Convert your recycling impact into real value via ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "MTN MoMo"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/dashboard/page.js",
                                lineNumber: 120,
                                columnNumber: 63
                            }, this),
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/dashboard/page.js",
                        lineNumber: 119,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: redeemBox,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: balanceBox,
                                children: [
                                    "🌱 Available Points: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: stats.points
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/dashboard/page.js",
                                        lineNumber: 125,
                                        columnNumber: 36
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/dashboard/page.js",
                                lineNumber: 124,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "number",
                                placeholder: "Points to redeem",
                                value: redeemAmount,
                                onChange: (e)=>setRedeemAmount(e.target.value),
                                style: input
                            }, void 0, false, {
                                fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/dashboard/page.js",
                                lineNumber: 128,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleRedeem,
                                disabled: loadingRedeem,
                                style: {
                                    ...button,
                                    opacity: loadingRedeem ? 0.6 : 1
                                },
                                children: loadingRedeem ? "Processing…" : "Redeem to MTN MoMo"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/dashboard/page.js",
                                lineNumber: 136,
                                columnNumber: 13
                            }, this),
                            redeemMsg && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: message,
                                children: redeemMsg
                            }, void 0, false, {
                                fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/dashboard/page.js",
                                lineNumber: 147,
                                columnNumber: 27
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/dashboard/page.js",
                        lineNumber: 123,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/dashboard/page.js",
                lineNumber: 117,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/dashboard/page.js",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
/* ================= COMPONENTS ================= */ function StatCard({ title, value, highlight }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            ...card,
            border: highlight ? "2px solid #16a34a" : "none"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                style: cardLabel,
                children: title
            }, void 0, false, {
                fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/dashboard/page.js",
                lineNumber: 165,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$NEXT$2e$JS$2f$EcoLoop$2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: cardValue,
                children: value
            }, void 0, false, {
                fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/dashboard/page.js",
                lineNumber: 166,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Desktop/NEXT.JS/EcoLoop/client/app/dashboard/page.js",
        lineNumber: 159,
        columnNumber: 5
    }, this);
}
/* ================= STYLES ================= */ const page = {
    padding: "120px 20px",
    maxWidth: "1200px",
    margin: "0 auto"
};
const grid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "20px"
};
const card = {
    background: "#ffffff",
    padding: "26px",
    borderRadius: "18px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)"
};
const cardLabel = {
    fontSize: "14px",
    color: "#6b7280",
    marginBottom: "10px"
};
const cardValue = {
    fontSize: "30px",
    fontWeight: 700,
    color: "#16a34a"
};
const redeemSection = {
    marginTop: "60px"
};
const redeemBox = {
    marginTop: "20px",
    background: "#ffffff",
    padding: "24px",
    borderRadius: "18px",
    maxWidth: "420px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)"
};
const balanceBox = {
    marginBottom: "14px",
    fontWeight: 600
};
const input = {
    width: "100%",
    padding: "12px",
    marginBottom: "14px",
    borderRadius: "10px",
    border: "1px solid #d1d5db"
};
const button = {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    background: "#16a34a",
    color: "#fff",
    fontWeight: 600,
    cursor: "pointer"
};
const muted = {
    color: "#6b7280",
    fontSize: "14px"
};
const message = {
    marginTop: "12px",
    fontSize: "14px"
};
}),
];

//# sourceMappingURL=Desktop_NEXT_JS_EcoLoop_client_app_dashboard_page_cc093e8c.js.map