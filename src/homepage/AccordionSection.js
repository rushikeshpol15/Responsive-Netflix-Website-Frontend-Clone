import { useState } from "react";
import "./homepage.css";
import SignInInput from "./SignInInputComponent";

let EnglishOne=
"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices <br>You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price.There's always something new to discover, and new TV shows and movies are added every week!";

let AccordionArr=[

    {question:"What is Netflix?",
    id:"one",
    answer:"Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price.There's always something new to discover, and new TV shows and movies are added every week!"
    },

    {
        question:"How much does Netflix cost?",
        id:"two",
        answer:"Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts."
    },
    {
        question:"Where can i watch?",
        id:"three",
        answer:"Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
    },

    {question:"How do i cancel? ",
    id:"four",
    answer:"Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
    },

    {question:"What can i watch on Netflix? ",
    id:"five",
    answer:"Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
    },
    {question:"Is Netflix good for kids?",
    id:"six",
    answer:"The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
    }

    
]
let any="fwub,fsubeusa-abfaufe";

function Accordion(props)
{
    let [plusIndex,setPlusIndex]=useState();

    function handleIndex(index)
    {
        if(plusIndex==index){setPlusIndex(null); return;}
        setPlusIndex(index);
    }
    return(
        <>
        <section className="Accordion-section">
            <div className="Accordion-section-container mb-4">

                <h1>Frequently Asked Questions</h1>

                <div className="accordion" id="accordion-example">

                    {
                        AccordionArr.map((element,index)=>{
                            return(
                            <div className="accordion-item  mb-3" key={index}>
                            <div className="accordion-header">
                                
                                <button className="accordion-buttons  borderless d-inline-flex justify-content-between align-items-center" onClick={()=>{handleIndex(index)}} data-bs-toggle="collapse" data-bs-target={'#'+element.id}>
                                {element.question}
                                <span className={(index==plusIndex)?"plus active-plus":"plus"}>+</span>
                                </button>
                            </div>
                            <div className="collapse" data-bs-parent="#accordion-example" id={element.id}>
                              <div className="accordion-body">
                                <div className="text-wrap">{element.answer}
                                </div>
                              </div>
                            </div>
                        </div>
                            )
                        }

                        )
                    }

                  

                </div>

            </div>
            <div className="Accordion-bottom-div pb-5">
                <h5 className="text-white my-4">Ready to watch? Enter your email to create or restart your membership.</h5>
                <SignInInput handleEmail={props.handleEmail}/>
            </div>
        </section>
        </>
    )
}
export default Accordion;