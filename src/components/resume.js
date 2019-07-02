import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experiance from "./experience";
import Skills from "./skills";

export default class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>
            <h2 style={{ paddingTop: "2em" }}>Aleksandar Miloradovic</h2>
            <h4 style={{ color: "gray" }}>Web Developer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              repellat in, esse veniam nesciunt commodi debitis quia deleniti,
              aperiam dolore optio laboriosam facilis eligendi magni blanditiis
              repellendus ducimus vero alias?
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Email</h5>
            <p>aleksandar.miloradovic@gmail.com</p>
            <h5>Phone</h5>
            <p>(389)071 239-683</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={1999}
              endYear={2005}
              schoolName="Ss. Ciril and Methodius"
              schoolDescription="Environmental Engenering"
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Experiance</h2>

            <Experiance
              startYear={2012}
              endYear=""
              jobName="Head Of Laboratory in Tehnolab doo Skopje"
              jobDescription="Participation in ecological studies in the field of
                    Environmental Protection, especially EIA studies, IPPC, SEA.
                    Involved and assist projects in the field of Environmental 
                    Protection. Measurements of air quality, water, soil,
                    environmental noise level and etc."
            />

            <Experiance
              startYear={2009}
              endYear={2011}
              jobName="National hydrometeorological service"
              jobDescription="Preparation and analysis of samples from air and water.
                    Analysis of parameters that monitor air qualit. Analyzing
                    the parameters for determining the quality of water:
                    organoleptic parameters, parameters of the oxygen mode,
                    parameters of eutrophication, heavy metals and others. Work
                    on gas chromatography, spectrophotometer, equipment for
                    field measurements and data analysis."
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill="javascript" progress="85" />
            <Skills skill="HTML/CSS/SCSS" progress="80" />
            <Skills skill="NodeJS" progress="50" />
            <Skills skill="React" progress="65" />
            <Skills skill="PgSql" progress="10" />
          </Cell>
        </Grid>
      </div>
    );
  }
}
