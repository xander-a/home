import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Jumbotron } from "./migration";
import { Container, Image } from "react-bootstrap";
import { useScrollPosition } from "../../hooks/useScrollPosition";

const SkillCard = ({ name, image }) => (
  <Col xs={6} md={4} lg={3} className="text-center mb-3">
    <Image src={image} alt={name} width={100} height={70} className="mb-2" />
    <p>{name}</p>
  </Col>
);

const Skills = React.forwardRef(({ heading, hardSkills }, ref) => {
  const skillsTabRef = React.useRef(null);
  const [isScrolled, setIsScrolled] = React.useState(false);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!isScrolled && currPos.y - 400 < 0) setIsScrolled(true);
    },
    [],
    skillsTabRef
  );

  return (
    <Jumbotron ref={skillsTabRef} fluid className="bg-white m-0" id="skills">
      <Container className="p-5">
        <h2 ref={skillsTabRef} className="display-4 pb-5 text-center">
          {heading}
        </h2>
        <Tabs
          className="skills-tabs"
          defaultActiveKey="hard-skills"
          id="skills-tabs"
          fill
        >
          <Tab
            tabClassName="skills-tab lead"
            eventKey="hard-skills"
            title="Technical Skills"
          >
            <Row className="pt-3 px-1 justify-content-center">
              {hardSkills.map((skill, index) => (
                <SkillCard key={index} name={skill.name} image={skill.image} />
              ))}
            </Row>
          </Tab>
        </Tabs>
      </Container>
    </Jumbotron>
  );
});

export default Skills;