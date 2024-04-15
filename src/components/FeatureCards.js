import { useMemo } from "react";
import "./FeatureCards.css";

const FeatureCards = ({ integrationEcosystem, body, propWidth }) => {
  const integrationEcosystemStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="feature-cards">
      <button className="feature-cards1">
        <img className="icons2" alt="" src="/icons-2.svg" />
      </button>
      <div className="integration-ecosystem">
        <b className="integration-ecosystem1" style={integrationEcosystemStyle}>
          {integrationEcosystem}
        </b>
        <div className="body2">{body}</div>
      </div>
    </div>
  );
};

export default FeatureCards;
