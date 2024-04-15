import "./NavBarDesktop.css";

const NavBarDesktop = () => {
  return (
    <header className="nav-bar-desktop">
      <div className="logo">
        <div className="logodefault">
          <div className="logodefault-child" />
          <img
            className="logosaas-icon"
            loading="lazy"
            alt=""
            src="/logosaas@2x.png"
          />
        </div>
        <div className="made-by">made by</div>
        <img
          className="black-horizontal-1-icon"
          loading="lazy"
          alt=""
          src="/blackhorizontal-1.svg"
        />
      </div>

      
      <div className="stack">
        <div className="about">About</div>
        <div className="features">Features</div>
        <div className="customers">Customers</div>
        <div className="updates">Updates</div>
        <div className="help">Help</div>
        <div className="buttons">
          
          <div className="get-for-free">Get for free</div>

         
        </div>
      </div>
    </header>
  );
};

export default NavBarDesktop;
