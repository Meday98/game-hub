import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components tsx/NavBar";
import GameGride from "./components tsx/GameGride";
import GenreList from "./components tsx/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components tsx/PlatformSelector";

function App() {
  const [selectedGenre, setSelectGenre] = useState<Genre | null>(null);
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}>
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={selectedGenre}
            onSetSelectGenre={(genre) => setSelectGenre(genre)}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <PlatformSelector />
        <GameGride selectedGenre={selectedGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
