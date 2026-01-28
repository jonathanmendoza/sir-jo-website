export * from './learn-more-items';
export * from './relatable-stories-items';
export * from './client-sessions-items';
export * from './product-offer-items';

import type { Priority } from "@/types"

export const BASE_URL = "https://fwdjonathanmendoza.com";
export const MY_FULL_NAME = "Jonathan Ventula Mendoza"
export const MY_NAME = "Jonathan Mendoza"
export const TITLE = "Sir Jo, Your Life Partner";
export const DESCRIPTION = `Hi! I'm ${MY_FULL_NAME}, a licensed Financial Wealth Planner based in Metro Manila with FWD Life Philippines. I help professionals and families create personalized protection and investment plans.`;
export const INSURANCE_COMPANY = "FWD Insurance";
export const PRIVACY_POLICY_EMAIL_ADDRESS = "sirjo@fwdjonathanmendoza.com";
export const CONTACT_NUMBER = "+63 907 641 4380";

export const LEAD_ID_STORAGE_KEY = "SIR_JO_LEAD_ID";
export const PERSONAL_INFO_STORAGE_KEY = "SIR_JO_PERSONAL_INFO";
export const PRIORITIES_AND_GOAL_INFO_STORAGE_KEY = "SIR_JO_PRIORITIES_AND_GOAL_INFO";
export const CONTACT_INFO_STORAGE_KEY = "SIR_JO_CONTACT_INFO";

export const AVERAGE_LIFE_SPAN_IN_YEARS = 80;
export const MONTHS_IN_A_YEAR = 12;

export const INFLATION_RATE = 0.06;

export const OTP_LENGTH = 6;

export const PESO_FORMAT = new Intl.NumberFormat("en-PH", {
    style: "currency",
    currency: "PHP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
})

export const CHILD_COLLEGE_ENTRY_AGE = 18;
export const NUMBER_OF_YEARS_IN_COLLEGE = 4;

export const PRIORITIES: { [key: string]: Priority } = {
    cannot_work_to_60: {
        emoji: "💉",
        description: "Protect my health and income"
    },
    cannot_reach_60: {
        emoji: "🏡",
        description: "Secure my family’s future in case something happens to me"
    },
    retirement_planning: {
        emoji: "✈️",
        description: "Retire early or live with freedom"
    },
    education_planning: {
        emoji: "🎓",
        description: "Prepare for my children’s education"
    },
    dream_builders: {
        emoji: "💰",
        description: "Build long-term savings or investment"
    },
}

export const EXCLUSIVE_PRIORITIES_GROUP = ["retirement_planning", "education_planning", "dream_builders"];

export const FBB_KEYS = {
    incomeProtection: 'income_protection',
    criticalIllnessBenefit: 'critical_illness_benefit',
    disabilityIncomeProtection: 'disability_income_protection',
    dreamBuilders: 'dream_builders',
    educationPlanning: 'education_planning',
    retirementPlanning: 'retirement_planning',
};

export const EMPTY_FBB = {
    [FBB_KEYS.incomeProtection]: { goal: 0, shortfall: 0 },
    [FBB_KEYS.criticalIllnessBenefit]: { goal: 0, shortfall: 0 },
    [FBB_KEYS.disabilityIncomeProtection]: { goal: 0, shortfall: 0 },
    [FBB_KEYS.dreamBuilders]: { goal: 0, shortfall: 0 },
    [FBB_KEYS.educationPlanning]: { goal: 0, shortfall: 0 },
    [FBB_KEYS.retirementPlanning]: { goal: 0, shortfall: 0 },
}

export const ALLOWED_INCOME_PROTECTION = {
    min: 500000,
    max: 20000000
}

export const ALLOWED_CRITICAL_ILLNESS_BENEFIT = {
    min: 500000,
    max: 10000000
}

export const ALLOWED_DISABILITY_INCOME_PROTECTION = {
    min: 500000,
    max: 10000000
}

export const ALLOWED_RETIREMENT_PLANNING = {
    min: 500000,
    max: 20000000
}

export const MAX_RETIREMENT_MONTHLY_PENSION_CURRENT_SALARY_MULTIPLIER = 3;

export const ALLOWED_EDUCATION_PLANNING = {
    min: 500000,
    max: 20000000
}

export const ALLOWED_ANNUAL_TUITION_FEE = {
    min: 50000,
    max: 500000,
}

export const ALLOWED_DREAM_BUILDERS = {
    min: 500000,
    max: 20000000
}

export const MINIMUM_INVESTMENT_WITHDRAWAL_YEAR = 10;
