import type { CivilStatus, Gender } from ".";

export type PersonalInfoCallbacks = {
    onFirstNameChange: (e: any) => void,
    onLastNameChange: (e: any) => void,
    onGenderChange: (value: Gender) => void,
    onCivilStatusChange: (value: CivilStatus) => void,
    onAgeSliderValueChange: (e: any) => void,
    onRetirementAgeSliderValueChange: (e: any) => void,
    onHasInsuranceChange: (value: boolean) => void,
    onHasPreExistingMedicalConditionChange: (value: boolean) => void,
    onPreExistingMedicalConditionChange: (value: string) => void,
    onMonthlySalaryValueChange: (e: any) => void,
    onJobTitleChange: (e: any) => void,
    onExistingEmergencyFundValueChange: (e: any) => void,
}

export type PrioritiesAndGoalInfoCallbacks = {
    onPriorityToggle: (value: string) => void,
    onExistingIncomeProtectionChange: (e: any) => void,
    onExistingCriticalIllnessBenefitChange: (e: any) => void,
    onExistingDisabilityIncomeProtectionChange: (e: any) => void,
    onExistingDreamBuildersChange: (e: any) => void,
    onExistingEducationPlanningChange: (e: any) => void,
    onExistingRetirementPlanningChange: (e: any) => void,
    onGoalDreamBuildersChange: (e: any) => void,
    onTargetRetirementMonthlyPensionChange: (e: any) => void,
    onChildAgeSliderChange: (e: any) => void,
    onCurrentAnnualTuitionFeeChange: (e: any) => void,
    onInvestmentWithdrawalYearChange: (e: any) => void,
}

export type ContactInfoCallbacks = {
    onEmailAddressChange: (e: any) => void,
    onMobileNumberChange: (e: any) => void,
    onBestTimeToCallYouChange: (e: any) => void,
}

export type VerifyContactInfoCallbacks = {
    onEmailOTPChange: (e: any) => void,
    onMobileOTPChange: (e: any) => void,
    onVerifyEmailClicked: () => void,
    onVerifyMobileClicked: () => void,
}
