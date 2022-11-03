import React from 'react'
import { Form } from 'react-bootstrap'
import Input from '../../components/Inputs/input'

export default function Login() {
  return (
    <div style={{ overflow: 'hidden' }}>
      <div>
        <div className='bg-white text-title'>
          <h4>Sistem Pendukung Keputusan Metode AHP</h4>
        </div>
        <div className='bg-blue' style={{marginLeft:'auto', marginRight:'auto'}}>
          <div className='row' style={{ paddingTop: 50 }}>
            <div className='col-md-4'>
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
            </div>
            <div className='col-md-3'>
              <div className='bg-form'>
                <Form>
                  <Input name='username' placeholder='Masukkan Username' />
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
