"use server";

import { createSession, deleteSession } from "./session";
import { redirect } from "next/navigation";
import { z } from "zod";

const LoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

export async function login(prevState: any, formData: FormData) {
  console.log(formData);
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const result = LoginSchema.safeParse({ email, password });
  if (!result.success) {
    return { error: "Invalid email or password format" };
  }

  try {
    const response = await fetch(`http://192.168.0.148:5000/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      return { error: "Invalid credentials" };
    }

    const { token } = await response.json();

    await createSession(token);
  } catch (error) {
    console.error("Login error:", error);
    return { error: "Something went wrong" };
  }

  redirect("/dashboard");
}

export async function logout() {
  await deleteSession();
  redirect("/login");
}
