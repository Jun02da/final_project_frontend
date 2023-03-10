import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {
  Home,
  Page_A,
  Page_B,
  Page_C,
  Page_D,
  Whoops404,
} from "./Setting/SettingDetailPage";
import UtilBar from "./UtilBar/UtilBar.js";

function Test() {
  return (
    <BrowserRouter>
      <div>
        <UtilBar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Page_A" component={Page_A} />
          <Route path="/Page_B" component={Page_B} />
          <Route path="/Page_C" component={Page_C} />
          <Route path="/Page_D" component={Page_D} />
          <Route component={Whoops404} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Test;
