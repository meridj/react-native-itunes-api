"use strict";

/**
 * Local import
 */
import HomeScene from "./Home/";
import DetailsScene from "./Details/";

const Scene = {
  Home: {
    key: "Home",
    component: HomeScene
  },
  Details: {
    key: "Details",
    component: DetailsScene
  }
};

export default Scene;
