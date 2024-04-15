import FeatureCards from "./FeatureCards";
import "./FrameComponent2.css";

const FrameComponent2 = () => {
  return (
    <section className="desktop-child">
      <div className="frame-group">
        <div className="frame-wrapper">
          <div className="h2-group">
            <h1 className="h21">Everything you need</h1>
            <h3 className="body3">
              Enjoy customizable lists, team work tools, and smart tracking all
              in one place. Set tasks, get reminders, and see your progress
              simply and quickly.
            </h3>
          </div>
        </div>
        <div className="feature-cards-parent">
          <FeatureCards
            integrationEcosystem="Integration ecosystem"
            body="Enhance your productivity by connecting with your favorite tools, keeping all your essentials in one place."
          />
          <FeatureCards
            integrationEcosystem="Goal setting and tracking"
            body="Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight."
            propWidth="210px"
          />
          <FeatureCards
            integrationEcosystem="Secure data encryption"
            body="With end-to-end encryption, your data is securely stored and protected from unauthorized access."
            propWidth="197px"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
