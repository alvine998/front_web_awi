import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import Swal from 'sweetalert2'
import { logo } from '../../assets'
import Input from '../../components/Inputs/input'

export default function Login() {

  const [payload, setPayload] = useState<any>()
  const navigate = useRouter()

  const login = async (e: any) => {
    e.preventDefault()

    const data = {
      ...payload
    }

    console.log(data, "data")
    try {
      const result = await axios.post(`http://localhost:6001/user/auth`, data)
      if (result) {
        console.log("sukses login")
        Swal.fire({
          icon: 'success',
          text: 'Berhasil Login'
        })
        navigate.push('/')
        return
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        text: 'Username atau password salah'
      })
    }
  }

  const handleChange = (e: any) => {
    setPayload({ ...payload, [e.target.name]: e.target.value })
  }
  return (
    <div style={{ overflow: 'hidden' }}>
      <Head>
        <title>Login SPK AHP</title>
      </Head>
      <div>
        <div className='bg-white text-title'>
          <h4>Sistem Pendukung Keputusan Metode AHP</h4>
        </div>
        <div className='bg-blue' style={{ display: 'flex', alignItems: 'center', justifyContent: "center", paddingLeft: 150 }}>
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
            <div className='col-md-3' style={{ marginLeft: 150 }}>
              <div className='bg-form'>
                <h2 className='text-center'>LOGIN</h2>
                <Form onSubmit={login} action="#">
                  <Input title="Username" name='username' placeholder='Masukkan Username' onChange={handleChange} />
                  <Input title="Password" name='password' placeholder='Masukkan Password' type={"password"} onChange={handleChange} />
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
