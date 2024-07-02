import styled from "styled-components";

const HeroStyle = styled.section`
  .carousel-indicators [data-bs-target] {
    height: 14px;
    width: 14px;
    border-radius: 50%;
    border: none;
  }
  .carousel-indicators .active {
    opacity: 1;
    background: var(--secondary-color);
  }
  .carousel-caption {
    text-align: center;
    background: rgba(255, 255, 255, 0.9);
    padding-top: 30px;
    padding-bottom: 30px;
    margin-bottom: 50px;
    border-top: 4px solid #3fbbc0;
  }
  .carousel-caption h2 {
    color: #2f2f2f;
    margin-bottom: 20px;
    font-size: 36px;
    font-weight: 700;
  }
  .carousel-caption p {
    margin: 0 auto 30px auto;
    color: #555555;
  }
  .carousel-control-next-icon,
  .carousel-control-prev-icon {
    font-size: 30px;
    background: rgba(63, 187, 192, 0.8);
    border-radius: 50px;
    transition: 0.3s;
    color: rgba(255, 255, 255, 0.5);
    width: 54px;
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .carousel-control-next-icon::before {
    content: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48cGF0aCBmaWxsPSJ3aGl0ZSIgZD0iTTI3OC42IDIzMy40YzEyLjUgMTIuNSAxMi41IDMyLjggMCA0NS4zbC0xNjAgMTYwYy0xMi41IDEyLjUtMzIuOCAxMi41LTQ1LjMgMHMtMTIuNS0zMi44IDAtNDUuM0wyMTAuNyAyNTYgNzMuNCAxMTguNmMtMTIuNS0xMi41LTEyLjUtMzIuOCAwLTQ1LjNzMzIuOC0xMi41IDQ1LjMgMGwxNjAgMTYweiIvPjwvc3ZnPg==);
    font-size: 30px; /* Adjust the size as needed */
    width: 16px;
  }

  .carousel-control-prev-icon::before {
    content: url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20320%20512%22%3E%3Cpath%20fill%3D%22white%22%20d%3D%22M41.4%20233.4c-12.5%2012.5-12.5%2032.8%200%2045.3l160%20160c12.5%2012.5%2032.8%2012.5%2045.3%200s12.5-32.8%200-45.3L109.3%20256%20246.6%20118.6c12.5-12.5%2012.5-32.8%200-45.3s-32.8-12.5-45.3%200l-160%20160z%22%2F%3E%3C%2Fsvg%3E);
    font-size: 30px; /* Adjust the size as needed */
    width: 16px;
  }
  @media (max-width: 980px) {
    .carousel-control-next-icon,
    .carousel-control-prev-icon {
      visibility: hidden;
    }
  }
`;
export default HeroStyle;
