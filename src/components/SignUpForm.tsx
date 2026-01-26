import { useCallback, useEffect, useState } from "react";
import QuestionForm from "./QuestionForm";
import QuestionPagerButton from "./QuestionPagerButton";

export default function SignUpForm() {
    const [currentQuestionNumber, setCurrentQuestionNumber] = useState(1);
    const questionsCount = 10;

    const [budgetAllocationStatus, setBudgetAllocationStatus] = useState<undefined|string>(undefined);
    const [familyStatus, setFamilyStatus] = useState<undefined|string>(undefined);
    const [hasExistingInsurance, setHasExistingInsurance] = useState<undefined|string>(undefined);
    const [age, setAge] = useState(25);
    const [preExistingMedicalCondition, setPreExistingMedicalCondition] = useState<string>("Wala po");
    const [location, setLocation] = useState<string>("");

    const [firstName, setFirstName] = useState<string>("");
    const [middleName, setMiddleName] = useState<string>("");
    const [lastName, setLastName] = useState<string>("");

    const [jobTitle, setJobTitle] = useState<string>("");

    const [emailAddress, setEmailAddress] = useState<string>("");
    const [contactNumber, setContactNumber] = useState<string>("");

    const [bestTimeToCall, setBestTimeToCall] = useState<string>("");

    const [isPreviousButtonHidden, setIsPreviousButtonHidden] = useState(false);
    const [isNextButtonHidden, setIsNextButtonHidden] = useState(false);
    const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(false);
    const [isSubmitButtonHidden, setIsSubmitButtonHidden] = useState(true);
    const [isSubmitButtonDisabled, setIsSubmitButtonDisabled] = useState(true);

    const formDependencyList: React.DependencyList = [
        currentQuestionNumber,
        budgetAllocationStatus,
        familyStatus,
        hasExistingInsurance,
        age,
        preExistingMedicalCondition,
        location,
        firstName,
        lastName,
        jobTitle,
        emailAddress,
        contactNumber,
        bestTimeToCall
    ];

    const onBudgetAllocationStatusOnChange = useCallback((e: any) => {
        setBudgetAllocationStatus(e.target.value);
    }, []);

    const onFamilyStatusChange = useCallback((e: any) => {
        setFamilyStatus(e.target.value);
    }, []);

    const hasExistingInsuranceOnChange = useCallback((e: any) => {
        setHasExistingInsurance(e.target.value);
    }, []);

    const onAgeSliderValueChange = useCallback((e: any) => {
        setAge(Number(e.target.value));
    }, []);

    const onPreExistingMedicalConditionChange = useCallback((e: any) => {
        setPreExistingMedicalCondition(e.target.value);
    }, []);

    const onLocationChange = useCallback((e: any) => {
        setLocation(e.target.value);
    }, []);

    const onFirstNameChange = useCallback((e: any) => {
        setFirstName(e.target.value);
    }, []);

    const onMiddleNameChange = useCallback((e: any) => {
        setMiddleName(e.target.value);
    }, []);

    const onLastNameChange = useCallback((e: any) => {
        setLastName(e.target.value);
    }, []);

    const onJobTitleChange = useCallback((e: any) => {
        setJobTitle(e.target.value);
    }, []);

    const onEmailAddressChange = useCallback((e: any) => {
        setEmailAddress(e.target.value);
    }, []);

    const onContactNumberChange = useCallback((e: any) => {
        setContactNumber(e.target.value);
    }, []);

    const onBestTimeToCallChange = useCallback((e: any) => {
        setBestTimeToCall(e.target.value);
    }, []);


    const updatePagerButtonsState = useCallback(() => {
        setIsPreviousButtonHidden(currentQuestionNumber == 1);
        const isLastQuestion = currentQuestionNumber >= questionsCount;
        setIsNextButtonHidden(isLastQuestion);
        setIsSubmitButtonHidden(!isLastQuestion);
        let isQuestionAnswered = true;
        switch (currentQuestionNumber) {
            case 1: isQuestionAnswered = budgetAllocationStatus !== undefined; break;
            case 2: isQuestionAnswered = familyStatus !== undefined; break;
            case 3: isQuestionAnswered = hasExistingInsurance !== undefined; break;
            case 5: isQuestionAnswered = preExistingMedicalCondition.trim() !== ""; break;
            case 6: isQuestionAnswered = location.trim() !== ""; break;
            case 7: isQuestionAnswered = (firstName.trim() !== "") && (lastName.trim() !== ""); break;
            case 8: isQuestionAnswered = jobTitle.trim() !== ""; break;
            case 9: isQuestionAnswered = emailAddress.trim() !== "" && contactNumber.trim() !== ""; break;
            case 10: isQuestionAnswered = bestTimeToCall.trim() !== ""; break;
        }
        setIsNextButtonDisabled(!isQuestionAnswered);
        setIsSubmitButtonDisabled(!(isQuestionAnswered && isLastQuestion));
    }, [...formDependencyList]);

    const onPreviousButtonClick = useCallback(() => {
        setCurrentQuestionNumber(Math.max(1, currentQuestionNumber - 1));
    }, [currentQuestionNumber]);

    const onNextButtonClick = useCallback(() => {
        setCurrentQuestionNumber(Math.min(questionsCount, currentQuestionNumber + 1));
    }, [currentQuestionNumber]);

    const onSubmitButtonClick = useCallback(() => {
    }, []);

    useEffect(() => {
        updatePagerButtonsState();
    }, [
        ...formDependencyList,
        updatePagerButtonsState
    ]);

    return (
        <div className="w-full flex flex-col gap-4">
            <hr/>
            <h3><b>Question <span>{currentQuestionNumber}/{questionsCount}</span></b></h3>

            <form>
                <div className="min-w-full basis-full flex flex-row">
                    {currentQuestionNumber === 1 && <QuestionForm question="Open ka po ba maglaan ng budget para sa insurance / financial protection?">
                        <div className="flex flex-row gap-2">
                            <input type="radio" id="oo_handa_na_ako_maglaan_ng_budget" name="open_ka_po_ba_maglaan_ng_budget_para_sa_insurance" value="Oo, handa na ako maglaan ng budget para sa insurance" onChange={onBudgetAllocationStatusOnChange} checked={budgetAllocationStatus === "Oo, handa na ako maglaan ng budget para sa insurance"}/>
                            <label className="text-left" htmlFor="oo_handa_na_ako_maglaan_ng_budget">Oo, handa na ako maglaan ng budget para sa insurance</label>
                        </div>
                        <div className="flex flex-row gap-2">
                            <input type="radio" id="oo_pero_gusto_ko_munang_malaman_kung_magkano" name="open_ka_po_ba_maglaan_ng_budget_para_sa_insurance" value="Oo, pero gusto ko munang malaman kung magkano" onChange={onBudgetAllocationStatusOnChange} checked={budgetAllocationStatus === "Oo, pero gusto ko munang malaman kung magkano"}/>
                            <label className="text-left" htmlFor="oo_pero_gusto_ko_munang_malaman_kung_magkano">Oo, pero gusto ko munang malaman kung magkano</label>
                        </div>
                        <div className="flex flex-row gap-2">
                            <input type="radio" id="hindi_pa_ngayon" name="open_ka_po_ba_maglaan_ng_budget_para_sa_insurance" value="Hindi pa ngayon" onChange={onBudgetAllocationStatusOnChange} checked={budgetAllocationStatus === "Hindi pa ngayon"}/>
                            <label className="text-left" htmlFor="hindi_pa_ngayon">Hindi pa ngayon</label>
                        </div>
                    </QuestionForm>}

                    {currentQuestionNumber === 2 && <QuestionForm question="Ikaw po ba ay isang breadwinner o may sarili nang pamilya">
                        <div className="flex flex-row gap-2">
                            <input type="radio" id="single" name="breadwinner_or_own_family" value="Single" onChange={onFamilyStatusChange} checked={familyStatus === "Single"}/>
                            <label htmlFor="single">Single</label>
                        </div>
                        <div className="flex flex-row gap-2">
                            <input type="radio" id="single_na_breadwinner" name="breadwinner_or_own_family" value="Single na Breadwinner" onChange={onFamilyStatusChange} checked={familyStatus === "Single na Breadwinner"}/>
                            <label htmlFor="single_na_breadwinner">Single na Breadwinner</label>
                        </div>
                        <div className="flex flex-row gap-2">
                            <input type="radio" id="may_sarili_nang_pamilya" name="breadwinner_or_own_family" value="May sarili nang pamilya" onChange={onFamilyStatusChange} checked={familyStatus === "May sarili nang pamilya"}/>
                            <label htmlFor="may_sarili_nang_pamilya">May sarili nang pamilya</label>
                        </div>
                        <div className="flex flex-row gap-2">
                            <input type="radio" id="breadwinner_na_may_sarili_nang_pamilya" name="breadwinner_or_own_family" value="Breadwinner na may sarili nang pamilya" onChange={onFamilyStatusChange} checked={familyStatus === "Breadwinner na may sarili nang pamilya"}/>
                            <label htmlFor="breadwinner_na_may_sarili_nang_pamilya">Breadwinner na may sarili nang pamilya</label>
                        </div>
                    </QuestionForm>}

                    {currentQuestionNumber === 3 && <QuestionForm question="Mayroon ka na po bang insurance?">
                        <div className="flex flex-row gap-2">
                            <input type="radio" id="yes_already_have_insurance" name="already_have_insurance" value="Meron na" onChange={hasExistingInsuranceOnChange} checked={hasExistingInsurance === "Meron na"}/>
                            <label htmlFor="yes_already_have_insurance">Meron na</label>
                        </div>
                        <div className="flex flex-row gap-2">
                            <input type="radio" id="no_i_dont_have_insurance_yet" name="already_have_insurance" value="Wala pa" onChange={hasExistingInsuranceOnChange} checked={hasExistingInsurance === "Wala pa"}/>
                            <label htmlFor="no_i_dont_have_insurance_yet">Wala pa</label>
                        </div>
                    </QuestionForm>}

                    {currentQuestionNumber === 4 && <QuestionForm question="Ilang taon na po kayo?">
                        <label htmlFor="age">Age: <span id="ageValue" className="font-bold">{age}</span></label>
                        <input type="range" id="age" name="age" min="25" max="75" defaultValue={age} step="1" onChange={onAgeSliderValueChange}/>
                    </QuestionForm>}

                    {currentQuestionNumber === 5 && <QuestionForm question="Mayroon po ba kayong existing medical condition? Kung oo, paki-specify po.">
                        <input type="text" name="existing_medical_condition" value={preExistingMedicalCondition} onChange={onPreExistingMedicalConditionChange}/>
                    </QuestionForm>}

                    {currentQuestionNumber === 6 && <QuestionForm question="Saang area po kayo located?">
                        <input type="text" name="saang_area_po_kayo_located" placeholder="Required" value={location} maxLength={128} onChange={onLocationChange}/>
                    </QuestionForm>}

                    {currentQuestionNumber === 7 && <QuestionForm question="Ano po ang inyong pangalan?">
                        <br/>
                        <div className="grid grid-cols-8 grid-rows-1">
                            <label htmlFor="first_name" className="text-left col-span-3">First Name: </label>
                            <input type="text" id="first_name" name="ano_po_ang_inyong_pangalan" className="col-span-5" placeholder="Required" value={firstName} maxLength={128} onChange={onFirstNameChange}/>
                        </div>
                        <br/>
                        <div className="grid grid-cols-8 grid-rows-1">
                            <label htmlFor="last_name" className="text-left col-span-3">Middle Name: </label>
                            <input type="text" id="middle_name" name="ano_po_ang_inyong_pangalan" className="col-span-5" placeholder="Optional" value={middleName} maxLength={128} onChange={onMiddleNameChange}/>
                        </div>
                        <br/>
                        <div className="grid grid-cols-8 grid-rows-1">
                            <label htmlFor="last_name" className="text-left col-span-3">Last Name: </label>
                            <input type="text" id="last_name" name="ano_po_ang_inyong_pangalan" className="col-span-5" placeholder="Required" value={lastName} maxLength={128} onChange={onLastNameChange}/>
                        </div>
                    </QuestionForm>}

                    {currentQuestionNumber === 8 && <QuestionForm question="Ano po ang inyong trabaho?">
                        <input type="text" name="ano_po_ang_inyong_trabaho" value={jobTitle} placeholder="Required" onChange={onJobTitleChange}/>
                    </QuestionForm>}

                    {currentQuestionNumber === 9 && <QuestionForm question="Contact Information">
                        <br/>
                        <div className="grid grid-cols-9 grid-rows-1">
                            <label htmlFor="email_address" className="text-left col-span-4">Email Address: </label>
                            <input type="email" id="email_address" name="contact_information" className="col-span-5" placeholder="Required" value={emailAddress} maxLength={64} onChange={onEmailAddressChange}/>
                        </div>
                        <br/>
                        <div className="grid grid-cols-9 grid-rows-1">
                            <label htmlFor="contact_number" className="text-left col-span-4">Contact Number: </label>
                            <input type="tel" id="contact_number" name="contact_information" required={true} className="col-span-5" placeholder="Required" value={contactNumber} maxLength={13} onChange={onContactNumberChange}/>
                        </div>
                    </QuestionForm>}

                    {currentQuestionNumber === 10 && <QuestionForm question="Kailan po ang best time to call you?">
                        <input type="text" name="best_time_to_call" placeholder="Required" value={bestTimeToCall} maxLength={128} onChange={onBestTimeToCallChange}/>
                    </QuestionForm>}

                </div>
            </form>

            <div className="w-full flex flex-row justify-between py-2">
                <div>
                    <QuestionPagerButton isHidden={isPreviousButtonHidden} textLabel="Previous" textSubtext="Question" onClick={onPreviousButtonClick}/>
                </div>
                <div>
                    <QuestionPagerButton isHidden={isNextButtonHidden} isDisabled={isNextButtonDisabled} textLabel="Next" textSubtext="Question" onClick={onNextButtonClick}/>
                    <QuestionPagerButton isHidden={isSubmitButtonHidden} isDisabled={isSubmitButtonDisabled} textLabel="Submit" textSubtext="answers" onClick={onSubmitButtonClick}/>
                </div>
            </div>
        </div>
    );
}
