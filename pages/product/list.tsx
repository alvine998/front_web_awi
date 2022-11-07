import React, { useState, useEffect } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import Layout from '../../components/Layout'
import { FaBox, FaPenSquare, FaTrash } from 'react-icons/fa'
import Input from '../../components/Inputs/input'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useRouter } from 'next/router'

export default function List() {
    const [addToggle, setAddToggle] = useState<any>(false)
    const [editToggle, setEditToggle] = useState<any>(false)
    const [removeToggle, setRemoveToggle] = useState<any>(false)

    const [datas, setDatas] = useState<any>([])
    const [payload, setPayload] = useState<any>()
    const navigate = useRouter()

    const getData = async () => {
        try {
            const result = await axios.get(`http://localhost:6001/product/list`)
            setDatas(result.data)
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
            const result = await axios.post(`http://localhost:6001/product/`, data)
            if (result) {
                Swal.fire({
                    icon: 'success',
                    text: 'Berhasil Menambah Data'
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
            const result = await axios.patch(`http://localhost:6001/product/`, data)
            if (result) {
                Swal.fire({
                    icon: 'success',
                    text: 'Berhasil Mengubah Data'
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

    const remove = async (id: any) => {
        try {
            const result = await axios.delete(`http://localhost:6001/product?id=${id}`)
            if (result) {
                Swal.fire({
                    icon: 'success',
                    text: 'Berhasil Menghapus Data'
                })
                getData()
                setRemoveToggle(false)
                return
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                text: 'Gagal Menghapus Data'
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
                        <h2 style={{ marginLeft: -50, marginTop: -5 }}>Data Produk</h2>
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
                                        Tambah Data Produk
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                        <Input onChange={handleChange} required title='Kode' placeholder='Masukkan kode' name='code' />
                                        <Input onChange={handleChange} required title='Nama' placeholder='Masukkan nama' name="name" />
                                        <Input onChange={handleChange} title='Keterangan' placeholder='Masukkan keterangan' name="remarks" />
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="warning" onClick={() => setAddToggle(!addToggle)}>
                                        Kembali
                                    </Button>
                                    <Button variant="success" onClick={save}>
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
                                        Ubah Data Produk
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                        <Input defaultValue={payload?.code} onChange={handleChange} required title='Kode' placeholder='Masukkan kode' name='code' />
                                        <Input defaultValue={payload?.name} onChange={handleChange} required title='Nama' placeholder='Masukkan nama' name="name" />
                                        <Input defaultValue={payload?.remarks} onChange={handleChange} title='Keterangan' placeholder='Masukkan keterangan' name="remarks" />
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="warning" onClick={() => setEditToggle(!editToggle)}>
                                        Kembali
                                    </Button>
                                    <Button variant="success" onClick={update}>
                                        Simpan
                                    </Button>
                                </Modal.Footer>
                            </Modal> : ''
                    }

                    {
                        removeToggle ?
                            <Modal show={removeToggle} onHide={() => setRemoveToggle(!removeToggle)}>
                                <Modal.Header closeButton>
                                    <Modal.Title>
                                        Hapus Data Produk
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <p>Anda yakin ingin menghapus data Produk {payload?.name} [{payload?.code}]</p>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="warning" onClick={() => setRemoveToggle(!removeToggle)}>
                                        Kembali
                                    </Button>
                                    <Button variant="danger" onClick={() => { remove(payload?.id) }}>
                                        Hapus
                                    </Button>
                                </Modal.Footer>
                            </Modal> : ''
                    }

                    <div className='pt-2'>
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">No</th>
                                    <th scope="col">Kode</th>
                                    <th scope="col">Nama</th>
                                    <th scope="col">Predikat</th>
                                    <th scope="col">Peringkat</th>
                                    <th scope="col">Total Nilai Akhir</th>
                                    <th scope="col">Keterangan</th>
                                    <th scope="col">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    datas?.map((val: any, i: number) => (
                                        <tr>
                                            <td>{i + 1}</td>
                                            <td>{val?.code}</td>
                                            <td>{val?.name}</td>
                                            <td>{val?.predicate_name || "-"}</td>
                                            <td>{val?.rank || "-"}</td>
                                            <td>{val?.total_score || "-"}</td>
                                            <td>{val?.remarks || "-"}</td>
                                            <td>
                                                <a href='#' onClick={() => { setEditToggle(!editToggle); setPayload(val) }}><FaPenSquare /></a>
                                                &nbsp;
                                                <a href='#' onClick={() => { setRemoveToggle(!removeToggle); setPayload(val) }}><FaTrash color='red' /></a>
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
