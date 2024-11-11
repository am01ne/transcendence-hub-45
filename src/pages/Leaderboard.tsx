import { Trophy, Medal, User } from "lucide-react";

const players = [
  { rank: 1, name: "Alex", score: 2500, games: 150 },
  { rank: 2, name: "Sarah", score: 2400, games: 145 },
  { rank: 3, name: "Mike", score: 2300, games: 140 },
  // Add more players...
];

const Leaderboard = () => {
  return (
    <div className="pt-8 space-y-6">
      <h1 className="text-4xl font-bold gradient-text">Leaderboard</h1>
      
      <div className="space-y-4">
        {players.map((player) => (
          <div
            key={player.rank}
            className="glass-card flex items-center gap-4 transition-all hover:scale-[1.02]"
          >
            <div className="flex items-center justify-center w-12 h-12">
              {player.rank === 1 ? (
                <Trophy className="text-yellow-500" size={24} />
              ) : player.rank === 2 ? (
                <Medal className="text-gray-300" size={24} />
              ) : player.rank === 3 ? (
                <Medal className="text-amber-600" size={24} />
              ) : (
                <span className="text-xl font-bold">{player.rank}</span>
              )}
            </div>
            
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <User size={20} className="text-blue-400" />
                <span className="font-medium">{player.name}</span>
              </div>
              <p className="text-sm text-muted-foreground">
                {player.games} games played
              </p>
            </div>
            
            <div className="text-right">
              <p className="text-xl font-bold">{player.score}</p>
              <p className="text-sm text-muted-foreground">points</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;