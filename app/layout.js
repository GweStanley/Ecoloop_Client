import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "EcoLoop",
  description: "Connecting households, collectors, and companies for waste management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, paddingTop: "70px", fontFamily: "Arial, sans-serif" }}>
        {/* Navbar always on top */}
        <Navbar />

        {/* Main content */}
        <main style={{ minHeight: "calc(100vh - 140px)", padding: "20px" }}>
          {children}
        </main>

        {/* Footer always at bottom */}
        <Footer />
      </body>
    </html>
  );
}
