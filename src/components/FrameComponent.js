import "./FrameComponent.css";

const FrameComponent = () => {
  return (
    <section className="frame-section">
      <div className="frame-parent1">
        <div className="medias-parent">
          <div className="medias">
            <h1 className="h23">Get instant access</h1>
            <div className="body4">
              Celebrate the joy of accomplishment with an app designed to track
              your progress and motivate your efforts.
            </div>
          </div>
          <div className="form">
            <input className="form1" placeholder="name@email.com" type="text" />
            <button className="buttons2">
              <div className="get-for-free2">Get access</div>
            </button>
          </div>
        </div>
        <img
          className="emojistar-1-icon"
          loading="lazy"
          alt=""
          src="/emojistar-1@2x.png"
        />
        <img
          className="helix2-1-icon"
          loading="lazy"
          alt=""
          src="/helix2-1@2x.png"
        />
      </div>
    </section>
  );
};

export default FrameComponent;
