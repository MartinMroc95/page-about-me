import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImageDesktop from '../../images/profile2.jpg';
/* import AboutImageMobile from '../../images/profile2-2.jpg'; */
import PortfolioContext from '../../context/context';
import Resume from '../../images/Martin_Mroč_CV.pdf';
import { Link } from 'react-scroll';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { paragraphOne, paragraphTwo, paragraphThree } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);
  const [valueOfWidth, setValueOfWidth] = useState(0);

  useEffect(() => {
    if (window.innerWidth < 478) {
      setIsSmallMobile(true);
      setIsMobile(false);
      setIsDesktop(false);
      return;
    }

    if (window.innerWidth <= 860) {
      setIsMobile(true);
      setIsDesktop(false);
      setIsSmallMobile(false);
      return;
    }

    if (window.innerWidth >= 861) {
      setIsDesktop(true);
      setIsSmallMobile(false);
      setIsMobile(false);
      return;
    }
  }, []);

  const findOutValueOfWidth = () => {
    if (isDesktop) {
      setValueOfWidth(450);
    }
    if (isMobile) {
      setValueOfWidth(350);
    }
    if (isSmallMobile) {
      setValueOfWidth(280);
    }
  };

  useEffect(() => {
    findOutValueOfWidth();
  }, [isDesktop, isMobile, isSmallMobile]);

  return (
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <img alt="" src={AboutImageDesktop} width={valueOfWidth} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">{paragraphOne}</p>
                <p className="about-wrapper__info-text">{paragraphTwo}</p>
                <p className="about-wrapper__info-text">{paragraphThree}</p>
                <p className="about-wrapper__info-text">
                  If you want more personal information about me, check my links to social websites in{' '}
                  <Link to="contact" className="link-to-footer" smooth duration={1000}>
                    footer.
                  </Link>
                </p>
                <span className="d-flex mt-3">
                  <a className="cta-btn cta-btn--resume" href={Resume} download>
                    Resume
                  </a>
                </span>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
