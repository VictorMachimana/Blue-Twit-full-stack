import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    textAlign: "center",
    marginTop: 20
  }
};

const Footer = ({ classes }) => (
  <div className={classes.root}>
    Made with <i class="fa fa-heart" aria-hidden="true" />
    _by Victor Machimana
  </div>
);

export default withStyles(styles)(Footer);
