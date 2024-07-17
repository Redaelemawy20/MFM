import styled from "styled-components";

export default styled.div`
  .Main__Title {
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 20px;
    padding-bottom: 20px;
    position: relative;
    text-align: center;
    color: var(--paragraph-color);
  }
  .Main__Title::after {
    content: "";
    position: absolute;
    display: block;
    width: 50px;
    height: 3px;
    background: var(--secondary-color);
    bottom: 0;
    left: calc(50% - 25px);
  }
  .main_Caption {
    color: var(--paragraph-color);
    margin-bottom: 2em;
    text-align: center;
  }
`;
