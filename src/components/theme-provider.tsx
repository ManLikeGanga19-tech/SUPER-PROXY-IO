// components/theme-provider.tsx
'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

// Define the Attribute type based on next-themes expectations
type Attribute = 'class' | `data-${string}`;

interface ThemeProviderProps {
    children: React.ReactNode;
    attribute?: Attribute | Attribute[];
    defaultTheme?: string;
    enableSystem?: boolean;
    disableTransitionOnChange?: boolean;
}

export function ThemeProvider({
    children,
    attribute = 'class',
    defaultTheme = 'system',
    enableSystem = true,
    disableTransitionOnChange = true,
    ...props
}: ThemeProviderProps) {
    return (
        <NextThemesProvider
            attribute={attribute}
            defaultTheme={defaultTheme}
            enableSystem={enableSystem}
            disableTransitionOnChange={disableTransitionOnChange}
            {...props}
        >
            {children}
        </NextThemesProvider>
    );
}