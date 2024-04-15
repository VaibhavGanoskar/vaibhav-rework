import FormFAQ from "./FormFAQ";
import "./FrameComponent1.css";

const FrameComponent1 = () => {
  return (
    <div className="frame-container">
      <div className="frame-div">
        <div className="h2-wrapper">
          <h1 className="h22">Frequently asked questions</h1>
        </div>
        <div className="faqs">
          <FormFAQ />
          <div className="formfaq-parent">
            <FormFAQ propMarginTop="unset" />
            <FormFAQ propMarginTop="-0.1px" />
          </div>
          <FormFAQ propMarginTop="unset" />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
