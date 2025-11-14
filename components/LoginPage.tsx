"use client";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

export function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    console.log("Attempting to log in with:", { email, password });

    setTimeout(() => {
      setIsLoading(false);
      alert("Login attempted! Check console for data.");
    }, 1500);
  };

  return (
    <div className="flex items-center justify-center min-h-screen  text-white">
      <Card className="w-[380px] border-black-500 border-2 bg-white text-black">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-black-500 text-center">
            Log in
          </CardTitle>
          <CardDescription className="text-gray-700 text-center">
            Login to start the journey
          </CardDescription>
        </CardHeader>

        <form onSubmit={handleLogin}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-gray-300 focus:border-white-500"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-gray-300 focus:border-black-500"
                required
              />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="remember"
                className="data-[state=checked]: data-[state=checked]:text-white border-gray-400"
              />
              <Label htmlFor="remember">Remember me</Label>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button
              type="submit"
              className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold"
              disabled={isLoading}
            >
              {isLoading ? "Logging In..." : "Login"}
            </Button>
            <p className="mt-4 text-sm text-center text-gray-700">
              Don't have an account?{" "}
              <Link
                href="/signup"
                className="text-blue-500 hover:text-blue-600 font-medium"
              >
                Sign Up
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
