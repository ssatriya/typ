const { createStore } = require("@reduxjs/toolkit");

import reducer from "./reducer";

const store = createStore(reducer);

export default store;
