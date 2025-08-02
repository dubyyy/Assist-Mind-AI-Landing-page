
import React from "react";
import Image from "next/image";
const Footer = () => {
  return (
    <footer
      style={{
        background: "#07081B",
        color: "#fff",
        padding: "40px 0 0 0",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          padding: "0 32px",
        }}
      >
        {/* Logo and Description */}
        <div style={{ flex: "1 1 260px", minWidth: 220, marginBottom: 24 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: 12,
            }}
          >
            <Image src='/AssistMind.png' alt="" width={150} height={150}/>
            
          </div>
          <div style={{ fontSize: 13, color: "#b6b6c6", maxWidth: 260 }}>
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit, Sed Do
            Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
          </div>
        </div>

        {/* Quick Links 1 */}
        <div style={{ flex: "1 1 160px", minWidth: 140, marginBottom: 24 }}>
          <div style={{ fontWeight: 600, marginBottom: 12, fontSize: 16 }}>
            Quick links
          </div>
          <div style={{ color: "#b6b6c6", fontSize: 14, marginBottom: 8 }}>
            Features
          </div>
          <div style={{ color: "#b6b6c6", fontSize: 14, marginBottom: 8 }}>
            How it works
          </div>
          <div style={{ color: "#b6b6c6", fontSize: 14, marginBottom: 8 }}>
            Resources
          </div>
          <div style={{ color: "#b6b6c6", fontSize: 14 }}>Pricing</div>
        </div>

        {/* Quick Links 2 */}
        <div style={{ flex: "1 1 160px", minWidth: 140, marginBottom: 24 }}>
          <div style={{ fontWeight: 600, marginBottom: 12, fontSize: 16 }}>
            Quick links
          </div>
          <div style={{ color: "#b6b6c6", fontSize: 14, marginBottom: 8 }}>
            Get A Demo
          </div>
          <div style={{ color: "#b6b6c6", fontSize: 14, marginBottom: 8 }}>
            Start Free Trial
          </div>
          <div style={{ color: "#b6b6c6", fontSize: 14 }}>Privacy Policy</div>
        </div>

        {/* Contact Us */}
        <div style={{ flex: "1 1 240px", minWidth: 200, marginBottom: 24 }}>
          <div style={{ fontWeight: 600, marginBottom: 12, fontSize: 16 }}>
            Contact us
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "#b6b6c6",
              fontSize: 14,
              marginBottom: 16,
            }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Mail_%28iOS%29.svg"
              alt="Mail"
              style={{ width: 18, height: 18, marginRight: 8 }}
            />
            Info@Assistantmindai.Com
          </div>
          <div style={{ display: "flex", gap: 16 }}>
            <a href="#" aria-label="Facebook">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="Facebook"
                style={{ width: 22, height: 22 }}
              />
            </a>
            <a href="#" aria-label="LinkedIn">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                alt="LinkedIn"
                style={{ width: 22, height: 22 }}
              />
            </a>
            <a href="#" aria-label="Google">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                alt="Google"
                style={{ width: 60, height: 23 }}
              />
            </a>
          </div>
        </div>
      </div>
      <div
        style={{
          borderTop: "1px solid #23233A",
          marginTop: 32,
          padding: "16px 0 8px 0",
          textAlign: "center",
          color: "#b6b6c6",
          fontSize: 13,
        }}
      >
        © {new Date().getFullYear()} AssistMind AI. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
