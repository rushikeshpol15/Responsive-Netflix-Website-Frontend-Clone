import "./homepage.css";
import Globe from "./globe.svg";
function SelectComponent()
{
    return(
        <>
        <div className="language-picker d-inline-flex align-items-center p-1">
        <img src={Globe} className="px-2"/>
        <select className="selectLanguage">
            <option value="English">English</option>
            <option value="Hindi">हिन्दी</option>
        </select>
        </div>
      
        </>
    )
}

export default SelectComponent;