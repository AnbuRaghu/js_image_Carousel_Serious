import React, { FC, ReactElement, useEffect, useRef, useState } from 'react';
import styled, { keyframes, createGlobalStyle, css } from 'styled-components';
import theme from '../../styles/themes';

const Container = styled.div`
  width: 100%;
  max-width: 80%;
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  border-top: 2px solid #ccc;
  margin-bottom: 0.3em;
 

  .upArrow {
    transform: rotate(180deg);
    transition: all 0.3s linear;
  }

  .downArrow {
    transform: rotate(0deg);
    transition: all 0.3s linear;
  }

 
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  padding: 2em 2em;

  h5 {
    margin: 0;

    font-size: 1em;
  }

  span {
    margin-right: 1.5em;
  }

  &:hover {
    opacity: 0.7;
  }

  @media (min-width: ${theme['nissan'].breakpoints.md}) and (max-width: ${theme[
      'nissan'
    ].breakpoints.lg}) {
    h5 {
      margin: 0;
      padding: 1em 1em;
      font-size: 0.8em;
    }
  }

  @media (max-width: ${theme['nissan'].breakpoints.sm}) {
    h5 {
      margin: 0;
      padding: 1em 1em;
      font-size: 0.8em;
    }
    svg {
      width: 15px;
      height: 15px;
    }
  }
`;

const Dropdown = styled.div`
  width: 100%;
  position: relative;
  background: #fff;
  transition: height 0.2s ease-in-out;
  overflow: hidden;

  @media (min-width: ${theme['nissan'].breakpoints.md}) and (max-width: ${theme[
      'nissan'
    ].breakpoints.lg}) {
    max-width: 90%;
    padding: 0 1em 1em 1em;
  }

  @media (max-width: ${theme['nissan'].breakpoints.sm}) {
    max-width: 90%;
    padding: 0 1em 1em 1em;
  }
`;

const arrow = (
  <>
    <svg
      width="20"
      height="20"
      fill="none"
      stroke="#ccc"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M22.5 9 12 18 1.5 9"></path>
    </svg>
  </>
);

interface Props {
  questions?: string;
  index: number;
  componentToPass: ReactElement;
}
const Accordion: FC<Props> = ({ questions, index, componentToPass }: Props) => {
  const [clicked, setClicked] = useState<number>(-1);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (clicked === index) {
      const contentEl = contentRef.current as HTMLDivElement;

      setHeight(contentEl.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [clicked, index]);

  const onToggle = (index: number) => {
    if (clicked === index) {
      return setClicked(-1);
    }
    setClicked(index);
  };

  return (
    <>
      <Container>
        <Wrap onClick={() => onToggle(index)}>
          <h5>{questions}</h5>
          <span className={clicked === index ? 'upArrow ' : 'downArrow '}>
            {arrow}
          </span>
        </Wrap>
        <Dropdown ref={contentRef} style={{ height }}>
          {componentToPass}
        </Dropdown>
      </Container>
    </>
  );
};

export default Accordion;
