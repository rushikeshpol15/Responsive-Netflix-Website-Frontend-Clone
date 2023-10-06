import JobsFooter from "./JobsFooter";
import JobsHeader from "./JobsHeader";
import JobsSection from "./JobsSection";

function Jobs()
{
    return(
        <>
        <JobsHeader/>
        <JobsSection/>
        <JobsFooter JobsOrInvestors={"Jobs"}/>
        </>
    )
}

export default Jobs;