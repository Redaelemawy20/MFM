import styled from "styled-components";

export default styled.div`
  *,
  *:before,
  *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }

  html {
    font-size: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    color: #333332;
    font-family: Lora, serif;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.4;
    text-rendering: optimizeLegibility;
  }

  .skill-set li:hover {
    background: #3498db;
  }

  h1 {
    color: rgba(0, 0, 0, 0.75);
  }

  .wrapper {
    height: 100%;
  }

  .left {
    background-color: rgba(0, 0, 0, 0.025);
    border-right: 1px solid rgba(0, 0, 0, 0.05);
    float: right;
    height: 100%;
    margin-left: -1px;
    min-width: 256px;
    position: fixed;
    width: 30%;
  }

  .right {
    float: right;
    height: 100%;
    position: relative;
    width: 70%;
  }

  .name-hero {
    background: rgba(0, 0, 0, 0.001);
    bottom: 0;
    height: 290px;
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
    top: 0;
    width: 85%;
  }

  .me-img {
    height: 180px;
    margin: 0 auto;
    position: relative;
    width: 180px;
  }
  .me-img img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    padding: 5px;
    border: 1px solid #3498db;
  }

  .name-hero h1 {
    font-family: Open Sans, sans-serif;
    font-size: 1.5em;
    text-align: center;
  }

  .name-hero h1 em {
    color: rgba(0, 0, 0, 0.3);
    font-style: normal;
    font-weight: 700;
  }

  .name-hero p {
    color: rgba(0, 0, 0, 0.75);
    font-size: 0.85em;
    line-height: 1.5;
    margin: 0 8px 0 0;
    text-align: center;
  }

  .name-hero .name-text {
    margin: 0 auto;
    width: 85%;
  }

  .inner {
    margin: 0 auto;
    max-width: 975px;
    padding: 3em;
  }

  .inner h1 {
    font-size: 1.75em;
  }

  .inner p {
    color: rgba(0, 0, 0, 0.5);
  }

  .inner p em {
    color: rgba(0, 0, 0, 1);
    font-style: normal;
  }

  .inner section {
    margin: 100px auto;
  }

  ul {
    list-style-type: none;
    margin-top: -10px;
    max-width: 570px;
    padding: 0;
  }

  .skill-set li {
    background: rgba(0, 0, 0, 0.75);
    border-radius: 5px;
    color: #fff;
    display: inline-block;
    list-style: none;
    margin: 15px 15px 0 0;
    padding: 10px;
    text-align: justify;
  }
  .download-button {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
  }

  .download-button button {
    background-color: #3498db;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }

  .download-button button:hover {
    background-color: #2980b9;
  }

  @media screen and (max-width: 48em) {
    .right,
    .left {
      float: none;
      position: relative !important;
      width: 100%;
      min-height: 500px;
    }
    .handmade {
      text-align: center !important;
      margin-top: 0px !important;
    }

    @media screen and (max-width: 75em) {
      body {
        font-size: 16px;
      }
    }

    @media screen and (max-width: 60em) {
      body {
        font-size: 14px;
      }
    }
    .clearfix:after {
      content: " "; /* Older browser do not support empty content */
      visibility: hidden;
      display: block;
      height: 0;
      clear: both;
    }
    .handmade {
      text-align: right;
      margin-top: 100px;
    }
    .handmade em {
      font-family: "Shadows Into Light", cursive;
      font-size: 1.25em;
      margin-left: 5px;
    }
  }
`;
