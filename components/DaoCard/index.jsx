import styles from './daocard.module.scss'
import Starrating from '../Starrating'

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

export default DaoCard