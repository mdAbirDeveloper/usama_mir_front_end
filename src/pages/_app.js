import "@/styles/globals.css";
import Layout from "./Layout/Layout";
import Authentication from "./Authentication/Authcontext";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(<Authentication><Layout><Component {...pageProps} /></Layout></Authentication>);
}
