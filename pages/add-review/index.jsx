import Nav from '../index/Nav';
import styles from './review.module.scss'
import { useEffect, useState } from 'react';

export default function index() {



    return (
        <div className={styles.addReview}>
            <Nav />
            <div className={styles.breadCrum}>
                <img src="left-arrow.png" alt="" />
                <span>
                    <p>Add review for</p>
                    <h3>Bankless DAO</h3>
                </span>
            </div>
            <div className={styles.reviewForm}>
                <p className={styles.title}>Rate your experience</p>
                <Rating />
                <div className={styles.desc}>
                    <p className={styles.title}>Tell us about your experience</p>
                    <textarea placeholder='This is where you will write your review. Explain what happened, and leave out offensive words. Keep your feedback honest, helpful and constructive.' name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div className={styles.dialCon}>
                    <p className={styles.title}>Please rate the following experiences</p>
                    <div className={styles.col}>
                        <div className={styles.c1}>
                            <div className={styles.dial}>
                                <p className={styles.dialTitle}>Do you resonate with the vibes in the DAO community?</p>
                                <SliderComp />
                            </div>
                            <div className={styles.dial}>
                                <p className={styles.dialTitle}>Do you believe your opinions matter in the DAO community?</p>
                                <SliderComp />
                            </div>
                            <div className={styles.dial}>
                                <p className={styles.dialTitle}>Would you recommed this DAO/community to your friend?</p>
                                <SliderComp />
                            </div>
                        </div>
                        <div className={styles.c2}>
                            <div className={styles.dial}>
                                <p className={styles.dialTitle}>Do you resonate with the vibes in the DAO community?</p>
                                <SliderComp />
                            </div>
                            <div className={styles.dial}>
                                <p className={styles.dialTitle}>Do you believe your opinions matter in the DAO community?</p>
                                <SliderComp />
                            </div>
                            <div className={styles.dial}>
                                <p className={styles.dialTitle}>Would you recommed this DAO/community to your friend?</p>
                                <SliderComp />
                            </div>
                        </div>
                    </div>
                    <div className={styles.tc}>
                        <input className={styles.checkbox} type="checkbox" />
                        <p>I confirm this review is about my own genuine experience. I am eligible to leave this review, and have not been offered any incentive or payment to leave a review for this company.</p>
                    </div>
                    <button className={styles.btnFilled}>Post the review</button>
                </div>
            </div>
        </div>
    )
}

// function SliderComp() {
//     const [sliderValue, setsliderValue] = useState(0);
//     console.log(sliderValue);
//     return (
//         <input type="range"
//             min="0" max="100" step="1"
//             value={sliderValue}
//             onChange={(e) => {
//                 setsliderValue(e.target.value);
//                 e.target.style.setProperty("--slider-value", `${e.target.value - (e.target.value * (0.1))}%`)
//                 e.target.style.setProperty("--slider-value", `${e.target.value}%`)
//             }}
//         />
//     )
// }

function SliderComp() {
    const [sliderValue, setsliderValue] = useState(50);
    console.log(sliderValue);
    return (
        <div className={styles.slider}>
            <span className={styles.sliderComp}>
                <div
                    className={styles.sliderBarBg} />
                <div
                    style={{ width: `${Math.min(sliderValue, 95)}%` }}
                    className={styles.sliderBar} />
                <input type="range"
                    min="0" max="100" step="1"
                    value={sliderValue}
                    onChange={(e) => {
                        setsliderValue(e.target.value);
                    }}
                />
            </span>
            <p className={styles.value} >{sliderValue}%</p>
        </div>
    )
}

function Rating() {
    const [rating, setRating] = useState(0);
    return (
        <div className={styles.ratingComp}>
            {
                [1, 2, 3, 4, 5].map((ele) => {
                    let img_src = '/star-blank.png';
                    if (ele <= rating) {
                        img_src = '/star-filled.png';
                    }
                    return (
                        <img
                            onClick={() => { setRating(ele); }}
                            src={img_src} alt=""
                        />
                    )
                })
            }
        </div>
    )
}
