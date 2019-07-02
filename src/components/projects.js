import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://www.medianic.co.uk/wp-content/uploads/2018/03/RN.jpg) center / cover"
              }}
            >
              React Project #1
            </CardTitle>
            <CardText>City Tours. Simple React App.</CardText>
            <CardActions border>
              <Button
                href="https://github.com/RodSvarog/city-tours-react"
                colored
              >
                GitHub
              </Button>
              <Button href="https://city-tour-reactjs.netlify.com/" colored>
                Live Demo
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://www.medianic.co.uk/wp-content/uploads/2018/03/RN.jpg) center / cover"
              }}
            >
              React Project #2
            </CardTitle>
            <CardText>Search for recipe with Food2Fork api.</CardText>
            <CardActions border>
              <Button
                href="https://github.com/RodSvarog/recipe-app-react"
                colored
              >
                GitHub
              </Button>
              <Button href="https://recipe-app-reactjs.netlify.com/" colored>
                Live Demo
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* project 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://www.medianic.co.uk/wp-content/uploads/2018/03/RN.jpg) center / cover"
              }}
            >
              React Project #3
            </CardTitle>
            <CardText>RoboFreinds. Simple React App.</CardText>
            <CardActions border>
              <Button href="https://github.com/RodSvarog/robofriends" colored>
                GitHub
              </Button>
              <Button href="https://robo-friend.netlify.com/" colored>
                Live Demo
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>This is React</h1>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>This is React</h1>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1>This is MongoDB</h1>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
