import { type AdvancedMatching } from 'react-facebook-pixel';
import sha256 from 'crypto-js/sha256';
import { isValidPhilippineNumber, normalizePhilippineNumber } from '@/utils'
import { isDevelopment, isProduction } from '@/utils';

const META_PIXEL_ID = `${process.env.NEXT_PUBLIC_META_PIXEL_ID}`;

let trafficSource: string | null;
let trafficMedium: string | null;
let trafficCampaign: string | null;

const options = {
    autoConfig: true,
    debug: isDevelopment() ? true : false, // set to true to see console logs
};

export function setFacebookTrafficSource(source: string|null, medium: string|null, campaign: string|null) {
    trafficSource = source,
    trafficMedium = medium,
    trafficCampaign = campaign
}

export const initFacebookPixel = (email?: string, phone?: string) => {
    import('react-facebook-pixel').then(module => module.default).then(ReactPixel => {
        const advancedMatching = {} as AdvancedMatching;
        if (email && email.trim().includes("@")) {
            advancedMatching.em = sha256(email.trim().toLowerCase()).toString();
        }
        if (phone && isValidPhilippineNumber(phone)) {
            const normalizedPhone = normalizePhilippineNumber(phone);
            if (normalizedPhone) {
                advancedMatching.ph = sha256(normalizedPhone).toString();
            }
        }
        if (isProduction()) {
            ReactPixel.init(META_PIXEL_ID, advancedMatching, options);
        }
    });
};

export const trackFBPageView = () => {
    if (isProduction()) {
        import('react-facebook-pixel').then(module => module.default).then(ReactPixel => ReactPixel.pageView());
    }
};

export const trackFBEvent = (event: string, data?: Record<string, any>) => {
    if (isProduction()) {
        import('react-facebook-pixel').then(module => module.default).then(ReactPixel => {
            ReactPixel.track(event, {
                ...data,
                "utm_source": trafficSource,
                "utm_medium": trafficMedium,
                "utm_campaign": trafficCampaign
            });
        });
    }
};

export const trackFBCustomEvent = (event: string, data?: Record<string, any>) => {
    if (isProduction()) {
        import('react-facebook-pixel').then(module => module.default).then(ReactPixel => {
            ReactPixel.trackCustom(event, {
                ...data,
                "utm_source": trafficSource,
                "utm_medium": trafficMedium,
                "utm_campaign": trafficCampaign
            });
        });
    }
};
