import React from "react";
import MainCard from "./mainCard/MainCard";
import l from "./Mainone.module.css";
function MainOne() {
  return (
    <div>
      <p className={l.text}>Наши услуги</p>
      <h1 className={l.title}>Мы специализируемся</h1>
      <div className={l.father}>
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
        <MainCard />
      </div>
    </div>
  );
}

export default MainOne;
