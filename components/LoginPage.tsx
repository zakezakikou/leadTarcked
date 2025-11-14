// "use client";

// import { useState } from "react";
// import {
//   Card,
//   CardHeader,
//   CardTitle,
//   CardDescription,
//   CardContent,
//   CardFooter,
// } from "@/components/ui/card";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox";
// import Link from "next/link";

// export function LoginPage() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const handleLogin = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);

//     console.log("Attempting to log in with:", { email, password });

//     setTimeout(() => {
//       setIsLoading(false);
//       alert("Login attempted! Check console for data.");
//     }, 1500);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen  text-white">
//       <Card className="w-[380px] border-black-500 border-2 bg-white text-black">
//         <CardHeader>
//           <CardTitle className="text-3xl font-bold text-black-500 text-center">
//             Log in
//           </CardTitle>
//           <CardDescription className="text-gray-700 text-center">
//             Login to start the journey
//           </CardDescription>
//         </CardHeader>

//         <form onSubmit={handleLogin}>
//           <CardContent className="space-y-4">
//             <div className="space-y-2">
//               <Label htmlFor="email">Email</Label>
//               <Input
//                 id="email"
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="border-gray-300 focus:border-white-500"
//                 required
//               />
//             </div>
//             <div className="space-y-2">
//               <Label htmlFor="password">Password</Label>
//               <Input
//                 id="password"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="border-gray-300 focus:border-black-500"
//                 required
//               />
//             </div>
//             <div className="flex items-center space-x-2">
//               <Checkbox
//                 id="remember"
//                 className="data-[state=checked]: data-[state=checked]:text-white border-black-400"
//               />
//               <Label htmlFor="remember">Remember me</Label>
//             </div>
//           </CardContent>
//           <CardFooter className="flex flex-col">
//             <Button
//               type="submit"
//               className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold"
//               disabled={isLoading}
//             >
//               {isLoading ? "Logging In..." : "Login"}
//             </Button>
//             <p className="mt-4 text-sm text-center text-gray-700">
//               Don't have an account?{" "}
//               <Link
//                 href="/signup"
//                 className="text-blue-500 hover:text-blue-600 font-medium"
//               >
//                 Sign Up
//               </Link>
//             </p>
//           </CardFooter>
//         </form>
//       </Card>
//     </div>
//   );
// }

"use client"; // Mark this as a client component to enable client-side interactivity

import { login } from "@/lib/actions";
import { useActionState } from "react"; // Hook for managing form state with server actions

/**
 * Login Page Component
 * Renders a form that handles user authentication
 * Uses Server Actions for form submission
 */
export default function LoginPage() {
  // useActionState hook provides:
  // - state: current form state (errors, etc.)
  // - action: function to handle form submission
  // - pending: boolean indicating if form is being submitted
  const [state, action, pending] = useActionState(login, undefined);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form action={action} className="bg-white p-8 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold mb-6">Login</h1>
        {state?.error && (
          <div className="bg-red-100 text-red-700 p-3 rounded mb-4">
            {state.error}
          </div>
        )}
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block mb-2">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="w-full border rounded px-3 py-2"
          />
        </div>
        <button
          type="submit"
          disabled={pending}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
        >
          {pending ? "Logging in..." : "Login"}
        </button>{" "}
      </form>
    </div>
  );
}
