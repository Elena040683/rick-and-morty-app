import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Filters } from "./components/Filters/Filters";
import { Card } from "./components/Cards/Cards";
import { useEffect, useState } from "react";
import { getInfoFromApi } from "./services/rickyandmortyAPI";



function App() {

  const [pageNumber, setPageNumber] = useState(1);
  const [fetchData, setFetchData] = useState([]);
  let { info, results } = fetchData;

  useEffect(() => {
    const data = getInfoFromApi(pageNumber).then(result => result.data.results);
    console.log(data);
    setFetchData(data);
  }, [pageNumber]);


  return (
    <div className="App">
      <h1 className="text-center my-4 ff">
        Rick and Morty
      </h1>

      <div className="container">
        <div className="row">
          <div className="col-3"><Filters /></div>
          <div className="col-8"><Card /></div>
        </div>
      </div>

    </div>

  );
}

export default App;
