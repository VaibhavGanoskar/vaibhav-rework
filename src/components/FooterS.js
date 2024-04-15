import "./FooterS.css";

const FooterS = () => {
  return (
    <footer className="footer-s">
      <div className="your-company-inc-all-rights-wrapper">
        <div className="your-company-inc">
          @ 2024 Your Company, Inc. All rights reserved
        </div>
      </div>
      <div className="socials-parent">
        <img
        
          className="socials-icon"
          loading="lazy"
          alt=""
          src="/socials.svg"
        />
        <img
          className="socials-icon1"
          loading="lazy"
          alt=""
          src="/socials-1.svg"
        />
        <img
          className="socials-icon2"
          loading="lazy"
          alt=""
          src="/socials-2.svg"
        />
        <img
          className="socials-icon3"
          loading="lazy"
          alt=""
          src="/socials-3.svg"
        />
        <img
          className="socials-icon4"
          loading="lazy"
          alt=""
          src="/socials-4.svg"
        />
        <img
          className="socials-icon5"
          loading="lazy"
          alt=""
          src="/socials-5.svg"
        />
      </div>
    </footer>
  );
};

export default FooterS;
