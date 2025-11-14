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
import Link from "next/link";

export function SignUpPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage("");

    if (Object.values(formData).some((value) => value === "")) {
      setMessage("🚨 Please fill out all fields.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage("✅ Success! Account created. You can now log in.");
        setFormData({ fullName: "", email: "", phone: "", password: "" });
      } else {
        setMessage(`Signup failed: ${data.error || "Server error"}`);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setMessage("An unexpected network error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen  text-white">
      <Card className="w-[420px] border-black-500 border-2 bg-white text-black">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-black-500">
            New User Sign up
          </CardTitle>
          <CardDescription className=" text-center text-gray-700">
            Create your account to start the journey!
          </CardDescription>
        </CardHeader>

        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="border-gray-300 focus:border-black-500"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className="border-gray-300 focus:border-black-500"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                className="border-gray-300 focus:border-black-500"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
                className="border-gray-300 focus:border-black-500"
                required
              />
            </div>
          </CardContent>

          {message && (
            <p
              className={`px-6 text-sm ${
                message.startsWith("✅") ? "text-green-600" : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}

          <CardFooter className="flex flex-col pt-4">
            <Button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold"
              disabled={isLoading}
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </Button>
            <p className="mt-4 text-sm text-center text-gray-700">
              Already registered?{" "}
              <Link
                href="/login"
                className="text-blue-500 hover:text-blue-600 font-medium"
              >
                Login
              </Link>
            </p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
