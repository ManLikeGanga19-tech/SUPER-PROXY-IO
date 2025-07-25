import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function SignUpForm({
    className,
    ...props
}: React.ComponentProps<"form">) {
    return (
        <form className={cn("flex flex-col gap-6", className)} {...props}>
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold">Create a new account</h1>
                <p className="text-muted-foreground text-sm text-balance">
                    Enter your email below to create your account
                </p>
            </div>
            <div className="grid gap-6">
                <div className="grid gap-3">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="m@example.com" required />
                </div>
                <div className="grid gap-3">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" required />
                </div>
                <Button type="submit" className="w-full">
                    Sign up
                </Button>
                <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                    <span className="bg-background text-muted-foreground relative z-10 px-2">
                        Or continue with
                    </span>
                </div>
                <Button variant="outline" className="w-full">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 533.5 544.3"
                        className="h-5 w-5 mr-2"
                    >
                        <path
                            fill="#4285F4"
                            d="M533.5 278.4c0-18.3-1.5-36.3-4.6-53.7H272.1v101.6h147.1c-6.3 34.3-25.2 63.4-53.7 83.2v68.8h86.9c50.9-46.9 81.1-116 81.1-199.9z"
                        />
                        <path
                            fill="#34A853"
                            d="M272.1 544.3c72.9 0 134.1-24.2 178.7-65.9l-86.9-68.8c-24.1 16.2-54.8 25.9-91.8 25.9-70.6 0-130.5-47.7-151.9-111.7H31.2v70.5c44.8 88.5 136.6 149.9 240.9 149.9z"
                        />
                        <path
                            fill="#FBBC04"
                            d="M120.2 323.8c-10.5-31.4-10.5-65.2 0-96.6V156.7H31.2c-35.7 71.4-35.7 155.5 0 226.9l89-59.8z"
                        />
                        <path
                            fill="#EA4335"
                            d="M272.1 107.1c39.7-.6 77.8 13.8 106.9 39.5l80.1-80.1C411.4 24.6 344.5-.1 272.1 0c-104.3 0-196.1 61.4-240.9 149.9l89 70.5c21.4-63.9 81.3-111.6 151.9-111.6z"
                        />
                    </svg>
                    Sign up with Google
                </Button>
            </div>
            <div className="text-center text-sm">
                Already have an account?{" "}
                <a href="/login" className="underline underline-offset-4">
                    Login
                </a>
            </div>
        </form>
    )
}
