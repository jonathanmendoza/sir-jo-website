"use client";

import HeadlineComponent from "./HeadlineComponent";
import SpanEmoji from "./SpanEmoji";
import { useCallback, useEffect, useState } from "react";
import { ALLOWED_ANNUAL_TUITION_FEE, ALLOWED_CRITICAL_ILLNESS_BENEFIT, ALLOWED_DISABILITY_INCOME_PROTECTION, ALLOWED_DREAM_BUILDERS, ALLOWED_EDUCATION_PLANNING, ALLOWED_INCOME_PROTECTION, ALLOWED_RETIREMENT_PLANNING, AVERAGE_LIFE_SPAN_IN_YEARS, CHILD_COLLEGE_ENTRY_AGE, FBB_KEYS, INFLATION_RATE, MAX_RETIREMENT_MONTHLY_PENSION_CURRENT_SALARY_MULTIPLIER, MINIMUM_INVESTMENT_WITHDRAWAL_YEAR, MONTHS_IN_A_YEAR, OTP_LENGTH, PESO_FORMAT, PRIORITIES } from "@/constants";
import { useContactInfo, useContactInfoCallbacks, useFreeConsultationSubmitCallback, useFreeConsultationSubmitInfoStatus, usePersonalInfo, usePersonalInfoCallbacks, usePrioritiesAndGoalInfo, usePrioritiesAndGoalInfoCallbacks, useVerifyContactInfoCallbacks, useVerifyContactInfo } from "@/contexts";
import { trackCustomEvent } from "@/utils/event_tracking";
import { isValidPhilippineNumber } from "@/utils";
import Link from "next/link";

const SHOW_RESULTS = false;

