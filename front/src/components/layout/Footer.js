import React from "react";

const Footer = (props) => {
    return(
        <section class="footer__copy container">
      <div class="footer_social">
        <a href="https://www.linkedin.com/in/francisco-brignani-259973213/" class="footer__icons" target="_blank"><img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/640px-LinkedIn_logo_initials.png"
            alt="icon-linkedin" class="logosr"/></a>
        <a href="https://github.com/Franbrignani" target="_blank" class="footer__icons"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="icon-github"
            class="logosr"/></a>
      </div>
      <h3 class="footer__name">Bookland by Brignani Francisco - 2023</h3>
    </section>
    );
}

export default Footer;