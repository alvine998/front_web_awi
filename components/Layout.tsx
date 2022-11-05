import React from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'

export default function Layout({ children }: any) {
    return (
        <div style={{ overflowX: "hidden" }}>
            <div className='row'>
                <div className='col-md-3'>
                    <Sidebar />
                </div>
                <div className='col-md' style={{ marginLeft: -140 }}>
                    <Topbar />
                    <div style={{padding:40}}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}
