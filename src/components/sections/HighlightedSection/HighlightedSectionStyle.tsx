import styled from "styled-components";
const HighlightedSectionStyle = styled.section`
  width: 100%;
  padding: 3.5rem 0;
  background-color: var(--secondary-color);
  color: var(--primary-color);
  text-align: center;
  .inner__cont {
    width: 86%;
    margin: auto;
  }
  .inner__cont h2 {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 0.6rem;
  }
  .inner__cont p {
    margin-bottom: 1rem;
  }
  @media (max-width: 1060px) {
    .inner__cont {
      width: 92%;
    }
  }
`;
export default HighlightedSectionStyle;
