import JobsFooter from "../Jobs/JobsFooter";
import InvestorRelationsHeader from "./InvestorRelationsHeader";
import InvestorRelationsSection from "./InvestorRelationsSection";

function InvestorRelations()
{
    return(
        <>
        <InvestorRelationsHeader/>
        <InvestorRelationsSection/>
        <JobsFooter JobsOrInvestors={"Investors"}/>
        </>
    )
}
export default InvestorRelations;