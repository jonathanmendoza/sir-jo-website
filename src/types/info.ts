export type Priority = {
    emoji: string,
    description: string,
}

export type Gender = "Male" | "Female";

export type CivilStatus = "Single" | "Married" | "Others";

export type PersonalInfo = {
    firstName: string,
    lastName: string,
    gender?: Gender,
    civilStatus?: CivilStatus,
    age: number,
    retirementAge: number,
    hasInsurance: boolean,
    hasPreExistingMedicalCondition: boolean,
    preExistingMedicalCondition?: string,
    monthlySalary: number,
    jobTitle?: string,
    existingEmergencyFund: number,
}

export type FBBItemInfo = {
    goal: number,
    existing?: number,
    shortfall: number
}

export type PrioritiesAndGoalInfo = {
    selectedPriorities: string[],
    financialBuildingBlocks: {[key: string]: FBBItemInfo},
    monthlySalary: number,
    targetRetirementMonthlyPension: number,
    futureRetirementMonthlyPension: number,
    childAge: number,
    currentAnnualTuitionFee: number,
    investmentWithdrawalYear: number,
}

export type ContactInfo = {
    emailAddress: string,
    mobileNumber: string,
    bestTimeToCallYou: string,
}

export type FreeConsultationSubmitInfo = {
    firstName: string,
    lastName: string,
    gender?: string,
    civilStatus?: string,
    age: number,
    retirementAge: number,
    hasInsurance: boolean,
    hasPreExistingMedicalCondition: boolean,
    preExistingMedicalCondition?: string,
    monthlySalary: number,
    jobTitle?: string,
    existingEmergencyFund?: number,

    prioritiesAndGoal: string,

    email: string,
    contactNumber: string,
    bestCallTime: string,

    productOfferKey?: string
}

export type FinancialNeedsHierarchySubmitInfo = {
    monthlySalary: number,
    existingEmergencyFund: number,
    email: string,
}

export type HowMuchLifeInsuranceDoYouNeedSubmitInfo = {
    housing: number,
    transportation: number,
    travel: number,
    regularCommitment: number,
    food: number,
    healthCare: number,
    recreation: number,
    email: string,
}

export type VerifyContactInfoError = {
    emailAddress?: string,
    mobileNumber?: string
}

export type VerificationStatus = 'pending' | 'processing' | 'verified'

export type VerifyContactInfo = {
    emailOTP: string,
    mobileOTP: string,
    emailStatus: VerificationStatus,
    mobileStatus: VerificationStatus,
    errors: VerifyContactInfoError;
}
