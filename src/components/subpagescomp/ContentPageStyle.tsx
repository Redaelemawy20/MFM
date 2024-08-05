import styled from "styled-components";

export default styled.div`
  padding: 1em;
  border-radius: 0.5em;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  .flex {
    justify-content: start;
    margin-bottom: 1em;
  }
  .main_Icon {
    font-size: 2rem;
    padding: 0.5em;
    border-radius: 0.5em;
    border: 2px solid var(--secondary-color);
    color: var(--secondary-color);
  }
  h1 {
    font-size: 1.5rem;
    margin-inline-start: 1em;
    font-weight: 700;
  }
  h2 {
    font-size: 1.1rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }
  ul {
    list-style-type: disc;
  }
  ol {
    list-style-type: arabic-indic;
  }
  ul,
  ol {
    margin-inline-start: 1.5rem !important;
  }
`;
