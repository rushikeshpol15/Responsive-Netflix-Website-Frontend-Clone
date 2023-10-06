import "./MediaCenter.css";
import netflixSVg from "../homepage/netflixSvg.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass ,faXmark ,faSquareArrowUpRight ,faCaretDown,faBars} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function MediaCenterHeader()
{
    let[inputBar,setInputBar]=useState(false);
    let[netflixIcon,setNetflixIcon]=useState(false);
    let[languageVisibility,setLanguageVisibility]=useState(false);
    let[countryVisibility,setCountryVisibility]=useState(false);
    let[ResourcesVisibility,setResourcesVisibility]=useState(false);
    let[responsiveCenterContent,setResponsiveCenterContent]=useState(false);
    let[languageName,setLanguageName]=useState("English");

    function afterSearchClick()
    {
        if(window.screen.width<990)
        {
            setNetflixIcon(true);
        }
        setCountryVisibility(false);
        setLanguageVisibility(false);


        setInputBar(true);
    }

    function handleLanguage()
    {
        setLanguageVisibility(!languageVisibility);
        setCountryVisibility(false);
    }
    function handleCountry()
    {
        setCountryVisibility(!countryVisibility);
        setLanguageVisibility(false);
    }

    return(
        <>
        <header className="media-center-header">
                <nav className={(languageVisibility || countryVisibility)?"media-center-navbar d-flex justify-content-between align-items-center media-navbar-BGCOLOR":"media-center-navbar d-flex justify-content-between align-items-center"} >
                  {(!netflixIcon)?  <div className="media-center-natflix-svg-box d-flex align-items-center">
                        <img src={netflixSVg} className="media-center-netflix-svg"/>
                        <span className="media-center-nav-white-text fw-bolder text-white">Media center</span>
                    </div>:null}

                  { (!inputBar)? <div className={(responsiveCenterContent)?"media-center-navbar-center-div slide-TO-right":"media-center-navbar-center-div"}>

                            <div className="media-netflix-icon-with-close">
                                <div className="media-center-natflix-svg-box d-flex align-items-center">
                                    <img src={netflixSVg} className="media-center-netflix-svg"/>
                                    <span className="media-center-nav-white-text fw-bolder text-white">Media center</span>
                                </div>
                                <FontAwesomeIcon icon={faXmark} style={{color: "#ffffff", height:"28px"}}  onClick={()=>{setResponsiveCenterContent(false)}}/>

                            </div>
                        
                        <div className="language-and-country-select-container">

                        <button className="media-navbar-english-button" onClick={()=>{handleLanguage()}}>
                        {languageName}
                        <FontAwesomeIcon icon={faCaretDown} style={{color: "#f0f2f4", marginLeft:"0.5em"}}  className="faCaret"/>
                        
                        </button>

                        <button className="media-navbar-english-button " onClick={()=>{handleCountry()}}>
                            <span className="country-titles me-2 fw-bold" style={{fontSize:"0.85em",fontFamily:"monospace"}}>IN</span>
                            india
                        <FontAwesomeIcon icon={faCaretDown} style={{color: "#f0f2f4", marginLeft:"0.5em"}} className="faCaret" />

                        </button>
                        </div>

                        <div className={(languageVisibility)?"media-center-language-container slide-at-down":"media-center-language-container"}>
                            <div className="d-flex justify-content-between media-center-language-container-closing-box">
                            <span></span>    
                            <span className="media-language-selector-span">What language do you speak?</span>
                            <FontAwesomeIcon icon={faXmark} className="language-close-Button" style={{color: "#ffffff", height:"28px",cursor:"pointer"}} onClick={()=>{setLanguageVisibility(false)}} />
                            </div>
                            <div className="media-navbar-language-grid-container">
                                <span className="SPAN-LANGUAGE" onClick={()=>{setLanguageVisibility(false); setLanguageName("للغة العربية")}}>اللغة العربية</span>
                                <span className="SPAN-LANGUAGE" onClick={()=>{setLanguageVisibility(false); setLanguageName("简体中文")}}>简体中文</span>
                                <span className="SPAN-LANGUAGE" onClick={()=>{setLanguageVisibility(false); setLanguageName("繁體中文")}}>繁體中文</span>
                                <span className="SPAN-LANGUAGE" onClick={()=>{setLanguageVisibility(false); setLanguageName("English")}}>English</span>
                                <span className="SPAN-LANGUAGE" onClick={()=>{setLanguageVisibility(false); setLanguageName("Français")}}>Français</span>
                                <span className="SPAN-LANGUAGE" onClick={()=>{setLanguageVisibility(false); setLanguageName("Deutsch")}}>Deutsch</span>
                                <span className="SPAN-LANGUAGE" onClick={()=>{setLanguageVisibility(false); setLanguageName("Ελληνικά")}}>Ελληνικά</span>
                                <span className="SPAN-LANGUAGE" onClick={()=>{setLanguageVisibility(false); setLanguageName("Bahasa Indonesia")}}>Bahasa Indonesia</span>
                                <span className="SPAN-LANGUAGE" onClick={()=>{setLanguageVisibility(false); setLanguageName("Italiano")}}>Italiano</span>
                                <span className="SPAN-LANGUAGE" onClick={()=>{setLanguageVisibility(false); setLanguageName("日本語")}}>日本語</span>
                                <span className="SPAN-LANGUAGE" onClick={()=>{setLanguageVisibility(false); setLanguageName("한국어")}}>한국어</span>
                                <span className="SPAN-LANGUAGE" onClick={()=>{setLanguageVisibility(false); setLanguageName("polski")}}>polski</span>
                                <span className="SPAN-LANGUAGE" onClick={()=>{setLanguageVisibility(false); setLanguageName("Português (Brasil")}}>Português (Brasil)</span>
                                <span className="SPAN-LANGUAGE" onClick={()=>{setLanguageVisibility(false); setLanguageName("Português (Portugal)")}}>Português (Portugal)</span>
                                <span className="SPAN-LANGUAGE" onClick={()=>{setLanguageVisibility(false); setLanguageName("română")}}>română</span>
                                <span className="SPAN-LANGUAGE" onClick={()=>{setLanguageVisibility(false); setLanguageName("Español (LatAm)")}}>Español (LatAm)</span>
                                <span className="SPAN-LANGUAGE" onClick={()=>{setLanguageVisibility(false); setLanguageName("Español (España)")}}>Español (España)</span>
                                <span className="SPAN-LANGUAGE" onClick={()=>{setLanguageVisibility(false); setLanguageName("ไทย")}}>ไทย</span>
                                <span className="SPAN-LANGUAGE" onClick={()=>{setLanguageVisibility(false); setLanguageName("Türkçe")}}>Türkçe</span>
                            </div>
                        </div>

                        <div className={(countryVisibility)?"media-center-country-container country-slide":"media-center-country-container"}>

                            <div className="d-flex justify-content-between  media-center-language-container-closing-box">
                            <span></span>    
                            <span className="media-language-selector-span">What language do you speak?</span>
                            <FontAwesomeIcon icon={faXmark} style={{color: "#ffffff", height:"28px",cursor:"pointer"}} className="country-close-Button" onClick={()=>{setCountryVisibility(false)}}/>
                            </div>

                            <div className="country-select-bottom-div">
                                <div className="media-country-input-div">
                                <span className="country-selector-span">Select a country to see information specific to your coverage region.</span>
                             
                               <div className="d-flex align-items-center media-country-input-container">
                               <input type="text" list="country-list" id="country-INPUT" defaultValue="India" className="media-country-input"/>
                                 <label htmlFor="country-INPUT" style={{left:"93%",top:"30%"}}> 
                                    <FontAwesomeIcon icon={faCaretDown}    style={{color: "#f0f2f4", marginLeft:"0.5em",cursor:"pointer"}} />
                                 </label>  
                                </div> 

                                </div>

                            <datalist id="country-list" name="country" className="country-datalist">
                            <option value="Afghanistan">Afghanistan</option>
                            <option value="Åland Islands">Åland Islands</option>
                            <option value="Albania">Albania</option>
                            <option value="Algeria">Algeria</option>
                            <option value="American Samoa">American Samoa</option>
                            <option value="Andorra">Andorra</option>
                            <option value="Angola">Angola</option>
                            <option value="Anguilla">Anguilla</option>
                            <option value="Antarctica">Antarctica</option>
                            <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                            <option value="Argentina">Argentina</option>
                            <option value="Armenia">Armenia</option>
                            <option value="Aruba">Aruba</option>
                            <option value="Australia">Australia</option>
                            <option value="Austria">Austria</option>
                            <option value="Azerbaijan">Azerbaijan</option>
                            <option value="Bahamas">Bahamas</option>
                            <option value="Bahrain">Bahrain</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Barbados">Barbados</option>
                            <option value="Belarus">Belarus</option>
                            <option value="Belgium">Belgium</option>
                            <option value="Belize">Belize</option>
                            <option value="Benin">Benin</option>
                            <option value="Bermuda">Bermuda</option>
                            <option value="Bhutan">Bhutan</option>
                            <option value="Bolivia">Bolivia</option>
                            <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                            <option value="Botswana">Botswana</option>
                            <option value="Bouvet Island">Bouvet Island</option>
                            <option value="Brazil">Brazil</option>
                            <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                            <option value="Brunei Darussalam">Brunei Darussalam</option>
                            <option value="Bulgaria">Bulgaria</option>
                            <option value="Burkina Faso">Burkina Faso</option>
                            <option value="Burundi">Burundi</option>
                            <option value="Cambodia">Cambodia</option>
                            <option value="Cameroon">Cameroon</option>
                            <option value="Canada">Canada</option>
                            <option value="Cape Verde">Cape Verde</option>
                            <option value="Cayman Islands">Cayman Islands</option>
                            <option value="Central African Republic">Central African Republic</option>
                            <option value="Chad">Chad</option>
                            <option value="Chile">Chile</option>
                            <option value="China">China</option>
                            <option value="Christmas Island">Christmas Island</option>
                            <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                            <option value="Colombia">Colombia</option>
                            <option value="Comoros">Comoros</option>
                            <option value="Congo">Congo</option>
                            <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
                            <option value="Cook Islands">Cook Islands</option>
                            <option value="Costa Rica">Costa Rica</option>
                            <option value="Cote D'ivoire">Cote D'ivoire</option>
                            <option value="Croatia">Croatia</option>
                            <option value="Cuba">Cuba</option>
                            <option value="Cyprus">Cyprus</option>
                            <option value="Czech Republic">Czech Republic</option>
                            <option value="Denmark">Denmark</option>
                            <option value="Djibouti">Djibouti</option>
                            <option value="Dominica">Dominica</option>
                            <option value="Dominican Republic">Dominican Republic</option>
                            <option value="Ecuador">Ecuador</option>
                            <option value="Egypt">Egypt</option>
                            <option value="El Salvador">El Salvador</option>
                            <option value="Equatorial Guinea">Equatorial Guinea</option>
                            <option value="Eritrea">Eritrea</option>
                            <option value="Estonia">Estonia</option>
                            <option value="Ethiopia">Ethiopia</option>
                            <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                            <option value="Faroe Islands">Faroe Islands</option>
                            <option value="Fiji">Fiji</option>
                            <option value="Finland">Finland</option>
                            <option value="France">France</option>
                            <option value="French Guiana">French Guiana</option>
                            <option value="French Polynesia">French Polynesia</option>
                            <option value="French Southern Territories">French Southern Territories</option>
                            <option value="Gabon">Gabon</option>
                            <option value="Gambia">Gambia</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Germany">Germany</option>
                            <option value="Ghana">Ghana</option>
                            <option value="Gibraltar">Gibraltar</option>
                            <option value="Greece">Greece</option>
                            <option value="Greenland">Greenland</option>
                            <option value="Grenada">Grenada</option>
                            <option value="Guadeloupe">Guadeloupe</option>
                            <option value="Guam">Guam</option>
                            <option value="Guatemala">Guatemala</option>
                            <option value="Guernsey">Guernsey</option>
                            <option value="Guinea">Guinea</option>
                            <option value="Guinea-bissau">Guinea-bissau</option>
                            <option value="Guyana">Guyana</option>
                            <option value="Haiti">Haiti</option>
                            <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                            <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                            <option value="Honduras">Honduras</option>
                            <option value="Hong Kong">Hong Kong</option>
                            <option value="Hungary">Hungary</option>
                            <option value="Iceland">Iceland</option>
                            <option value="India">India</option>
                            <option value="Indonesia">Indonesia</option>
                            <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                            <option value="Iraq">Iraq</option>
                            <option value="Ireland">Ireland</option>
                            <option value="Isle of Man">Isle of Man</option>
                            <option value="Israel">Israel</option>
                            <option value="Italy">Italy</option>
                            <option value="Jamaica">Jamaica</option>
                            <option value="Japan">Japan</option>
                            <option value="Jersey">Jersey</option>
                            <option value="Jordan">Jordan</option>
                            <option value="Kazakhstan">Kazakhstan</option>
                            <option value="Kenya">Kenya</option>
                            <option value="Kiribati">Kiribati</option>
                            <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                            <option value="Korea, Republic of">Korea, Republic of</option>
                            <option value="Kuwait">Kuwait</option>
                            <option value="Kyrgyzstan">Kyrgyzstan</option>
                            <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                            <option value="Latvia">Latvia</option>
                            <option value="Lebanon">Lebanon</option>
                            <option value="Lesotho">Lesotho</option>
                            <option value="Liberia">Liberia</option>
                            <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                            <option value="Liechtenstein">Liechtenstein</option>
                            <option value="Lithuania">Lithuania</option>
                            <option value="Luxembourg">Luxembourg</option>
                            <option value="Macao">Macao</option>
                            <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                            <option value="Madagascar">Madagascar</option>
                            <option value="Malawi">Malawi</option>
                            <option value="Malaysia">Malaysia</option>
                            <option value="Maldives">Maldives</option>
                            <option value="Mali">Mali</option>
                            <option value="Malta">Malta</option>
                            <option value="Marshall Islands">Marshall Islands</option>
                            <option value="Martinique">Martinique</option>
                            <option value="Mauritania">Mauritania</option>
                            <option value="Mauritius">Mauritius</option>
                            <option value="Mayotte">Mayotte</option>
                            <option value="Mexico">Mexico</option>
                            <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                            <option value="Moldova, Republic of">Moldova, Republic of</option>
                            <option value="Monaco">Monaco</option>
                            <option value="Mongolia">Mongolia</option>
                            <option value="Montenegro">Montenegro</option>
                            <option value="Montserrat">Montserrat</option>
                            <option value="Morocco">Morocco</option>
                            <option value="Mozambique">Mozambique</option>
                            <option value="Myanmar">Myanmar</option>
                            <option value="Namibia">Namibia</option>
                            <option value="Nauru">Nauru</option>
                            <option value="Nepal">Nepal</option>
                            <option value="Netherlands">Netherlands</option>
                            <option value="Netherlands Antilles">Netherlands Antilles</option>
                            <option value="New Caledonia">New Caledonia</option>
                            <option value="New Zealand">New Zealand</option>
                            <option value="Nicaragua">Nicaragua</option>
                            <option value="Niger">Niger</option>
                            <option value="Nigeria">Nigeria</option>
                            <option value="Niue">Niue</option>
                            <option value="Norfolk Island">Norfolk Island</option>
                            <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                            <option value="Norway">Norway</option>
                            <option value="Oman">Oman</option>
                            <option value="Pakistan">Pakistan</option>
                            <option value="Palau">Palau</option>
                            <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                            <option value="Panama">Panama</option>
                            <option value="Papua New Guinea">Papua New Guinea</option>
                            <option value="Paraguay">Paraguay</option>
                            <option value="Peru">Peru</option>
                            <option value="Philippines">Philippines</option>
                            <option value="Pitcairn">Pitcairn</option>
                            <option value="Poland">Poland</option>
                            <option value="Portugal">Portugal</option>
                            <option value="Puerto Rico">Puerto Rico</option>
                            <option value="Qatar">Qatar</option>
                            <option value="Reunion">Reunion</option>
                            <option value="Romania">Romania</option>
                            <option value="Russian Federation">Russian Federation</option>
                            <option value="Rwanda">Rwanda</option>
                            <option value="Saint Helena">Saint Helena</option>
                            <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                            <option value="Saint Lucia">Saint Lucia</option>
                            <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                            <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                            <option value="Samoa">Samoa</option>
                            <option value="San Marino">San Marino</option>
                            <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                            <option value="Saudi Arabia">Saudi Arabia</option>
                            <option value="Senegal">Senegal</option>
                            <option value="Serbia">Serbia</option>
                            <option value="Seychelles">Seychelles</option>
                            <option value="Sierra Leone">Sierra Leone</option>
                            <option value="Singapore">Singapore</option>
                            <option value="Slovakia">Slovakia</option>
                            <option value="Slovenia">Slovenia</option>
                            <option value="Solomon Islands">Solomon Islands</option>
                            <option value="Somalia">Somalia</option>
                            <option value="South Africa">South Africa</option>
                            <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
                            <option value="Spain">Spain</option>
                            <option value="Sri Lanka">Sri Lanka</option>
                            <option value="Sudan">Sudan</option>
                            <option value="Suriname">Suriname</option>
                            <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                            <option value="Swaziland">Swaziland</option>
                            <option value="Sweden">Sweden</option>
                            <option value="Switzerland">Switzerland</option>
                            <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                            <option value="Taiwan">Taiwan</option>
                            <option value="Tajikistan">Tajikistan</option>
                            <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                            <option value="Thailand">Thailand</option>
                            <option value="Timor-leste">Timor-leste</option>
                            <option value="Togo">Togo</option>
                            <option value="Tokelau">Tokelau</option>
                            <option value="Tonga">Tonga</option>
                            <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                            <option value="Tunisia">Tunisia</option>
                            <option value="Turkey">Turkey</option>
                            <option value="Turkmenistan">Turkmenistan</option>
                            <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                            <option value="Tuvalu">Tuvalu</option>
                            <option value="Uganda">Uganda</option>
                            <option value="Ukraine">Ukraine</option>
                            <option value="United Arab Emirates">United Arab Emirates</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="United States">United States</option>
                            <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                            <option value="Uruguay">Uruguay</option>
                            <option value="Uzbekistan">Uzbekistan</option>
                            <option value="Vanuatu">Vanuatu</option>
                            <option value="Venezuela">Venezuela</option>
                            <option value="Viet Nam">Viet Nam</option>
                            <option value="Virgin Islands, British">Virgin Islands, British</option>
                            <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                            <option value="Wallis and Futuna">Wallis and Futuna</option>
                            <option value="Western Sahara">Western Sahara</option>
                            <option value="Yemen">Yemen</option>
                            <option value="Zambia">Zambia</option>
                            <option value="Zimbabwe">Zimbabwe</option>
                            </datalist>
                        
                            </div>
                            
                        </div>

                        <button className="media-navbar-english-button">
                        Newsroom
                        <FontAwesomeIcon icon={faSquareArrowUpRight} style={{color: "#f0f2f5",marginLeft:"0.5em"}} />
                        </button>

                        <button className="media-navbar-english-button" onClick={()=>{setResourcesVisibility(!ResourcesVisibility)}}>
                        Resources
                        <FontAwesomeIcon icon={faCaretDown} style={{color: "#f0f2f4", marginLeft:"0.5em"}} />
                        </button>

                      { (ResourcesVisibility)? <div className="media-resources-div d-flex flex-column">
                           <span className="resources-span">Company Assets
                            <FontAwesomeIcon icon={faSquareArrowUpRight} style={{color: "#f0f2f5",marginLeft:".5em"}} />
                           </span>
                           <span className="resources-span">About Netflix
                           <FontAwesomeIcon icon={faSquareArrowUpRight} style={{color: "#f0f2f5",marginLeft:".5em"}} />
                           </span>
                        </div>:null}
                        
                        <div className="media-navbar-apply-logIn-container">
                        <button className="media-navbar-apply-button">Apply</button>
                        <button className="media-navbar-press-logIN-button">Press Log In</button>     
                        </div>
                       


                    </div>:null}

                    <div className={(!inputBar)?"search-bar-with-input-container no-COLOR":"search-bar-with-input-container"}>
                   <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "white",cursor:"pointer"}} className="media-navbar-search-Button" onClick={()=>{afterSearchClick()}}/>
                   <input type="text" className={(inputBar)?"media-navbar-absoulte-input full-width":"media-navbar-absoulte-input"} placeholder="Search" />
                   <FontAwesomeIcon icon={faXmark} style={{color: "#ffffff", height:"28px"}} className={(inputBar)?"search-bar-close-Button with-width":"search-bar-close-Button"} onClick={()=>{setInputBar(false); setNetflixIcon(false)}}/>

                    </div>

                    {(!inputBar)?<FontAwesomeIcon icon={faBars} style={{color: "#ffffff",display:"none"}} className="media-navbar-line-button" onClick={()=>{setResponsiveCenterContent(true)}}/>:null}
                </nav>

                <div className="media-center-center-div">
                    <h1 className="text-white fw-bold media-center-center-h1">&nbsp;&nbsp;&nbsp;&nbsp;Discover stories and experiences to share with India.</h1>
                   <div className="media-center-center-input-box d-flex align-items-center">
                   <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "rgba(128, 128, 128, 0.921)"}} />
                   <input type="text" className="media-center-center-input" placeholder="Search for Netflix titles and news"/>

                   </div>
                </div>
        </header>
        </>
    )
}
export default MediaCenterHeader;