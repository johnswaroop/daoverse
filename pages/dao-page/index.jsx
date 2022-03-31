import React from 'react'
import styles from './daoPage.module.scss'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Nav from '../../components/Nav/';
import DaoCard from '../../components/DaoCard';

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
 

function DaoPage() {
    return (
        <>
            <div className={styles.con}>
                <Nav />
                <div className={styles.cover}>
                    <img src="/dao-cover.png" alt="" />
                    <div className={styles.gradient} />
                    <div className={styles.daoInfo}>
                        <h1>Bankless DAO</h1>
                        <Starrating rating={3} />
                        <div className={styles.tags}>
                            <span>Collector DAO</span>
                            <span>Service DAO</span>
                        </div>
                    </div>
                </div>
                <div className={styles.titleBar}>
                    <h1>Reviews</h1>
                    <div className={styles.btns}>
                        <button>Add a Review</button>
                        <button>Daoverse.com/banklessdao</button>
                    </div>
                </div>
                <div className={styles.contentCon}>
                    <div className={styles.content}>
                        <div className={styles.dials}>
                            <div className={styles.dialCon}>
                                <Dial percentage={50} />
                                <p>relate to the vibes!</p>
                            </div>
                            <div className={styles.dialCon}>
                                <Dial percentage={50} />
                                <p>says DAO has great incentives for members</p>
                            </div>
                            <div className={styles.dialCon}>
                                <Dial percentage={50} />
                                <p>says their opinions are been heard</p>
                            </div>
                            <button>
                                <img src="/down-arrow.png" alt="" />
                            </button>
                        </div>

                        <Comment />
                        <Comment />
                        <Comment />
                        <Comment />

                        <button className={styles.seeMore}>See more</button>

                    </div>
                    <div className={styles.rightNav}>
                        <div className={styles.socials}>
                            <button style={{ background: "#1da1f2" }}>
                                <img src="/twitter-white.png" alt="" />
                                <p>10K followers</p>
                            </button>
                            <button style={{ background: "#F7F7F7" }}>
                                <img src="/web-outline.png" alt="" />
                                <p style={{ color: "black" }}>Website</p>
                            </button>
                            <button style={{ background: "#4962FE" }}>
                                <img src="/discord-white.png" alt="" />
                                <p>5K members</p>
                            </button>
                            <button style={{ background: "#F7F7F7" }}>
                                <img src="/web-outline.png" alt="" />
                                <p style={{ color: "black" }}>Website</p>
                            </button>
                        </div>

                        <div className={styles.daoInfoPane}>
                            <span className={styles.qn}>
                                <h3>What is it?</h3>
                                <p>Bankless Dao is a group of people who are revolting against the current banking system and a them one at a time.</p>
                            </span>
                            <span className={styles.qn}>
                                <h3>What problem does it solve?</h3>
                                <p>Bankless Dao is a group of people who are revolting.</p>
                            </span>
                            <span className={styles.qn}>
                                <h3>Vision</h3>
                                <p>Bankless Dao is a group of people who are revolting.</p>
                            </span>
                            <span className={styles.qn}>
                                <h3>Type of DAO</h3>
                                <p>Service DAO, Collector DAO</p>
                            </span>
                            <span className={styles.qn}>
                                <h3>URL Slug</h3>
                                <p>Bankless Dao is a group of people who are revolting.</p>
                            </span>
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

function Comment() {
    return (
        <div className={styles.comment}>
            <div className={styles.profileName}>
                <img style={{ gridArea: 'a' }} src="/herobg.png" alt="" />
                <h1>Addresses</h1>
                <Starrating rating={3} />
            </div>
            <p className={styles.commentText}>
                There’s no other program that walks you through exactly what you need to know to start an online store fast, written by someone who has built several 7-figure ecommerce businesses from scratch. What’s more, everything has been broken down in step-by-step detail with real action plans including finding your niche.
            </p>
            <div className={styles.likes}>
                <span>
                    <img src="/thumbs-up.png" alt="" />
                    <p>234</p>
                </span>
                <span>
                    <img src="/thumbs-down.png" alt="" />
                    <p>234</p>
                </span>

            </div>
        </div>
    )
}

function Dial({ percentage }) {
    return (
        <div className={styles.dl}>
            <CircularProgressbar
                value={percentage}
                text={`${percentage}%`}
                strokeWidth={5.2}
                styles={{
                    // Customize the root svg element
                    root: {},
                    // Customize the path, i.e. the "completed progress"
                    path: {
                        // Path color
                        stroke: `rgba(49,99, 242)`,
                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                        strokeLinecap: 'round',
                        // Customize transition animation
                        transition: 'stroke-dashoffset 0.5s ease 0s',
                        // Rotate the path
                        transform: 'rotate(0.25turn)',
                        transformOrigin: 'center center',
                    },
                    // Customize the circle behind the path, i.e. the "total progress"
                    trail: {
                        // Trail color
                        stroke: '#E4E2FB',
                        // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                        strokeLinecap: 'butt',
                        // Rotate the trail
                        transform: 'rotate(0.25turn)',
                        transformOrigin: 'center center',
                    },
                    // Customize the text
                    text: {
                        // Text color
                        fill: '#0000000',
                        // Text size
                        fontSize: '0px',
                        fontWeight: 'bold'
                    },
                    // Customize background - only used when the `background` prop is true
                    background: {
                        fill: '#3e98c7',
                    },
                }}
            />
            <h1 className={styles.percentText}>
                {percentage}%
            </h1>

        </div>
    )
}

export default DaoPage