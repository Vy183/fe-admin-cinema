import { Switch, Route } from "react-router-dom";

import { Container } from "@material-ui/core";

import "./App.scss";
import Appbar from "./components/Appbar/Appbar";
import AllFilm from "./pages/AllFilm/AllFilm";
import AddFilm from "./pages/AddFilm/AddFilm";
import EditFilm from "./pages/EditFilm/EditFilm";
import AddProducer from "./pages/AddProducer/AddProducer";
import TabsAdd from './components/TabsAdd/TabsAdd';

function App() {
  return (
    <div style={{ minHeight: "200vh" }}>
      <Appbar />

      <Container>
        <Switch>
          <Route path="/all-film" component={AllFilm} />
          <Route path="/add-film" component={AddFilm} />
          <Route path="/edit-film/:id_phim" component={EditFilm} />
          <Route path="/add-producer" component={AddProducer} />
        </Switch>
      </Container>

      <TabsAdd/>
    </div>
  );
}

export default App;
