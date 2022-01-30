import React from "react";
import Pagination from "@mui/material/Pagination";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "grid",
    placeItems: "center",
    marginTop: 10,
  },
  item: {
    "& .Mui-selected": {
      backgroundColor: "#ef4b51",
    },
  },
}));

export default function PaginationRounded(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Pagination
        count={props.count}
        color="primary"
        shape="rounded"
        // siblingCount={0}
        page={props.page}
        className={classes.item}
        defaultPage={props.page}
        onChange={props.onChange}
      />
    </div>
  );
}
