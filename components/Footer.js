export default function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <p>© {new Date().getFullYear()} EcoLoop. All rights reserved.</p>
        <div style={socialLinks}>
          <a href="https://mtn.cm/" target="_blank" rel="noreferrer" style={linkStyle}>
            MTN
          </a>
          <a href="https://www.linkedin.com/in/gwe-stanley-92ab03253/" target="_blank" rel="noreferrer" style={linkStyle}>
            LinkedIn
          </a>
          <a href="https://www.wwf.nl/dieren/pandahttps://www.worldwildlife.org/support/advocacy/panda-ambassadors/" target="_blank" rel="noreferrer" style={linkStyle}>
            WWF
          </a>
        </div>
      </div>
    </footer>
  );
}

const footerStyle = {
  background: "#f8f8f8",
  padding: "20px 0",
  marginTop: "50px",
};

const containerStyle = {
  maxWidth: "1200px",
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  padding: "0 20px",
};

const socialLinks = {
  display: "flex",
  gap: "15px",
};

const linkStyle = {
  textDecoration: "none",
  color: "#0070f3",
  fontWeight: "500",
};
