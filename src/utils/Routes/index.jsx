import React from "react";
import { Welcome } from "../../components/Card/Welcome";
import { SelectCard } from "../../components/Card/SelectCard";
import { NoCard } from "../../components/Card/NoCard";
import { Redeem } from "../../components/ManagePoints/Redeem";
import { RedemptionOptions } from "../../components/ManagePoints/RedemptionOptions";
import { Redirect } from "react-router-dom";

export default [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/welcome" />,
    protected: "guest",
  },
  {
    path: "/nocard",
    component: () => <NoCard />,
    protected: "guest",
  },
  {
    path: "/welcome",
    exact: true,
    component: () => <Welcome />,
    protected: "guest",
  },
  {
    path: "/selectcard",
    component: () => <SelectCard />,
    protected: "guest",
  },
  {
    path: "/managepoints/redeem",
    exact: true,
    component: () => <Redeem />,
    protected: "guest",
  },
  {
    path: "/managepoints/redemption_options",
    exact: true,
    component: () => <RedemptionOptions />,
    protected: "guest",
  },
];
