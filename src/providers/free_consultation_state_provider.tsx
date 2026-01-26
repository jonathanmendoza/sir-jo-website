"use client";

import { useCallback, useEffect, useState } from "react";
import type { CivilStatus, ContactInfo, ContactInfoCallbacks, FBBItemInfo, FreeConsultationSubmitInfo, FreeConsultationSubmitInfoStatus, Gender, PersonalInfo, PersonalInfoCallbacks, PrioritiesAndGoalInfo, PrioritiesAndGoalInfoCallbacks, VerificationStatus, VerifyContactInfo, VerifyContactInfoCallbacks } from "@/types";
import { AVERAGE_LIFE_SPAN_IN_YEARS, CHILD_COLLEGE_ENTRY_AGE, CONTACT_INFO_STORAGE_KEY, EMPTY_FBB, EXCLUSIVE_PRIORITIES_GROUP, FBB_KEYS, INFLATION_RATE, LEAD_ID_STORAGE_KEY, MAX_RETIREMENT_MONTHLY_PENSION_CURRENT_SALARY_MULTIPLIER, MINIMUM_INVESTMENT_WITHDRAWAL_YEAR, MONTHS_IN_A_YEAR, NUMBER_OF_YEARS_IN_COLLEGE, OTP_LENGTH, PERSONAL_INFO_STORAGE_KEY, PRIORITIES_AND_GOAL_INFO_STORAGE_KEY } from "@/constants";
import { PersonalInfoContext, PrioritiesAndGoalInfoContext, ContactInfoContext, FreeConsultationSubmitInfoStatusContext, VerifyContactInfoContext } from "../contexts";
import { PersonalInfoCallbacksContext, PrioritiesAndGoalInfoCallbacksContext, ContactInfoCallbacksContext, FreeConsultationSubmitCallbackContext, VerifyContactInfoCallbacksContext } from "../contexts/callbacks";
import { getSalaryRange, getFundRange } from "@/utils";
import { useAutoSave } from "@/utils";
import { initializeEventTracking, trackCustomEvent, trackEvent } from "@/utils/event_tracking";

