import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import { Form } from 'react-bootstrap'
import { logo } from '../../assets'
import Input from '../../components/Inputs/input'

export default function Login() {
  return (
    <div style={{ overflow: 'hidden' }}>
      <Head>
        <title>Login SPK AHP</title>
      </Head>
      <div>
        <div className='bg-white text-title'>
          <h4>Sistem Pendukung Keputusan Metode AHP</h4>
        </div>
        <div className='bg-blue' style={{display:'flex', alignItems:'center', justifyContent:"center", paddingLeft:150}}>
          <div className='row'>
            <div className='col-md-6'>
              <h5 className='text-white'>Sistem Pengambilan Keputusan Metode AHP</h5>
              <p className='text-white'>
                Sistem Pendukung Keputusan (SPK) merupakan suatu sistem informasi
                spesifik yang ditujukan untuk membantu manajemen dalam mengambil keputusan
                yang berkaitan dengan persoalan yang bersifat semi terstruktur.
              </p>
              <p className='text-white'>
                Metode Analytical Hierarchy Process (AHP) adalah sebuah metode untuk memeringkat
                alternatif keputusan dan memilih yang terbaik dengan beberapa kriteria. Metode AHP
                mengembangkan satu nilai numerik untuk memeringkat setiap alternatif keputusan, berdasarkan
                pada sejauh mana tiap-tiap alternatif memenuhi kriteria pengambil keputusan.
              </p>
              {/* <Image src={logo} width={200} height={200}  /> */}
            </div>
            <div className='col-md-3' style={{marginLeft:150}}>
              <div className='bg-form'>
                <h2 className='text-center'>LOGIN</h2>
                <Form>
                  <Input title="Username" name='username' placeholder='Masukkan Username' />
                  <Input title="Password" name='password' placeholder='Masukkan Password' type={"password"}  />
                  <button className='btn btn-primary w-100 mt-5'>Masuk</button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
