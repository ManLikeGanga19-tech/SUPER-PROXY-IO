'use client'

import { useState } from "react"
import { AppSidebar } from "@/components/dashboard/app-sidebar"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/components/ui/sidebar"
import { Wallet, DollarSign, Plus, Bell } from "lucide-react"
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/mode-toggle"

export default function Page() {
    const [funds, setFunds] = useState(0)

    const addFunds = () => {
        setFunds(prev => prev + 100) // Add $100 each time
    }

    const resetFunds = () => {
        setFunds(0)
    }

    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <header className="bg-background sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b px-4">
                    <SidebarTrigger className="-ml-1" />
                    <Separator orientation="vertical" className="mr-2 h-4" />

                    {/* Add Fund Component - Compact */}
                    <div className={cn(
                        "flex items-center gap-2 px-2 py-1.5 rounded-md border transition-colors",
                        funds === 0
                            ? "bg-destructive/10 border-destructive/20 text-destructive"
                            : "bg-green-50 border-green-200 text-green-700 dark:bg-green-950 dark:border-green-800 dark:text-green-300"
                    )}>
                        {/* Funds Display */}
                        <div className="flex items-center gap-1.5">
                            <Wallet className="h-4 w-4" />
                            <div className="flex items-center gap-0.5">
                                <DollarSign className="h-3 w-3" />
                                <span className="font-medium text-sm">{funds.toFixed(2)}</span>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-1.5">
                            <Button
                                size="sm"
                                variant="outline"
                                onClick={addFunds}
                                className={cn(
                                    "flex items-center gap-1 h-7 px-2 text-xs",
                                    funds === 0
                                        ? "border-destructive/30 hover:bg-destructive/5"
                                        : "border-green-300 hover:bg-green-100 dark:border-green-700 dark:hover:bg-green-900"
                                )}
                            >
                                <Plus className="h-3 w-3" />
                                <span className="hidden sm:inline">Add</span>
                            </Button>

                            {funds > 0 && (
                                <Button
                                    size="sm"
                                    variant="ghost"
                                    onClick={resetFunds}
                                    className="h-7 px-2 text-xs hover:bg-muted"
                                >
                                    Reset
                                </Button>
                            )}
                        </div>
                    </div>

                    {/* Notifications and Theme Toggle */}
                    <div className="flex items-center gap-2 ml-auto">
                        <Button
                            variant="outline"
                            size="icon"
                            className="h-9 w-9 relative"
                        >
                            <Bell className="h-4 w-4" />
                            <span className="sr-only">Notifications</span>
                            {/* notification badge */}
                            <span className="absolute -top-1 -right-1 h-3 w-3 bg-destructive rounded-full"></span>
                        </Button>
                        <ModeToggle />
                    </div>
                </header>
                <div className="flex flex-1 flex-col gap-4 p-4">
                    {Array.from({ length: 2 }).map((_, index) => (
                        <div
                            key={index}
                            className="bg-muted/50 aspect-video h-12 w-full rounded-lg"
                        />
                    ))}
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}