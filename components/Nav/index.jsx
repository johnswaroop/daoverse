import styles from './nav.module.scss'
function Nav() {
    return (
        <div className={styles.nav}>
            <img className={styles.logo} src="/logo.png" alt="" />
            <ul>
                <li>Add a dao</li>
                <li>Discover DAOs</li>
                <li><button>Connect wallet</button></li>
            </ul>
        </div>
    )
}

export default Nav;