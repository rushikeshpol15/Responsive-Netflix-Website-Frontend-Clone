import TermsOfUseSectionPrint from "../TermsOfUse/TermsOfUseSectionPrint";
import "./Privacy.css";

function PrivacySection()
{
    return(
        <>
        <section className="Privacy-section">
            <TermsOfUseSectionPrint/>
            <h1 className="fw-bolder mb-4">Privacy Statement</h1>
            <p>This Privacy Statement explains our practices, including your choices, regarding the collection, use, and disclosure of certain information, including your personal information in connection with the Netflix service.            </p>
            <br/>
            <h5 className="fw-bold">Contacting Us</h5>
            <br/>
            <p>
            If you have general questions about your account or how to contact customer service for assistance, please visit our online help center at <a href="#" className="text-danger text-decoration-none">help.netflix.com.</a> For questions specifically about this Privacy Statement, or our use of your personal information, cookies or similar technologies, please contact our Data Protection Officer/Privacy Office by email at <a href="#" className="text-danger text-decoration-none">privacy@netflix.com.</a>
            </p>
            <br/>
            <p>
            The data controller of your personal information is <a href="#" className="text-danger text-decoration-none">Netflix Entertainment Services India LLP</a>. Please note that if you contact us to assist you, for your safety and ours we may need to authenticate your identity before fulfilling your request.
            </p>
            <br/> <br/>

            <h5 className="fw-bold">Collection of Information</h5>
            <p>We receive and store information about you such as:</p>
            <br/>

          <ul >
            <li> <span className="fw-bold">Information you provide to us:</span> 
             We collect information you provide to us which includes:
                 
                  <ul className="mt-3">
                    <li>your name, email address, payment method(s), telephone number, and other identifiers you might use (such as an in-game name). We collect this information in a number of ways, including when you enter it while using our service, interact with our customer service, or participate in surveys or marketing promotions;</li>
                    <li>information when you choose to provide ratings, taste preferences, account settings (including preferences set in the "Account" section of our website), or otherwise provide information to us through our service or elsewhere.</li>
                  </ul>
            </li>

            <li><span className="fw-bold">Information we collect automatically: </span>
            We collect information about you and your use of our service, your interactions with us and our advertising, as well as information regarding your network, network devices, and your computer or other Netflix capable devices you might use to access our service (such as gaming systems, smart TVs, mobile devices, set top boxes, and other streaming media devices). This information includes:

                  <ul className="mt-3">
                      <li>your activity on the Netflix service, such as title selections, shows you have watched, search queries, and activity in Netflix games;</li>
                      <li>your interactions with our emails and texts, and with our messages through push and online messaging channels;</li>
                      <li>details of your interactions with our customer service, such as the date, time and reason for contacting us, transcripts of any chat conversations, and if you call us, your phone number and call recordings;</li>
                      <li>device IDs or other unique identifiers, including for your network devices (such as your router), and devices that are Netflix capable on your network;</li>
                      <li>resettable device identifiers (also known as advertising identifiers), such as those on mobile devices, tablets, and streaming media devices that include such identifiers (see the "Cookies and Internet Advertising" section below for more information);</li>
                      <li>device and software characteristics (such as type and configuration), connection information including type (wifi, cellular), statistics on page views, referring source (for example, referral URLs), IP address (which can be used to tell us your general location, such as your city, state/province, and postal code), browser and standard web server log information;</li>
                      <li>information collected via the use of cookies, web beacons and other technologies, including ad information (such as information on the availability and delivery of ads, the site URL, as well as the date and time). (See our "Cookies and Internet Advertising" section for more details.)</li>
                  </ul>
            </li>

            <li><span className="fw-bold">Information from partners: </span>
            We collect information from other companies with whom you have a relationship (“Partners”). These Partners might include (depending on what services you use): your TV or internet service provider, or other streaming media device providers who make our service available on their device; mobile phone carriers or other companies who provide services to you and collect payment for the Netflix service for distribution to us or provide pre-paid promotions for the Netflix service; and voice assistant platform providers who enable interaction with our service through voice commands. The information Partners provide us varies depending on the nature of the Partner services, and may include:

               <ul className="mt-3">
                 <li>search queries and commands applicable to Netflix that you make through Partner devices or voice assistant platforms;</li>
                 <li>service activation information such as your email address or other contact information;</li>
                 <li>IP addresses, device IDs or other unique identifiers, as well as associated pre-paid promotion, billing and user interface information, that support user authentication, the Netflix service registration experience, Partner payment processing, and the presentation of Netflix content to you through portions of the Partner user interface.</li>
               </ul>
            </li>

            <li><span className="fw-bold">Information from other sources:</span>
            We also obtain information from other sources. We protect this information according to the practices described in this Privacy Statement, plus any additional restrictions imposed by the source of the information. These sources vary over time, but could include:
                <ul className="mt-3">
                  <li>service providers that help us determine a location based on your IP address in order to customize our service and for other uses consistent with this Privacy Statement;</li>
                  <li>security service providers that provide us with information to secure our systems, prevent fraud and help us protect the security of Netflix accounts;</li>
                  <li>payment service providers that provide us with payment or balance information, or updates to that information, based on their relationship with you;</li>
                  <li>publicly-available sources such as publicly available posts on social media platforms and information available through public databases associating IP addresses with internet service providers (ISPs);</li>
                  <li>third party services that you are signed into and that provide functions within Netflix games, such as multiplayer gameplay, leaderboards, and game saving options.</li>
                </ul>
            </li>
          </ul>

       <h5 className="fw-bold mb-3">Use of Information</h5>
       <p>We use information to provide, analyze, administer, enhance and personalize our services and marketing efforts, to process your registration, your orders and your payments, and to communicate with you on these and other topics. For example, we use such information to:</p>

       <ul>
        <li> provide you with customized and personalized viewing recommendations for movies, TV shows, and games we think will be of interest to you (collectively “content”);</li>
        <li>determine your general geographic location (such as your city, state/province, and postal code);</li>
        <li>provide localized content;</li>
        <li>determine your ISP to support network troubleshooting for you (we also use aggregated ISP information for operational and business purposes);</li>
        <li>help us quickly and efficiently respond to inquiries and requests;</li>
        <li>coordinate with Partners on making the Netflix service available to members and providing information to non members about the availability of the Netflix service, based on the specific relationship you have with the Partner;</li>
        <li>secure our systems, prevent fraud and help us protect the security of Netflix accounts;</li>
        <li>prevent, detect and investigate potentially prohibited or illegal activities, including fraud, and to enforce our terms (such as determining whether and for which Netflix signup offers you are eligible and determining whether a particular device is permitted to use the account consistent with our Terms of Use);</li>
        <li>analyze and understand our audience, improve our service (including our user interface experiences and service performance) and optimize content selection, recommendation algorithms and delivery;</li>
        <li>communicate with you concerning our service so that we can send you news about Netflix, details about new features and content available on Netflix, special offers, promotional announcements, consumer surveys, and to assist you with operational requests such as password reset requests. These communications may be by various methods, such as email, push notifications, text message, online messaging channels, and matched identifier communications (described below). Please see the "Your Choices" section of this Privacy Statement to learn how to set or change your communications preferences.</li>
       </ul>

       <p>Our content recommendations system strives to predict what you will be in the mood to watch when you log in. However, our content recommendations system does not infer or attach socio-demographic information (like gender or race) to you. We have a Help article that explains how our content recommendations system works - spoilers: the biggest driver of these recommendations is what you actually choose to watch through our service. You can read the article at <a href="#" className="text-decoration-none text-danger">netflix.com/recommendations.</a></p>

        <h6 className="fw-bold mb-3">Disclosure of Information</h6>

        <p>We disclose your information for certain purposes and to third parties, as described below:</p>
        <br/>
        <ul>
          <li><span className="fw-bold">The Netflix family of companies: </span>
          We share your information among the Netflix family of companies (<a href="#" className="text-danger text-decoration-none">help.netflix.com/legal/corpinfo</a>) as needed for: providing you with access to our services; providing customer support; making decisions about service improvements; content development; and for other purposes described in the Use of Information section of this Privacy Statement.
          </li>

          <li> <span className="fw-bold">Service Providers: </span>
          We use other companies, agents or contractors ("Service Providers") to perform services on our behalf or to assist us with the provision of services to you. For example, we engage Service Providers to provide marketing, advertising, communications, security, infrastructure and IT services, to customize, personalize and optimize our service, to process credit card transactions or other payment methods, to provide bank account or balance information, to provide customer service, to analyze and enhance information (including information about users' interactions with our service), and to process and administer consumer surveys. In the course of providing such services, these Service Providers may have access to your personal or other information. We do not authorize them to use or disclose your personal information except in connection with providing their services (which includes maintaining and improving their services).
          </li>

          <li><span className="fw-bold">Partners: </span>
          As described above, you may have a relationship with one or more of our Partners, in which case we may share certain information with them in order to coordinate with them on providing the Netflix service to members and providing information about the availability of the Netflix service. For example, depending on what Partner services you use, we may share information:
             
             <ul className="mt-3">
                <li>in order to facilitate Partner pre-paid promotions or collection of payment for the Netflix service for distribution to us;</li>
                <li>with Partners who operate voice assistant platforms that allow you to interact with our service using voice commands;</li>
                <li>so that content and features available in the Netflix service can be suggested to you in the Partner’s user interface. For members, these suggestions are part of the Netflix service and may include customized and personalized viewing recommendations.</li>
             </ul>

          </li>

          <li><span className="fw-bold">Promotional offers: </span>
          We may offer joint promotions or programs that, in order for your participation, will require us to share your information with third parties. In fulfilling these types of promotions, we may share your name and other information in connection with fulfilling the incentive. Please note that these third parties are responsible for their own privacy practices.
          </li>

          <li><span className="fw-bold">Protection of Netflix and others: </span>
          Netflix and its Service Providers may disclose and otherwise use your personal and other information where we or they reasonably believe such disclosure is needed to (a) satisfy any applicable law, regulation, legal process, or governmental request, (b) enforce applicable terms of use, including investigation of potential violations thereof, (c) detect, prevent, or otherwise address illegal or suspected illegal activities (including payment fraud), security or technical issues, or (d) protect against harm to the rights, property or safety of Netflix, its users or the public, as required or permitted by law.
          </li>

          <li><span className="Buisness transfer">Business transfers: </span>
          In connection with any reorganization, restructuring, merger or sale, or other transfer of assets, we will transfer information, including personal information, provided that the receiving party agrees to respect your personal information in a manner that is consistent with our Privacy Statement.
          </li>
        </ul>

        <p>
        Whenever in the course of sharing information we transfer personal information to other countries we will ensure that the information is transferred in accordance with this Privacy Statement and as permitted by the applicable laws on data protection. You can find out more about how we disclose and transfer your personal information internationally at this link: <a href="#" className="text-danger text-decoration-none">help.netflix.com/legal/personal-information-international-transfers.</a> 
        </p>
        <p>You may also choose to disclose your information in the following ways:</p>

        <ul>
          <li>certain portions of our service may contain a tool which gives you the option to share information by email, text message and social or other sharing applications, using the clients and applications on your smart device;</li>
          <li>social plugins and similar technologies allow you to share information; and</li>
          <li>through Netflix game features, such as multiplayer options and leaderboards.</li>
        </ul>

        <p>Social plugins and social applications are operated by the social networks themselves, and are subject to their terms of use and privacy policies. Similarly, some of the Netflix game features mentioned above (such as multiplayer gameplay, leaderboards, and game saving options) may require use of a third-party service, which is subject to that service’s terms of use and privacy policy.</p>
       
       <h5 className="fw-bold mb-3">Access to Account and Profiles</h5>

       <ul>
        <li><span className="fw-bold">“Remember me” function: </span>
        For ease of access to your account, you can use the "Remember me on this device" function when you log in to the website. This function uses technology that enables us to provide direct account access and to help administer the Netflix service without requiring reentry of any password or other user identification when your browser revisits the service. 
        </li>

        <li><span className="fw-bold">Giving others access to your account: </span>
        If you share or otherwise allow others to have access to your account, they will be able to see shows you have watched, ratings, account information (including your email address or other information in the "Account" area of our website), and game related information (such as your in-game name and saved game progress). This remains true even if you use our profiles feature. You might have the option to use seamless account login through the Netflix mobile app, which enables login to the Netflix app on smart TVs, set top boxes, and other streaming media devices on the network to which you are connected. If you use that feature, those devices will remain signed into your account unless you later log out of those devices.
        </li>

        <li><span className="fw-bold">Profiles: </span>
        Profiles allow users to have a distinct, personalized Netflix experience, built around the movies and shows of interest to them, as well as separate watch histories. Please note that profiles are available to everyone who uses your Netflix account, so that anyone with access to your Netflix account can navigate to and use, edit or delete profiles. You should explain this to others with access to your account, and if you do not wish them to use or change your profile, be sure to let them know. Profile users may be offered the opportunity to add an email address, phone number or other information to the profile and will be provided with notice of collection and use at the time such information is requested (the Profile Privacy Notice applies (<a href="#" className="text-danger text-decoration-none">help.netflix.com/legal/profileprivacy</a>)). We have various parental controls available, you can learn more by reading our Help article located at <a href="#" className="text-danger text-decoration-none">help.netflix.com/node/264.</a>
        </li>

        <li><span className="fw-bold">Profile Transfers:</span>
        The profile transfer feature on your account allows you and users with access to your account to transfer an eligible profile from your account to a separate account (including information such as viewing history and recommendations). You can change the setting for this feature in the Settings section of your Account page. You can learn more by reading our Help article located at <a href="#" className="text-danger text-decoration-none"> help.netflix.com/node/122698.</a>
        </li>

        <li><span className="fw-bold">Removing device access to your Netflix account: </span>
        To remove access to your Netflix account from your devices, visit the "Account" section of our website, choose "Sign out of all devices," and follow the instructions to deactivate your devices (note, deactivation may not occur immediately). Where possible, users of public or shared devices should log out at the completion of each visit. If you sell or return a computer or Netflix ready device, you should log out and deactivate the device before doing so. If you do not maintain the security of your password or device, or fail to log out or deactivate your device, subsequent users may be able to access your account, including your personal information.
        </li>
       </ul>

       <h5 className="fw-bold mb-3">Your Choices</h5>

       <p>
      <strong> Email and Text Messages.</strong> If you no longer want to receive certain communications from us via email or text message, simply access the "Communications Settings" option in the "Account" section of our website and uncheck those items to unsubscribe. Alternatively, click the "unsubscribe" link in the email or reply STOP (or as otherwise instructed) to the text message. Please note that you cannot unsubscribe from service-related correspondence from us, such as messages relating to your account transactions.
       </p>

       <p><strong>Push Notifications.</strong>
       You can choose to receive mobile push notifications from Netflix. On some device operating systems, you will be automatically enrolled in the notifications. If you subsequently decide you no longer wish to receive these notifications, you can use your mobile device's settings functionality to turn them off. We also offer push notifications on certain web browsers. If you agree to receive those notifications and subsequently decide you no longer wish to receive these notifications, you can use your browser’s settings to turn them off.
       </p>

       <p> <strong>Matched Identifier Communications from Netflix.</strong>
       Some third party sites and apps allow us to reach our users with online promotions about our titles and services by sending a privacy protective identifier to the third party. A privacy protective identifier means we convert the original information (such as an email address or phone number) into a value to keep the original information from being revealed. The third party compares the privacy protective identifier to identifiers in its database and there will be a match only if you have used the same identifier (such as an email address) with Netflix and the third party. If there is a match, Netflix can then choose whether or not to send a given promotional communication to you on that third party site or app, and can optimize and better measure the effectiveness of online advertising. You can opt out in the “Marketing Communications” section of the “Account” section of our website.
       </p>

       <p> <strong>Behavioral Advertising.</strong>
       Behavioral advertisements are those that are selected based on your use and/or interactions with various unaffiliated third party apps or websites across the Internet (behavioral advertising). Netflix can advertise its services using behavioral advertising, and if you are using a browser, then certain cookies and web beacons can be used to collect information to help determine your likely interests. If you are using a mobile device, tablet, or streaming media device that includes a resettable device identifier, then that identifier can be used to help determine your likely interests. For your choices about behavioral ads from Netflix, please see the "Cookies and Internet Advertising" section (below).
       </p>

       <h5 className="fw-bold mb-3">Cookies and Internet Advertising</h5>

       <p>We and our Service Providers use cookies and other technologies (such as web beacons), as well as resettable device identifiers, for various reasons. We want you to be informed about our use of these technologies, so this section explains the types of technologies we use, what they do, and your choices regarding their use. </p>

       <h6 className="fw-bold">Cookies and similar technologies, web beacons, and resettable device identifiers</h6> 
       
       <p>Cookies are small data files that are commonly stored on your device when you browse and use websites and online services. We use other technologies such as browser storage and plugins (e.g., HTML5, IndexedDB, and WebSQL). Like cookies, these other technologies may store small amounts of data on your device. Web beacons (also known as clear gifs or pixel tags) often work in conjunction with cookies. In many cases, declining cookies will impair the effectiveness of web beacons associated with those cookies.</p>
       
       <p>If you use the Netflix app on a mobile device, tablet, or streaming media device, we may collect a resettable device identifier from your device. Resettable device identifiers (also known as advertising identifiers) are similar to cookies and are found on many mobile devices and tablets (for example, the "Identifier for Advertisers" (or IDFA) on Apple iOS devices and the "Google Advertising ID" on Android devices), and certain streaming media devices. Like cookies, resettable device identifiers are used to make online advertising more relevant and for analytics and optimization purposes.</p>

       <h6 className="fw-bold">Why does Netflix use these technologies?</h6>

       <p>We use these types of technologies for various reasons, like making it easy to access our services by remembering you when you return; to provide, analyze, understand and enhance the use of our services; to enforce our terms, prevent fraud; to improve site performance, monitor visitor traffic and actions on our site; and to deliver and tailor our marketing or advertising, and to understand interactions with our emails, marketing, and online ads on third party sites.  </p>
       
       <p>To help you better understand how we use cookies and resettable device identifiers, please see the information below:</p>
       <br/>

       <ul>

        <li> <span className="fw-bold">Essential cookies: </span> 
        These cookies are strictly necessary to provide our website or online service. For example, we and our Service Providers may use these cookies to authenticate and identify our members when they use our websites and applications so we can provide our service to them. They also help us to enforce our Terms of Use, prevent fraud and maintain the security of our service. 
        </li>

        <li> <span className="fw-bold">Performance and functionality cookies: </span>
        These cookies help us to customize and enhance your online experience with Netflix. For example, they help us to remember your preferences and prevent you from needing to re-enter information you previously provided (for example, during member sign up). We also use these cookies to collect information (such as popular pages, conversion rates, viewing patterns, click-through and other information) about our visitors' use of the Netflix service so that we can enhance and personalize our website and service and conduct market research. Deletion of these types of cookies may result in limited functionality of our service.
        </li>

        <li> <span className="fw-bold">Advertising cookies and resettable device identifiers: </span>
        These cookies and resettable device identifiers use information about your use of this and other websites and apps, your response to ads and emails, and to deliver ads that are more relevant to you and for analytics and optimization purposes.
        </li>
       </ul>

       <p>
       When we advertise our services on other websites or apps, some of the websites and apps where we advertise, as well as advertising technology companies that we  use to purchase, deliver, optimize, and/or measure our  advertisements (collectively “Advertising Partners”), may receive information from us as part of our campaign targeting, measurement, and optimization (e.g., steps completed in sign-up and site visit or app open/install information). Common uses of this type of information are to judge the effectiveness of and optimize ad campaigns, by allowing Advertising Partners to see when someone who saw an ad later signed up for our service. Another common use is to make sure we do not serve ads trying to get individuals to sign up for the Netflix service if they are already a Netflix user. Netflix uses contractual and technical measures designed to prevent Advertising Partners from accessing information regarding specific title selections you make, URLs you land on, or shows you have watched on our service. We do not share information about title selections or your shows you have watched on our service.
       </p>

       <h6 className="fw-bold">How can I exercise choice regarding these technologies?</h6>
       
       <ul>

        <li>To exercise choice regarding cookies <br/>
        For more information about cookies set through our website, as well as other types of online tracking (including the collection of information by third parties about your online activities over time and across third party websites or online services for online behavioral advertising), and to exercise choices regarding them, <a href="#" className="text-danger text-decoration-none">click here</a>. At this time, we do not respond to web browser "do not track" signals.
        </li>

        <li> <span className="fw-bold">To exercise choice regarding resettable device identifiers</span> <br/>
        To opt out of behavioral ads from Netflix in connection with a resettable device identifier on a mobile device, tablet, or streaming media devices, please configure the appropriate setting on your device (usually found under "privacy" or "ads" in your device's settings). You may still see Netflix ads on your device, but they will not be selected based on your likely interests.
        </li>

        <li> <span className="fw-bold">To exercise choice regarding other technologies</span> <br/>
        There are a number of ways to exercise choice regarding technologies that are similar to cookies, such as browser storage and plugins (e.g., HTML5, IndexedDB, and WebSQL). For example, many popular browsers provide the ability to clear browser storage, commonly in the settings or preferences area; see your browser's help function or support area to learn more. Other technologies, such as Silverlight storage, may be cleared from within the application.
        </li>

       </ul>
       
       <h5 className="fw-bold">Your Information and Rights</h5>

       <p>You can request access to your personal information, or correct or update out-of-date or inaccurate personal information we hold about you. You may also request that we delete personal information that we hold about you.</p>
       
       <p>
       When you visit the "Account" portion of our website, where you have the ability to access and update a broad range of information about your account, including your contact information, your Netflix payment information, and various related information about your account (such as the content you have viewed and rated). You must be signed in to access the "Account" section.
       </p>

       <p>
       If you are the account owner, to download a copy of your personal information go to: <a href="#"  className="text-danger text-decoration-none">netflix.com/account/getmyinfo</a> (you must be signed in to access the "Account" section), and follow the instructions.
       </p>

      <p>
      For other requests, or if you have a question regarding our privacy practices, please contact our Data Protection Officer/Privacy Office at <a href="#"  className="text-danger text-decoration-none">privacy@netflix.com.</a> For more information about how to access your information, including our verification process, please reference this help article: <a href="#" className="text-danger text-decoration-none"> help.netflix.com/node/100624</a>. We respond to all requests we receive from individuals wishing to exercise their data protection rights in accordance with applicable data protection laws. Please also see the "Your Choices" section of this Privacy Statement for additional choices regarding your information.
      </p>

      <p>
      Retention of information: We may retain information as required or permitted by applicable laws and regulations, including to honor your choices, for our billing or records purposes and to fulfill the purposes described in this Privacy Statement. Specifically, we retain information for our legitimate interests and essential business purposes, such as operating, maintaining and improving our services; complying with our legal obligations; and exercising our legal rights and remedies, including enforcing our terms of use. Our retention of information is based on many factors such as your relationship with Netflix (for example, are you a Netflix current member); the nature of the information; compliance with our legal obligations; defending or resolving actual or anticipated legal claims. We take reasonable measures to destroy or de-identify personal information in a secure manner when it is no longer required. For information about deletion, removal and retention of information, please reference this help article: <a href="#" className="text-danger text-decoration-none">help.netflix.com/node/100625</a>.
      </p>
      <br/>

      <h5 className="fw-bold">Security</h5>
      <p>
      We use reasonable administrative, logical, physical and managerial measures to safeguard your personal information against loss, theft and unauthorized access, use and modification. These measures are designed to provide a level of security appropriate to the risks of processing your personal information.
      </p>

      <h5 className="fw-bold">Other Websites, Platforms and Applications</h5>
      <p>
      The Netflix service may be provided through and/or utilize features (such as the display of social media content, or the provision of voice controls) operated by third party platforms, or contain links to sites operated by third parties whose policies regarding the handling of information may differ from ours. For example, you may be able to access the Netflix service through platforms such as gaming systems, smart TVs, mobile devices, set top boxes and a number of other Internet connected devices. These websites and platforms have separate and independent privacy or data policies, privacy statements, notices and terms of use, which we recommend you read carefully. In addition, you may encounter third party applications that interact with the Netflix service.
      </p>

      <br/>

      <h5 className="fw-bold">Children</h5>
      <p>You must be at least 18 years of age or older to subscribe to the Netflix service. Minors may only use the service with the involvement, supervision, and approval of a parent or legal guardian.</p>

      <br/>

      <h5 className="fw-bold">Changes to This Privacy Statement</h5>
      <p>
      We will update this Privacy Statement from time to time in response to changing legal, regulatory or operational requirements. We will provide notice of any such changes (including when they will take effect) in accordance with law. Your continued use of the Netflix service after any such updates take effect will constitute acknowledgement and (as applicable) acceptance of those changes. If you do not wish to acknowledge or accept any updates to this Privacy Statement, you may cancel your use of the Netflix service. To see when this Privacy Statement was last updated, please see the "Last Updated" section below.
      <br/>
      To see the prior version of this document, please go to <a href="#" className="text-danger text-decoration-none">netflix.com/privacyupdates</a>.
      </p>

      <p>    <strong>Last Updated: </strong>November 1, 2022  </p>


        </section>
        </>
    )
}
export default PrivacySection;