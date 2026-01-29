"use client";

import SpanEmoji from "@/components/SpanEmoji";
import { useCallback, useEffect, useState } from "react";
import AmountInputField from "./components/amount_input_field";
import Form from 'next/form';
import { HowMuchLifeInsuranceDoYouNeedSubmitInfo } from "@/types";
import { initializeEventTracking, trackCustomEvent } from "@/utils/event_tracking";
import { getFundRange } from "../../../../utils";

export default function LifeInsuranceCoverageNeedCalculator() {
    const [housing, setHousing] = useState(0);
    const onHousingChange = useCallback((amount: number) => {
        setHousing(amount);
    }, []);

    const [transportation, setTransportation] = useState(0);
    const onTransportationChange = useCallback((amount: number) => {
        setTransportation(amount);
    }, []);

    const [travel, setTravel] = useState(0);
    const onTravelChange = useCallback((amount: number) => {
        setTravel(amount);
    }, []);

    const [regularCommitment, setRegularCommitment] = useState(0);
    const onRegularCommitmentChange = useCallback((amount: number) => {
        setRegularCommitment(amount);
    }, []);

    const [food, setFood] = useState(0);
    const onFoodChange = useCallback((amount: number) => {
        setFood(amount);
    }, []);

    const [healthCare, setHealthCare] = useState(0);
    const onHealthCareChange = useCallback((amount: number) => {
        setHealthCare(amount);
    }, []);

    const [recreation, setRecreation] = useState(0);
    const onRecreationChange = useCallback((amount: number) => {
        setRecreation(amount);
    }, []);

    const [emailAddress, setEmailAddress] = useState('');
    const onEmailAddressChange = useCallback((e: any) => {
        setEmailAddress(e.target.value);
    }, []);

    const [isCalculated, setIsCalculated] = useState(false);

    const [isSubmissionProcessing, setIsSubmissionProcessing] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const [inputErrors, setInputErrors] = useState<{
        monthlyExpenses?: string,
        emailAddress?: string,
    }>({});

    const onCalculateButtonClicked = useCallback(async () => {
        if (inputErrors.monthlyExpenses) { return; }
        setIsSubmissionProcessing(true);
        const formData: HowMuchLifeInsuranceDoYouNeedSubmitInfo = {
            housing: Number(housing),
            transportation: Number(transportation),
            travel: Number(travel),
            regularCommitment: Number(regularCommitment),
            food: Number(food),
            healthCare: Number(healthCare),
            recreation: Number(recreation),
            email: emailAddress
        }
        initializeEventTracking(emailAddress);
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/leads/how-much-life-insurance-do-you-need`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });
            if (!res.ok) {
                const message = await res.text();
                throw new Error(message || `Calculate request failed: ${res.status}`);
            }
            setIsSubmitted(true);
            trackCustomEvent("CalculateHowMuchLifeInsuranceDoYouReallyNeed", {
                'housing': getFundRange(housing),
                'transportation': getFundRange(transportation),
                'travel': getFundRange(travel),
                'regularCommitment': getFundRange(regularCommitment),
                'food': getFundRange(food),
                'healthCare': getFundRange(healthCare),
                'recreation': getFundRange(recreation),
            });
        } catch (err) {
            trackCustomEvent("ErrorCalculateHowMuchLifeInsuranceDoYouReallyNeed", {
                'housing': getFundRange(housing),
                'transportation': getFundRange(transportation),
                'travel': getFundRange(travel),
                'regularCommitment': getFundRange(regularCommitment),
                'food': getFundRange(food),
                'healthCare': getFundRange(healthCare),
                'recreation': getFundRange(recreation),
            });
        } finally {
            setIsSubmissionProcessing(false);
            setIsCalculated(true);
        }
    }, [inputErrors]);

    const monthlyExpenses = [housing, transportation, travel, regularCommitment, food, healthCare, recreation];
    useEffect(() => {
        const newErrors: typeof inputErrors = {};
        const hasAnyExpense = monthlyExpenses.some(expense => expense > 0);
        if (!hasAnyExpense) newErrors.monthlyExpenses = 'Please set your monthly expenses amount';
        if (!emailAddress.trim().includes("@")) newErrors.emailAddress = "*Invalid email address";
        setInputErrors(newErrors);
    }, [...monthlyExpenses, emailAddress]);

    return (
        <Form className="flex flex-col justify-start items-stretch gap-4" action={onCalculateButtonClicked}>
            <p style={{textIndent: '0'}}>Your monthly expenses:</p>
            <div>
                <div className="flex flex-col justify-start items-start gap-4 px-4">
                    <AmountInputField id='housing' value={housing} onValueChange={onHousingChange} error={inputErrors.monthlyExpenses}>
                        <><SpanEmoji value="🏠"/> <b>Housing</b> (rent, mortgage, utilities)</>
                    </AmountInputField>

                    <AmountInputField id='transportation' value={transportation} onValueChange={onTransportationChange} error={inputErrors.monthlyExpenses}>
                        <><SpanEmoji value="🚗"/> <b>Transportation</b> (gas, commute, car payments)</>
                    </AmountInputField>

                    <AmountInputField id='travel' value={travel} onValueChange={onTravelChange} error={inputErrors.monthlyExpenses}>
                        <><SpanEmoji value="✈️"/> <b>Travel</b> </>
                    </AmountInputField>

                    <AmountInputField id='regular-commitment' value={regularCommitment} onValueChange={onRegularCommitmentChange} error={inputErrors.monthlyExpenses}>
                        <><SpanEmoji value="📆"/> <b>Regular Commitment</b> (tuition, allowances, loans)</>
                    </AmountInputField>

                    <AmountInputField id='food' value={food} onValueChange={onFoodChange} error={inputErrors.monthlyExpenses}>
                        <><SpanEmoji value="🍽️"/> <b>Food</b></>
                    </AmountInputField>

                    <AmountInputField id='health-care' value={healthCare} onValueChange={onHealthCareChange} error={inputErrors.monthlyExpenses}>
                        <><SpanEmoji value="🏥"/> <b>Health care</b></>
                    </AmountInputField>

                    <AmountInputField id='recreation' value={recreation} onValueChange={onRecreationChange} error={inputErrors.monthlyExpenses}>
                        <><SpanEmoji value="🎉"/> <b>Recreation / Other expenses</b></>
                    </AmountInputField>
                </div>
            </div>
            <div className="flex flex-col justify-start items-stretch gap-1">
                <label htmlFor="email_address" className="text-left">Your email address:</label>
                <input type="email" id="email_address" name="email_address" autoComplete="email" placeholder="Required" value={emailAddress} maxLength={64} onChange={onEmailAddressChange} readOnly={isSubmitted} />
                {inputErrors.emailAddress && <p className="error">{inputErrors.emailAddress}</p>}
            </div>
            <div className="w-full flex flex-col justify-center items-center">
                {!isSubmitted && !isSubmissionProcessing && !isCalculated && <button type="submit" className={`${inputErrors.monthlyExpenses !== undefined || inputErrors.emailAddress !== undefined ? "": "animate-gentlePulse"}`} disabled={inputErrors.monthlyExpenses !== undefined || inputErrors.emailAddress !== undefined}><p style={{ textIndent: '0', textAlign: 'center' }}><SpanEmoji value="&#x1F9EE;" /> Tap here to calculate</p></button>}
                {!isSubmitted && isSubmissionProcessing && !isCalculated && <div className="w-8 h-8 border-4 border-gray-300 border-t-orange-500 rounded-full animate-spin"></div>}
                {isSubmitted && !isSubmissionProcessing && isCalculated && <p style={{textIndent: '0', textAlign: 'center'}} className="font-bold"><SpanEmoji value="&#x2705;&#xFE0F;" /> Results have been sent to your email address.</p>}
            </div>
            {!isSubmitted && <p className="italic"><SpanEmoji value="🧠" /> We’ll calculate your results and send how much life insurance coverage you'll need to your email address.</p>}
        </Form>
    );
}
