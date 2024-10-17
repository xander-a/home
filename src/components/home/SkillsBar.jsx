// import React from "react";

// function SkillsLogo({ skill, image }) {
//   return (
//     <div style={{ width: "95%", display: "flex", alignItems: "center", marginBottom: "10px" }}>
//       <img
//         src={image}
//         alt={skill}
//         style={{ width: "40px", height: "40px", marginRight: "10px" }}
//       />
//       <p className="lead mb-1 mt-2">{skill}</p>
//     </div>
//   );
// }

// export default SkillsLogo;

import React from "react";
import Col from "react-bootstrap/Col";

function SkillsBar({ skill, image, isScrolled }) {
  return (
    <Col xs={12} className="skill-item">
      <div style={{ width: "95%", display: "flex", alignItems: "center", marginBottom: "10px"  }}>
        {image && <img src={image} alt={skill} style={{width: "100px", height: "60px", marginRight: "10px" }} />}
        <p className="lead mb-1 mt-2" >{skill}</p>
      </div>
    </Col>
  );
}

export default SkillsBar;
