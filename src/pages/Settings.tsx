import { useState } from "react";
import { User, Lock, Trophy, Upload } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Settings = () => {
  const [avatar, setAvatar] = useState("/placeholder.svg");

  return (
    <div className="pt-8 space-y-6 max-w-3xl mx-auto px-4">
      <Card className="hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300">
        <CardHeader>
          <CardTitle>Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="profile">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="tournaments">Tournaments</TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="space-y-4">
              <div className="flex items-center gap-4 py-4">
                <Avatar className="w-20 h-20">
                  <AvatarImage src={avatar} />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <Button>
                  <Upload className="w-4 h-4 mr-2" />
                  Change Avatar
                </Button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Display Name</label>
                  <Input defaultValue="John Doe" />
                </div>
                <div>
                  <label className="text-sm font-medium">Bio</label>
                  <Input defaultValue="Professional gamer" />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="account" className="space-y-4">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" defaultValue="john@example.com" />
                </div>
                <div>
                  <label className="text-sm font-medium">Current Password</label>
                  <Input type="password" />
                </div>
                <div>
                  <label className="text-sm font-medium">New Password</label>
                  <Input type="password" />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="tournaments" className="space-y-4">
              <Button className="w-full">
                <Trophy className="w-4 h-4 mr-2" />
                Host New Tournament
              </Button>
              <p className="text-sm text-muted-foreground text-center">
                You haven't hosted any tournaments yet.
              </p>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;