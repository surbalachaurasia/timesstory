import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class New extends Component {
      articales=[
           {
            "title": "Amy Schneider’s Jeopardy! Streak Ends at 40 Consecutive Wins and $1.4 Million",
            "link": "https://time.com/6142934/amy-schneider-jeopardy-streak-ends/"
            },
            {
            "title": "'Writing With Fire' Shines a Light on All-Women News Outlet",
            "link": "https://time.com/6142628/writing-with-fire-india-documentary/"
            },
            {
            "title": "Moderna Booster May Wane After 6 Months",
            "link": "https://time.com/6142852/moderna-booster-wanes-omicron/"
            },
            {
            "title": "Pressure Mounts for Biden to Nominate a Black Woman to the Supreme",
            "link":
            "https://time.com/6142743/joe-biden-supreme-court-nominee-black-woman-campaignpromise/"
            },
            {
            "title": "The James Webb Space Telescope Is in Position—And Now We Wait",
            "link": "https://time.com/6142769/james-webb-space-telescope-reaches-l2/"
            },
            {
            "title": "We Urgently Need a New National COVID-19 Response Plan",
            "link": "https://time.com/6142718/we-need-new-national-covid-19-response-plan/"
            }
            ]
         
    constructor() {
      super();
      console.log("this is constructor");
      this.state = {
      articales: this.articales,
      loadind: false,
      };
   }
  render() {
    return (
      <div>
        <div className="container my-3">
          <h2> Lattest-Stories</h2>
          <div className="row">
            {this.state.articales.map((element) => {
              return (
                <div className="col-md-4" key={element.link}>
                  <Newsitem
                    title={element.title}
                    description={element.description}
                    link={element.link}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default New;
