import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, ProgressBar, Row } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Fade from 'react-reveal/Fade';
import Title from '../Title/Title';

/* import '../../style/sections/_skills.scss'; */

const Skills = () => {
  const { skills } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="skills">
      <Container>
        <div className="skills-wrapper">
          <Title title="Skills" />
          <Row>
            {skills.map((skill) => {
              return (
                <Col key={skill.id} lg={6} sm={12}>
                  <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
                    <ProgressBar variant="success" now={skill.power} label={`${skill.power}%`} />
                    <p>{skill.title}</p>
                  </Fade>
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
