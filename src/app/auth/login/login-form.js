"use client";
import Logo from "@/components/logo";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export default function LoginForm() {
    const supabase = createClientComponentClient();

    return (
        <div>
            <Card>
                <CardHeader><Logo></Logo></CardHeader>
                <CardContent>
                    <Input placeholder="email" type="email"></Input>
                </CardContent>
            </Card>

        </div>
    );
}
