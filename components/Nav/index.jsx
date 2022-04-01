import styles from './nav.module.scss'

function Nav({ topSearchVisible }) {
    let search_style = styles.nav;
    if (topSearchVisible) {
        search_style = styles.nav + ' ' + styles.topNavSearch
    }

    return (
        <div className={search_style}>
            <img className={styles.logo} src="/logo.png" alt="" />
            <SearchComp topSearchVisible={topSearchVisible} />
            <ul>
                <li>Add a dao</li>
                <li>Discover DAOs</li>
                <li><button>Connect wallet</button></li>
            </ul>
        </div>
    )
}

function SearchComp({ topSearchVisible }) {

    let search_style = styles.searchComp;
    if (topSearchVisible) {
        search_style = styles.searchComp + ' ' + styles.searchCompDisable
    }

    return (
        <div className={search_style}>
            <input type="text" />
            <img className={styles.searchIcon} src="search-icon.png" alt="" />
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

export default Nav;