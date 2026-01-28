"use client";

import { useCallback, useEffect, useState } from "react";
import HeadlineComponent from "@/components/HeadlineComponent";
import SpanEmoji from "@/components/SpanEmoji";
import { PESO_FORMAT } from "@/constants/";
import { useContactInfo, useContactInfoCallbacks, usePersonalInfo, usePersonalInfoCallbacks } from "@/contexts";
import { getSalaryRange, getFundRange, isProduction } from "@/utils";
import { initializeEventTracking, trackCustomEvent } from "@/utils/event_tracking";
import type { ArticleItem, FinancialNeedsHierarchySubmitInfo } from "@/types";
import ArticleOfferFreeConsultationComponent from "@/components/ArticleOfferFreeConsultationComponent";

const ENABLE_RESULTS_DISPLAY = !isProduction();

function FinancialNeedsHierarchy({articleItem}: {articleItem: ArticleItem}) {
    const [basicNeeds, setBasicNeeds] = useState(0);
    const [emergencyMonthly, setEmergencyMonthly] = useState(0);
    const [healthFund, setHealthFund] = useState(0);
    const [protection, setProtection] = useState(0);
    const [investment, setInvestment] = useState(0);
    const [emergencyGoal, setEmergencyGoal] = useState(0);
    const [emergencyRemaining, setEmergencyRemaining] = useState(0);
    const [emergencyMonthsToGoal, setEmergencyMonthsToGoal] = useState(0);

    const [wants, setWants] = useState(0);
    const [savings, setSavings] = useState(0);

    const [showResults, setShowResults] = useState(false);

    const [isCalculated, setIsCalculated] = useState(false);

    const [isSubmissionProcessing, setIsSubmissionProcessing] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const {
        monthlySalary,
        existingEmergencyFund,
    } = usePersonalInfo();

    const {
        onMonthlySalaryValueChange,
        onExistingEmergencyFundValueChange
    } = usePersonalInfoCallbacks();

    const {
        emailAddress
    } = useContactInfo();

    const {
        onEmailAddressChange
    } = useContactInfoCallbacks();

    const inputDepsList: React.DependencyList = [monthlySalary, emailAddress];
    const [inputErrors, setInputErrors] = useState<{
        monthlySalary?: string,
        emailAddress?: string,
    }>({});
    const validateInput = useCallback(() => {
        const newErrors: typeof inputErrors = {};
        if (monthlySalary <= 0) {
            newErrors.monthlySalary = "*Please set your estimated monthly income";
        }
        if (!emailAddress.trim().includes("@")) newErrors.emailAddress = "*Invalid email address";
        setInputErrors(newErrors);
    }, inputDepsList);
    useEffect(() => validateInput() , [...inputDepsList, validateInput]);

    useEffect(() => {
        setShowResults(false);
    }, [monthlySalary, existingEmergencyFund])

    const onCalculateButtonClicked = useCallback(async () => {
        if (inputErrors.monthlySalary) { return; }
        setIsSubmissionProcessing(true);
        const formData: FinancialNeedsHierarchySubmitInfo = {
            monthlySalary: Number(monthlySalary),
            existingEmergencyFund: Number(existingEmergencyFund),
            email: emailAddress,
        }
        initializeEventTracking(emailAddress);
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/leads/financial-needs-hierarchy`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });
            if (!res.ok) {
                const message = await res.text();
                throw new Error(message || `Calculate request failed: ${res.status}`);
            }
            setIsSubmitted(true);
            trackCustomEvent("CalculateFinancialNeedsHierarchy", {
                'monthlySalaryRange': getSalaryRange(monthlySalary),
                'emergencyFundRange': getFundRange(existingEmergencyFund),
            });
        } catch (err) {
            trackCustomEvent("ErrorCalculateFinancialNeedsHierarchy", {
                'monthlySalaryRange': getSalaryRange(monthlySalary),
                'emergencyFundRange': getFundRange(existingEmergencyFund),
            });
        } finally {
            setIsSubmissionProcessing(false);
            setBasicNeeds(monthlySalary * 0.5);
            setHealthFund(monthlySalary * 0.1);
            setProtection(monthlySalary * 0.1);
            setInvestment(monthlySalary * 0.1);
            const monthly = monthlySalary * 0.2;
            const goal = monthlySalary * 6
            const remaining = Math.max(0, goal - existingEmergencyFund);
            const monthsToGoal = Math.floor(remaining / monthly);
            setEmergencyMonthly(monthly);
            setEmergencyGoal(goal);
            setEmergencyRemaining(remaining);
            setEmergencyMonthsToGoal(monthsToGoal);
            setWants(monthlySalary * 0.3);
            setSavings(monthlySalary * 0.2);
            setIsCalculated(true);
            setShowResults(true);
        }
    }, [inputErrors, monthlySalary, existingEmergencyFund, emailAddress]);

    return (
        <div className="flex flex-col items-stretch gap-4">
            <p>Marami sa atin gustong magsimulang mag-invest o mag-ipon — pero ang tanong, <b>saan nga ba dapat magsimula?</b></p>
            <p>Ang sikreto ay simple: <b>Build your financial plan from the ground up</b>. Parang bahay, kailangan muna ng matibay na pundasyon bago ka magpatayo ng second floor.</p>
            <p>Dito papasok ang <b>Financial Needs Hierarchy</b> — isang step-by-step guide para tulungan kang ayusin ang iyong pera nang maayos at matatag.</p>
            <img src={articleItem.image}></img>

            <hr />
            <HeadlineComponent emojiImg="emoji_u1f4a1.png" text="Try This Simple Calculator"/>
            <p><SpanEmoji value="👉"/><b>Ilagay ang iyong monthly income</b> at kung <b>ilang buwan na ang naipon mong emergency fund</b>.</p>
            <p>Makikita mo kung magkano dapat ang i-allocate mo sa bawat step — at gaano katagal mo matatapos ang iyong 6-month emergency goal.</p>

            <hr />
            <HeadlineComponent emojiImg="emoji_u1f9ee.png" text="Your Financial Hierarchy Calculator"/>
            <ul className="w-full">
                <li>
                    <label style={{ textIndent: '1em' }} htmlFor="monthly_salary"><SpanEmoji value="💵" /> Monthly Income: <span id="monthlySalaryValue" className="font-bold">{PESO_FORMAT.format(monthlySalary)}</span></label>
                    <div className="flex flex-col justify-start items-stretch mx-5">
                        <input type="range" id="monthly_salary" name="monthly_salary" min={0} max={300000} value={monthlySalary} step={5000} onChange={onMonthlySalaryValueChange} disabled={isCalculated}/>
                        {inputErrors.monthlySalary && <p style={{textAlign: 'center'}} className="error w-full">{inputErrors.monthlySalary}</p>}
                    </div>
                </li>
                <li>
                    <label style={{ textIndent: '1em' }} htmlFor="existing_emergency_fund"><SpanEmoji value="&#x1f416;" /> Existing Emergency Fund (₱): <span id="existingEmergencyFundValue" className="font-bold">{PESO_FORMAT.format(existingEmergencyFund)}</span></label>
                    <div className="flex flex-col justify-start items-stretch mx-5">
                        <input type="range" id="existing_emergency_fund" name="existing_emergency_fund" min={0} max={monthlySalary * 6} value={existingEmergencyFund} step={5000} onChange={onExistingEmergencyFundValueChange} disabled={isCalculated}/>
                    </div>
                </li>
                <br/>
                <li className="grid grid-cols-10 grid-rows-1 gap-8">
                    <label htmlFor="email_address" style={{ textIndent: '0', textAlign: 'left', textWrap: 'nowrap' }} className="col-start-1 col-span-4"><SpanEmoji value="📧" /> Email Address:</label>
                    <div className="col-start-5 col-span-6 flex flex-col justify-start items-stretch">
                        <input type="email" id="email_address" name="email_address" autoComplete="email" placeholder="Required" value={emailAddress} maxLength={64} onChange={onEmailAddressChange} readOnly={isCalculated} />
                        {inputErrors.emailAddress && <p className="error">{inputErrors.emailAddress}</p>}
                    </div>
                </li>
            </ul>
            <div className="w-full flex flex-col justify-center items-center">
                {!isSubmitted && !isSubmissionProcessing && !isCalculated && <button className={`${inputErrors.monthlySalary !== undefined || inputErrors.emailAddress !== undefined ? "": "animate-gentlePulse"}`} onClick={onCalculateButtonClicked} disabled={inputErrors.monthlySalary !== undefined || inputErrors.emailAddress !== undefined}><p style={{ textIndent: '0', textAlign: 'center' }}><SpanEmoji value="&#x1F9EE;" /> Tap here to calculate</p></button>}
                {!isSubmitted && isSubmissionProcessing && !isCalculated && <div className="w-8 h-8 border-4 border-gray-300 border-t-orange-500 rounded-full animate-spin"></div>}
                {isSubmitted && !isSubmissionProcessing && isCalculated && <p style={{textIndent: '0', textAlign: 'center'}} className="font-bold"><SpanEmoji value="&#x2705;&#xFE0F;" /> Results have been sent to your email address.</p>}
            </div>
            {!isSubmitted && <p className="italic"><SpanEmoji value="🧠" /> We’ll calculate your results and send a step-by-step guide on how to invest or save money to your email address.</p>}

            {showResults && ENABLE_RESULTS_DISPLAY && <>
                <hr />
                <HeadlineComponent emojiImg="emoji_u1f4b0.png" text="Your Results"/>
                <div>
                    <p style={{textIndent: '0'}} className="font-bold"><SpanEmoji value="🔹"/> Step 1: Basic Needs (50%)</p>
                    <p style={{textIndent: '0'}}><SpanEmoji value="→"/> <span className="font-bold">{PESO_FORMAT.format(basicNeeds)}</span> per month for essentials (food, rent, bills, etc.)</p>
                    <p style={{textIndent: '0'}} className="italic"><SpanEmoji value="💬"/> Tip: If your basic needs exceed this, find ways to increase your income.</p>
                </div>
                <div>
                    <p style={{textIndent: '0'}} className="font-bold"><SpanEmoji value="🔹"/> Step 2: Emergency Fund (20%)</p>
                    <p style={{textIndent: '0'}}><SpanEmoji value="→"/> <span className="font-bold">{PESO_FORMAT.format(emergencyMonthly)}</span> per month savings target</p>
                    <p style={{textIndent: '0'}} className="italic"><SpanEmoji value="💬"/> Goal: 6× your monthly income = <b><span>{PESO_FORMAT.format(emergencyGoal)}</span> total emergency fund</b></p>
                    {existingEmergencyFund > 0 && <p style={{textIndent: '0'}} className="italic text-xs">You're <span className="font-bold">{PESO_FORMAT.format(emergencyRemaining)}</span> away from your goal.</p>}
                    <p style={{textIndent: '0'}} className="italic text-xs">At <span>{PESO_FORMAT.format(emergencyMonthly)}</span> per month, you'll reach it in <span className="font-bold">{`~${emergencyMonthsToGoal} months`}</span>.</p>
                </div>
                <div>
                    <p style={{textIndent: '0'}} className="font-bold"><SpanEmoji value="🔹"/> Step 3: Health & Medical Fund (10%)</p>
                    <p style={{textIndent: '0'}}><SpanEmoji value="→"/> <span className="font-bold">{PESO_FORMAT.format(healthFund)}</span> per month for health protection, HMO, or insurance</p>
                </div>
                <div>
                    <p style={{textIndent: '0'}} className="font-bold"><SpanEmoji value="🔹"/> Step 4: Income Protection (10%)</p>
                    <p style={{textIndent: '0'}}><SpanEmoji value="→"/> <span className="font-bold">{PESO_FORMAT.format(protection)}</span> per month for life or critical illness coverage</p>
                    <p style={{textIndent: '0'}} className="italic"><SpanEmoji value="💬"/> Insurance ensures your family’s goals continue, even if something unexpected happens.</p>
                </div>
                <div>
                    <p style={{textIndent: '0'}} className="font-bold"><SpanEmoji value="🔹"/> Step 5: Investments (10%)</p>
                    <p style={{textIndent: '0'}}><SpanEmoji value="→"/> <span className="font-bold">{PESO_FORMAT.format(investment)}</span> per month to start building long-term wealth</p>
                    <p style={{textIndent: '0'}} className="italic"><SpanEmoji value="💬"/> Focus on investments only after you’ve built the foundation.</p>
                </div>

                <hr/>
                <HeadlineComponent emojiImg="emoji_u1f504.png" text="Expected vs. Unexpected Needs"/>
                <table className="text-xs">
                    <tbody>
                        <tr>
                            <th>Category</th>
                            <th>Includes</th>
                            <th>Type of Need</th>
                        </tr>
                        <tr>
                            <td><SpanEmoji value="🏠"/> Basic Needs</td>
                            <td>Food, housing, transportation</td>
                            <td><b>Expected</b></td>
                        </tr>
                        <tr>
                            <td><SpanEmoji value="📈"/> Investment</td>
                            <td>VUL, mutual funds, business</td>
                            <td><b>Expected</b></td>
                        </tr>
                        <tr>
                            <td><SpanEmoji value="🆘"/> Emergency Fund</td>
                            <td>Job loss, car repairs</td>
                            <td><b>Unexpected</b></td>
                        </tr>
                        <tr>
                            <td><SpanEmoji value="❤️"/> Health & Medical Fund</td>
                            <td>Hospitalization, medication</td>
                            <td><b>Unexpected</b></td>
                        </tr>
                        <tr>
                            <td><SpanEmoji value="🛡️"/> Income Protection</td>
                            <td>Life & critical illness insurance</td>
                            <td><b>Unexpected</b></td>
                        </tr>
                    </tbody>
                </table>
                <ul className="list-disc list-inside">
                    <li><b>Expected needs</b> ay mga regular mong gastusin.</li>
                    <li><b>Unexpected needs</b> naman ay biglaang pangyayari na pwedeng makaapekto sa finances mo — kaya mahalagang planuhin pareho.</li>
                </ul>

                <hr/>
                <HeadlineComponent emojiImg="emoji_u1f4b0.png" text="The 50-30-20 Rule"/>
                <div>
                    <p style={{textIndent: '0', textAlign: 'left'}}>Kung gusto mong mag-start ng simple budget plan:</p>
                    <ul className="list-disc list-inside">
                        <li><b>50% – Basic Needs: </b><span className="italic">{PESO_FORMAT.format(basicNeeds)}</span></li>
                        <li><b>30% – Wants</b> (Lifestyle, hobbies, travel): <span className="italic">{PESO_FORMAT.format(wants)}</span></li>
                        <li>
                            <span><b>20% – Savings & Growth:</b> <span className="italic">{PESO_FORMAT.format(savings)}</span></span>
                            <p className="ml-5">Gamitin ito para unti-unting buuin ang iyong <b>Financial Needs Hierarchy</b> — simula sa <b>Emergency Fund</b>, hanggang <b>Health Protection, Income Protection,</b> at <b>Investment</b>.</p>
                        </li>
                    </ul>
                </div>

                <hr/>
                <HeadlineComponent emojiImg="emoji_u1f331.png" text="Simulan mo na ang Financial Hierarchy mo ngayon"/>
                <div>
                    <p style={{textIndent: '0', textAlign: 'left'}}>Hindi kailangang sabay-sabay — basta <b>step-by-step</b>.</p>
                    <p style={{textIndent: '0', textAlign: 'left'}}>Ang mahalaga ay <b>nagsisimula ka</b> at alam mo kung saan ka patungo.</p>
                </div>
                <p style={{textAlign: 'left'}}>Ang tamang plano ay hindi lang para sa pera, kundi para sa <b>peace of mind</b> ng buong pamilya mo.</p>
                <ArticleOfferFreeConsultationComponent dontAddProvider/>
            </>}

            <hr/>
        </div>
    );
}

export default FinancialNeedsHierarchy;
