import styled from "styled-components";

export default styled.div`
  position: relative;
  height: 100vh;
  .cont_spinner {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    margin: auto;
    text-align: center;
  }
  .cont_spinner h1 {
    margin: 40px 0;
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--secondary-color);
  }
  .loader {
    font-size: 10px;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    position: relative;
    /* transform: translate(-50%, -50%); */
    text-indent: -9999em;
    animation: mulShdSpin 1.1s infinite ease;
    transform: translateZ(0);
    display: block;
    margin: auto;
  }
  @keyframes mulShdSpin {
    0%,
    100% {
      box-shadow: 0em -2.6em 0em 0em var(--secondary-color),
        1.8em -1.8em 0 0em rgba(63, 187, 192, 0.2),
        2.5em 0em 0 0em rgba(63, 187, 192, 0.2),
        1.75em 1.75em 0 0em rgba(63, 187, 192, 0.2),
        0em 2.5em 0 0em rgba(63, 187, 192, 0.2),
        -1.8em 1.8em 0 0em rgba(63, 187, 192, 0.2),
        -2.6em 0em 0 0em rgba(63, 187, 192, 0.5),
        -1.8em -1.8em 0 0em rgba(63, 187, 192, 0.7);
    }
    12.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(63, 187, 192, 0.7),
        1.8em -1.8em 0 0em var(--secondary-color),
        2.5em 0em 0 0em rgba(63, 187, 192, 0.2),
        1.75em 1.75em 0 0em rgba(63, 187, 192, 0.2),
        0em 2.5em 0 0em rgba(63, 187, 192, 0.2),
        -1.8em 1.8em 0 0em rgba(63, 187, 192, 0.2),
        -2.6em 0em 0 0em rgba(63, 187, 192, 0.2),
        -1.8em -1.8em 0 0em rgba(63, 187, 192, 0.5);
    }
    25% {
      box-shadow: 0em -2.6em 0em 0em rgba(63, 187, 192, 0.5),
        1.8em -1.8em 0 0em rgba(63, 187, 192, 0.7),
        2.5em 0em 0 0em var(--secondary-color),
        1.75em 1.75em 0 0em rgba(63, 187, 192, 0.2),
        0em 2.5em 0 0em rgba(63, 187, 192, 0.2),
        -1.8em 1.8em 0 0em rgba(63, 187, 192, 0.2),
        -2.6em 0em 0 0em rgba(63, 187, 192, 0.2),
        -1.8em -1.8em 0 0em rgba(63, 187, 192, 0.2);
    }
    37.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(63, 187, 192, 0.2),
        1.8em -1.8em 0 0em rgba(63, 187, 192, 0.5),
        2.5em 0em 0 0em rgba(63, 187, 192, 0.7),
        1.75em 1.75em 0 0em var(--secondary-color),
        0em 2.5em 0 0em rgba(63, 187, 192, 0.2),
        -1.8em 1.8em 0 0em rgba(63, 187, 192, 0.2),
        -2.6em 0em 0 0em rgba(63, 187, 192, 0.2),
        -1.8em -1.8em 0 0em rgba(63, 187, 192, 0.2);
    }
    50% {
      box-shadow: 0em -2.6em 0em 0em rgba(63, 187, 192, 0.2),
        1.8em -1.8em 0 0em rgba(63, 187, 192, 0.2),
        2.5em 0em 0 0em rgba(63, 187, 192, 0.5),
        1.75em 1.75em 0 0em rgba(63, 187, 192, 0.7),
        0em 2.5em 0 0em var(--secondary-color),
        -1.8em 1.8em 0 0em rgba(63, 187, 192, 0.2),
        -2.6em 0em 0 0em rgba(63, 187, 192, 0.2),
        -1.8em -1.8em 0 0em rgba(63, 187, 192, 0.2);
    }
    62.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(63, 187, 192, 0.2),
        1.8em -1.8em 0 0em rgba(63, 187, 192, 0.2),
        2.5em 0em 0 0em rgba(63, 187, 192, 0.2),
        1.75em 1.75em 0 0em rgba(63, 187, 192, 0.5),
        0em 2.5em 0 0em rgba(63, 187, 192, 0.7),
        -1.8em 1.8em 0 0em var(--secondary-color),
        -2.6em 0em 0 0em rgba(63, 187, 192, 0.2),
        -1.8em -1.8em 0 0em rgba(63, 187, 192, 0.2);
    }
    75% {
      box-shadow: 0em -2.6em 0em 0em rgba(63, 187, 192, 0.2),
        1.8em -1.8em 0 0em rgba(63, 187, 192, 0.2),
        2.5em 0em 0 0em rgba(255, 255, 255, 0.2),
        1.75em 1.75em 0 0em rgba(63, 187, 192, 0.2),
        0em 2.5em 0 0em rgba(63, 187, 192, 0.5),
        -1.8em 1.8em 0 0em rgba(63, 187, 192, 0.7),
        -2.6em 0em 0 0em var(--secondary-color),
        -1.8em -1.8em 0 0em rgba(63, 187, 192, 0.2);
    }
    87.5% {
      box-shadow: 0em -2.6em 0em 0em rgba(63, 187, 192, 0.2),
        1.8em -1.8em 0 0em rgba(63, 187, 192, 0.2),
        2.5em 0em 0 0em rgba(63, 187, 192, 0.2),
        1.75em 1.75em 0 0em rgba(63, 187, 192, 0.2),
        0em 2.5em 0 0em rgba(63, 187, 192, 0.2),
        -1.8em 1.8em 0 0em rgba(63, 187, 192, 0.5),
        -2.6em 0em 0 0em rgba(63, 187, 192, 0.7),
        -1.8em -1.8em 0 0em var(--secondary-color);
    }
  }
`;
