import { useRouter } from 'next/router'
import React from 'react'
import { FaBox } from 'react-icons/fa'

export default function Sidebar() {
  const navigate = useRouter()
  return (
    <>
      <div className='bg-sidebar-blue'>
        <div style={{ marginTop: 70 }}>
          <a><h5 className='text-white text-center pt-2'>Dashboard</h5></a>
          <a onClick={()=>navigate.push('/criteria/list')} href="#"><h5 className='text-white text-center pt-2'>Kriteria</h5></a>
          <a onClick={()=>navigate.push('/subcriteria/list')} href="#"><h5 className='text-white text-center pt-2'>Sub Kriteria</h5></a>
          <a onClick={()=>navigate.push('/product/list')} href="#"><h5 className='text-white text-center pt-2'>Produk</h5></a>
          <a onClick={()=>navigate.push('/scoring/list')} href="#"><h5 className='text-white text-center pt-2'>Data Penilaian</h5></a>
          <a onClick={()=>navigate.push('/calculating/list')} href="#"><h5 className='text-white text-center pt-2'>Data Perhitungan</h5></a>
          <a onClick={()=>navigate.push('/result/list')} href="#"><h5 className='text-white text-center pt-2'>Data Hasil Akhir</h5></a>
          <a onClick={()=>navigate.push('/master/user/list')} href="#"><h5 className='text-white text-center pt-2'>Data Pengguna</h5></a>
          {/* <ul>
            <li style={{ listStyleType: 'none' }}>
              <a>Kriteria</a>
            </li>
            <li style={{ listStyleType: 'none' }}>
              <a>Sub Kriteria</a>
            </li>
            <li style={{ listStyleType: 'none' }}>
              <a>Produk</a>
            </li>
            <li style={{ listStyleType: 'none' }}>
              <a>Data Penilaian</a>
            </li>
            <li style={{ listStyleType: 'none' }}>
              <a>Data Perhitungan</a>
            </li>
            <li style={{ listStyleType: 'none' }}>
              <a>Data Hasil Akhir</a>
            </li>
          </ul> */}
        </div>
      </div>
    </>
  )
}
