"use server";

import { createSession, deleteSession } from "./session";
import { redirect } from "next/navigation";
import { z } from "zod";

const LoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});

export async function login(prevState: any, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const result = LoginSchema.safeParse({ email, password });
  if (!result.success) {
    return { error: "Invalid email or password format" };
  }

  try {
    const response = await fetch(
      /* put your link
       */
      ``,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      }
    );

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
