import React from 'react';
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <style>{`
        /* Keyframes */
        @keyframes pulseBar {
          0%, 100% { opacity: 1; transform: scale(1); box-shadow: 0 0 6px rgba(0, 255, 198, 0.8); }
          50% { opacity: 0.5; transform: scale(0.85); box-shadow: 0 0 2px rgba(0, 255, 198, 0.3); }
        }
        
        @keyframes ambientGlow {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.1); opacity: 1; }
        }

        /* Base Footer Styles */
        .footer-container {
          background: #05030D;
          border-top: 1px solid rgba(108, 43, 217, 0.15);
          padding: 60px 5% 30px;
          position: relative;
          overflow: hidden;
        }

        .footer-bg-glow {
          position: absolute;
          bottom: -50px;
          right: -50px;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(108, 43, 217, 0.05) 0%, transparent 60%);
          pointer-events: none;
          z-index: 0;
          animation: ambientGlow 8s ease-in-out infinite;
        }

        .footer-layout {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 40px;
          margin-bottom: 60px;
          position: relative;
          z-index: 1;
        }

        /* Brand & Text Section */
        .brand-section { max-width: 380px; }
        
        .brand-link {
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
        }
        
        .brand-logo-svg polygon { transition: stroke 0.4s ease; }
        .brand-logo-svg circle { transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); transform-origin: center; }
        .brand-link:hover .brand-logo-svg polygon { stroke: #00FFC6; }
        .brand-link:hover .brand-logo-svg circle { transform: scale(1.4); fill: #fff; filter: drop-shadow(0 0 4px #00FFC6); }

        .brand-title {
          font-family: 'Orbitron', sans-serif;
          font-size: 18px;
          font-weight: 900;
          color: #E9E6FF;
          letter-spacing: 0.05em;
        }
        
        .brand-desc {
          font-family: 'Rajdhani', sans-serif;
          color: #A1A1C2;
          font-size: 14.5px;
          line-height: 1.7;
          margin-bottom: 24px;
        }

        /* Status Pill */
        .status-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 12px;
          background: rgba(0, 255, 198, 0.03);
          border: 1px solid rgba(0, 255, 198, 0.15);
          border-radius: 4px;
          transition: all 0.3s ease;
          cursor: default;
        }
        .status-pill:hover {
          background: rgba(0, 255, 198, 0.08);
          border-color: rgba(0, 255, 198, 0.3);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 255, 198, 0.05);
        }
        
        .status-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #00FFC6;
          animation: pulseBar 2s infinite;
        }
        
        .status-text {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          color: #00FFC6;
          font-weight: 700;
          letter-spacing: 0.15em;
        }

        /* Connect Group & Premium Pills */
        .connect-group {
          display: flex;
          flex-direction: column;
          gap: 16px;
          align-items: flex-start;
          width: 100%;
          max-width: 340px;
        }
        
        .uplink-label {
          font-family: 'JetBrains Mono', monospace;
          font-size: 9px;
          color: rgba(108, 43, 217, 0.5);
          letter-spacing: 0.2em;
          padding-left: 4px;
        }

        .social-row {
          display: flex;
          gap: 12px;
          width: 100%;
        }

        /* FIX: Forces the two bottom buttons to share space evenly */
        .social-row .premium-pill {
          flex: 1;
        }

        .premium-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 12px 20px;
          box-sizing: border-box; /* FIX: Prevents padding from breaking the grid alignment */
          background: linear-gradient(145deg, rgba(255,255,255,0.03), rgba(8,5,20,0.6));
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 10px;
          color: #A1A1C2;
          font-family: 'Orbitron', sans-serif;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          text-decoration: none;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          backdrop-filter: blur(10px);
          position: relative;
          overflow: hidden;
        }

        .premium-pill svg { transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), color 0.4s ease; }
        
        /* Shimmer effect */
        .premium-pill::before {
          content: '';
          position: absolute;
          top: 0; left: -100%;
          width: 50%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent);
          transition: left 0.6s ease;
        }
        .premium-pill:hover::before { left: 150%; }
        
        /* Specific Pill Hover States */
        .pill-linkedin:hover {
          border-color: rgba(139,92,246,0.6);
          box-shadow: 0 8px 24px rgba(139,92,246,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
          color: #E9E6FF;
          transform: translateY(-3px);
        }
        .pill-linkedin:hover svg { color: #A78BFA; transform: scale(1.1) rotate(-5deg); }

        .pill-instagram:hover {
          border-color: rgba(0,255,198,0.6);
          box-shadow: 0 8px 24px rgba(0,255,198,0.2), inset 0 1px 0 rgba(255,255,255,0.1);
          color: #E9E6FF;
          transform: translateY(-3px);
        }
        .pill-instagram:hover svg { color: #00FFC6; transform: scale(1.1) rotate(5deg); }

        .pill-contact {
          background: linear-gradient(135deg, rgba(108,43,217,0.15), rgba(0,255,198,0.05));
          border-color: rgba(108,43,217,0.3);
          color: #E9E6FF;
          width: 100%;
        }
        .pill-contact:hover {
          border-color: rgba(0,255,198,0.6);
          background: linear-gradient(135deg, rgba(108,43,217,0.25), rgba(0,255,198,0.1));
          box-shadow: 0 8px 24px rgba(0,255,198,0.25), inset 0 1px 0 rgba(255,255,255,0.2);
          transform: translateY(-3px);
        }
        .pill-contact:hover svg { color: #00FFC6; transform: translateX(3px) translateY(-3px) scale(1.1); }

        /* Bottom Legal Section */
        .footer-bottom {
          border-top: 1px solid rgba(108, 43, 217, 0.15);
          padding-top: 24px;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          position: relative;
          z-index: 1;
        }

        .copyright-text {
          color: rgba(161, 161, 194, 0.4);
          font-size: 10px;
          font-family: 'JetBrains Mono', monospace;
          letter-spacing: 0.1em;
        }

        .legal-links { display: flex; gap: 24px; }

        .footer-legal-link {
          color: rgba(161, 161, 194, 0.4);
          font-family: 'JetBrains Mono', monospace;
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          transition: color 0.3s ease;
          position: relative;
          padding-bottom: 2px;
        }
        
        .footer-legal-link::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 1px;
          bottom: 0;
          left: 0;
          background-color: #00FFC6;
          transform: scaleX(0);
          transform-origin: bottom right;
          transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .footer-legal-link:hover {
          color: #00FFC6;
          text-shadow: 0 0 8px rgba(0, 255, 198, 0.4);
        }
        
        .footer-legal-link:hover::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .footer-layout { flex-direction: column; }
          .connect-group { align-items: flex-start; max-width: 100%; }
          .social-row { flex-wrap: wrap; }
          .premium-pill { flex: 1; min-width: 130px; }
        }
      `}</style>

      <footer className="footer-container">
        <div className="footer-bg-glow" />

        <div className="footer-layout">
          {/* Brand Section */}
          <div className="brand-section">
            <Link to="/" className="brand-link">
              <svg className="brand-logo-svg" width="24" height="24" viewBox="0 0 32 32" fill="none">
                <polygon points="16,2 29,9 29,23 16,30 3,23 3,9" fill="none" stroke="#6C2BD9" strokeWidth="2"/>
                <circle cx="16" cy="16" r="3" fill="#00FFC6"/>
              </svg>
              <span className="brand-title">
                Q<span style={{ color: "#00FFC6" }}>RYP</span>TEX
              </span>
            </Link>
            
            <p className="brand-desc">
              Architecting the bedrock of digital sovereignty through decentralized intelligence and post-quantum layers.
            </p>
            
            <div className="status-pill">
              <div className="status-dot" />
              <span className="status-text">ALL SYSTEMS OPERATIONAL</span>
            </div>
          </div>

          {/* Connect Section */}
          <div className="connect-group">
            <span className="uplink-label">// UPLINK CHANNELS</span>
            
            <Link to="/contact" className="premium-pill pill-contact">
              Initiate Contact
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </Link>

            <div className="social-row">
              <Link to="/coming-soon" className="premium-pill pill-linkedin">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>
                </svg>
                LinkedIn
              </Link>
              
              <a 
                href="https://www.instagram.com/qryptex.in?igsh=enE2MHdpbjdzcHY3" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="premium-pill pill-instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="footer-bottom">
          <div className="copyright-text">
            © {currentYear} QRYPTEX // ALL_RIGHTS_RESERVED
          </div>
          
          <div className="legal-links">
            <Link to="/privacy" className="footer-legal-link">
              Privacy_Policy
            </Link>
            <Link to="/terms" className="footer-legal-link">
              Terms_Of_Service
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}