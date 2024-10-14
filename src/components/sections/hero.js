import React, { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup, config } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';
import { email } from '@config';
import { Icon } from '@components/icons';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--white);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
    margin-right: 20px;
    width: 7rem;
    height: 3.5rem;
    font-size: 1.1rem;
    svg {
      margin-left: 10px;
      padding-bottom: 8px;
      width: 30px;
      height: 30px;
    }
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);
  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">Adithya Harish.</h2>;
  const three = <h3>I build the future through code, one line at a time.</h3>;
  const four = (
    <>
      <p>
        I am an innovative software engineer skilled in building Software products with a focus on accessibility and user experience.
      </p>
    </>
  );
  const five = (
  <p>
  I’m actively looking for full-time/ intern opportunities in software engineering starting May 2025. <br></br> Reach out to me at <a href={`mailto:${email}`}>{email}</a>.
  </p>
  );
  const six = (
    <div style={{display:'flex'}}>
      <a className="email-link" href="/resume.pdf" target="_blank" rel="noreferrer">
        Resume
      </a>
      <a className="email-link" href={`mailto:${email}`} target="_blank" rel="noreferrer">
      Email
      </a>
      <a className="email-link" href="https://www.linkedin.com/in/adithya-harish" target="_blank" rel="noreferrer" >
        <Icon name="Linkedin" />
      </a>
      <a className="email-link" href="https://www.github.com/adithyaharish" target="_blank" rel="noreferrer">
      <Icon name="GitHub" />
      </a>
    </div>
  );
  

  const items = [one, two, three, four, five, six];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
