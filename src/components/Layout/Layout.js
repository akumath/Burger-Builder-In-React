import React from 'react';
const Layout = (props) => {
    return(
        <fragment>
            <div>
                Toolbar, SideDrawer, Backdrop
            </div>
            <main>
                {props.children}
            </main>
        </fragment>
    )
}

export default Layout;