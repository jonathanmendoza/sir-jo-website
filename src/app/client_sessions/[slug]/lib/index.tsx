import { ArticleItem } from "@/types";
import FinancialPlanningSessionWithABreadwinnerMomOfA3YearOldChild from "../../_articles/financial_planning_session_with_a_breadwinner_mom_of_a_3_year_old_child";
import FinancialPlanningSessionWithAHardworkingDad from "../../_articles/financial_planning_session_with_a_working_dad";
import FinancialPlanningSessionWithAHardworkingGenZ from "../../_articles/financial_planning_session_with_a_hardworking_gen_z";
import FinancialPlanningSessionWithAWorkingMomOf3 from "../../_articles/financial_planning_session_with_a_working_mom_of_3";
import FinancialPlanningSessionWithAMompreneur from "../../_articles/financial_planning_session_with_a_mompreneur";
import FinancialPlanningSessionWithABreadwinnerNurse from "../../_articles/financial_planning_session_with_a_breadwinner_nurse";

export function getClientSessionsArticleContentByItem(item: ArticleItem) {
    const articleId = item.id;
    switch (articleId) {
        case "40a47bcd": return <FinancialPlanningSessionWithABreadwinnerMomOfA3YearOldChild articleItem={item}/>
        case "8d2d226d": return <FinancialPlanningSessionWithAHardworkingDad articleItem={item}/>
        case "08bcb833": return <FinancialPlanningSessionWithAHardworkingGenZ articleItem={item}/>
        case "5fd1fd0d": return <FinancialPlanningSessionWithAWorkingMomOf3 articleItem={item}/>
        case "e0249205": return <FinancialPlanningSessionWithAMompreneur articleItem={item}/>
        case "6f743c75": return <FinancialPlanningSessionWithABreadwinnerNurse articleItem={item}/>
        default: return <></>;
    }
}
