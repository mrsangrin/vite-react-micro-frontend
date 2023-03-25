import { lazy, Suspense } from "react";
import Counter from "./components/Counter"
const Users = lazy(() => import("./components/Users"));

const App = () => {
  return(
    <>
      <Counter/>
      <Suspense fallback={ <div>Loading...</div>}>
        <Users/>
      </Suspense>
    </>
  )
};

export default App