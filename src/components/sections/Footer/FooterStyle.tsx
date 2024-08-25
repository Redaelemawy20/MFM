import styled from "styled-components";

export default styled.div`
  background-color: #232323;
  color: white;
  font-size: 0.85rem;
  position: relative;
  /* height: 305px; */
  /* width: 86%; */
  .Main_wraper_grid {
    display: grid;

    gap: 1rem;
    width: 86%;
    margin: auto;
    padding: 2rem 1rem;
  }
  .data-foot {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .data-foot h1,
  .data-foot h4 {
    margin-bottom: 2rem;
    display: flex;
    align-items: center;
  }
  .data-foot h1,
  h2 {
    font-size: 1.2rem;
    position: relative;
  }
  h2 {
    margin-bottom: 0.75rem;
  }
  .data-foot h1::before {
    width: 14px;
    height: 14px;
    content: " ";
    background-color: var(--secondary-color);
    margin-inline-end: 8px;
    transform: rotate(45deg);
    z-index: 2;
  }
  .data-foot h1 div {
    border: 7px solid #fff;
    background-color: #fff;
    transform: rotate(45deg);
    /* left: 0; */
    position: absolute;
    top: 9px;
    z-index: 1;
  }
  .data-foot h4 {
    font-size: 0.8rem;
  }
  .data-foot p,
  .data-foot a {
    font-size: 0.76rem;
    display: flex;
    align-items: center;
    margin-bottom: 0.5em;
  }
  .data-foot a {
    color: #fff;
    width: fit-content;
    font-weight: 500;
    font-size: 0.85rem;
  }
  .data-foot a:hover {
    color: var(--secondary-color);
  }
  .data-foot .gallery {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 5px;
    max-width: 220px;
  }
  .data-foot .gallery img {
    width: 70px;
    height: 60px;
  }
  .data-foot .gallery img:hover {
    cursor: pointer;
  }
  .icon--foot {
    color: var(--secondary-color);
    margin-inline-end: 4px;
    font-size: 1.2rem;
  }
  .copy {
    background-color: #141414;
    padding: 1.5rem 0.5rem;
    text-align: center;
    font-size: 0.8rem;
    color: #808080;
  }
  .copy p {
    margin: 0;
  }
  .display--image {
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    position: fixed;
    top: 0;
    z-index: 99;
  }
  .display--image .arrange {
    position: absolute;
    width: 750px;
    max-height: 700px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: flex-end;
  }
  .display--image .arrange img {
    object-fit: cover;
    height: auto !important;
  }

  .display--image span {
    padding: 0.5em;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 101;
    position: absolute;
    margin: 5px;
    display: flex;
  }
  .display--image span:hover {
    cursor: pointer;
  }

  @media (max-width: 1024px) {
    height: auto;
    .display--image .arrange {
      width: 96%;
    }
  }
  @media (max-width: 780px) {
    .content--foot {
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
      column-gap: 2rem;
    }
    .data-foot .gallery {
      max-width: 495px;
    }
    .data-foot h1,
    .data-foot h4 {
      margin-bottom: 0.5rem;
    }
    .data-foot .gallery img {
      width: 100%;
      height: 100px;
    }
  }
  @media (max-width: 500px) {
    .content--foot {
      grid-template-columns: repeat(1, 1fr);
      row-gap: 1rem;
    }
    .data-foot .gallery img {
      height: 80px;
    }
  }
`;
