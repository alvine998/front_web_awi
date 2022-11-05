import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Layout from '../../components/Layout'
import { FaBox } from 'react-icons/fa'

export default function List() {
  return (
    <Layout>
        <div>
            <div className='row'>
                <div className='col-md-1'>
                    <FaBox size={30}/>
                </div>
                <div className='col-md'>
                    <h2 style={{marginLeft:-50, marginTop:-5}}>Data Hasil Akhir</h2>
                </div>
            </div>
        </div>
    </Layout>
  )
}