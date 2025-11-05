import React from 'react';
import '../Style/Footer.css';

/*
  Footer.jsx - small, polite footer.
  Keeps things human-readable; leave contact or copyright info here.
*/

export default function Footer() {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-inner">
        <p>Made with care by a human (and some helpful tools). © {new Date().getFullYear()}</p>
        <small>Contact: <a href="mailto:hello@example.com">hello@example.com</a></small>
      </div>
    </footer>
  );
}
