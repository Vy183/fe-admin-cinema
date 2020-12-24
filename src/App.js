import { Switch, Route } from "react-router-dom";

import "./App.scss";
import Appbar from "./components/Appbar/Appbar";
import AllFilm from "./pages/AllFilm/AllFilm";
import AddFilm from "./pages/AddFilm/AddFilm";
import EditFilm from "./pages/EditFilm/EditFilm";

function App() {
  return (
    <div style={{ minHeight: "200vh" }}>
      <Appbar />
      
      <Switch>
        <Route path="/all-film" component={AllFilm} />
        <Route path="/add-film" component={AddFilm} />
        <Route path="/edit-film/:id_phim" component={EditFilm} />
      </Switch>
    </div>
  );
}

export default App;
