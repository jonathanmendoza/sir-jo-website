import type { Metadata } from "next";
import { BASE_URL } from "@/constants";

export const metadata: Metadata = {
    title: "About Me",
    openGraph: {
        images: [
            {
                url: `${BASE_URL}/about_me/who_is_sir_jo.png`,
                width: 960,
                height: 1280
            }
        ]
    },
    twitter: {
        images: [`${BASE_URL}/about_me/who_is_sir_jo.png`]
    }
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
