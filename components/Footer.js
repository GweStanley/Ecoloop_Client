export default function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <p>© {new Date().getFullYear()} EcoLoop. All rights reserved.</p>
        <div style={socialLinks}>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" style={linkStyle}>
            Twitter
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={linkStyle}>
            LinkedIn
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" style={linkStyle}>
            GitHub
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
