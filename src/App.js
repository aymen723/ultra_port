import "./App.css";
import Landingpage from "./comp/landingpage";
import Ourwork from "./comp/Ourwork";
import { useState, useEffect } from "react";
import Loading from "./comp/loading";
import Socialmedia from "./comp/socialmedia";
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      {loading ? (
        <Loading></Loading>
      ) : (
        <div className="App">
          <Landingpage></Landingpage>
          <Ourwork></Ourwork>
          <Socialmedia></Socialmedia>
        </div>
      )}
    </>
  );
}

export default App;