export function FreeConsultationStateProvider({ children }: { children: React.ReactNode }) {
    const [firstName, setFirstName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");
    const [gender, setGender] = useState<Gender | undefined>(undefined);
    const [civilStatus, setCivilStatus] = useState<CivilStatus | undefined>(undefined);
    const [age, setAge] = useState(25);
    const [retirementAge, setRetirementAge] = useState(60);
    const [hasInsurance, setHasInsurance] = useState<boolean>(false);

    const [hasPreExistingMedicalCondition, setHasPreExistingMedicalCondition] = useState<boolean>(false);
    const [preExistingMedicalCondition, setPreExistingMedicalCondition] = useState<string | undefined>(undefined);

    const [selectedPriorities, setSelectedPriorities] = useState<string[]>([]);
    const [financialBuildingBlocks, setFinancialBuildingBlocks] = useState<{ [key: string]: FBBItemInfo }>(EMPTY_FBB);

    const [monthlySalary, setMonthlySalary] = useState<number>(0);
    const [jobTitle, setJobTitle] = useState<string | undefined>(undefined);

    const [existingEmergencyFund, setExistingEmergencyFund] = useState<number>(0);

    const [targetRetirementMonthlyPension, setTargetRetirementMonthlyPension] = useState(0);
    const [futureRetirementMonthlyPension, setFutureRetirementMonthlyPension] = useState(0);

    const [childAge, setChildAge] = useState(0);
    const [currentAnnualTuitionFee, setCurrentAnnualTuitionFee] = useState(0);
    const [investmentWithdrawalYear, setInvestmentWithdrawalYear] = useState(MINIMUM_INVESTMENT_WITHDRAWAL_YEAR);

    const [emailAddress, setEmailAddress] = useState<string>("");
    const [mobileNumber, setMobileNumber] = useState<string>("");
    const [bestTimeToCallYou, setBestTimeToCallYou] = useState<string>("");

    const [isSubmissionProcessing, setIsSubmissionProcessing] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submissionError, setSubmissionError] = useState<Error|null>(null);

    const [emailOTP, setEmailOTP] = useState("");
    const [emailVerificationStatus, setEmailVerificationStatus] = useState<VerificationStatus>('pending');
    const [mobileOTP, setMobileOTP] = useState("");
    const [mobileVerificationStatus, setMobileVerificationStatus] = useState<VerificationStatus>('pending');

    const [verifyContactInfoErrors, setVerifyContactInfoErrors] = useState<{
        emailAddress?: string
        mobileNumber?: string
    }>({});

    const [leadId, setLeadId] = useState<number|undefined>();

    const onFirstNameChange = useCallback((e: any) => {
        setFirstName(e.target.value);
    }, []);

    const onLastNameChange = useCallback((e: any) => {
        setLastName(e.target.value);
    }, []);

    const onGenderChange = useCallback((value: Gender) => {
        setGender(value);
    }, []);

    const onCivilStatusChange = useCallback((value: CivilStatus) => {
        setCivilStatus(value);
    }, []);

    const onAgeSliderValueChange = useCallback((e: any) => {
        setAge(Number(e.target.value));
    }, []);

    const onRetirementAgeSliderValueChange = useCallback((e: any) => {
        setRetirementAge(Number(e.target.value));
    }, []);

    const onHasInsuranceChange = useCallback((value: boolean) => {
        setHasInsurance(value);
    }, []);

    const onHasPreExistingMedicalConditionChange = useCallback((value: boolean) => {
        setHasPreExistingMedicalCondition(value);
        if (!value) {
            setPreExistingMedicalCondition(undefined);
        }
    }, []);

    const onPreExistingMedicalConditionChange = useCallback((value: string) => {
        setPreExistingMedicalCondition(value);
    }, []);

    const onPriorityToggle = useCallback((value: string) => {
        setSelectedPriorities((prev) =>
            prev.includes(value)
                ? prev.filter((v) => v !== value)
                : [...prev, value]
        )
    }, [selectedPriorities]);

    const onChildAgeSliderChange = useCallback((e: any) => {
        setChildAge(Number(e.target.value));
    }, []);

    const onCurrentAnnualTuitionFeeChange = useCallback((e: any) => {
        setCurrentAnnualTuitionFee(Number(e.target.value));
    }, []);

    const onInvestmentWithdrawalYearChange = useCallback((e: any) => {
        setInvestmentWithdrawalYear(e.target.value);
    }, []);

    const onMonthlySalaryValueChange = useCallback((e: any) => {
        setMonthlySalary(Number(e.target.value));
    }, []);

    const onJobTitleChange = useCallback((e: any) => {
        setJobTitle(e.target.value);
    }, []);

    const onExistingEmergencyFundValueChange = useCallback((e: any) => {
        setExistingEmergencyFund(Number(e.target.value));
    }, []);

    const onEmailOTPChange = useCallback((e: any) => {
        setEmailOTP(e.target.value);
    }, []);

    const onMobileOTPChange = useCallback((e: any) => {
        setMobileOTP(e.target.value);
    }, []);

    useEffect(() => {
        const newErrors: typeof verifyContactInfoErrors = {};
        if (emailVerificationStatus === 'pending') {
            if (emailOTP.trim().length !== OTP_LENGTH) {
                newErrors.emailAddress = "Check your email inbox for the OTP code.";
            }
        }
        if (mobileVerificationStatus === 'pending') {
            if (mobileOTP.trim().length !== OTP_LENGTH) {
                newErrors.mobileNumber = "Enter the OTP sent to your mobile number.";
            }
        }
        setVerifyContactInfoErrors(newErrors);
    }, [emailOTP, mobileOTP]);

    const onVerifyEmailClicked = useCallback(async () => {
        setEmailVerificationStatus('processing');
        trackCustomEvent("VerifyEmail-Processing", {email: emailAddress});
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/leads/${leadId}/verify-email-otp`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({otp: emailOTP})
            });

            if (res.ok) {
                setEmailVerificationStatus('verified');
                trackCustomEvent("VerifyEmail-Verified", {email: emailAddress});
            } else {
                const message = await res.text();
                throw new Error(message || `Email verification request failed: ${res.status}`);
            }
        } catch (err) {
            const errorObj = err as Error;
            setEmailVerificationStatus('pending');
            trackCustomEvent("VerifyEmail-Failed", {email: emailAddress, error: errorObj.message});
            setVerifyContactInfoErrors((prev) => { return {...prev, emailAddress: JSON.parse(errorObj.message).message}});
        }
    }, [leadId, emailAddress, emailOTP]);

    const onVerifyMobileClicked = useCallback(async () => {
        setMobileVerificationStatus('processing');
        trackCustomEvent("VerifyMobile-Processing", {mobile: mobileNumber});
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/leads/${leadId}/verify-mobile-otp`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({otp: mobileOTP})
            });

            if (res.ok) {
                setMobileVerificationStatus('verified');
                trackCustomEvent("VerifyMobile-Verified", {mobile: mobileNumber});
            } else {
                const message = await res.text();
                throw new Error(message || `Mobile verification request failed: ${res.status}`);
            }
        } catch (err) {
            const errorObj = err as Error;
            setMobileVerificationStatus('pending');
            trackCustomEvent("VerifyMobile-Failed", {mobile: mobileNumber, error: errorObj.message});
            setVerifyContactInfoErrors((prev) => { return {...prev, mobileNumber: JSON.parse(errorObj.message).message}});
        }
    }, [leadId, mobileNumber, mobileOTP]);

    useEffect(() => {
        const key = FBB_KEYS.retirementPlanning;
        const retirementYears = AVERAGE_LIFE_SPAN_IN_YEARS - retirementAge;
        setFinancialBuildingBlocks((prev) => ({
            ...prev,
            [key]: {
                ...prev[key],
                goal: retirementYears * targetRetirementMonthlyPension,
            },
        }));
    }, [age, retirementAge, targetRetirementMonthlyPension]);

    const computeFBBShortfall = (source: { [key: string]: FBBItemInfo }) => {
        let result = { ...source };
        // FBB Item Goal Clamping & Shortfall computation
        Object.keys(result).forEach((key) => {
            const goal = result[key].goal;
            const existing = result[key].existing ?? 0;
            const updatedGoal = Math.max(goal, existing);
            const shortfall = Math.max(0, updatedGoal - existing);
            result[key] = {
                ...result[key],
                goal: updatedGoal,
                existing: existing,
                shortfall: shortfall,
            }
        });
        return result;
    };

    const updateFBBGoal = (source: { [key: string]: FBBItemInfo }, key: string, newGoal: number) => {
        let result = { ...source };
        result[key] = {
            ...result[key],
            goal: newGoal,
        };
        return result;
    }

    const updateFBBExisting = (source: { [key: string]: FBBItemInfo }, key: string, newExisting: number) => {
        let result = { ...source };
        result[key] = {
            ...result[key],
            existing: newExisting
        };
        return result;
    }

    const updateFBBGoalBasedOnIncome = (source: { [key: string]: FBBItemInfo }, key: string, monthlySalary: number, multiplier: number) => {
        let result = { ...source };
        result[key] = {
            ...result[key],
            goal: (monthlySalary * MONTHS_IN_A_YEAR) * multiplier,
        };
        return result;
    };

    const updateFBBExistingBasedOnIncome = (source: { [key: string]: FBBItemInfo }, key: string, monthlySalary: number, multiplier: number) => {
        let result = { ...source };
        result[key] = {
            ...result[key],
            existing: Math.min((monthlySalary * MONTHS_IN_A_YEAR) * multiplier, result[key].existing ?? 0),
        };
        return result;
    };

    useEffect(() => {
        let result = { ...financialBuildingBlocks };
        result = updateFBBGoalBasedOnIncome(result, FBB_KEYS.incomeProtection, monthlySalary, 10);
        result = updateFBBGoalBasedOnIncome(result, FBB_KEYS.criticalIllnessBenefit, monthlySalary, 5);
        result = updateFBBGoalBasedOnIncome(result, FBB_KEYS.disabilityIncomeProtection, monthlySalary, 5);
        result = computeFBBShortfall(result);
        if (hasInsurance) {
            result = updateFBBExistingBasedOnIncome(result, FBB_KEYS.incomeProtection, monthlySalary, 10);
            result = updateFBBExistingBasedOnIncome(result, FBB_KEYS.criticalIllnessBenefit, monthlySalary, 5);
            result = updateFBBExistingBasedOnIncome(result, FBB_KEYS.disabilityIncomeProtection, monthlySalary, 5);
        }
        setFinancialBuildingBlocks(result);
    }, [hasInsurance, monthlySalary, selectedPriorities]);

    const onExistingIncomeProtectionChange = useCallback((e: any) => {
        let result = updateFBBExisting(financialBuildingBlocks, FBB_KEYS.incomeProtection, Number(e.target.value));
        result = computeFBBShortfall(result);
        setFinancialBuildingBlocks(result);
    }, [financialBuildingBlocks]);

    const onExistingCriticalIllnessBenefitChange = useCallback((e: any) => {
        let result = updateFBBExisting(financialBuildingBlocks, FBB_KEYS.criticalIllnessBenefit, Number(e.target.value));
        result = computeFBBShortfall(result);
        setFinancialBuildingBlocks(result);
    }, [financialBuildingBlocks]);

    const onExistingDisabilityIncomeProtectionChange = useCallback((e: any) => {
        let result = updateFBBExisting(financialBuildingBlocks, FBB_KEYS.disabilityIncomeProtection, Number(e.target.value));
        result = computeFBBShortfall(result);
        setFinancialBuildingBlocks(result);
    }, [financialBuildingBlocks]);

    const onExistingDreamBuildersChange = useCallback((e: any) => {
        let result = updateFBBExisting(financialBuildingBlocks, FBB_KEYS.dreamBuilders, Number(e.target.value));
        result = computeFBBShortfall(result);
        setFinancialBuildingBlocks(result);
    }, [financialBuildingBlocks]);

    const onExistingEducationPlanningChange = useCallback((e: any) => {
        let result = updateFBBExisting(financialBuildingBlocks, FBB_KEYS.educationPlanning, Number(e.target.value));
        const existing = Number(e.target.value);
        const goal = financialBuildingBlocks[FBB_KEYS.educationPlanning].goal;
        const updatedGoal = Math.max(goal, existing);
        result = updateFBBGoal(result, FBB_KEYS.educationPlanning, updatedGoal);
        result = computeFBBShortfall(result);
        setFinancialBuildingBlocks(result);
    }, [financialBuildingBlocks]);

    const onExistingRetirementPlanningChange = useCallback((e: any) => {
        let result = updateFBBExisting(financialBuildingBlocks, FBB_KEYS.retirementPlanning, Number(e.target.value));
        result = computeFBBShortfall(result);
        setFinancialBuildingBlocks(result);
    }, [financialBuildingBlocks]);

    const onGoalDreamBuildersChange = useCallback((e: any) => {
        let result = updateFBBGoal(financialBuildingBlocks, FBB_KEYS.dreamBuilders, Number(e.target.value));
        result = computeFBBShortfall(result);
        setFinancialBuildingBlocks(result);
    }, [financialBuildingBlocks]);

    useEffect(() => {
        const yearsBeforeCollege = CHILD_COLLEGE_ENTRY_AGE - childAge;
        const startingYearAnnualTuitionFee = currentAnnualTuitionFee * Math.pow((1 + INFLATION_RATE), yearsBeforeCollege);
        let totalTuitionFee = startingYearAnnualTuitionFee;

        for (var i = 1; i < NUMBER_OF_YEARS_IN_COLLEGE; i++) {
            totalTuitionFee += startingYearAnnualTuitionFee * Math.pow((1 + INFLATION_RATE), i);
        }
        let result = updateFBBGoal(financialBuildingBlocks, FBB_KEYS.educationPlanning, totalTuitionFee);
        result = computeFBBShortfall(result);
        setFinancialBuildingBlocks(result);
    }, [childAge, currentAnnualTuitionFee, financialBuildingBlocks[FBB_KEYS.educationPlanning].existing]);

    const onTargetRetirementMonthlyPensionChange = useCallback((e: any) => {
        setTargetRetirementMonthlyPension(Number(e.target.value));
    }, []);

    const onEmailAddressChange = useCallback((e: any) => {
        setEmailAddress(e.target.value);
    }, []);

    const onMobileNumberChange = useCallback((e: any) => {
        setMobileNumber(e.target.value);
    }, []);

    const onBestTimeToCallYouChange = useCallback((e: any) => {
        setBestTimeToCallYou(e.target.value);
    }, []);

    useEffect(() => {
        if (age > retirementAge) {
            setRetirementAge(age);
        }
    }, [age]);

    useEffect(() => {
        if (selectedPriorities.length >= 2) {
            // Keep only the last 3 to check for overflow, not just 2
            const trimmed = selectedPriorities.slice(-3);

            // Separate exclusive & non-exclusive priorities
            const exclusives = trimmed.filter((p) =>
                EXCLUSIVE_PRIORITIES_GROUP.includes(p)
            );
            const nonExclusives = trimmed.filter(
                (p) => !EXCLUSIVE_PRIORITIES_GROUP.includes(p)
            );

            let next: string[] = [];

            if (exclusives.length > 1) {
                // ⚔️ More than one exclusive → keep the latest exclusive only
                const latestExclusive = exclusives[exclusives.length - 1];
                next = [...nonExclusives.slice(-1), latestExclusive]; // keep latest non-exclusive + latest exclusive
            } else if (exclusives.length === 1) {
                // ⚖️ One exclusive → keep it plus the latest non-exclusive
                const latestExclusive = exclusives[0];
                const latestNonExclusive = nonExclusives[nonExclusives.length - 1];
                if (latestNonExclusive) next = [latestNonExclusive, latestExclusive];
                else next = [latestExclusive];
            } else {
                // &#x2705;&#xFE0F; No exclusives → keep the last 2
                next = trimmed.slice(-2);
            }

            for (let i = 0; i < Math.min(next.length, selectedPriorities.length); i++) {
                if (next[i] !== selectedPriorities[i]) {
                    setSelectedPriorities(next);
                    break;
                }
            }
        }
    }, [selectedPriorities]);

    useEffect(() => {
        const maxEmergencyFund = monthlySalary * 6;
        if (existingEmergencyFund > maxEmergencyFund) {
            setExistingEmergencyFund(maxEmergencyFund);
        }
    }, [monthlySalary]);

    useEffect(() => {
        const maxRetirementMonthlyPension = monthlySalary * MAX_RETIREMENT_MONTHLY_PENSION_CURRENT_SALARY_MULTIPLIER;
        if (targetRetirementMonthlyPension > maxRetirementMonthlyPension) {
            setTargetRetirementMonthlyPension(maxRetirementMonthlyPension);
        }
    }, [monthlySalary]);

    useEffect(() => {
        const retirementYears = AVERAGE_LIFE_SPAN_IN_YEARS - retirementAge;
        const futureMonthlyPension = targetRetirementMonthlyPension * Math.pow((1 + INFLATION_RATE), retirementAge - age);
        const futureAnnualPension = futureMonthlyPension * MONTHS_IN_A_YEAR;

        const totalRetirementFund = futureAnnualPension * ((Math.pow((1 + INFLATION_RATE), retirementYears) - 1) / INFLATION_RATE);

        setFutureRetirementMonthlyPension(futureMonthlyPension);

        let result = updateFBBGoal(financialBuildingBlocks, FBB_KEYS.retirementPlanning, totalRetirementFund);
        result = computeFBBShortfall(result);
        setFinancialBuildingBlocks(result);
    }, [age, retirementAge, targetRetirementMonthlyPension]);

    useEffect(() => {
        if (!hasInsurance) {
            setFinancialBuildingBlocks((prev) => {
                const updated = Object.fromEntries(
                    Object.entries(prev).map(([key, value]) => [
                        key,
                        { ...value, existing: 0, shortfall: value.goal }, // keep others, reset only existing
                    ])
                );
                return updated;
            });
        }
    }, [hasInsurance]);

    const personalInfo: PersonalInfo = {
        firstName,
        lastName,
        gender,
        civilStatus,
        age,
        retirementAge,
        hasInsurance,
        hasPreExistingMedicalCondition,
        preExistingMedicalCondition,
        monthlySalary,
        jobTitle,
        existingEmergencyFund
    };

    const personalInfoCallbacks: PersonalInfoCallbacks = {
        onFirstNameChange,
        onLastNameChange,
        onGenderChange,
        onCivilStatusChange,
        onAgeSliderValueChange,
        onRetirementAgeSliderValueChange,
        onHasInsuranceChange,
        onHasPreExistingMedicalConditionChange,
        onPreExistingMedicalConditionChange,
        onMonthlySalaryValueChange,
        onJobTitleChange,
        onExistingEmergencyFundValueChange
    };

    const prioritiesAndGoalInfo: PrioritiesAndGoalInfo = {
        selectedPriorities,
        financialBuildingBlocks,
        monthlySalary,
        targetRetirementMonthlyPension,
        futureRetirementMonthlyPension,
        childAge,
        currentAnnualTuitionFee,
        investmentWithdrawalYear
    };

    const prioritiesAndGoalInfoCallbacks: PrioritiesAndGoalInfoCallbacks = {
        onPriorityToggle,
        onExistingIncomeProtectionChange,
        onExistingCriticalIllnessBenefitChange,
        onExistingDisabilityIncomeProtectionChange,
        onExistingDreamBuildersChange,
        onExistingEducationPlanningChange,
        onExistingRetirementPlanningChange,
        onGoalDreamBuildersChange,
        onTargetRetirementMonthlyPensionChange,
        onChildAgeSliderChange,
        onCurrentAnnualTuitionFeeChange,
        onInvestmentWithdrawalYearChange
    }

    const contactInfo: ContactInfo = {
        emailAddress,
        mobileNumber,
        bestTimeToCallYou,
    }

    const contactInfoCallbacks: ContactInfoCallbacks = {
        onEmailAddressChange,
        onMobileNumberChange,
        onBestTimeToCallYouChange,
    }

    const freeConsultationSubmitInfoStatus: FreeConsultationSubmitInfoStatus = {
        isSubmissionProcessing,
        isSubmitted,
        submissionError
    }

    const verifyContactInfo: VerifyContactInfo = {
        emailOTP,
        mobileOTP,
        emailStatus: emailVerificationStatus,
        mobileStatus: mobileVerificationStatus,
        errors: verifyContactInfoErrors
    }

    const verifyContactInfoCallbacks: VerifyContactInfoCallbacks = {
        onEmailOTPChange,
        onMobileOTPChange,
        onVerifyEmailClicked,
        onVerifyMobileClicked
    }

    useEffect(() => {
        const storedPersonalInfo = localStorage.getItem(PERSONAL_INFO_STORAGE_KEY);
        if (storedPersonalInfo) {
            const loadedPersonalInfo: PersonalInfo = JSON.parse(storedPersonalInfo);
            setFirstName(loadedPersonalInfo.firstName);
            setLastName(loadedPersonalInfo.lastName);
            setGender(loadedPersonalInfo.gender);
            setCivilStatus(loadedPersonalInfo.civilStatus);
            setAge(loadedPersonalInfo.age);
            setRetirementAge(loadedPersonalInfo.retirementAge);
            setHasInsurance(loadedPersonalInfo.hasInsurance);
            setHasPreExistingMedicalCondition(loadedPersonalInfo.hasPreExistingMedicalCondition);
            setPreExistingMedicalCondition(loadedPersonalInfo.preExistingMedicalCondition);
            setMonthlySalary(loadedPersonalInfo.monthlySalary);
            setJobTitle(loadedPersonalInfo.jobTitle);
            setExistingEmergencyFund(loadedPersonalInfo.existingEmergencyFund);
        }
        const storedPrioritiesAndGoalInfo = localStorage.getItem(PRIORITIES_AND_GOAL_INFO_STORAGE_KEY);
        if (storedPrioritiesAndGoalInfo) {
            const loadedPrioritiesAndGoalInfo: PrioritiesAndGoalInfo = JSON.parse(storedPrioritiesAndGoalInfo);
            setSelectedPriorities(loadedPrioritiesAndGoalInfo.selectedPriorities);
            setFinancialBuildingBlocks(loadedPrioritiesAndGoalInfo.financialBuildingBlocks);
            setMonthlySalary(loadedPrioritiesAndGoalInfo.monthlySalary);
            setTargetRetirementMonthlyPension(loadedPrioritiesAndGoalInfo.targetRetirementMonthlyPension);
            setChildAge(loadedPrioritiesAndGoalInfo.childAge);
            setCurrentAnnualTuitionFee(loadedPrioritiesAndGoalInfo.currentAnnualTuitionFee);
            setInvestmentWithdrawalYear(loadedPrioritiesAndGoalInfo.investmentWithdrawalYear);
        }
        const storedContactInfo = localStorage.getItem(CONTACT_INFO_STORAGE_KEY);
        if (storedContactInfo) {
            const loadedContactInfo: ContactInfo = JSON.parse(storedContactInfo);
            setEmailAddress(loadedContactInfo.emailAddress);
            setMobileNumber(loadedContactInfo.mobileNumber);
            setBestTimeToCallYou(loadedContactInfo.bestTimeToCallYou);
        }
    }, []);


    useAutoSave(LEAD_ID_STORAGE_KEY, leadId, "saveData");
    useAutoSave(PERSONAL_INFO_STORAGE_KEY, personalInfo, "saveData");
    useAutoSave(PRIORITIES_AND_GOAL_INFO_STORAGE_KEY, prioritiesAndGoalInfo, "saveData");
    useAutoSave(CONTACT_INFO_STORAGE_KEY, contactInfo, "saveData");

    const submitCallback = useCallback(async (productOfferKey?: string) => {
        setIsSubmissionProcessing(true);
        setSubmissionError(null);

        const formData: FreeConsultationSubmitInfo = {
            firstName: personalInfo.firstName,
            lastName: personalInfo.lastName,
            gender: personalInfo.gender,
            civilStatus: personalInfo.civilStatus,
            age: Number(personalInfo.age),
            retirementAge: Number(personalInfo.retirementAge),
            hasInsurance: personalInfo.hasInsurance,
            hasPreExistingMedicalCondition: personalInfo.hasPreExistingMedicalCondition,
            preExistingMedicalCondition: personalInfo.preExistingMedicalCondition,
            monthlySalary: Number(personalInfo.monthlySalary),
            jobTitle: personalInfo.jobTitle,
            existingEmergencyFund: Number(personalInfo.existingEmergencyFund),
            prioritiesAndGoal: JSON.stringify(prioritiesAndGoalInfo),
            email: contactInfo.emailAddress,
            contactNumber: contactInfo.mobileNumber,
            bestCallTime: contactInfo.bestTimeToCallYou,
            productOfferKey: productOfferKey
        }

        initializeEventTracking(formData.email, formData.contactNumber);

        try {
            console.log(process.env.NEXT_PUBLIC_API_URL);
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/leads`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            if (!res.ok) {
                const message = await res.text();
                throw new Error(message || `Consultation request failed: ${res.status}`);
            }

            const data = await res.json();
            setLeadId(data.leadId);
            setIsSubmitted(true);

            trackEvent("Lead", {
                'lead_type': 'Free Consultation',
                'gender': personalInfo.gender,
                'ageRange': personalInfo.age < 30 ? "<30" : personalInfo.age < 50 ? "30-49" : "50+",
                'civilStatus': personalInfo.civilStatus,
                'retirementAgeRange': personalInfo.retirementAge < 60 ? "<60" : "60+",
                'hasInsurance': personalInfo.hasInsurance,
                'preExistingCondition': personalInfo.hasPreExistingMedicalCondition ? "Yes" : "No",
                'monthlySalaryRange': getSalaryRange(personalInfo.monthlySalary),
                'emergencyFundRange': getFundRange(personalInfo.existingEmergencyFund),
            });

            return data;
        } catch (err) {
            const errorObj = err as Error;
            trackCustomEvent("LeadError", {
                'error': errorObj.message,
                'gender': personalInfo.gender,
                'ageRange': personalInfo.age < 30 ? "<30" : personalInfo.age < 50 ? "30-49" : "50+",
                'civilStatus': personalInfo.civilStatus,
                'retirementAgeRange': personalInfo.retirementAge < 60 ? "<60" : "60+",
                'hasInsurance': personalInfo.hasInsurance,
                'preExistingCondition': personalInfo.hasPreExistingMedicalCondition ? "Yes" : "No",
                'monthlySalaryRange': getSalaryRange(personalInfo.monthlySalary),
                'emergencyFundRange': getFundRange(personalInfo.existingEmergencyFund),
            });
            setSubmissionError(errorObj);
            throw errorObj;
        } finally {
            setIsSubmissionProcessing(false);
        }
    }, [personalInfo, prioritiesAndGoalInfo, contactInfo]);

    return (
        <PersonalInfoContext.Provider value={personalInfo}>
            <PersonalInfoCallbacksContext.Provider value={personalInfoCallbacks}>
                <PrioritiesAndGoalInfoContext.Provider value={prioritiesAndGoalInfo}>
                    <PrioritiesAndGoalInfoCallbacksContext.Provider value={prioritiesAndGoalInfoCallbacks}>
                        <ContactInfoContext.Provider value={contactInfo}>
                            <ContactInfoCallbacksContext.Provider value={contactInfoCallbacks}>
                                <FreeConsultationSubmitInfoStatusContext.Provider value={freeConsultationSubmitInfoStatus}>
                                    <FreeConsultationSubmitCallbackContext.Provider value={submitCallback}>
                                        <VerifyContactInfoContext.Provider value={verifyContactInfo}>
                                            <VerifyContactInfoCallbacksContext.Provider value={verifyContactInfoCallbacks}>
                                                {children}
                                            </VerifyContactInfoCallbacksContext.Provider>
                                        </VerifyContactInfoContext.Provider>
                                    </FreeConsultationSubmitCallbackContext.Provider>
                                </FreeConsultationSubmitInfoStatusContext.Provider>
                            </ContactInfoCallbacksContext.Provider>
                        </ContactInfoContext.Provider>
                    </PrioritiesAndGoalInfoCallbacksContext.Provider>
                </PrioritiesAndGoalInfoContext.Provider>
            </PersonalInfoCallbacksContext.Provider>
        </PersonalInfoContext.Provider>
    );
}
