import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components tsx/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, // Show 'aside' on large screens
      }}
      gridTemplateColumns={{ base: "1fr", lg: "250px 1fr" }} // Define column widths
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="aside" bg="gold" display={{ base: "none", lg: "block" }}>
        Aside
      </GridItem>

      <GridItem area="main" bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
