import React from 'react'
import Main from "./Main"
import { Switch, Route } from "react-router-dom";

const index = () => {
    return (
        <Switch>
            <Route path="/" exact component={Main} />
      </Switch>
    )
}

export default index
