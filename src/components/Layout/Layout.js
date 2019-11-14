import React from 'react';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import styles from './layout.module.css'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
const Layout = (props) => {
    return(
        <div>
            <div>
               <Toolbar />
               <SideDrawer />
            </div>
            <main className={styles.content}>
                {props.children}
            </main>
        </div>
    )
}

export default Layout;