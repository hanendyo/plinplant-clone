import React from "react";
import * as FaIcons from "react-icons/fa";
import {
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
  FaDumbbell,
  FaPhone,
} from "react-icons/fa";
import Plant from "../pages/Plant";

export const SidebarData = [
  {
    title: "Master Data",
    // path: "./masterdata",
    icon: <FaDatabase />,
    iconClosed: <FaChevronDown />,
    iconOpened: <FaChevronUp />,
    subNav: [
      {
        title: "Plant",
        path: "/cms/plant_input",
        data: <Plant />,
        icon: <FaSeedling />,
      },
      {
        title: "Plant Breeding",
        path: "/cms/plant_breeding_input",
        icon: <FaTree />,
      },
      {
        title: "Plant Category",
        path: "/cms/category_input",
        icon: <FaList />,
      },
      {
        title: "City",
        path: "/cms/city_input",
        icon: <FaCity />,
      },
      {
        title: "Shipping Charges",
        path: "/cms/shipping_charges_input",
        icon: <FaShippingFast />,
      },
      {
        title: "Gender",
        path: "/cms/gender_input",
        icon: <FaMale />,
      },
      {
        title: "Weight",
        path: "/cms/weight_input",
        icon: <FaDumbbell />,
      },
    ],
  },
  {
    title: "User",
    // path: "./user",
    icon: <FaUser />,
    iconClosed: <FaChevronDown />,
    iconOpened: <FaChevronUp />,
    subNav: [
      {
        title: "User",
        path: "/cms/user_input",
        icon: <FaUser />,
      },
      {
        title: "Contact",
        path: "/cms/contact_input",
        icon: <FaPhone />,
      },
    ],
  },
  {
    title: "Order",
    // path: "./order",
    icon: <FaIcons.FaCartPlus />,
    iconClosed: <FaChevronDown />,
    iconOpened: <FaChevronUp />,
    subNav: [
      {
        title: "Order Status",
        path: "/cms/order_input",
        icon: <FaIcons.FaCartPlus />,
      },
      {
        title: "Order Item",
        path: "/cms/order_item_input",
        icon: <FaIcons.FaCartPlus />,
      },
    ],
  },
  {
    title: "Pricelist",
    path: "/cms/price_list_input",
    icon: <FaMoneyBill />,
  },
  {
    title: "Stock",
    path: "/cms/stock_input",
    icon: <FaArchive />,
  },
  {
    title: "Articles",
    path: "/cms/article_input",
    icon: <FaBook />,
  },
  {
    title: "Review",
    path: "/cms/review_input",
    icon: <FaStar />,
  },
];
