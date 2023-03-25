import { lazy, Suspense } from "react";
import Counter from "./components/Counter"
import Layout from "./components/Layout";

const Users = lazy(() => import("./components/Users"));

const App = () => {
  return(
    <>
      <Layout>
        <Counter/>
        <Suspense fallback={ <div>Loading...</div>}>
          <Users/>
        </Suspense>
      </Layout>
    </>
  )
};

export default App