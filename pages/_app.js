import { Provider } from "react-redux";

import "@/styles/globals.css";
// import { store } from "@/store/store";
import { store } from "@/store2/store";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
