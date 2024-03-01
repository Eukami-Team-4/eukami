"use client";

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
import { useRouter } from "next/navigation";

export default function Login() {
    const router = useRouter();
    return (
        <form action="/auth/login" method="post">
            <div className="flex flex-col items-center justify-center w-screen h-screen">
                <Card className="w-96">
                    <CardHeader>
                        <div className="w-32 mx-auto">
                            <Logo></Logo>
                        </div>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-3">
                        <Label htmlFor="email">Email</Label>
                        <Input name="email" />
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" name="password" />
                    </CardContent>
                    <CardFooter className="flex flex-col items-center justify-center gap-3">
                        <Button type="submit" className="w-full rounded-full">
                            Sign In
                        </Button>
                        <div className="flex flex-col items-center justify-center py-6">
                            <p>Don&apos;t have an account?</p>
                            <Button
                                variant="link"
                                onClick={() => router.push("/sign-up")}
                            >
                                Sign up
                            </Button>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </form>
    );
}
