"use client";
import { useSignUp } from "@/app/_context/auth-context";
import Logo from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function Signup() {
  const signup = useSignUp();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form className="flex flex-col items-center justify-center w-full h-full">
      <Card className="w-96">
        <CardHeader>
          <div className="w-32 mx-auto">
            <Logo></Logo>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <div className="py-2 text-xl font-medium text-center text-eerieBlack">
            Sign up for an shopper account
          </div>
          <Label htmlFor="email">Email</Label>
          <Input
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </CardContent>
        <CardFooter className="flex flex-col items-center justify-center gap-3">
          <Button
            type="button"
            onClick={async () => await signup({ email, password })}
            className="w-full rounded-full"
          >
            Sign Up
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
