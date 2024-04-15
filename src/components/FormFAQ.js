import { useMemo } from "react";
import "./FormFAQ.css";

const FormFAQ = ({ propMarginTop }) => {
  const formFAQStyle = useMemo(() => {
    return {
      marginTop: propMarginTop,
    };
  }, [propMarginTop]);

  return (
    <div className="formfaq" style={formFAQStyle}>
      <b className="how-does-the">How does the pricing work for teams</b>
      <div className="frame">
        <img className="vector-icon" loading="lazy" alt="" src="/vector.svg" />
      </div>
    </div>
  );
};

export default FormFAQ;
