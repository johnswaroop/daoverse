import Head from 'next/head'
import Image from 'next/image'
import styles from './index/index.module.scss'
import Nav from '../components/Nav';
import { useState, useEffect } from 'react';

export default function Home() {

  const [selectedTab, setselectedTab] = useState('all');
  const [searchVisible, setSearchVisible] = useState(false);
  const [topSearchVisible, settopSearchVisible] = useState(false);

  useEffect(() => {
    let sec2 = document.querySelector('#sec2');

    window.addEventListener('scroll', (e) => {
      if (sec2.getBoundingClientRect().y < 0) {
        settopSearchVisible(true);
      } else {
        settopSearchVisible(false);
      }
    })

  }, [])


  return (
    <div className={styles.container}>
      <Head>
        <title>DAOverse</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={styles.homepage}>
        <div className={styles.hero}>
          <Nav topSearchVisible={topSearchVisible} />
          <div className={styles.title}>
            <h3>Review DAOs to</h3>
            <h3 className={styles.titleBlue}>Earn Rewards!</h3>
          </div>
          <p className={styles.subTitle}>Unlock rewards for learning, contributing and reviewing DAOs Anonymously!</p>
          {
            (searchVisible) ? <SearchComp /> : <button onClick={() => {
              setSearchVisible(true);
            }} > <img src="/search-icon.png" alt="" /> Search your DAOs here</button>
          }
        </div>

        <div id={'sec2'} className={styles.sec2}>
          <div style={{ gridArea: 'a', background: "#040E10" }} >
            <h3 style={{ width: '406px' }}>Earn NFT for reviewing DAOs</h3>
            <img className={styles.floatimg1} src="/sec2float1.png" alt="" />
          </div>
          <div style={{ gridArea: 'b', background: "#040E10" }} >
            <h3 style={{ width: '457px', fontSize: '48px' }}>Discover, Join and Contribute to DAOs </h3>
            <img className={styles.floatimg2} src="/sec2float2.png" alt="" />
          </div>
          <div style={{ gridArea: 'c', background: "#060721" }} >
            <h3 style={{ width: '525px', fontSize: '48px' }}>100% fully On-chain and Anonymous</h3>
            <img className={styles.floatimg3} src="/sec2float3.png" alt="" />
          </div>
        </div>

        <div className={styles.sec3}>
          <div className={styles.sec3Title}>
            <h1>Our DAO Library</h1>
            <p>We are adding more DAOs everyday. If you don’t see a DAO below and want us to list it here, </p>
            <p className={styles.blueText}>please submit your request here 🡥</p>
          </div>

          <div className={styles.tagtabs}>
            {
              ['all', 'social', 'investment', 'service', 'protocol', 'NFT', 'marketplace']
                .map((tag) => {
                  let class_list = styles.tab;
                  if (tag == selectedTab) { class_list = class_list + ' ' + styles.selected }
                  return (
                    <div key={"t" + tag} onClick={() => {
                      setselectedTab(tag);
                    }} className={class_list}>
                      {tag}
                    </div>
                  )
                })
            }
          </div>

          <div className={styles.daoListContainer}>
            {
              [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map((ele) => {
                return (
                  <DaoCard key={'c' + ele} />
                )
              })
            }
          </div>
          <button className={styles.seeMoreBtn}>
            See more
          </button>
        </div>

        <div className={styles.leaderboard}>
          <h1 className={styles.leaderboardTitle}>
            Our DAO Leaderboard
          </h1>
          <div className={styles.tableHead}>
            <p className={styles.th1}>Position</p>
            <p className={styles.th2}>Name of the DAO</p>
            <p className={styles.th3}>Ratings</p>
            <p className={styles.th4}>Socials</p>
          </div>
          {
            [[1, "/medal-gold.png"], [2, "/medal-silver.png"], [3, "/medal-bronze.png"], [4, "/medal-blank.png"], [5, "/medal-blank.png"], [6, "/medal-blank.png"], [7, "/medal-blank.png"], [8, "/medal-blank.png"], [9, "/medal-blank.png"], [10, "/medal-blank.png"]].map((ele) => {
              return (
                <div key={"m" + ele} className={styles.tableBody}>
                  <span className={styles.tb1}>
                    <p>#{ele[0]}</p>
                    <img src={ele[1]} alt="" />
                  </span>
                  <span className={styles.tb2}>Bankless DAO</span>
                  <span className={styles.tb3}><Starrating rating={4} /></span>
                  <span className={styles.tb4}>
                    <img src="/twitter-white.png" alt="" />
                    <img src="/discord-white.png" alt="" />
                    <img src="/web-white.png " alt="" />
                  </span>
                </div>
              )
            })
          }
        </div>
        <div className={styles.reviews}>
          <img className={styles.floathdown} src="/float-thumbs-down.png" alt="" />
          <img className={styles.floathup} src="/float-thumbs-up.png" alt="" />
          <img src="" alt="" />
          <h1 className={styles.reviewTitle}>
            Recent reviews
          </h1>
          <div className={styles.reviewCon}>
            <div className={styles.reviewCard + ' ' + styles.r1}>
              <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint.</p>
              <div className={styles.profile}>
                <img className={styles.commaFloat} src="/comma-float.png" alt="" />
                <img style={{ gridArea: 'a' }} className={styles.profileImg} src="https://assets-global.website-files.com/5ec7dad2e6f6295a9e2a23dd/5edfa7c6f978e75372dc332e_profilephoto1.jpeg" alt="" />
                <p>Van Goh</p>
                <Starrating rating={4} />
              </div>
            </div>
            <div className={styles.reviewCard + ' ' + styles.r2}>
              <p>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint.</p>
              <div className={styles.profile}>
                <img className={styles.commaFloat} src="/comma-float.png" alt="" />
                <img style={{ gridArea: 'a' }} className={styles.profileImg} src="https://assets-global.website-files.com/5ec7dad2e6f6295a9e2a23dd/5edfa7c6f978e75372dc332e_profilephoto1.jpeg" alt="" />
                <p>Van Goh</p>
                <Starrating rating={4} />
              </div>
            </div>
            <div className={styles.reviewCard + ' ' + styles.r3}>
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
          <h2 className={styles.footerTitle}>
            Love what we are doing? Join DAOverse to build together
          </h2>
          <span className={styles.socialIcon}>
            <img src="/twitter-grey.png" alt="" />
            <img src="/discord-grey.png" alt="" />
            <img src="/web-grey.png" alt="" />
          </span>
          <p className={styles.footerSubTitle}>or email us at: xyz@daoverse.com</p>
        </div>
      </section >
    </div >
  )
}

function SearchComp() {
  return (
    <div className={styles.searchComp}>
      <input type="text" />
      <img className={styles.searchIcon} src="search-blue.png" alt="" />
      <div className={styles.suggestionCon}>
        <div className={styles.suggestion}>
          <img style={{ gridArea: "a" }} src="/sample.jpg" alt="" />
          <h1 style={{ gridArea: "b" }}>Bankless DAO</h1>
          <h2 style={{ gridArea: "c" }}>quick brief about project</h2>
          <p style={{ gridArea: "d" }}>128 reviews</p>
        </div>
      </div>
    </div>
  )
}

function DaoCard() {
  return (
    <div className={styles.daoCard}>
      <img className={styles.cardCover} src="https://assets.hongkiat.com/uploads/minimalist-dekstop-wallpapers/4k/original/14.jpg?3" alt="" />
      <div className={styles.info}>
        <p>Bankless DAO</p>
        <Starrating rating={4} />
        <span className={styles.socialIcon}>
          <img src="/twitter-grey.png" alt="" />
          <img src="/discord-grey.png" alt="" />
          <img src="/web-grey.png" alt="" />
        </span>
      </div>
    </div>
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


