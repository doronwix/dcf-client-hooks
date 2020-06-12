import * as React from "react";
import { useState, useContext } from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { rateContext } from "./../../providers/DataProvider";
import Title from "./Title";

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
});

export default function Ratio() {
  const [date, setDate] = useState(new Date().toDateString());
  const { rate } = useContext(rateContext);
  const classes = useStyles();
  return (
    <React.Fragment>
      <Title>Current Price</Title>
      <Typography component="p" variant="h4">
        {rate}
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        {date}
      </Typography>
      <Title>DCF Price</Title>
      <Typography component="p" variant="h4">
        {rate}
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}
