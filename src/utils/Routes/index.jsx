import React from "react";
import { Welcome } from "../../components/Home/Welcome";
import { SelectCard } from "../../components/Home/SelectCard";
import { NoCard } from "../../components/Home/NoCard";
import { Redeem } from "../../components/Main/Redeem";
import { RedemptionOptions } from "../../components/Main/RedemptionOptions";
import { Redirect } from "react-router-dom";
import { RedemptionOptionsSelected } from "../../components/Main/RedemptionOptionsSelected";
import { CollectPoints } from "../../components/Main/CollectPoints";

export default [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/welcome" />,
    protected: "home",
  },
  {
    path: "/nocard",
    component: () => <NoCard />,
    protected: "home",
  },
  {
    path: "/welcome",
    exact: true,
    component: () => <Welcome />,
    protected: "home",
  },
  {
    path: "/selectcard",
    component: () => <SelectCard />,
    protected: "home",
  },
  {
    path: "/managepoints/redeem",
    exact: true,
    component: () => <Redeem />,
    protected: "main",
  },
  {
    path: "/managepoints/redemption_options",
    exact: true,
    component: () => <RedemptionOptions />,
    protected: "main",
  },
  {
    path: "/managepoints/redemption_options/:redemption_option_id",
    exact: true,
    component: () => <RedemptionOptionsSelected />,
    protected: "main",
  },
  {
    path: "/managepoints/collectpoints/:card_id",
    exact: true,
    component: () => <CollectPoints />,
    protected: "main",
  },
];
