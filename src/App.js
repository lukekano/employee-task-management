import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AdminPage from "./components/routes/admin/AdminPage";
import Navigation from "./components/nav/Navigation";
import { Container } from "react-bootstrap";
import EmployeePage from "./components/routes/employee/EmployeePage";

function App() {
  return (
    <Router>
      <Navigation />
      <Container>
        <Switch>
          <Route exact path="/employee" component={EmployeePage} />
          <Route exact path="/" component={AdminPage} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
