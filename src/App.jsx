import React from "react";
import "./App.css";

import Family from "./components/basics/Family";
import Student from "./components/basics/Students";
import Fragments from "./components/basics/Fragments";
import Random from "./components/basics/Random";
import Card from "./components/layout/Card";
import People from "./components/basics/People";

import StudentsList from "./components/loops/StudentsList";
import ProductsTable from "./components/loops/ProductsTable";

export default (_) => {
  return (
    <div className="App">
      <h1>Component App</h1>
      <div className="Cards">
      <Card title="Tables" color="#F5B041">
          <ProductsTable />
        </Card>
        <Card title="Lists" color="#85C1E9">
          <StudentsList />
        </Card>

        <Card title="Random Number" color="#800080">
          <Random min={1} max={60} />
        </Card>

        <Card title="Grades" color="#229954">
          <Student title="Math" name="John" score={7.1} />
          <Student title="English" name="Bob" score={5.0} />
        </Card>
        <Card title="Component Children" color="#641E16">
          <Family surname="Silva">
            <People name="João" />
            <People name="Alice" />
            <People name="Bob" />
          </Family>
        </Card>
        <Card title="Fragments" color="#008080">
          <Fragments />
        </Card>
      </div>
    </div>
  );
};
