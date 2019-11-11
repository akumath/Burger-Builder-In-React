import React from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import styles from './layout.module.css'
const Layout = (props) => {
    return(
        <div>
            <div>
               <Toolbar />
            </div>
            <main className={styles.content}>
                {props.children}
            </main>
        </div>
    )
}

export default Layout;