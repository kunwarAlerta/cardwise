import React from "react";
import { Home } from "../../components/Card/Home";
import { SelectCard } from "../../components/Card/SelectCard";
import { Managepoints } from "../../components/Points/ManagePoints";

export default [
  {
    path: "/welcome",
    exact: true,
    component: () => <Home />,
    protected: "guest",
  },
  {
    path: "/selectcard",
    component: () => <SelectCard />,
    protected: "guest",
  },
  {
    path: "/managepoints/redeem",
    component: () => <Managepoints />,
    protected: "guest",
  },
];
