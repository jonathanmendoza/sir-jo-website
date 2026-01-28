import type { Metadata } from "next";
import { TITLE } from "@/constants";

export const metadata: Metadata = {
    title: "Relatable Stories",
    openGraph: {
        title: `Relatable Stories | ${TITLE}`
    }
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
