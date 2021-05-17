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
  FaChevronDown,
  FaChevronUp,
  FaBook,
  FaStar,
  FaMoneyBill,
  FaUser,
  FaCity,
  FaList,
  FaMale,
  FaShippingFast,
  FaTree,
  FaArchive,
} from "react-icons/fa";

export const SidebarData = [
  {
    title: "Master Data",
    path: "./masterdata",
    icon: <FaDatabase />,
    iconClosed: <FaChevronDown />,
    iconOpened: <FaChevronUp />,
    subNav: [
      {
        title: "Plant",
        path: "./plant",
        icon: <FaSeedling />,
      },
      {
        title: "Plant Breeding",
        path: "./plantbreeding",
        icon: <FaTree />,
      },
      {
        title: "Plant Category",
        path: "./plantcategory",
        icon: <FaList />,
      },
      {
        title: "City",
        path: "./cty",
        icon: <FaCity />,
      },
      {
        title: "Shipping Charges",
        path: "./shipping_charges",
        icon: <FaShippingFast />,
      },
      {
        title: "Gender",
        path: "./gender",
        icon: <FaMale />,
      },
    ],
  },
  {
    title: "User",
    path: "./user",
    icon: <FaUser />,
    iconClosed: <FaChevronDown />,
    iconOpened: <FaChevronUp />,
    subNav: [
      {
        title: "User",
        path: "./user",
        icon: <FaUser />,
      },
      {
        title: "Contact",
        path: "./contact",
        icon: <FaUser />,
      },
      {
        title: "Login",
        path: "./login",
        icon: <FaUser />,
      },
    ],
  },
  {
    title: "Order",
    path: "./order",
    icon: <FaIcons.FaCartPlus />,
    iconClosed: <FaChevronDown />,
    iconOpened: <FaChevronUp />,
    subNav: [
      {
        title: "Order Status",
        path: "./orderstatus",
        icon: <FaIcons.FaCartPlus />,
      },
      {
        title: "Order Item",
        path: "./orderitem",
        icon: <FaIcons.FaCartPlus />,
      },
    ],
  },
  {
    title: "Pricelist",
    path: "./pricelist",
    icon: <FaMoneyBill />,
  },
  {
    title: "Stock",
    path: "./stock",
    icon: <FaArchive />,
  },
  {
    title: "Articles",
    path: "./articles",
    icon: <FaBook />,
  },
  {
    title: "Review",
    path: "./review",
    icon: <FaStar />,
  },
];
