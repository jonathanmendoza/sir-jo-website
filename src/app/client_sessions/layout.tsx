import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Client Sessions",
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
