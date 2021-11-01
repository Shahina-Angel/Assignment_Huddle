import { BrowserRouter, Route, Switch } from "react-router-dom";
import Preview from "./Post/Preview";
import Post from "./Post/Post";
import UserView from "./Post/UserView";
import PostView from "./Post/PostView";

function RouteConfig() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Post}></Route>
        <Route exact path="/preview" component={Preview}></Route>
        <Route exact path="/userview" component={UserView}></Route>
        <Route exact path="/postview" component={PostView}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default RouteConfig;
