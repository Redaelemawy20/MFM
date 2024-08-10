import React, { useState } from "react";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { ImCross } from "react-icons/im";
import FooterStyle from "./FooterStyle";
const Footer: React.FC = () => {
  const [state, setState] = useState<JSX.Element | null>(null);

  const srcvalue = (event: React.MouseEvent<HTMLImageElement>) => {
    setState(
      <div className="display--image">
        <div className="arrange">
          <span
            onClick={() => {
              setState(null);
            }}
          >
            <ImCross />
          </span>
          <img
            src={`${event.currentTarget.src}`}
            alt="img"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    );
  };

  return (
    <FooterStyle>
      {state}
      <div className="Main_wraper_grid">
        <div className="data-foot">
          <h1>
            <div></div>
            جـامـعـة الـمـنـوفـيـة
          </h1>
          <p>
            أنشئت جامعة المنوفية بالقانون رقم ( 93 ) الصادر في الرابع عشر من
            أغسطس عام 1976 م ومقرها بشبين الكوم ، لتلبية الطلب المتزايد على
            التعليم العالي ، ولدعم الجامعات المصرية ومؤسسات التعليم العالي
            الأخرى في تحقيق رسالتها في تنمية وتطوير المجتمع من خلال تقديم خدمات
            تعليمية وبحثية ومجتمعية متميزة. واقتضى القانون (93) في مادته الثانية
            بأن تتكون جامعة المنوفية من الكليات التابعة آنذاك لجامعة طنطا بشبين
            الكوم ومنوف
          </p>
        </div>
        <div className="data-foot">
          <h2>روابـط هـامـة</h2>
          <a href="">الـرئـيـسـيـة</a>
          <a href="">الـخـدمـات</a>
          <a href="">الـمـكـتـبـة الـرقـمـيـة</a>
          <a href="">الـتـجارب</a>
          <a href=""> هيئة التدريس </a>
          <a href="">مركز توكيد الجودة</a>
          <a href="">مركز التعليم الإلكترونى</a>
        </div>
        <div className="data-foot">
          <h2>الـمـعـرض</h2>
          <div className="gallery">
            <img
              src="/assets/imgs/banner1.png"
              onClick={srcvalue}
              alt="image"
            />
            <img
              src="/assets/imgs/banner2.png"
              onClick={srcvalue}
              alt="image"
            />
            <img
              src="/assets/imgs/banner3.png"
              onClick={srcvalue}
              alt="image"
            />
            <img
              src="/assets/imgs/new3mfm.png"
              onClick={srcvalue}
              alt="image"
            />
            <img
              src="/assets/imgs/new1mfm.png"
              onClick={srcvalue}
              alt="image"
            />
            <img
              src="/assets/imgs/new2mfm.png"
              onClick={srcvalue}
              alt="image"
            />
          </div>
        </div>
        <div className="data-foot">
          <h2>الاتـصـال</h2>
          <a
            href="https://www.google.com/maps/place/Menoufiya+University/@30.5655764,31.0105073,17z/data=!3m1!4b1!4m6!3m5!1s0x14f7d6eb70a91047:0xc353387ed2f37809!8m2!3d30.5655764!4d31.0130822!16zL20vMGIxeGc2?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <HiOutlineLocationMarker className="icon--foot" />
            الـمـكـان
          </a>
          <a>
            <BsTelephone className="icon--foot" />
            +0482995651
          </a>
          <a href="mailto:your-email@example.com">
            <HiOutlineMail className="icon--foot" />
            الايـمـيـل الالـكـتـرونـي
          </a>
        </div>
      </div>
      <div className="copy">
        <p>
          Copyright ©2022 All rights reserved | This template is made by
          Alaa_Ayaad
        </p>
      </div>
    </FooterStyle>
  );
};

export default Footer;
