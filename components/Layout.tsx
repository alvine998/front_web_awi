import React from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

export default function Layout({children}:any) {
    return (
        <div>
            <div>
                <Topbar />
            </div>
            <div>
                <Sidebar />
                {children}
            </div>
        </div>
    )
}
