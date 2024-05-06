import React, { useState } from 'react';
import '../css/faq.css';
import firstArrow from '../images/icon-arrow.svg';

export default function Faq() {
    const [isAnswerOpen, setIsAnswerOpen] = useState({
        question1: false,
        question2: false,
        question3: false,
        question4: false,
    });

    const toggleAnswer = (question) => {
        setIsAnswerOpen(prevState => ({
            ...prevState,
            [question]: !prevState[question]
        }));
    };

    return (
        <div className='faqContainer' id='faqs'>
            <div className="titleAndDes">
                <h3>Frequently Asked Questions</h3>
                <p>Here are some of our FAQs. If you have any other questions you’d like
                    answered please feel free to email us.</p>
            </div>
            <div className="questions">
                {/* question 1 */}
                <section className="question">
                    <div className='a'>
                        <h5 className='questionTitle'> What is Bookmark?</h5>
                        <img
                            className={`questionArrow ${isAnswerOpen.question1 ? 'rotate' : 'noRotate'}`}
                            src={firstArrow}
                            alt=""
                            onClick={() => toggleAnswer('question1')}
                        />
                    </div>
                    {isAnswerOpen.question1 && <p className='answer'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt 
                        justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.</p>}
                </section>
                {/* question 2 */}
                <section className="question">
                    <div className='a'>
                        <h5 className='questionTitle'>  How can I request a new browser?</h5>
                        <img
                            className={`questionArrow ${isAnswerOpen.question2 ? 'rotate' : 'noRotate'}`}
                            src={firstArrow}
                            alt=""
                            onClick={() => toggleAnswer('question2')}
                        />
                    </div>
                    {isAnswerOpen.question2 && <p className='answer'>Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. 
                        Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, 
                        ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
                        Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.</p>}
                </section>
                {/* question 3 */}
                <section className="question">
                    <div className='a'>
                        <h5 className='questionTitle'> Is there a mobile app?</h5>
                        <img
                            className={`questionArrow ${isAnswerOpen.question3 ? 'rotate' : 'noRotate'}`}
                            src={firstArrow}
                            alt=""
                            onClick={() => toggleAnswer('question3')}
                        />
                    </div>
                    {isAnswerOpen.question3 && <p className='answer'>Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum 
                        urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed 
                        sollicitudin ex et ultricies bibendum.</p>}
                </section>
                {/* question 4 */}
                <section className="question">
                    <div className='a'>
                        <h5 className='questionTitle'>What about other Chromium browsers?</h5>
                        <img
                            className={`questionArrow ${isAnswerOpen.question4 ? 'rotate' : 'noRotate'}`}
                            src={firstArrow}
                            alt=""
                            onClick={() => toggleAnswer('question4')}
                        />
                    </div>
                    {isAnswerOpen.question4 && <p className='answer'>Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam 
                        vitae neque eget nisl gravida pellentesque non ut velit.</p>}
                </section>
                {/* Add more sections for other questions */}
            </div>
            <button className='faqsMore'>more info</button>
        </div>
    );
}
