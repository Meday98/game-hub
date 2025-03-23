import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components tsx/NavBar";
import GameGride from "./components tsx/GameGride";
import GenreList from "./components tsx/GenreList";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}>
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameGride />
      </GridItem>
    </Grid>
  );
}

export default App;
