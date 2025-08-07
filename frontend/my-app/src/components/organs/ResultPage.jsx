import React from "react";
import "../../styles/ResultPage.css";
import Heading from "../atoms/Heading";
import Graph from "../molecules/Graph";
import Card from "../molecules/Card";

function ResultPage() {
  return (
    <div className="Result-full-page">
        <Heading title="" />
        <div className="content">
           <div>
           <div><Graph/></div>
           <div><Graph/></div>
           </div>
           <div>
           <div><Card/></div>
           <div><Card/></div>
           </div>
        </div>
    </div>
  );
}
