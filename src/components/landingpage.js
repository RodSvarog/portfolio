import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

export default class Landing extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <h1 className="responsive-headline"> I 'm Aleksandar.</h1>
            <div className="banner-text">
              <h1>Web Developer</h1>
              <hr />
              <p>
                HTML/CSS | Bootstrap | Javascript | React | NodeJS | Express |
                pgSql
              </p>
              <div className="social-links">
                {/* linkedin */}
                <a
                  href="https://www.linkedin.com/in/aleksandar-miloradovic-0b772037/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                {/* Github */}
                <a
                  href="https://github.com/RodSvarog"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
