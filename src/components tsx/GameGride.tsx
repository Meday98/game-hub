import { SimpleGrid, Text } from "@chakra-ui/react";
import userGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGride = () => {
  const { games, error } = userGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={10}
        spacing={10}>
        {games.map((game) => (
          <GameCard key={games.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGride;
