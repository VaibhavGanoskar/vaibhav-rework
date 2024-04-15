import "./FrameComponent4.css";

const FrameComponent4 = () => {
  return (
    <section className="hero-wrapper">
      <div className="hero">
        <div className="hero-child" />
        <div className="hero-item" />
        <div className="hero-content">
          <div className="tag">
            <div className="version-20-is-here-parent">
              <input
                className="version-20-is"
                placeholder="Version 2.0 is here"
                type="text"
              />
              <div className="read-more-parent">
                <div className="read-more">Read more</div>
                <img className="icons1" alt="" src="/icons-1.svg" />
              </div>
            </div>
          </div>
          <h1 className="h1">
            <p className="one-task">One Task</p>
            <p className="at-a-time">at a Time</p>
          </h1>
          <h3 className="body1">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </h3>
          <button className="buttons1">
            <div className="get-for-free1">Get for free</div>
          </button>
          <div className="wrapper-cursor-1-parent">
            <div className="wrapper-cursor-1">
              <img
                className="cursor-1-icon"
                loading="lazy"
                alt=""
                src="/cursor-1@2x.png"
              />
            </div>
            <img className="cursor-2-icon" alt="" src="/cursor-2@2x.png" />
          </div>
          <div className="wrapper-message-2-parent">
            <div className="wrapper-message-2">
              <img className="message-2-icon" alt="" src="/message-2@2x.png" />
            </div>
            <img
              className="message-1-icon"
              loading="lazy"
              alt=""
              src="/message-1@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
