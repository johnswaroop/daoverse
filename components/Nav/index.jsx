import styles from './nav.module.scss'
import { useState } from 'react';
import stringSimilarity from "string-similarity";


const openNewTab = (url) => {
    if (url.length < 1) return
    let a = document.createElement('a');
    a.target = '_blank';
    a.href = url;
    a.click();
}

function Nav({ topSearchVisible, data }) {
    let search_style = styles.nav;
    if (topSearchVisible) {
        search_style = styles.nav + ' ' + styles.topNavSearch
    }

    return (
        <div className={search_style}>
            <img className={styles.logo} src="/logo.png" alt="" />
            <SearchComp data={data} topSearchVisible={topSearchVisible} />
            <ul>
                <li>Add a dao</li>
                <li>Discover DAOs</li>
                <li><button>Connect wallet</button></li>
            </ul>
        </div>
    )
}

function SearchComp({ topSearchVisible, data }) {

    const [suggestionVisible, setsuggestionVisible] = useState(false)

    const [searchTerm, setsearchTerm] = useState("");

    let search_style = styles.searchComp;
    if (topSearchVisible) {
        search_style = styles.searchComp + ' ' + styles.searchCompDisable
    }

    return (
        <div className={search_style}>
            <input type="text" value={searchTerm}
                onChange={(e) => { setsearchTerm(e.target.value) }}
                onClick={() => {
                    setsuggestionVisible(true);
                }} />
            <img className={styles.searchIcon} src="search-icon.png" alt="" />
            {(suggestionVisible) &&
                <div className={styles.suggestionCon}>
                    {
                        data.map((value) => {
                            if (stringSimilarity.compareTwoStrings(searchTerm, value.dao_name.toLowerCase()) > 0.5) {
                                return (
                                    <div className={styles.suggestion}
                                        onClick={() => { openNewTab(`${window.location.href}/dao/${value.slug}`); }}
                                    >
                                        <img style={{ gridArea: "a" }} src={value.dao_logo} alt="" />
                                        <h1 style={{ gridArea: "b" }}>{value.dao_name}</h1>
                                        <h2 style={{ gridArea: "c" }}>quick brief about project</h2>
                                        <p style={{ gridArea: "d" }}>128 reviews</p>
                                    </div>
                                )
                            }
                        })
                    }
                </div>}
        </div>
    )
}

export default Nav;