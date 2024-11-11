import { Trophy, Medal } from "lucide-react";

const Leaderboard = () => {
  const players = [
    { rank: 1, name: "John Doe", score: 2500, games: 42 },
    { rank: 2, name: "Jane Smith", score: 2400, games: 38 },
    { rank: 3, name: "Bob Johnson", score: 2300, games: 35 },
    { rank: 4, name: "Alice Brown", score: 2200, games: 30 },
    { rank: 5, name: "Charlie Davis", score: 2100, games: 29 },
    { rank: 6, name: "Eve White", score: 2000, games: 28 },
    { rank: 7, name: "Frank Green", score: 1900, games: 27 },
    { rank: 8, name: "Grace Black", score: 1800, games: 20 },
    { rank: 9, name: "Hannah Grey", score: 1700, games: 19 },
    { rank: 10, name: "Ian Blue", score: 1600, games: 18 },
  ];

  return (
    <div className="pt-8 space-y-6">
      <div className="glass-card transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]">
        <h1 className="text-3xl font-bold mb-4 flex items-center gap-2">
          <Trophy className="text-yellow-500" />
          Leaderboard
        </h1>
        
        <div className="space-y-4">
          {players.map((player) => (
            <div
              key={player.rank}
              className="glass-card flex items-center justify-between transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
            >
              <div className="flex items-center gap-4">
                <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                  {player.rank <= 3 ? (
                    <Medal className={`
                      ${player.rank === 1 ? "text-yellow-500" : ""}
                      ${player.rank === 2 ? "text-gray-400" : ""}
                      ${player.rank === 3 ? "text-amber-700" : ""}
                    `} />
                  ) : (
                    <span className="text-lg font-bold">{player.rank}</span>
                  )}
                </div>
                <div>
                  <h3 className="font-medium">{player.name}</h3>
                  <p className="text-sm text-muted-foreground">{player.games} games</p>
                </div>
              </div>
              <p className="text-xl font-bold">{player.score}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