function FreeConsultationForm() {
    const {
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
        existingEmergencyFund,
        jobTitle,
    } = usePersonalInfo();

    const {
        selectedPriorities,
        financialBuildingBlocks,
        targetRetirementMonthlyPension,
        futureRetirementMonthlyPension,
        childAge,
        currentAnnualTuitionFee,
        investmentWithdrawalYear,
    } = usePrioritiesAndGoalInfo();

    const {
        emailAddress,
        mobileNumber,
        bestTimeToCallYou,
    } = useContactInfo();

    const {
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
        onExistingEmergencyFundValueChange,
    } = usePersonalInfoCallbacks();

    const {
        onPriorityToggle,
        onExistingCriticalIllnessBenefitChange,
        onExistingDisabilityIncomeProtectionChange,
        onExistingIncomeProtectionChange,
        onTargetRetirementMonthlyPensionChange,
        onExistingRetirementPlanningChange,
        onCurrentAnnualTuitionFeeChange,
        onExistingEducationPlanningChange,
        onGoalDreamBuildersChange,
        onExistingDreamBuildersChange,
        onChildAgeSliderChange,
        onInvestmentWithdrawalYearChange,
    } = usePrioritiesAndGoalInfoCallbacks();

    const {
        onEmailAddressChange,
        onMobileNumberChange,
        onBestTimeToCallYouChange,
    } = useContactInfoCallbacks();

    const onSubmitButtonClicked = useFreeConsultationSubmitCallback();

    const {
        emailOTP,
        mobileOTP,
        emailStatus,
        mobileStatus,
        errors: verifyContactInfoErrors
    } = useVerifyContactInfo();

    const {
        onEmailOTPChange,
        onMobileOTPChange,
        onVerifyEmailClicked,
        onVerifyMobileClicked,
    } = useVerifyContactInfoCallbacks();

    const [isPersonalInfoCompleted, setIsPersonalInfoCompleted] = useState(false);
    const personalInfoErrorsDepsList: React.DependencyList = [firstName, lastName, gender, civilStatus, age, retirementAge, hasInsurance, hasPreExistingMedicalCondition, preExistingMedicalCondition,];
    const [personalInfoErrors, setPersonalInfoErrors] = useState<{
        firstName?: string,
        lastName?: string,
        gender?: string,
        civilStatus?: string,
        preExistingMedicalCondition?: string,
    }>({});
    const validatePersonalInfo = useCallback(() => {
        const newErrors: typeof personalInfoErrors = {};
        if (!firstName.trim()) newErrors.firstName = "*Required";
        if (!lastName.trim()) newErrors.lastName = "*Required";
        if (!gender) newErrors.gender = "*Select gender";
        if (!civilStatus) newErrors.civilStatus = "*Select civil status";
        if (hasPreExistingMedicalCondition) {
            if (!preExistingMedicalCondition || !preExistingMedicalCondition.trim()) {
                newErrors.preExistingMedicalCondition = "Invalid pre-existing medical condition";
            }
        }
        const prevIsCompleted = Object.values(personalInfoErrors).every((v) => !v);
        const newIsCompleted = Object.values(newErrors).every((v) => !v);
        if (!prevIsCompleted && newIsCompleted) {
            trackCustomEvent("PotentialLeadProgress-Step-1-Completed");
        }
        setIsPersonalInfoCompleted(newIsCompleted);
        setPersonalInfoErrors(newErrors);
    }, [...personalInfoErrorsDepsList, trackCustomEvent]);
    useEffect(() => validatePersonalInfo(), [...personalInfoErrorsDepsList, validatePersonalInfo]);

    const [isPrioritiesInfoCompleted, setIsPrioritiesInfoCompleted] = useState(false);
    const prioritiesErrorsDepsList: React.DependencyList = [selectedPriorities, hasInsurance, currentAnnualTuitionFee, financialBuildingBlocks[FBB_KEYS.dreamBuilders].goal, targetRetirementMonthlyPension];
    const [prioritiesInfoErrors, setPrioritiesErrors] = useState<{
        selectedPriorities?: string,
        targetRetirementMonthlyPension?: string,
        currentAnnualTuitionFee?: string,
        targetDreamBuildersFund?: string,
    }>({});
    const validatePrioritiesInfo = useCallback(() => {
        const newErrors: typeof prioritiesInfoErrors = {};
        if (selectedPriorities.length < 2) {
            newErrors.selectedPriorities = "(Select two that matter most to you)";
        }
        if (selectedPriorities.includes('retirement_planning')) {
            if (targetRetirementMonthlyPension <= 0) {
                newErrors.targetRetirementMonthlyPension = "*Please set your target monthly pension without considering the inflation for now";
            }
        }
        if (selectedPriorities.includes('education_planning')) {
            if (currentAnnualTuitionFee <= 0) {
                newErrors.currentAnnualTuitionFee = "*Please set your target college's current annual tuition fee without considering the inflation for now";
            }
        }
        if (selectedPriorities.includes('dream_builders')) {
            if (financialBuildingBlocks[FBB_KEYS.dreamBuilders].goal <= 0) {
                newErrors.targetDreamBuildersFund = "*Please set your target dream builders";
            }
        }
        const prevIsCompleted = Object.values(prioritiesInfoErrors).every((v) => !v);
        const newIsCompleted = Object.values(newErrors).every((v) => !v);
        if (!prevIsCompleted && newIsCompleted) {
            trackCustomEvent("PotentialLeadProgress-Step-3-Completed");
        }
        setIsPrioritiesInfoCompleted(newIsCompleted);
        setPrioritiesErrors(newErrors);
    }, [...prioritiesErrorsDepsList, trackCustomEvent]);
    useEffect(() => validatePrioritiesInfo(), [...prioritiesErrorsDepsList, validatePrioritiesInfo]);

    const [isIncomeDetailsInfoCompleted, setIsIncomeDetailsInfoCompleted] = useState(false);
    const incomeDetailsErrorsDepsList: React.DependencyList = [monthlySalary];
    const [incomeDetailsInfoErrors, setIncomeDetailsErrors] = useState<{
        monthlySalary?: string,
    }>({});
    const validateIncomeDetailsInfo = useCallback(() => {
        const newErrors: typeof incomeDetailsInfoErrors = {};
        if (monthlySalary <= 0) {
            newErrors.monthlySalary = "*Please set your estimated monthly income";
        } else if (monthlySalary < 20000) {
            newErrors.monthlySalary = "*An estimated monthly income of at least ₱20,000 is recommended before getting insurance.";
        }
        const prevIsCompleted = Object.values(incomeDetailsInfoErrors).every((v) => !v);
        const newIsCompleted = Object.values(newErrors).every((v) => !v);
        if (!prevIsCompleted && newIsCompleted) {
            trackCustomEvent("PotentialLeadProgress-Step-2-Completed");
        }
        setIsIncomeDetailsInfoCompleted(newIsCompleted);
        setIncomeDetailsErrors(newErrors);
    }, [...incomeDetailsErrorsDepsList, trackCustomEvent]);
    useEffect(() => validateIncomeDetailsInfo(), [...incomeDetailsErrorsDepsList, validateIncomeDetailsInfo]);

    const [isSignUpInfoCompleted, setIsSignUpInfoCompleted] = useState(false);
    const signUpInfoErrorsDepsList: React.DependencyList = [jobTitle, emailAddress, mobileNumber, bestTimeToCallYou];
    const [signUpInfoErrors, setSignUpInfoErrors] = useState<{
        emailAddress?: string,
        mobileNumber?: string,
        bestTimeToCallYou?: string,
    }>({});
    const validateSignUpInfo = useCallback(() => {
        const newErrors: typeof signUpInfoErrors = {};
        if (!emailAddress.trim().includes("@")) newErrors.emailAddress = "*Invalid email address";
        if (!isValidPhilippineNumber(mobileNumber)) newErrors.mobileNumber = "*Invalid PH mobile number"
        if (!bestTimeToCallYou.trim()) newErrors.bestTimeToCallYou = "*Please let us know when is the best time";
        const prevIsCompleted = Object.values(signUpInfoErrors).every((v) => !v);
        const newIsCompleted = Object.values(newErrors).every((v) => !v);
        if (!prevIsCompleted && newIsCompleted) {
            trackCustomEvent("PotentialLeadProgress-Step-4-Completed");
        }
        setIsSignUpInfoCompleted(newIsCompleted);
        setSignUpInfoErrors(newErrors);
    }, [...signUpInfoErrorsDepsList, trackCustomEvent]);
    useEffect(() => validateSignUpInfo(), [...signUpInfoErrorsDepsList, validateSignUpInfo]);

    const shouldShowSignUpForm = isPersonalInfoCompleted && isPrioritiesInfoCompleted && isIncomeDetailsInfoCompleted;

    const { isSubmissionProcessing, isSubmitted, submissionError } = useFreeConsultationSubmitInfoStatus();

    const showEmailAndMobileVerification = emailStatus !== 'verified' || mobileStatus !== 'verified';

    const [productOfferKey, setProductOfferKey] = useState<string|undefined>(undefined);
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const paramValue = params.get("product_offer_key");
        if (paramValue) {
            setProductOfferKey(paramValue);
        }
    }, [])

    const handleSubmitButtonClick = useCallback(() => {
        onSubmitButtonClicked(productOfferKey);
    }, [productOfferKey, onSubmitButtonClicked]);

    return (
        <>
            <p style={{ textIndent: '0' }} className="italic"><SpanEmoji value="💬" /> Just answer a few questions — it only takes 2 minutes!</p>
            <div>
                <p style={{ textIndent: '0' }} className="font-bold">Step 1: Personal Info</p>
                <ul className="flex flex-col gap-1">
                    <li className="grid grid-cols-14 grid-rows-1 gap-1">
                        <label style={{ textIndent: '1em' }} htmlFor="first_name" className="col-start-1 col-span-4"><SpanEmoji value="👤" /> Name:</label>
                        <div className="col-span-5 flex flex-col">
                            <input type="text" id="first_name" name="full_name" className="w-full" placeholder="First Name" value={firstName} maxLength={128} onChange={onFirstNameChange} readOnly={isSubmitted} />
                            {personalInfoErrors.firstName && <p className="error">{personalInfoErrors.firstName}</p>}
                        </div>
                        <div className="col-span-5 flex flex-col">
                            <input type="text" id="last_name" name="full_name" className="w-full" placeholder="Last Name" value={lastName} maxLength={128} onChange={onLastNameChange} readOnly={isSubmitted} />
                            {personalInfoErrors.lastName && <p className="error">{personalInfoErrors.lastName}</p>}
                        </div>
                    </li>
                    <li className="flex flex-col gap-0">
                        <div className="flex flex-wrap gap-2">
                            <p><SpanEmoji value="🚻" /> Gender:</p>
                            <div className="flex flex-row gap-2">
                                <div className="flex flex-row gap-2 items-center">
                                    <input type="radio" id="male" name="gender" value="Male" onChange={() => onGenderChange('Male')} checked={gender === 'Male'} disabled={isSubmitted} />
                                    <label htmlFor="male">Male</label>
                                </div>
                                <div className="flex flex-row gap-2 items-center">
                                    <input type="radio" id="female" name="gender" value="Female" onChange={() => onGenderChange('Female')} checked={gender === 'Female'} disabled={isSubmitted} />
                                    <label htmlFor="female">Female</label>
                                </div>
                            </div>
                        </div>
                        {personalInfoErrors.gender && <div className="w-full flex flex-row justify-center"><p className="error">{personalInfoErrors.gender}</p></div>}
                    </li>
                    <li className="flex flex-col gap-0">
                        <p><SpanEmoji value="💍" /> Civil Status:</p>
                        <div className="flex flex-wrap gap-2 justify-center">
                            <div className="flex flex-row gap-2 items-center">
                                <input type="radio" id="single" name="civil_status" value="Single" onChange={() => onCivilStatusChange('Single')} checked={civilStatus === 'Single'} disabled={isSubmitted} />
                                <label htmlFor="single">Single</label>
                            </div>
                            <div className="flex flex-row gap-2 items-center">
                                <input type="radio" id="married" name="civil_status" value="Married" onChange={() => onCivilStatusChange('Married')} checked={civilStatus === 'Married'} disabled={isSubmitted} />
                                <label htmlFor="married">Married</label>
                            </div>
                            <div className="flex flex-row gap-2 items-center">
                                <input type="radio" id="others" name="civil_status" value="Others" onChange={() => onCivilStatusChange('Others')} checked={civilStatus === 'Others'} disabled={isSubmitted} />
                                <label htmlFor="others">Others</label>
                            </div>
                        </div>
                        {personalInfoErrors.civilStatus && <div className="w-full flex flex-row justify-center"><p className="error">{personalInfoErrors.civilStatus}</p></div>}
                    </li>
                    <li className="flex flex-col gap-0">
                        <label htmlFor="age" style={{ textIndent: '1em' }}><SpanEmoji value="&#x1F382;" /> Current Age: <span id="ageValue" className="font-bold">{age}</span></label>
                        <div className="flex flex-col justify-start items-stretch ml-10">
                            <input type="range" id="age" name="age" min="25" max="75" value={age} step="1" onChange={onAgeSliderValueChange} disabled={isSubmitted} />
                        </div>
                    </li>
                    <li className="flex flex-col gap-0">
                        <p style={{ textAlign: 'left' }}><SpanEmoji value="&#x2764;&#xFE0F;" /> Do you have any pre-existing medical condition?</p>
                        <div className="flex flex-wrap gap-2 justify-center">
                            <div className="flex flex-row gap-2 items-center">
                                <input type="radio" id="no_pre_existing_medical_condition" name="has_pre_existing_medical_condition" value="None" onChange={() => onHasPreExistingMedicalConditionChange(false)} checked={hasPreExistingMedicalCondition === false} disabled={isSubmitted} />
                                <label htmlFor="no_pre_existing_medical_condition">None</label>
                            </div>
                            <div className="flex flex-row gap-2 items-center">
                                <input type="radio" id="yes_pre_existing_medical_condition" name="has_pre_existing_medical_condition" value="Yes" onChange={() => onHasPreExistingMedicalConditionChange(true)} checked={hasPreExistingMedicalCondition === true} disabled={isSubmitted} />
                                <label htmlFor="yes_pre_existing_medical_condition">Yes — please specify:</label>
                            </div>
                        </div>
                        {hasPreExistingMedicalCondition && <div className="w-full flex flex-row justify-end items-center">
                            <input type="text" id="pre_existing_medical_condition" name="pre_existing_medical_condition" className="w-40" placeholder="Optional" value={preExistingMedicalCondition ?? ""} maxLength={128} onChange={(e: any) => onPreExistingMedicalConditionChange(e.target.value)} readOnly={isSubmitted} />
                        </div>}
                    </li>
                    <li className="flex flex-wrap gap-2">
                        <p style={{ textAlign: 'left' }}><SpanEmoji value="&#x1F6E1;&#xFE0F;" /> Do you already have an existing insurance policy?</p>
                        <div className="w-full flex flex-row gap-2 justify-center">
                            <div className="flex flex-row gap-2 items-center">
                                <input type="radio" id="yes_i_have_insurance" name="has_insurance" value="Yes" onChange={() => onHasInsuranceChange(true)} checked={hasInsurance} disabled={isSubmitted} />
                                <label htmlFor="yes_i_have_insurance">Yes, I already have insurance</label>
                            </div>
                            <div className="flex flex-row gap-2 items-center">
                                <input type="radio" id="no_i_dont_have_insurance_yet" name="has_insurance" value="No" onChange={() => onHasInsuranceChange(false)} checked={!hasInsurance} disabled={isSubmitted} />
                                <label htmlFor="no_i_dont_have_insurance_yet">No, I don't have an insurance yet</label>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>

            {isPersonalInfoCompleted && <div className="w-full">
                <p style={{ textIndent: '0' }} className="font-bold">Step 2: Income Details</p>
                <ul className="flex flex-col gap-1">
                    <li className="w-full flex flex-col gap-0">
                        <label style={{ textIndent: '1em' }} htmlFor="monthly_salary"><SpanEmoji value="💵" /> Monthly Income: <span id="monthlySalaryValue" className="font-bold">{PESO_FORMAT.format(monthlySalary)}</span></label>
                        <div className="flex flex-col justify-start items-stretch ml-10">
                            <input type="range" id="monthly_salary" name="monthly_salary" min={0} max={300000} value={monthlySalary} step={5000} onChange={onMonthlySalaryValueChange} disabled={isSubmitted} />
                        </div>
                        {incomeDetailsInfoErrors.monthlySalary && <p style={{ textAlign: 'center' }} className="error w-full">{incomeDetailsInfoErrors.monthlySalary}</p>}
                    </li>
                    <li className="w-full flex flex-col gap-0">
                        <label style={{ textIndent: '1em' }} htmlFor="existing_emergency_fund"><SpanEmoji value="&#x1f416;" /> Existing Emergency Fund (₱): <span id="existingEmergencyFundValue" className="font-bold">{PESO_FORMAT.format(existingEmergencyFund)}</span></label>
                        <div className="flex flex-col justify-start items-stretch ml-10">
                            <input type="range" id="existing_emergency_fund" name="existing_emergency_fund" min={0} max={monthlySalary * 6} value={existingEmergencyFund} step={5000} onChange={onExistingEmergencyFundValueChange} disabled={isSubmitted} />
                        </div>
                    </li>
                </ul>
            </div>}

            {isPersonalInfoCompleted && isIncomeDetailsInfoCompleted && <div>
                <p style={{ textIndent: '0' }} className="font-bold">Step 3: Choose Your Top 2 Priorities</p>
                {prioritiesInfoErrors.selectedPriorities && <p className="error">{prioritiesInfoErrors.selectedPriorities}</p>}
                <ul className="flex flex-col gap-1">
                    {Object.entries(PRIORITIES).map(([key, priority]) => (
                        <li key={key} className="flex flex-col">
                            <label htmlFor={key}>
                                <input
                                    type="checkbox"
                                    id={key}
                                    name="top_2_priorities"
                                    className="mr-2"
                                    checked={selectedPriorities.includes(key)}
                                    onChange={() => onPriorityToggle(key)}
                                    disabled={isSubmitted}
                                />
                                <span>
                                    <SpanEmoji value={priority.emoji} /> {priority.description}
                                </span>
                            </label>
                            {selectedPriorities.includes('cannot_work_to_60') && hasInsurance && key == 'cannot_work_to_60' && <div className="flex flex-col">
                                <label htmlFor="existing_critical_illness_benefit_value" className="text-xs italic">Existing Critical Illness Benefit: <span className="font-bold">{PESO_FORMAT.format(financialBuildingBlocks[FBB_KEYS.criticalIllnessBenefit].existing ?? 0)}</span></label>
                                <input type="range" id="existing_critical_illness_benefit_value" name="existing_critical_illness_benefit" min={0} max={Math.min(ALLOWED_CRITICAL_ILLNESS_BENEFIT.max, financialBuildingBlocks[FBB_KEYS.criticalIllnessBenefit].goal)} value={financialBuildingBlocks[FBB_KEYS.criticalIllnessBenefit].existing ?? 0} step={250000} onChange={onExistingCriticalIllnessBenefitChange} disabled={isSubmitted} />
                                <label htmlFor="existing_disability_income_protection_value" className="text-xs italic">Existing Disability Income Protection: <span className="font-bold">{PESO_FORMAT.format(financialBuildingBlocks[FBB_KEYS.disabilityIncomeProtection].existing ?? 0)}</span></label>
                                <input type="range" id="existing_disability_income_protection_value" name="existing_disability_income_protection" min={0} max={Math.min(ALLOWED_DISABILITY_INCOME_PROTECTION.max, financialBuildingBlocks[FBB_KEYS.disabilityIncomeProtection].goal)} value={financialBuildingBlocks[FBB_KEYS.disabilityIncomeProtection].existing ?? 0} step={250000} onChange={onExistingDisabilityIncomeProtectionChange} disabled={isSubmitted} />
                            </div>}
                            {selectedPriorities.includes('cannot_reach_60') && hasInsurance && key == 'cannot_reach_60' && <div className="flex flex-col">
                                <label htmlFor="existing_income_protection_value" className="text-xs italic">Existing Death Benefit: <span className="font-bold">{PESO_FORMAT.format(financialBuildingBlocks[FBB_KEYS.incomeProtection].existing ?? 0)}</span></label>
                                <input type="range" id="existing_income_protection_value" name="existing_income_protection_benefit" min={0} max={Math.min(ALLOWED_INCOME_PROTECTION.max, financialBuildingBlocks[FBB_KEYS.incomeProtection].goal)} value={financialBuildingBlocks[FBB_KEYS.incomeProtection].existing ?? 0} step={250000} onChange={onExistingIncomeProtectionChange} disabled={isSubmitted} />
                            </div>}
                            {selectedPriorities.includes('retirement_planning') && key == 'retirement_planning' && <div className="flex flex-col">
                                <label htmlFor="retirement_age" className="text-xs italic">Target Retirement Age: <span id="retirementAgeValue" className="font-bold">{`${retirementAge} year${retirementAge > 1 ? 's' : ''} old`}</span></label>
                                <input type="range" id="retirement_age" name="retirement_age" min={age} max="75" value={retirementAge} step="1" onChange={onRetirementAgeSliderValueChange} disabled={isSubmitted} />
                                <label htmlFor="target_retirement_monthly_pension_value" className="text-xs italic">Target Monthly Pension: <span className="font-bold">{PESO_FORMAT.format(targetRetirementMonthlyPension)}</span></label>
                                <input type="range" id="target_retirement_monthly_pension_value" name="target_retirement_monthly_pension" min={0} max={monthlySalary * MAX_RETIREMENT_MONTHLY_PENSION_CURRENT_SALARY_MULTIPLIER} value={targetRetirementMonthlyPension} step={10000} onChange={onTargetRetirementMonthlyPensionChange} disabled={isSubmitted} />
                                {prioritiesInfoErrors.targetRetirementMonthlyPension && <p style={{ textAlign: 'center' }} className="error w-full">{prioritiesInfoErrors.targetRetirementMonthlyPension}</p>}
                                <label htmlFor="existing_retirement_planning_value" className="text-xs italic">Existing Retirement Fund: <span className="font-bold">{PESO_FORMAT.format(financialBuildingBlocks[FBB_KEYS.retirementPlanning].existing ?? 0)}</span></label>
                                <input type="range" id="existing_retirement_planning_value" name="existing_retirement_planning" min={0} max={Math.min(ALLOWED_RETIREMENT_PLANNING.max, financialBuildingBlocks[FBB_KEYS.incomeProtection].goal)} value={financialBuildingBlocks[FBB_KEYS.retirementPlanning].existing ?? 0} step={100000} onChange={onExistingRetirementPlanningChange} disabled={isSubmitted} />
                            </div>}
                            {selectedPriorities.includes('education_planning') && key == 'education_planning' && <div className="flex flex-col">
                                <label htmlFor="education_planning_child_age_value" className="text-xs italic">Your Child's Age: <span id="educationPlanningChildAgeValue" className="font-bold">{`${childAge} year${childAge > 1 ? 's' : ''} old`}</span></label>
                                <input type="range" id="education_planning_child_age_value" name="education_planning_child_age" min="0" max="8" value={childAge} step="1" onChange={onChildAgeSliderChange} disabled={isSubmitted} />
                                <label htmlFor="current_annual_tuition_fee_value" className="text-xs italic">Current Annual Tuition Fee: <span className="font-bold">{PESO_FORMAT.format(currentAnnualTuitionFee)}</span></label>
                                <input type="range" id="current_annual_tuition_fee_value" name="current_annual_tuition_fee" min={0} max={ALLOWED_ANNUAL_TUITION_FEE.max} value={currentAnnualTuitionFee} step={50000} onChange={onCurrentAnnualTuitionFeeChange} disabled={isSubmitted} />
                                {prioritiesInfoErrors.currentAnnualTuitionFee && <p style={{ textAlign: 'center' }} className="error w-full">{prioritiesInfoErrors.currentAnnualTuitionFee}</p>}
                                <label htmlFor="existing_education_planning_value" className="text-xs italic">Existing Education Fund: <span className="font-bold">{PESO_FORMAT.format(financialBuildingBlocks[FBB_KEYS.educationPlanning].existing ?? 0)}</span></label>
                                <input type="range" id="existing_education_planning_value" name="existing_education_planning" min={0} max={Math.min(ALLOWED_EDUCATION_PLANNING.max, financialBuildingBlocks[FBB_KEYS.incomeProtection].goal)} value={financialBuildingBlocks[FBB_KEYS.educationPlanning].existing ?? 0} step={100000} onChange={onExistingEducationPlanningChange} disabled={isSubmitted} />
                            </div>}
                            {selectedPriorities.includes('dream_builders') && key == 'dream_builders' && <div className="flex flex-col">
                                <label htmlFor="target_withdrawal_year" className="text-xs italic">Target Withdrawal Year: <span id="targetWithdrawalYearValue" className="font-bold">{`${investmentWithdrawalYear} years from now`}</span></label>
                                <input type="range" id="target_withdrawal_year" name="target_withdrawal_year_value" min={MINIMUM_INVESTMENT_WITHDRAWAL_YEAR} max={AVERAGE_LIFE_SPAN_IN_YEARS - age} value={investmentWithdrawalYear} step="1" onChange={onInvestmentWithdrawalYearChange} disabled={isSubmitted} />
                                <label htmlFor="goal_dream_builders_value" className="text-xs italic">Target Savings/Investment: <span className="font-bold">{PESO_FORMAT.format(financialBuildingBlocks[FBB_KEYS.dreamBuilders].goal ?? 0)}</span></label>
                                <input type="range" id="goal_dream_builders_value" name="goal_dream_builders" min={0} max={Math.max(ALLOWED_DREAM_BUILDERS.max, financialBuildingBlocks[FBB_KEYS.incomeProtection].goal)} value={financialBuildingBlocks[FBB_KEYS.dreamBuilders].goal ?? 0} step={500000} onChange={onGoalDreamBuildersChange} disabled={isSubmitted} />
                                {prioritiesInfoErrors.targetDreamBuildersFund && <p style={{ textAlign: 'center' }} className="error w-full">{prioritiesInfoErrors.targetDreamBuildersFund}</p>}
                                <label htmlFor="existing_dream_builders_value" className="text-xs italic">Existing Savings/Investment: <span className="font-bold">{PESO_FORMAT.format(financialBuildingBlocks[FBB_KEYS.dreamBuilders].existing ?? 0)}</span></label>
                                <input type="range" id="existing_dream_builders_value" name="existing_dream_builders" min={0} max={Math.max(ALLOWED_DREAM_BUILDERS.max, financialBuildingBlocks[FBB_KEYS.incomeProtection].goal)} value={financialBuildingBlocks[FBB_KEYS.dreamBuilders].existing ?? 0} step={500000} onChange={onExistingDreamBuildersChange} disabled={isSubmitted} />
                            </div>}
                        </li>
                    ))}
                </ul>
            </div>}

            {shouldShowSignUpForm && <div>
                <p style={{ textIndent: '0', textAlign: 'left' }} className="font-bold"><SpanEmoji value="🧾" />{` Step 4: Sign-Up for a Free Consultation`}</p>
                <ul className="flex flex-col gap-1">
                    <li className="grid grid-cols-10 grid-rows-1 gap-1">
                        <label style={{ textIndent: '1em' }} className="col-start-1 col-span-4" htmlFor="job_title"><SpanEmoji value="💼" /> Job Title:</label>
                        <div className="col-start-6 col-span-6 flex flex-col justify-start items-stretch">
                            <input type="text" id="job_title" name="job_title" placeholder="Optional" value={jobTitle} maxLength={128} onChange={onJobTitleChange} readOnly={isSubmitted} />
                        </div>
                    </li>
                    <li className="grid grid-cols-10 grid-rows-1 gap-1">
                        <label htmlFor="email_address" style={{ textIndent: '1em', textAlign: 'left', textWrap: 'nowrap' }} className="col-start-1 col-span-4"><SpanEmoji value="📧" /> Email Address:</label>
                        <div className="col-start-6 col-span-6 flex flex-col justify-start items-stretch">
                            <input type="email" id="email_address" name="email_address" autoComplete="email" placeholder="Required" value={emailAddress} maxLength={64} onChange={onEmailAddressChange} readOnly={isSubmitted} />
                            {signUpInfoErrors.emailAddress && <p className="error">{signUpInfoErrors.emailAddress}</p>}
                        </div>
                    </li>
                    <li className="grid grid-cols-10 grid-rows-1 gap-1">
                        <label htmlFor="mobile_number" style={{ textIndent: '1em', textAlign: 'left', textWrap: 'nowrap' }} className="col-start-1 col-span-4"><SpanEmoji value="📞" /> Mobile Number:</label>
                        <div className="col-start-6 col-span-6 flex flex-col justify-start items-stretch">
                            <input type="tel" id="mobile_number" name="mobile_number" autoComplete="tel" placeholder="Required" value={mobileNumber} maxLength={13} onChange={onMobileNumberChange} readOnly={isSubmitted} />
                            {signUpInfoErrors.mobileNumber && <p className="error">{signUpInfoErrors.mobileNumber}</p>}
                        </div>
                    </li>
                    <li className="flex flex-col gap-2">
                        <label style={{ textIndent: '1em' }} htmlFor="first_name"><SpanEmoji value="⏰" /> Best Time to Call You <i>(e.g., Morning, Lunch Break, Evening)</i>:</label>
                        <input type="text" id="best_time_to_call_you" name="best_time_to_call_you" className="flex-1" placeholder="Required" value={bestTimeToCallYou} maxLength={128} onChange={onBestTimeToCallYouChange} readOnly={isSubmitted} />
                        {signUpInfoErrors.bestTimeToCallYou && <p className="error">{signUpInfoErrors.bestTimeToCallYou}</p>}
                    </li>
                </ul>
            </div>}

            <p className="italic"><SpanEmoji value="🧠" /> We’ll calculate your estimated coverage amount and show how much protection you’ll need for your top priorities. The recommended coverage benefits will be sent to your email address.</p>

            {isSignUpInfoCompleted && <>
                <hr />
                <HeadlineComponent emojiImg="emoji_u2705.png" text="Submit Your Info" />
                <div className="w-full flex flex-col justify-center items-center gap-1">
                    {!isSubmitted && !isSubmissionProcessing && <button className="animate-gentlePulse" onClick={handleSubmitButtonClick}><p style={{ textIndent: '0', textAlign: 'center' }}><SpanEmoji value="📤" /> Tap here to Submit</p></button>}
                    {!isSubmitted && isSubmissionProcessing && <div className="w-8 h-8 border-4 border-gray-300 border-t-orange-500 rounded-full animate-spin"></div>}
                    {isSubmitted && !isSubmissionProcessing && showEmailAndMobileVerification && <p className=""><SpanEmoji value="&#x2611;&#xFE0F;" /> Enter the OTPs sent to your email and phone to verify.</p>}
                    {!isSubmitted && !isSubmissionProcessing && submissionError && <p style={{ textIndent: '0' }} className="error">{submissionError.message}</p>}
                    {isSubmitted && showEmailAndMobileVerification &&
                        <>
                            <ul className="flex flex-col gap-1">
                                <li className="grid grid-cols-16 gap-1">
                                    <label htmlFor="email_address_otp" style={{ textIndent: '1em', textAlign: 'left', textWrap: 'nowrap' }} className="col-start-1 col-span-8"><SpanEmoji value="📧" /> Verify Email:</label>
                                    <div className="col-span-4 flex flex-col justify-start items-stretch">
                                        <input type="text" inputMode="numeric" autoComplete="one-time-code" id="email_address_otp" name="email_address_otp" placeholder="OTP" value={emailOTP} maxLength={OTP_LENGTH} onChange={onEmailOTPChange} readOnly={emailStatus !== 'pending'} />
                                    </div>
                                    {emailStatus === 'pending' && <button style={{padding: '0'}} className={`col-span-4 ${verifyContactInfoErrors.emailAddress === undefined ? "animate-gentlePulse" : ""}`} disabled={verifyContactInfoErrors.emailAddress !== undefined} onClick={onVerifyEmailClicked}><p style={{ textIndent: '0', textAlign: 'center', fontSize: '1em', textWrap: 'nowrap', lineHeight: '0.5em' }}><SpanEmoji value="📤" /> Verify</p></button>}
                                    {emailStatus === 'processing' && <div className="col-span-4 flex flex-row justify-center items-center"><div className="w-8 h-8 border-4 border-gray-300 border-t-orange-500 rounded-full animate-spin"></div></div>}
                                    {emailStatus === 'verified' && <p style={{ textIndent: '0', textAlign: 'left', textWrap: 'nowrap' }} className="col-span-4 text-green-500"><SpanEmoji value="&#x2705;&#xFE0F;" /> Verified</p>}
                                    {verifyContactInfoErrors.emailAddress && <p className="col-start-3 col-span-16 row-start-2 error">{verifyContactInfoErrors.emailAddress}</p>}
                                </li>
                                {emailStatus === 'verified' && <li className="grid grid-cols-16 gap-1">
                                    <label htmlFor="mobile_number_otp" style={{ textIndent: '1em', textAlign: 'left', textWrap: 'nowrap' }} className="col-start-1 col-span-8"><SpanEmoji value="📞" /> Verify Mobile:</label>
                                    <div className="col-span-4 flex flex-col justify-start items-stretch">
                                        <input type="text" inputMode="numeric" autoComplete="one-time-code" id="mobile_number_otp" name="mobile_number_otp" placeholder="OTP" value={mobileOTP} maxLength={OTP_LENGTH} onChange={onMobileOTPChange} readOnly={mobileStatus !== 'pending'} />
                                    </div>
                                    {mobileStatus === 'pending' && <button style={{padding: '0'}} className={`col-span-4 ${verifyContactInfoErrors.mobileNumber === undefined ? "animate-gentlePulse" : ""}`} disabled={verifyContactInfoErrors.mobileNumber !== undefined} onClick={onVerifyMobileClicked}><p style={{ textIndent: '0', textAlign: 'center', fontSize: '1em', textWrap: 'nowrap', lineHeight: '0.5em' }}><SpanEmoji value="📤" /> Verify</p></button>}
                                    {mobileStatus === 'processing' && <div className="col-span-4 flex flex-row justify-center items-center"><div className="w-8 h-8 border-4 border-gray-300 border-t-orange-500 rounded-full animate-spin"></div></div>}
                                    {mobileStatus === 'verified' && <p style={{ textIndent: '0', textAlign: 'left', textWrap: 'nowrap' }} className="col-span-4 text-green-500"><SpanEmoji value="&#x2705;&#xFE0F;" /> Verified</p>}
                                    {verifyContactInfoErrors.mobileNumber && <p className="col-start-3 col-span-16 row-start-2 error">{verifyContactInfoErrors.mobileNumber}</p>}
                                </li>}
                            </ul>
                        </>
                    }
                    {isSubmitted && emailStatus == 'verified' && mobileStatus == 'verified' && <p className=""><SpanEmoji value="&#x2705;&#xFE0F;" /> Successfully Submitted</p>}

                </div>
                {!isSubmitted && <p className="italic">Tap submit to receive your personalized plan and get connected with <b>Jonathan Mendoza</b> — your Financial Wealth Planner who will guide you toward your goals.</p>}
                {!isSubmitted && <p className="italic">By submitting this form, you agree to our <Link target="_blank" href="/privacy_policy">Privacy Policy</Link></p>}
                {isSubmitted && <p className="italic">You will receive your personalized plan and get connected with <b>Jonathan Mendoza</b> — your Financial Wealth Planner who will guide you toward your goals.</p>}
            </>}

            {SHOW_RESULTS && <>
                <hr />
                <HeadlineComponent emojiImg="emoji_u2728.png" text="Your Result" />
                <p>Based on your answers, here are the <b>recommended coverage benefits</b> you may need:</p>
                <ul>
                    {selectedPriorities.includes('cannot_reach_60') && <li>
                        <SpanEmoji value="&#x2705;&#xFE0F;" /> Life Insurance Protection: <span className="font-bold">{PESO_FORMAT.format(financialBuildingBlocks[FBB_KEYS.incomeProtection].shortfall)}</span>
                        <p className="text-xs italic">Para may ma-iiwan kang instant pamana na katumbas ng <b>10x of your annual income</b> sa mga umaasa sa'yo kapag nawala ka due to sudden death. Magagamit nila ito para ma-sustain ang current lifestyle nila at mabigyan sila ng enough time to grief sa loob ng sampung taon.</p>
                        <br />
                    </li>}
                    {selectedPriorities.includes('cannot_work_to_60') && <li>
                        <SpanEmoji value="&#x2705;&#xFE0F;" /> Critical Illness Benefit: <span className="font-bold">{PESO_FORMAT.format(financialBuildingBlocks[FBB_KEYS.criticalIllnessBenefit].shortfall)}</span>
                        <p className="text-xs italic">Para may panggastos kayo sa hospital bills & living expenses habang nagpapagaling ka at para di ka nagmamadali bumalik sa pagtatrabaho. Katumbas naman ito ng <b>5x of your annual income</b>. Kung may HMO ka na, maganda ito pang-dagdag sa protection mo dahil limited ang coverage ng HMO at hospital bill lang ang sinasagot nila. With this benefit, lump sum of cash ang matatanggap ng family mo regardless how much yung hospital bill, ibibigay namin yung exact amount na nasa contract.</p>
                        <br />
                    </li>}
                    {selectedPriorities.includes('cannot_work_to_60') && <li>
                        <SpanEmoji value="&#x2705;&#xFE0F;" /> Disability Income Protection: <span className="font-bold">{PESO_FORMAT.format(financialBuildingBlocks[FBB_KEYS.disabilityIncomeProtection].shortfall)}</span>
                        <p className="text-xs italic">Para may panggastos kayo ng family mo sa pang-araw-araw at ma-sustain ang current lifestyle ninyo ng limang taon. Katumbas din ito ng <b>5x of your annual income.</b></p>
                        <br />
                    </li>}
                    {selectedPriorities.includes('retirement_planning') && <li>
                        <SpanEmoji value="&#x2705;&#xFE0F;" /> Retirement Fund: <span className="font-bold">{PESO_FORMAT.format(financialBuildingBlocks[FBB_KEYS.retirementPlanning].shortfall)}</span>
                        <p className="text-xs italic">Kung hindi ka mag-iinvest at aasa ka lang sa pag-iipon, ka-kailanganin mo mag-save ng <span className="font-bold">{`${PESO_FORMAT.format(Math.max(0, financialBuildingBlocks[FBB_KEYS.retirementPlanning].shortfall / Math.max(1, retirementAge - age)) / MONTHS_IN_A_YEAR)}/month`}</span> or <span className="font-bold">{`${PESO_FORMAT.format(Math.max(0, financialBuildingBlocks[FBB_KEYS.retirementPlanning].shortfall / Math.max(1, retirementAge - age)))}/year`}</span> — for <span className="font-bold">{`${Math.max(0, retirementAge - age)} years`}</span> hanggang mag-retire ka <span className="font-bold">{`at age ${retirementAge}`}</span>. Para live with freedom ka na with a pension of <span className="font-bold">{`${PESO_FORMAT.format(Math.floor(targetRetirementMonthlyPension))}/month -> ${PESO_FORMAT.format(Math.floor(futureRetirementMonthlyPension))}/month`}</span> that increases by <span className="font-bold">{`${INFLATION_RATE * 100}% annually`}</span> to hedge against inflation during your <span className="font-bold">{`${AVERAGE_LIFE_SPAN_IN_YEARS - retirementAge} years`}</span> of retirement at di ka magiging pabigat sa family mo.</p>
                        <br />
                    </li>}
                    {selectedPriorities.includes('education_planning') && <li>
                        <SpanEmoji value="&#x2705;&#xFE0F;" /> Education Fund: <span className="font-bold">{PESO_FORMAT.format(financialBuildingBlocks[FBB_KEYS.educationPlanning].shortfall)}</span>
                        <p className="text-xs italic">Kung hindi ka mag-iinvest at aasa ka lang sa pag-iipon, ka-kailanganin mo mag-save ng <span className="font-bold">{`${PESO_FORMAT.format(Math.max(0, financialBuildingBlocks[FBB_KEYS.educationPlanning].shortfall / Math.max(1, CHILD_COLLEGE_ENTRY_AGE - childAge)))}/year`}</span> — for <span className="font-bold">{`${Math.max(0, CHILD_COLLEGE_ENTRY_AGE - childAge)} years`}</span> hanggang mag-college ang anak mo. The good news is matutulungan ka namin to <b>start saving and earn interest now then payout later</b> pag-papasok na ng college ang anak mo. Kaysa sa uutang ka pang-tuition fee ng anak mo at ikaw yung magbabayad ng interest sa pinagkaka-utangan mo.</p>
                        <br />
                    </li>}
                    {selectedPriorities.includes('dream_builders') && <li>
                        <SpanEmoji value="&#x2705;&#xFE0F;" /> Long-term savings or investment: <span className="font-bold">{PESO_FORMAT.format(financialBuildingBlocks[FBB_KEYS.dreamBuilders].shortfall)}</span>
                        <p className="text-xs italic">Kung hindi ka mag-iinvest at aasa ka lang sa pag-iipon, ka-kailanganin mo mag-save ng <span className="font-bold">{`${PESO_FORMAT.format(Math.max(0, financialBuildingBlocks[FBB_KEYS.dreamBuilders].shortfall / investmentWithdrawalYear) / MONTHS_IN_A_YEAR)}/month`}</span> or <span className="font-bold">{`${PESO_FORMAT.format(Math.max(0, financialBuildingBlocks[FBB_KEYS.dreamBuilders].shortfall / investmentWithdrawalYear))}/year`}</span> — for <span className="font-bold">{`${investmentWithdrawalYear} years`}</span> para ma-ipundar mo ang pinapangarap mo.</p>
                        <br />
                    </li>}
                    <p className="italic"><SpanEmoji value="&#x1F4A1;&#xFE0F;" /> These benefits are tailored to your top priorities — whether it’s protecting your health, securing your family’s future, or preparing for retirement.</p>
                </ul>
            </>}
        </>
    );

}

export default FreeConsultationForm;
