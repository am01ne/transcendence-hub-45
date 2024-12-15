import { Trophy, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Mock tournament data
const tournament = {
  name: "Weekly Tournament",
  players: [
    { id: 1, name: "Player 1", score: 0 },
    { id: 2, name: "Player 2", score: 0 },
    { id: 3, name: "Player 3", score: 0 },
    { id: 4, name: "Player 4", score: 0 },
    { id: 5, name: "Player 5", score: 0 },
    { id: 6, name: "Player 6", score: 0 },
    { id: 7, name: "Player 7", score: 0 },
    { id: 8, name: "Player 8", score: 0 },
  ],
};

const Tournament = () => {
  return (
    <div className="space-y-4 p-4">
      <div className="flex items-center gap-2 mb-6">
        <Trophy className="h-6 w-6" />
        <h1 className="text-2xl font-bold">{tournament.name}</h1>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {/* Quarter-finals */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Quarter-finals</h2>
          {[0, 2, 4, 6].map((index) => (
            <Card key={index} className="bg-glass">
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{tournament.players[index].name}</span>
                </div>
                <div className="my-2 border-t border-gray-700" />
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{tournament.players[index + 1].name}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Semi-finals */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Semi-finals</h2>
          <Card className="bg-glass mt-16">
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>TBD</span>
              </div>
              <div className="my-2 border-t border-gray-700" />
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>TBD</span>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-glass mt-16">
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>TBD</span>
              </div>
              <div className="my-2 border-t border-gray-700" />
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>TBD</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Finals */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Finals</h2>
          <Card className="bg-glass mt-32">
            <CardContent className="p-4">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>TBD</span>
              </div>
              <div className="my-2 border-t border-gray-700" />
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>TBD</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Winner */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Winner</h2>
          <Card className="bg-glass mt-32">
            <CardContent className="p-4 flex items-center gap-2">
              <Trophy className="h-5 w-5 text-yellow-500" />
              <span>TBD</span>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Tournament;