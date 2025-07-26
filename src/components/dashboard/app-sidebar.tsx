import * as React from "react"
import {
    ChevronRight,
    LayoutDashboard,
    Server,
    Globe,
    MapPin,
    CreditCard,
    BarChart3,
    User,
    Settings,
    BookOpen,
    HeadphonesIcon,
    Shield,
    Zap,
    Users,
    Download
} from "lucide-react"

import { SearchForm } from "@/components/dashboard/search-form"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from "@/components/ui/sidebar"

// Proxy selling platform navigation data
const data = {
    navMain: [
        {
            title: "Dashboard",
            url: "#",
            icon: LayoutDashboard,
            items: [
                {
                    title: "Overview",
                    url: "#",
                    isActive: true,
                },
                {
                    title: "Quick Stats",
                    url: "#",
                },
            ],
        },
        {
            title: "Proxy Management",
            url: "#",
            icon: Server,
            items: [
                {
                    title: "Available Proxies",
                    url: "#",
                },
                {
                    title: "My Proxies",
                    url: "#",
                },
                {
                    title: "Proxy Packages",
                    url: "#",
                },
                {
                    title: "Residential",
                    url: "#",
                },
                {
                    title: "Datacenter",
                    url: "#",
                },
                {
                    title: "Mobile",
                    url: "#",
                },
            ],
        },
        {
            title: "Locations",
            url: "#",
            icon: MapPin,
            items: [
                {
                    title: "Country List",
                    url: "#",
                },
                {
                    title: "City Targeting",
                    url: "#",
                },
                {
                    title: "ISP Selection",
                    url: "#",
                },
            ],
        },
        {
            title: "Usage & Analytics",
            url: "#",
            icon: BarChart3,
            items: [
                {
                    title: "Traffic Stats",
                    url: "#",
                },
                {
                    title: "Performance",
                    url: "#",
                },
                {
                    title: "Success Rate",
                    url: "#",
                },
                {
                    title: "Reports",
                    url: "#",
                },
            ],
        },
        {
            title: "Billing",
            url: "#",
            icon: CreditCard,
            items: [
                {
                    title: "Payment Methods",
                    url: "#",
                },
                {
                    title: "Invoices",
                    url: "#",
                },
                {
                    title: "Pricing Plans",
                    url: "#",
                },
                {
                    title: "Usage History",
                    url: "#",
                },
            ],
        },
        {
            title: "API & Tools",
            url: "#",
            icon: Zap,
            items: [
                {
                    title: "API Documentation",
                    url: "#",
                },
                {
                    title: "Authentication",
                    url: "#",
                },
                {
                    title: "Endpoint Testing",
                    url: "#",
                },
                {
                    title: "SDK Downloads",
                    url: "#",
                },
            ],
        },
        {
            title: "Account",
            url: "#",
            icon: User,
            items: [
                {
                    title: "Profile Settings",
                    url: "#",
                },
                {
                    title: "Security",
                    url: "#",
                },
                {
                    title: "Team Management",
                    url: "#",
                },
                {
                    title: "Notifications",
                    url: "#",
                },
            ],
        },
        {
            title: "Support",
            url: "#",
            icon: HeadphonesIcon,
            items: [
                {
                    title: "Help Center",
                    url: "#",
                },
                {
                    title: "Contact Support",
                    url: "#",
                },
                {
                    title: "System Status",
                    url: "#",
                },
            ],
        },
    ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar {...props}>
            <SidebarHeader>
                <a href="/" className="flex items-center space-x-2 min-w-0 flex-shrink-0 p-2">
                    <div className="bg-primary w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white dark:text-black font-bold text-xs sm:text-sm">SP</span>
                    </div>
                    <span className="font-bold text-lg sm:text-xl truncate">SuperProxy</span>
                </a>
                <SearchForm />
            </SidebarHeader>
            <SidebarContent className="gap-0">
                {/* We create a collapsible SidebarGroup for each parent. */}
                {data.navMain.map((item) => (
                    <Collapsible
                        key={item.title}
                        title={item.title}
                        defaultOpen
                        className="group/collapsible"
                    >
                        <SidebarGroup>
                            <SidebarGroupLabel
                                asChild
                                className="group/label text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sm"
                            >
                                <CollapsibleTrigger>
                                    <item.icon className="mr-2 h-4 w-4" />
                                    {item.title}{" "}
                                    <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                                </CollapsibleTrigger>
                            </SidebarGroupLabel>
                            <CollapsibleContent>
                                <SidebarGroupContent>
                                    <SidebarMenu>
                                        {item.items.map((subItem) => (
                                            <SidebarMenuItem key={subItem.title}>
                                                <SidebarMenuButton asChild isActive={subItem.isActive}>
                                                    <a href={subItem.url}>{subItem.title}</a>
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                        ))}
                                    </SidebarMenu>
                                </SidebarGroupContent>
                            </CollapsibleContent>
                        </SidebarGroup>
                    </Collapsible>
                ))}
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    )
}