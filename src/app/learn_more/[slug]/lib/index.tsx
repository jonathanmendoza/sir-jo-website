import { ArticleItem } from "@/types";

import EmergencyFundVSInsurance from "../../_articles/emergency_fund_vs_insurance";
import The3PiggyBanksYouMustHave from "../../_articles/the_3_piggy_banks_you_must_have";
import The4PillarsOfAStrongWealthProtection from "../../_articles/the_4_pillars_of_a_strong_wealth_protection";
import WhatAreTheHiddenCostsOfCriticalIllness from "../../_articles/what_are_the_hidden_costs_of_critical_illness";
import DoYouKnowTheActualCostOfGettingSeriouslyIllInThePhilippines from "../../_articles/do_you_know_the_actual_cost_of_getting_seriously_ill_in_the_philippines";
import WhyHavingPhilhealthIsntEnoughYouStillNeedCriticalIllnessInsurance from "../../_articles/why_having_philhealth_isnt_enough_you_still_need_critical_illness_insurance";
import WhyHavingAnHmoIsntEnoughYouStillNeedCriticalIllnessInsurance from "../../_articles/why_having_an_hmo_isnt_enough_you_still_need_critical_illness_insurance";
import WhyFWD4xCriticalIllnessProtectionPlanIsAGameChanger from "../../_articles/why_fwd_4x_critical_illness_protection_plan_is_a_game_changer";
import TheSmartestWayToPassOnWealth from "../../_articles/the_smartest_way_to_pass_on_wealth";
import HowIEarn13KPesosPassiveIncomeQuarterlyFromMyFWDInvestmentAccount from "../../_articles/how_i_earn_13k_pesos_passive_income_quarterly_from_my_fwd_investment_account";
import ChecklistBeforeGettingAnInsurance from "../../_articles/checklist_before_getting_an_insurance";
import FinancialNeedsHierarchyContainer from "../../_articles/financial_needs_hierarchy/financial_needs_hierarchy";
import HowMuchLifeInsuranceDoYouReallyNeed from "../../_articles/how_much_life_insurance_do_you_really_need";

export function getLearnMoreArticleContentByItem(item: ArticleItem) {
    const articleId = item.id;
    switch (articleId) {
        case "6ef75fbc": return <EmergencyFundVSInsurance articleItem={item}/>
        case "dce97d0f": return <The3PiggyBanksYouMustHave articleItem={item}/>
        case "27655ff9": return <The4PillarsOfAStrongWealthProtection articleItem={item}/>
        case "07d05308": return <WhatAreTheHiddenCostsOfCriticalIllness articleItem={item}/>
        case "8321a958": return <DoYouKnowTheActualCostOfGettingSeriouslyIllInThePhilippines articleItem={item}/>
        case "2c4bd14a": return <WhyHavingPhilhealthIsntEnoughYouStillNeedCriticalIllnessInsurance articleItem={item}/>
        case "cb2eea66": return <WhyHavingAnHmoIsntEnoughYouStillNeedCriticalIllnessInsurance articleItem={item}/>
        case "95441919": return <WhyFWD4xCriticalIllnessProtectionPlanIsAGameChanger articleItem={item}/>
        case "097249e8": return <TheSmartestWayToPassOnWealth articleItem={item}/>
        case "abca9425": return <HowIEarn13KPesosPassiveIncomeQuarterlyFromMyFWDInvestmentAccount articleItem={item}/>
        case "4f856144": return <ChecklistBeforeGettingAnInsurance articleItem={item}/>
        case "e752693b": return <FinancialNeedsHierarchyContainer articleItem={item}/>
        case "a3c72299": return <HowMuchLifeInsuranceDoYouReallyNeed articleItem={item}/>
        default: return <></>;
    }
}
