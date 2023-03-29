const { createStore } = require("@reduxjs/toolkit");

import reducer from "./reducer";

export const store = createStore(reducer);
