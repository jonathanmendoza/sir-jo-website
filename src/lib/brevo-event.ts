import { isProduction } from "@/utils";

let trafficSource: string | null;
let trafficMedium: string | null;
let trafficCampaign: string | null;

let email: string | undefined = undefined;

const isEnabled = () => {
    return isProduction() && email;
}

export function setBrevoTrafficSource(source: string|null, medium: string|null, campaign: string|null) {
    trafficSource = source,
    trafficMedium = medium,
    trafficCampaign = campaign
}

export function initBrevoEvent(inputEmail?: string) {
    if (inputEmail) email = inputEmail;

    window.Brevo = window.Brevo || [];
    window.Brevo.push([
        "init",
        {
            client_key: process.env.NEXT_PUBLIC_BREVO_MA_KEY
        }
    ]);
}

export async function trackBrevoPageView(locationPathName: string) {
    if (!isEnabled()) { return; }
    window.Brevo.push([
        "page", locationPathName,
        {
            "utm_source": trafficSource,
            "utm_medium": trafficMedium,
            "utm_campaign": trafficCampaign
        }
    ]);
}

export function trackBrevoEvent(event: string, data?: Record<string, any>) {
    if (!isEnabled()) { return; }
    window.Brevo.push([
        "track", event,
        {
            "email": email
        },
        {
            ...data,
            "utm_source": trafficSource,
            "utm_medium": trafficMedium,
            "utm_campaign": trafficCampaign
        },
    ]);
}

export function trackBrevoCustomEvent(event: string, data?: Record<string, any>) {
    if (!isEnabled()) { return; }
    window.Brevo.push([
        "track", event,
        {
            "email": email
        },
        {
            ...data,
            "utm_source": trafficSource,
            "utm_medium": trafficMedium,
            "utm_campaign": trafficCampaign
        }
    ]);
}
