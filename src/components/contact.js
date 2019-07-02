import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Aleksandar MIloradovic</h2>
            <img
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1rem" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
              perspiciatis saepe officiis quod sed, eius alias assumenda fugit
              itaque cum dolor accusantium culpa maxime expedita enim
              dignissimos accusamus explicabo neque.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Noto Sans HK" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    071 239 683
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Noto Sans HK" }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    aleksandar.miloradovic@gmail.com
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
