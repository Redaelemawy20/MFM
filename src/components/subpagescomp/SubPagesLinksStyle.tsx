import styled from "styled-components";

export default styled.div`
  .Main_wraper_grid {
    grid-template-columns: 1fr 3fr;
  }
  .links_Bar {
    padding: 1em;
    border-radius: 0.5em;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    height: fit-content;
  }
  .links_Bar p {
    font-size: 1rem;
    padding: 0.5em;
    cursor: pointer;
  }
  .active {
    background-color: #ddd;
  }
  @media (max-width: 980px) {
    .Main_wraper_grid {
      grid-template-columns: 1fr;
    }
  }
`;
