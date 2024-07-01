import styled from "styled-components";

const CardStyle = styled.div`
  &:hover ::before {
    top: 0;
  }
  ::before {
    content: "";
    position: absolute;
    background: var(--secondary-color);
    right: 0;
    left: 0;
    bottom: 0;
    top: 100%;
    transition: all 0.3s;
    z-index: -1;
  }
  &:hover {
    svg {
      fill: var(--primary-color);
    }
    .description,
    .title {
      color: var(--primary-color);
    }
  }
  width: 100%;
  padding: 30px;
  position: relative;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 0 29px 0 rgba(68, 88, 144, 0.12);
  transition: all 0.3s ease-in-out;
  border-radius: 8px;
  z-index: 1;
  .icon {
  }
  .icon svg {
    font-size: 48px;
    line-height: 1;
    color: #3fbbc0;
    transition: all 0.3s ease-in-out;
    margin-bottom: 0.4em;
  }
  .title {
    font-weight: 500;
    font-style: italic;
    margin-bottom: 15px;
    font-size: 18px;
  }
  .description {
    font-size: 15px;
    line-height: 28px;
    margin-bottom: 0;

    color: var(--paragraph-color);
    font-weight: 400;
  }
  @media (max-width: 992px) {
    margin-bottom: 2em;
  }
`;
export default CardStyle;
const CardsSectionStyle = styled.div`
  width: 86%;
  margin: 4em auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  @media (max-width: 1200px) {
    width: 96%;
  }
  @media (max-width: 992px) {
    width: 80%;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 769px) {
    width: 70%;
    grid-template-columns: repeat(1, 1fr);
  }
  @media (max-width: 560px) {
    width: 90%;
  }
`;
export { CardsSectionStyle };
