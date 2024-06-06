import { PlayerModel } from "../models/player_model";
import { StatisticsModel } from "../models/statistics_model";

const database: PlayerModel[] = [
  {
    id: 1,
    name: "Lionel Messi",
    club: "Paris Saint-Germain",
    nationality: "Argentina",
    position: "Forward",
    statistics: {
      Overall: 93,
      Pace: 85,
      Shooting: 94,
      Passing: 91,
      Dribbling: 95,
      Defending: 38,
      Physical: 65,
    },
  },
  {
    id: 2,
    name: "Cristiano Ronaldo",
    club: "Al Nassr",
    nationality: "Portugal",
    position: "Forward",
    statistics: {
      Overall: 92,
      Pace: 87,
      Shooting: 95,
      Passing: 82,
      Dribbling: 88,
      Defending: 35,
      Physical: 78,
    },
  },
  {
    id: 3,
    name: "Kylian Mbappé",
    club: "Paris Saint-Germain",
    nationality: "France",
    position: "Forward",
    statistics: {
      Overall: 91,
      Pace: 97,
      Shooting: 89,
      Passing: 82,
      Dribbling: 94,
      Defending: 36,
      Physical: 76,
    },
  },
  {
    id: 4,
    name: "Kevin De Bruyne",
    club: "Manchester City",
    nationality: "Belgium",
    position: "Midfielder",
    statistics: {
      Overall: 91,
      Pace: 76,
      Shooting: 86,
      Passing: 94,
      Dribbling: 88,
      Defending: 64,
      Physical: 78,
    },
  },
  {
    id: 5,
    name: "Robert Lewandowski",
    club: "Barcelona",
    nationality: "Poland",
    position: "Forward",
    statistics: {
      Overall: 91,
      Pace: 77,
      Shooting: 92,
      Passing: 83,
      Dribbling: 85,
      Defending: 42,
      Physical: 82,
    },
  },
  {
    id: 6,
    name: "Neymar Jr",
    club: "Paris Saint-Germain",
    nationality: "Brazil",
    position: "Forward",
    statistics: {
      Overall: 90,
      Pace: 91,
      Shooting: 85,
      Passing: 87,
      Dribbling: 96,
      Defending: 34,
      Physical: 59,
    },
  },
  {
    id: 7,
    name: "Mohamed Salah",
    club: "Liverpool",
    nationality: "Egypt",
    position: "Forward",
    statistics: {
      Overall: 90,
      Pace: 94,
      Shooting: 90,
      Passing: 83,
      Dribbling: 90,
      Defending: 40,
      Physical: 72,
    },
  },
  {
    id: 8,
    name: "Erling Haaland",
    club: "Manchester City",
    nationality: "Norway",
    position: "Forward",
    statistics: {
      Overall: 90,
      Pace: 92,
      Shooting: 94,
      Passing: 79,
      Dribbling: 84,
      Defending: 44,
      Physical: 88,
    },
  },
  {
    id: 9,
    name: "Virgil van Dijk",
    club: "Liverpool",
    nationality: "Netherlands",
    position: "Defender",
    statistics: {
      Overall: 90,
      Pace: 76,
      Shooting: 56,
      Passing: 73,
      Dribbling: 62,
      Defending: 92,
      Physical: 88,
    },
  },
  {
    id: 10,
    name: "N'Golo Kanté",
    club: "Chelsea",
    nationality: "France",
    position: "Midfielder",
    statistics: {
      Overall: 89,
      Pace: 81,
      Shooting: 62,
      Passing: 80,
      Dribbling: 80,
      Defending: 91,
      Physical: 84,
    },
  },
  {
    id: 11,
    name: "Jan Oblak",
    club: "Atlético Madrid",
    nationality: "Slovenia",
    position: "Goalkeeper",
    statistics: {
      Overall: 89,
      Pace: 60,
      Shooting: 13,
      Passing: 68,
      Dribbling: 25,
      Defending: 45,
      Physical: 78,
    },
  },
  {
    id: 12,
    name: "Thiago Alcântara",
    club: "Liverpool",
    nationality: "Spain",
    position: "Midfielder",
    statistics: {
      Overall: 89,
      Pace: 74,
      Shooting: 78,
      Passing: 92,
      Dribbling: 85,
      Defending: 66,
      Physical: 73,
    },
  },
  {
    id: 13,
    name: "Joshua Kimmich",
    club: "Bayern Munich",
    nationality: "Germany",
    position: "Midfielder",
    statistics: {
      Overall: 89,
      Pace: 78,
      Shooting: 81,
      Passing: 91,
      Dribbling: 83,
      Defending: 80,
      Physical: 76,
    },
  },
  {
    id: 14,
    name: "Ederson Moraes",
    club: "Manchester City",
    nationality: "Brazil",
    position: "Goalkeeper",
    statistics: {
      Overall: 89,
      Pace: 63,
      Shooting: 14,
      Passing: 85,
      Dribbling: 28,
      Defending: 42,
      Physical: 74,
    },
  },
  {
    id: 15,
    name: "Trent Alexander-Arnold",
    club: "Liverpool",
    nationality: "England",
    position: "Defender",
    statistics: {
      Overall: 88,
      Pace: 80,
      Shooting: 75,
      Passing: 88,
      Dribbling: 83,
      Defending: 84,
      Physical: 72,
    },
  },
  {
    id: 16,
    name: "Alisson Becker",
    club: "Liverpool",
    nationality: "Brazil",
    position: "Goalkeeper",
    statistics: {
      Overall: 88,
      Pace: 62,
      Shooting: 11,
      Passing: 72,
      Dribbling: 25,
      Defending: 41,
      Physical: 81,
    },
  },
  {
    id: 17,
    name: "Harry Kane",
    club: "Tottenham Hotspur",
    nationality: "England",
    position: "Forward",
    statistics: {
      Overall: 88,
      Pace: 78,
      Shooting: 91,
      Passing: 84,
      Dribbling: 81,
      Defending: 43,
      Physical: 80,
    },
  },
  {
    id: 18,
    name: "Casemiro",
    club: "Manchester United",
    nationality: "Brazil",
    position: "Midfielder",
    statistics: {
      Overall: 88,
      Pace: 71,
      Shooting: 70,
      Passing: 78,
      Dribbling: 75,
      Defending: 89,
      Physical: 87,
    },
  },
  {
    id: 19,
    name: "Son Heung-min",
    club: "Tottenham Hotspur",
    nationality: "South Korea",
    position: "Forward",
    statistics: {
      Overall: 88,
      Pace: 92,
      Shooting: 86,
      Passing: 80,
      Dribbling: 89,
      Defending: 41,
      Physical: 71,
    },
  },
  {
    id: 20,
    name: "Rúben Dias",
    club: "Manchester City",
    nationality: "Portugal",
    position: "Defender",
    statistics: {
      Overall: 88,
      Pace: 76,
      Shooting: 54,
      Passing: 74,
      Dribbling: 65,
      Defending: 90,
      Physical: 85,
    },
  },
  {
    id: 21,
    name: "Raheem Sterling",
    club: "Chelsea",
    nationality: "England",
    position: "Forward",
    statistics: {
      Overall: 87,
      Pace: 93,
      Shooting: 83,
      Passing: 80,
      Dribbling: 87,
      Defending: 44,
      Physical: 69,
    },
  },
  {
    id: 22,
    name: "Pedri",
    club: "Barcelona",
    nationality: "Spain",
    position: "Midfielder",
    statistics: {
      Overall: 87,
      Pace: 78,
      Shooting: 73,
      Passing: 86,
      Dribbling: 84,
      Defending: 66,
      Physical: 69,
    },
  },
  {
    id: 23,
    name: "Phil Foden",
    club: "Manchester City",
    nationality: "England",
    position: "Midfielder",
    statistics: {
      Overall: 87,
      Pace: 83,
      Shooting: 81,
      Passing: 85,
      Dribbling: 88,
      Defending: 63,
      Physical: 73,
    },
  },
  {
    id: 24,
    name: "Sadio Mané",
    club: "Bayern Munich",
    nationality: "Senegal",
    position: "Forward",
    statistics: {
      Overall: 87,
      Pace: 90,
      Shooting: 85,
      Passing: 80,
      Dribbling: 88,
      Defending: 44,
      Physical: 79,
    },
  },
  {
    id: 25,
    name: "João Félix",
    club: "Atlético Madrid",
    nationality: "Portugal",
    position: "Forward",
    statistics: {
      Overall: 86,
      Pace: 86,
      Shooting: 83,
      Passing: 82,
      Dribbling: 88,
      Defending: 40,
      Physical: 68,
    },
  },
];

export const findAlPlayers = async (): Promise<PlayerModel[]> => {
  return database;
};

export const findPlayerById = async (
  id: number
): Promise<PlayerModel | undefined> => {
  return database.find((player) => player.id === id);
};

export const insertPlayer = async (player: PlayerModel) => {
  database.push(player);
};

export const deleteOnePlayer = async (id: number) => {
  const index = database.findIndex((player) => player.id === id);

  if (index !== -1) {
    database.splice(index, 1);
    return true;
  }

  return false;
};

export const findAndModifyPlayer = async (
  id: number,
  statistics: StatisticsModel
): Promise<PlayerModel> => {
  // Find Player
  const playerIndex = database.findIndex((player) => player.id === id);

  if (playerIndex !== -1) {
    database[playerIndex].statistics = statistics;
  }

  return database[playerIndex];
};
