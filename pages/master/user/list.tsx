import React, { useState, useEffect } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import Layout from '../../../components/Layout'
import { FaBox, FaPenSquare } from 'react-icons/fa'
import Input from '../../../components/Inputs/input'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useRouter } from 'next/router'

export default function List() {
    const [addToggle, setAddToggle] = useState<any>(false)
    const [editToggle, setEditToggle] = useState<any>(false)

    const [users, setUsers] = useState<any>([])
    const [payload, setPayload] = useState<any>()
    const navigate = useRouter()

    const getData = async () => {
        try {
            const result = await axios.get(`http://localhost:6001/user/list`)
            setUsers(result.data)
        } catch (error) {
            console.log(error)
        }
    }

    const save = async (e: any) => {
        const data = {
            ...payload
        }

        console.log(data, "data")
        try {
            const result = await axios.post(`http://localhost:6001/user/`, data)
            if (result) {
                Swal.fire({
                    icon: 'success',
                    text: 'Berhasil Menambah Data Pengguna'
                })
                getData()
                setAddToggle(false)
                return
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                text: 'Gagal Menambah Data'
            })
        }
    }

    const update = async (e: any) => {
        const data = {
            ...payload
        }

        console.log(data, "data")
        try {
            const result = await axios.patch(`http://localhost:6001/user/`, data)
            if (result) {
                Swal.fire({
                    icon: 'success',
                    text: 'Berhasil Mengubah Data Pengguna'
                })
                getData()
                setEditToggle(false)
                return
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                text: 'Gagal Mengubah Data'
            })
        }
    }

    const handleChange = (e: any) => {
        setPayload({ ...payload, [e.target.name]: e.target.value })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <Layout>
            <div>
                <div className='row'>
                    <div className='col-md-1'>
                        <FaBox size={30} />
                    </div>
                    <div className='col-md'>
                        <h2 style={{ marginLeft: -50, marginTop: -5 }}>Data Pengguna</h2>
                    </div>
                </div>
                <div className='pt-5'>
                    <div className='d-flex flex-row'>
                        <Button style={{ width: 180 }} onClick={() => setAddToggle(!addToggle)} size='sm'>Tambah Data</Button>
                    </div>
                    {
                        addToggle ?
                            <Modal show={addToggle} onHide={() => setAddToggle(!addToggle)}>
                                <Modal.Header closeButton>
                                    <Modal.Title>
                                        Tambah Data Pengguna
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                        <Input title='Nama' placeholder='Masukkan nama' onChange={handleChange} name='name' required />
                                        <Input title='Email' placeholder='Masukkan email' onChange={handleChange} name="email" type={"email"} required />
                                        <Input title='Username' placeholder='Masukkan username' onChange={handleChange} name="username" required />
                                        <Input title='Peran' placeholder='staff/head/user' onChange={handleChange} name="role" required />
                                        <Input title='Password' minLength={8} required placeholder='Masukkan password' onChange={handleChange} name="password" type={"password"} />
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="warning" onClick={() => setAddToggle(!addToggle)}>
                                        Kembali
                                    </Button>
                                    <Button onClick={save} variant="success">
                                        Simpan
                                    </Button>
                                </Modal.Footer>
                            </Modal> : ''
                    }

                    {
                        editToggle ?
                            <Modal show={editToggle} onHide={() => setEditToggle(!editToggle)}>
                                <Modal.Header closeButton>
                                    <Modal.Title>
                                        Ubah Data Pengguna
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                        <Input defaultValue={payload?.name} title='Nama' placeholder='Masukkan nama' onChange={handleChange} name='name' required />
                                        <Input defaultValue={payload?.email} title='Email' placeholder='Masukkan email' onChange={handleChange} name="email" type={"email"} required />
                                        <Input defaultValue={payload?.username} title='Username' placeholder='Masukkan username' onChange={handleChange} name="username" required />
                                        <Input defaultValue={payload?.role} title='Peran' placeholder='staff/head/user' onChange={handleChange} name="role" required />
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="warning" onClick={() => setEditToggle(!editToggle)}>
                                        Kembali
                                    </Button>
                                    <Button onClick={update} variant="success">
                                        Simpan
                                    </Button>
                                </Modal.Footer>
                            </Modal> : ''
                    }
                    <div className='pt-2'>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Nama</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Peran</th>
                                    <th scope="col">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users?.map((val: any, i: number) => (
                                        <tr>
                                            <td>{i + 1}</td>
                                            <td>{val?.name}</td>
                                            <td>{val?.email}</td>
                                            <td>{val?.username}</td>
                                            <td>{val?.role}</td>
                                            <td>
                                                <a href='#' onClick={()=>{setEditToggle(!editToggle); setPayload(val)}}><FaPenSquare /></a>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
