import React from 'react'
import styles from './daoForm.module.scss'
import Nav from '../../components/Nav'

function DaoForm() {
    return (

        <div className={styles.con}>
            <Nav />

            <form className={styles.form}>
                <h1 className={styles.title}>Application for listing your DAO</h1>
                <p className={styles.subtitle}>Please fill the basic information of your DAO to list your DAO on DAOverse. </p>

                <span className={styles.input}>
                    <p>What’s the name of your DAO?</p>
                    <input type="text" />
                </span>

                <span className={styles.input}>
                    <p>What’s the category of your DAO?</p>
                    <input type="text" />
                </span>

                <div className={styles.uploadImage}>
                    <span>
                        <p>Upload DAO’s logo</p>
                        <img src="/upload-placeholder.png" alt="" />
                    </span>
                    <span>
                        <p>Upload DAO’s cover image</p>
                        <img src="/upload-placeholder.png" alt="" />
                    </span>
                </div>

                <span className={styles.input}>
                    <p>What’s the mission statement for your DAO?</p>
                    <input placeholder='Please keep it within 1 or 2 lines' type="text" />
                </span>

                <span className={styles.input}>
                    <p>Brief description for your DAO</p>
                    <textarea placeholder='Please keep it within 1 or 2 lines' type="text" />
                </span>

                <div className={styles.fourCfourR}>
                    <span className={styles.input}>
                        <p>Discord link</p>
                        <input placeholder='Paste it here, it will link automatically' type="text" />
                    </span>
                    <span className={styles.input}>
                        <p>Twitter link</p>
                        <input placeholder='Paste it here, it will link automatically' type="text" />
                    </span>
                    <span className={styles.input}>
                        <p>Website link</p>
                        <input placeholder='Paste it here, it will link automatically' type="text" />
                    </span>
                    <span className={styles.input}>
                        <p>Mirror link</p>
                        <input placeholder='Paste it here, it will link automatically' type="text" />
                    </span>
                </div>

                <span className={styles.input}>
                    <p>Discord guild ID</p>
                    <input placeholder='Paste it here, it will link automatically' type="text" />
                </span>

                <span className={styles.input}>
                    <p>Slug</p>
                    <input placeholder='Paste it here, it will link automatically' type="text" />
                </span>

                <button className={styles.submit}>Submit</button>

            </form>





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
        </div>
    )
}

export default DaoForm