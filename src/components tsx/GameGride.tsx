import { Text } from "@chakra-ui/react";
import userGames from "../hooks/useGames";

const GameGride = () => {
  const { games, error } = userGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((games) => (
          <li key={games.id}>{games.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGride;
