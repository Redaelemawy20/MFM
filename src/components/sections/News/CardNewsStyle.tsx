import styled from "styled-components";

export default styled.div`
  width: 330px;
  height: 400px;
  border-radius: 0.5em;
  padding: 0.3em;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  overflow: hidden;
  .img_news {
    height: 220px;
    width: 100%;
    border-radius: 0.4em 0.4em 0 0;
  }
  .date {
    font-size: 0.85rem;
    font-weight: 500;
    margin: 1.5em 1em;
    color: var(--secondary-color);
  }
  .news_Title {
    font-size: 1rem;
    font-weight: 500;
    margin: 0 1em;
    display: block;
    color: var(--accent-color);
    -webkit-line-clamp: 4;
  }
`;
