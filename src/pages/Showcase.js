import React from "react";
import Card from "../components/Card";
import data from "../data.json";
import "../styles/showcase.css";

import ParticleBackground from "../components/background";
export default function Showcase() {
  return (
    <>
      <div className="showcase">
        <div className="inside-container flex flex-wrap">
          {data["actual-data"].map((item) => {
            return <Card data={item["data"]} number={item["number"]}></Card>;
          })}
        </div>
      </div>

      <ParticleBackground />
    </>
  );
}
