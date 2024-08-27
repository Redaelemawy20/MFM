"use client";
import { NewsItem } from "@/ts/interfaces/NewsProps";
import { c } from "@/utils/get-content";
import { extractImgSrc } from "@/utils/get-img";
import React from "react";
import styled from "styled-components";

const NewsDetails = ({ newsData }: { newsData: NewsItem }) => {
  const content = c(newsData.content) ?? [];
  return (
    <NewsPageStyle>
      <div>
        <div className="content--home">
          <div className="news--Image">
            <img
              src={extractImgSrc(
                newsData.gallary[newsData.mainImageIdx],
                "img"
              )}
            />
          </div>
          <div className="Title--news">
            <h1>{c(newsData.title)}</h1>
          </div>
        </div>
        <div className="content--news">
          {content.map((item: string, index) => (
            <p className="paragraph" key={index}>
              {item}
            </p>
          ))}
        </div>
        <div>
          {/* <img
            src={extractImgSrc(newsData.gallary[newsData.mainImageIdx], "img")}
            alt="5"
          /> */}
        </div>
      </div>
    </NewsPageStyle>
  );
};

export default NewsDetails;

const NewsPageStyle = styled.div`
  margin-top: 240px;
  .content--home {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    max-width: 1200px;
    margin: auto;
    max-height: 390px;
    gap: 1em;
    align-content: center;
    justify-content: center;
  }
  .news--Image img {
    width: 100%;
    max-height: 390px;
    object-fit: fill;
    object-position: center;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
  .Title--news {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 700;
  }
  .content--news {
    max-width: 1100px;
    margin: 1em auto;
    padding: 0 1em;
  }
  .paragraph {
    margin-bottom: 30px;
    font-size: 0.95rem;
    font-weight: 500;
  }
  @media (max-width: 800px) {
    .content--home {
      grid-template-columns: 1fr;
      max-height: max-content;
      padding-bottom: 15px;
    }
  }
`;
