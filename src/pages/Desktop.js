import NavBarDesktop from "../components/NavBarDesktop";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import FooterS from "../components/FooterS";
import "./Desktop.css";

const Desktop = () => {
  return (
    <div className="desktop">
      <div className="bar">
        <div className="this-page-is-included-in-a-fre-parent">
          <div className="this-page-is">
            This page is included in a free SaaS Website Kit.
          </div>
          <div className="view-the-complete-kit-parent">
            <div className="view-the-complete">View the complete Kit</div>
            <img className="icons" alt="" src="/icons.svg" />
          </div>
        </div>
      </div>
      <NavBarDesktop />
      <FrameComponent4 />
      <FrameComponent3 />
      <FrameComponent2 />
      <section className="rectangle-parent">
        <div className="frame-child" />
        <div className="form-container">
          <div className="emoji-star">
            <div className="h2-parent">
              <h1 className="h2">Intuitive interface</h1>
              <h3 className="body">
                Celebrate the joy of accomplishment with an app designed to
                track your progress, motivate your efforts, and celebrate your
                successes, one task at a time.
              </h3>
            </div>
          </div>
          <div className="wrapper-app-night">
            <img
              className="app-night-icon"
              loading="lazy"
              alt=""
              src="/app-night@2x.png"
            />
          </div>
        </div>
        <FrameComponent1 />
      </section>
      <FrameComponent />
      <FooterS />
    </div>
  );
};

export default Desktop;
