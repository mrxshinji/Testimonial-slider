import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import tanya from "../assets/images/image-tanya.jpg";
import john from "../assets/images/image-john.jpg";
import next from "../assets/images/icon-next.svg";
import prev from "../assets/images/icon-prev.svg";

// init data
const data = [
    {
        id: 0,
        name: "Tanya Sinclair",
        job: "UX Engineer",
        testimonial: "“ I`ve been interested in coding for a while but never taken the jump, until now. I couldn`t recommend this course enough. I`m now in the job of my dreams and so excited about the future. ”",
        image: tanya
    },
    {
        id: 1,
        name: "John Tarkpor",
        job: "Junior Front-end Developer",
        testimonial: "“ If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer ”",
        image: john
    },
];

export default function SlideList() {
    // setting it to switch view of data based on index (or id )
    const [id, setId] = useState(0);
    // setting slide direction , true = left or next
    const [direction, setDirection] = useState(true);

    // move to next item
    const nextId = (e) => {
        e.preventDefault();
        setId(prev => (prev + 1 < data.length) ? prev + 1 : prev);
        setDirection(true)
    }

    // move to prev item
    const prevId = (e) => {
        e.preventDefault();
        setId(prev => (prev > 0) ? prev - 1 : prev)
        setDirection(false)
    }


    // SlideItem require: name, job, testimonial, image
    function SlideItem(props) {
        return (
            <div className="slide-item">
                <div className="profile-img">
                    <img src={props.image} alt="Profile" />
                </div>
                <div className="testimonial">
                    <p id="testimonial">{props.testimonial}</p>
                    <div className="inline">
                        <p id="name">{props.name}</p>
                        <p id="job">{props.job}</p>
                    </div>
                </div>
            </div>
        // SLideItem end
        )
    }


    return (
        <div className="slide-list">
            {/* absolute position button  */}
            <div id="slide-btn">
                <button id="slide-back" onClick={prevId}><img src={prev} alt="next"/></button>
                <button id="slide-next" onClick={nextId}><img src={next} alt="previous"/></button>
            </div>
            {/* Transition group and childfactory for smooth animation */}
            <TransitionGroup
                className="slide-zone" 
                 childFactory={child => 
                         React.cloneElement(child, { 
                             classNames: direction ? "slide-left" : "slide-right", 
                             timeout: 800 
                         })
                     }
                >
                {/* animation based on key={id} */}
                <CSSTransition
                    key={id}
                    timeout={800}
                >   
                    {/* // SlideItem require: name, job, testimonial, image ...data search based on index*/}
                    <SlideItem 
                        key={data[id].id} 
                        name={data[id].name}
                        job={data[id].job}
                        testimonial={data[id].testimonial}
                        image={data[id].image}
                    />
                </CSSTransition>
             </TransitionGroup>
        </div>
    )
}