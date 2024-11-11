import { User, Lock, Trophy, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Settings = () => {
  return (
    <div className="pt-8 space-y-6">
      <h1 className="text-3xl font-bold mb-6">Account Settings</h1>

      {/* Profile Settings */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Profile Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 rounded-full bg-blue-500/20 flex items-center justify-center">
              <User size={48} className="text-blue-400" />
            </div>
            <Button variant="outline">
              <Upload className="h-4 w-4 mr-2" />
              Change Avatar
            </Button>
          </div>
          <div className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="display-name">Display Name</Label>
              <Input id="display-name" defaultValue="John Doe" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="bio">Bio</Label>
              <Input id="bio" defaultValue="Professional gamer" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Account Security */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lock className="h-5 w-5" />
            Account Security
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" defaultValue="john@example.com" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="current-password">Current Password</Label>
            <Input id="current-password" type="password" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="new-password">New Password</Label>
            <Input id="new-password" type="password" />
          </div>
          <Button>Update Password</Button>
        </CardContent>
      </Card>

      {/* Tournament Settings */}
      <Card className="glass-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5" />
            Tournament Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="tournament-name">Tournament Name</Label>
            <Input id="tournament-name" placeholder="Enter tournament name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="max-players">Maximum Players</Label>
            <Input id="max-players" type="number" placeholder="16" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="tournament-date">Tournament Date</Label>
            <Input id="tournament-date" type="date" />
          </div>
          <Button>Create Tournament</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;