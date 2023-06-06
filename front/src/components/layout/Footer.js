import React from "react";

const Footer = (props) => {
    return(
        <section className="footer__copy container">
      <div className="footer_social">
        <a href="https://www.linkedin.com/in/francisco-brignani-259973213/" className="footer__icons" target="_blank"><img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png"
            alt="icon-linkedin" className="logosr"/></a>
        <a href="https://github.com/Franbrignani" target="_blank" className="footer__icons"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="icon-github"
            className="logosr"/></a>
      </div>
      <h3 className="footer__name">Bookland by Brignani Francisco - 2023</h3>
    </section>
    );
}

export default Footer;