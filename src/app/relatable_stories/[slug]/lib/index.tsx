import { ArticleItem } from "@/types";
import AHouseWithoutIncomeIsALiability from "../../_articles/a_house_without_income_is_a_liability";
import TheFatherWhoPlannedHisLegacy from "../../_articles/the_father_who_planned_his_legacy";
import StabilityIsntRealIfYourFamilysFutureDependsOnHrsBenefitsPackage from "../../_articles/stability_isnt_real_if_your_familys_future_depends_on_hrs_benefits_package";
import The6AssetClassesInAnInvestmentPortfolio from "../../_articles/the_6_asset_classes_in_an_investment_portfolio";
import WithoutRiskManagementYourBusinessLoanCouldTurnIntoYourFamilysLiability from "../../_articles/without_risk_management_your_business_loan_could_turn_into_your_familys_liability";
import YouveBuiltYourBusinessToProvideForThem from "../../_articles/youve_built_your_business_to_provide_for_them";
import ADadsGreatestFearIsntFailingAtWorkItsFailingToSecureHisChildrensFuture from "../../_articles/a_dads_greatest_fear_isnt_failing_at_work_its_failing_to_secure_his_childrens_future";
import ASingleAccidentCanTurnYourFamilysDreamsIntoDebt from "../../_articles/a_single_accident_can_turn_your_familys_dreams_into_debt";
import ShePraysNothingHappensToHimBecauseSheKnowsCantCarryTheBurdenAlone from "../../_articles/she_prays_nothing_happens_to_him_because_she_knows_she_cant_carry_the_burden_alone";
import SinglesDontHaveDependents from "../../_articles/singles_dont_have_dependents";
import WhoPaysTheBillsIfYouCant from "../../_articles/who_pays_the_bills_if_you_cant";
import TheStoryOfATeacherWhoChoseToPrepareEarly from "../../_articles/the_story_of_a_teacher_who_chose_to_prepare_early";
import WhySheChoseFWD4xCriticalIllnessProtectionPlan from "../../_articles/why_she_chose_fwd_4x_critical_illness_protection_plan";
import ABreadwinnerInDubaiCarryingEveryoneButHerself from "../../_articles/a_breadwinner_in_dubai_carrying_everyone_but_herself";
import TheBusinessmanWhoLearnedFromSomeoneElsesPainfulMistake from "../../_articles/the_businessman_who_learned_from_someone_elses_painful_mistake";
import TheLessonALoanBusinessOwnerLearnedFromANeighborsCostlyEstateBattle from "../../_articles/the_lesson_a_loan_business_owner_learned_from_a_neighbors_costly_estate_battle";

export function getRelatableStoriesArticleContentByItem(item: ArticleItem) {
    const articleId = item.id;
    switch (articleId) {
        case "eabb8971": return <AHouseWithoutIncomeIsALiability articleItem={item}/>
        case "b440f30e": return <TheFatherWhoPlannedHisLegacy articleItem={item}/>
        case "2ae58e9d": return <StabilityIsntRealIfYourFamilysFutureDependsOnHrsBenefitsPackage articleItem={item}/>
        case "1230c990": return <The6AssetClassesInAnInvestmentPortfolio articleItem={item}/>
        case "db947247": return <WithoutRiskManagementYourBusinessLoanCouldTurnIntoYourFamilysLiability articleItem={item}/>
        case "e952f96b": return <YouveBuiltYourBusinessToProvideForThem articleItem={item}/>
        case "2ed1e019": return <ADadsGreatestFearIsntFailingAtWorkItsFailingToSecureHisChildrensFuture articleItem={item}/>
        case "645a2bad": return <ASingleAccidentCanTurnYourFamilysDreamsIntoDebt articleItem={item}/>
        case "ce293d56": return <ShePraysNothingHappensToHimBecauseSheKnowsCantCarryTheBurdenAlone articleItem={item}/>
        case "3b96a6f0": return <SinglesDontHaveDependents articleItem={item}/>
        case "21b74693": return <WhoPaysTheBillsIfYouCant articleItem={item}/>
        case "9011d662": return <TheStoryOfATeacherWhoChoseToPrepareEarly articleItem={item}/>
        case "cded635c": return <WhySheChoseFWD4xCriticalIllnessProtectionPlan articleItem={item}/>
        case "c8d4bd40": return <ABreadwinnerInDubaiCarryingEveryoneButHerself articleItem={item}/>
        case "e54ce6ab": return <TheBusinessmanWhoLearnedFromSomeoneElsesPainfulMistake articleItem={item}/>
        case "969ca0d3": return <TheLessonALoanBusinessOwnerLearnedFromANeighborsCostlyEstateBattle articleItem={item}/>
        default: return <></>;
    }
}
