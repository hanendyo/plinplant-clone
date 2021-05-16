import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/fa";
import * as IoIcons from "react-icons/fa";
import * as RiIcons from "react-icons/fa";
import * as DiIcons from "react-icons/fa";
import {
  FaHome,
  FaSeedling,
  FaDatabase,
  FaInfoCircle,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

export const SidebarData = [
  {
    title: "Master Data",
    path: "./cms/masterdata",
    icon: <FaDatabase />,
    iconClosed: <FaChevronDown />,
    iconOpened: <FaChevronUp />,
    subNav: [
      {
        title: "Plant",
        path: "./masterdata/plant",
        icon: <FaSeedling />,
      },
      {
        title: "Plant Breeding",
        path: "./masterdata/plantbreeding",
        icon: <FaSeedling />,
      },
    ],
  },
  {
    title: "Pricelist",
    path: "./cms/pricelist",
    icon: <FaDatabase />,
    iconClosed: <FaChevronDown />,
    iconOpened: <FaChevronUp />,
    subNav: [
      {
        title: "Reports1",
        path: "./reports/report1",
        icon: <FaDatabase />,
      },
      {
        title: "Reports2",
        path: "./reports/report2",
        icon: <FaDatabase />,
      },
      {
        title: "Reports3",
        path: "./reports/report3",
        icon: <FaDatabase />,
      },
    ],
  },
  {
    title: "Products",
    path: "./cms/products",
    icon: <FaIcons.FaCartPlus />,
  },
  {
    title: "Support",
    path: "./cms/support",
    icon: <FaInfoCircle />,
  },
];
