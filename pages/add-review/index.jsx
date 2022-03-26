import Nav from '../../components/Nav/';
import styles from './review.module.scss'
import { useEffect, useState } from 'react';
import DaoCard from '../../components/DaoCard';

export default function index() {

    return (
        <>
            <div className={styles.addReview}>
                <Nav />
                <div>
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
                <div className={styles.rightSidebar}>
                    <h3>Recent reviews</h3>
                    <div className={styles.reviewCard + ' ' + styles.r1}>
                        <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint.</p>
                        <div className={styles.profile}>
                            <img className={styles.commaFloat} src="/comma-float.png" alt="" />
                            <img style={{ gridArea: 'a' }} className={styles.profileImg} src="https://assets-global.website-files.com/5ec7dad2e6f6295a9e2a23dd/5edfa7c6f978e75372dc332e_profilephoto1.jpeg" alt="" />
                            <p>Van Goh</p>
                            <Starrating rating={4} />
                        </div>
                    </div>
                    <div className={styles.reviewCard + ' ' + styles.r1}>
                        <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint.</p>
                        <div className={styles.profile}>
                            <img className={styles.commaFloat} src="/comma-float.png" alt="" />
                            <img style={{ gridArea: 'a' }} className={styles.profileImg} src="https://assets-global.website-files.com/5ec7dad2e6f6295a9e2a23dd/5edfa7c6f978e75372dc332e_profilephoto1.jpeg" alt="" />
                            <p>Van Goh</p>
                            <Starrating rating={4} />
                        </div>
                    </div>
                    <div className={styles.reviewCard + ' ' + styles.r1}>
                        <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint.</p>
                        <div className={styles.profile}>
                            <img className={styles.commaFloat} src="/comma-float.png" alt="" />
                            <img style={{ gridArea: 'a' }} className={styles.profileImg} src="https://assets-global.website-files.com/5ec7dad2e6f6295a9e2a23dd/5edfa7c6f978e75372dc332e_profilephoto1.jpeg" alt="" />
                            <p>Van Goh</p>
                            <Starrating rating={4} />
                        </div>
                    </div>
                    <div className={styles.reviewCard + ' ' + styles.r1}>
                        <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint.</p>
                        <div className={styles.profile}>
                            <img className={styles.commaFloat} src="/comma-float.png" alt="" />
                            <img style={{ gridArea: 'a' }} className={styles.profileImg} src="https://assets-global.website-files.com/5ec7dad2e6f6295a9e2a23dd/5edfa7c6f978e75372dc332e_profilephoto1.jpeg" alt="" />
                            <p>Van Goh</p>
                            <Starrating rating={4} />
                        </div>
                    </div>
                    <div className={styles.reviewCard + ' ' + styles.r1}>
                        <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint.</p>
                        <div className={styles.profile}>
                            <img className={styles.commaFloat} src="/comma-float.png" alt="" />
                            <img style={{ gridArea: 'a' }} className={styles.profileImg} src="https://assets-global.website-files.com/5ec7dad2e6f6295a9e2a23dd/5edfa7c6f978e75372dc332e_profilephoto1.jpeg" alt="" />
                            <p>Van Goh</p>
                            <Starrating rating={4} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
                <h3>Other similar DAOs</h3>
                <div className={styles.daoList}>
                    <DaoCard />
                    <DaoCard />
                    <DaoCard />
                    <DaoCard />
                    <DaoCard />
                </div>

            </div>
        </>
    )
}

function Starrating({ rating }) {
    return (
        <div className={styles.ratingComp}>
            {
                [1, 2, 3, 4, 5].map((ele) => {
                    let img_src = "/star-blank.png"
                    if (ele <= rating) {
                        img_src = "/star-filled.png"
                    }
                    return (
                        <img key={"i" + ele} src={img_src} alt="" />
                    )
                })
            }
        </div>
    )
}

function SliderComp() {
    const [sliderValue, setsliderValue] = useState(50);
    return (
        <div className={styles.slider}>
            <span className={styles.sliderComp}>
                <div
                    className={styles.sliderBarBg} />
                <div
                    style={{ width: `${Math.min(sliderValue, 97)}%` }}
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
                           key={"st"+ele} onClick={() => { setRating(ele); }}
                            src={img_src} alt=""
                        />
                    )
                })
            }
        </div>
    )
}
