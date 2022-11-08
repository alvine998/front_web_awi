import React, { useState, useEffect } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import Layout from '../../components/Layout'
import { FaBox, FaPenSquare, FaTrash } from 'react-icons/fa'
import Input from '../../components/Inputs/input'
import { useRouter } from 'next/router'
import axios from 'axios'
import Swal from 'sweetalert2'
import Select from '../../components/Inputs/select'
import index from '..'

export default function List() {
    const [addToggle, setAddToggle] = useState<any>(false)
    const [editToggle, setEditToggle] = useState<any>(false)
    const [removeToggle, setRemoveToggle] = useState<any>(false)

    const [diffToggle, setDiffToggle] = useState<any>(false)

    const [datas, setDatas] = useState<any>([])
    const [dataProduct, setDataProduct] = useState<any>([])

    const [values, setValues] = useState<any>([])
    const [totals, setTotals] = useState<any>([])
    const [selectValues, setSelectValues] = useState<any>(1)

    const [payload, setPayload] = useState<any>()
    const navigate = useRouter()

    const getData = async () => {
        try {
            const result = await axios.get(`http://localhost:6001/criteria/list`)
            setDatas(result.data)
        } catch (error) {
            console.log(error)
        }
    }

    const getDataProduct = async () => {
        try {
            const result = await axios.get(`http://localhost:6001/product/list`)
            setDataProduct(result.data)
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
            const result = await axios.post(`http://localhost:6001/criteria/`, data)
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
            const result = await axios.patch(`http://localhost:6001/criteria/`, data)
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
            const result = await axios.delete(`http://localhost:6001/criteria?id=${id}`)
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

    const handleSum = (index: number, i: number, val: any) => {
        let abc = index + i;
        setValues((prevState: any) => ({ ...prevState, [abc]: 1 / +val }))
        console.log("Powered by fajar")
    }

    const handleSum2 = (index: number, i: number, val: any) => {
        let abc = index + i;
        setTotals((prevState: any) => ({ ...prevState, [abc]: 1 + +val + values[abc] }))
        console.log("Powered by fajar")
    }

    useEffect(() => {
        getData()
        getDataProduct()
    }, [values, selectValues, totals])
    return (
        <Layout>
            <div>
                <div className='row'>
                    <div className='col-md-1'>
                        <FaBox size={30} />
                    </div>
                    <div className='col-md'>
                        <h2 style={{ marginLeft: -50, marginTop: -5 }}>Data Kriteria</h2>
                    </div>
                </div>
                <div className='pt-5'>
                    <div className='d-flex flex-row'>
                        <Button style={{ width: 180 }} onClick={() => setAddToggle(!addToggle)} size='sm'>Tambah Data</Button>
                        &nbsp;
                        <Button variant='warning' style={{ width: 180 }} onClick={() => setDiffToggle(!diffToggle)} size='sm'>Perbandingan Kriteria</Button>
                    </div>
                    {
                        addToggle ?
                            <Modal show={addToggle} onHide={() => setAddToggle(!addToggle)}>
                                <Modal.Header closeButton>
                                    <Modal.Title>
                                        Tambah Data Kriteria
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                        <Input required onChange={handleChange} title='Kode' placeholder='Masukkan kode' name='code' />
                                        <Input required onChange={handleChange} title='Nama' placeholder='Masukkan nama' name="name" />
                                        {/* <Input required onChange={handleChange} title='Bobot Nilai' placeholder='0 - 100' name="weight" />
                                        <Select required placeholder='Pilih Produk' onChange={handleChange} title='Produk' name="product_id" data={dataProduct} /> */}
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
                                        Ubah Data Kriteria
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form>
                                        <Input defaultValue={payload?.code} required onChange={handleChange} title='Kode' placeholder='Masukkan kode' name='code' />
                                        <Input defaultValue={payload?.name} required onChange={handleChange} title='Nama' placeholder='Masukkan nama' name="name" />
                                        {/* <Input defaultValue={payload?.weight} required onChange={handleChange} title='Bobot Nilai' placeholder='0 - 100' name="weight" />
                                        <Select defaultValue={payload?.product_id} required placeholder='Pilih Produk' onChange={handleChange} title='Produk' name="product_id" data={dataProduct} /> */}
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
                                    {/* <th scope="col">Produk</th>
                                    <th scope="col">Bobot Nilai</th> */}
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
                                            {/* <td>{val?.product_name}</td>
                                            <td>{val?.weight}</td> */}
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

                    {
                        diffToggle ? <>
                            <Modal size='lg' show={diffToggle} onHide={() => setDiffToggle(!diffToggle)} className='pt-2'>
                                <Modal.Header closeButton>
                                    <Modal.Title>
                                        Tabel Perbandingan Kriteria
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <table className="table table-striped table-hover">
                                        <thead>
                                            <tr>
                                                <th>Kriteria</th>
                                                {
                                                    datas?.map((val: any, i: number) => (
                                                        <th className='text-center' scope='col'>{val?.name}</th>
                                                    ))
                                                }
                                            </tr>
                                            {
                                                datas?.map((val: any, i: number) => (
                                                    <>
                                                        <tr>
                                                            <th scope='col'>{val?.name}</th>
                                                            {
                                                                datas?.map((val2: any, index: number) => (
                                                                    <>
                                                                        {
                                                                            val2?.id == val?.id ?
                                                                                <td className='text-center'><input type={"number"} readOnly value={1} className='form-control' /></td>
                                                                                :
                                                                                index > i ?
                                                                                    <td>
                                                                                        <select className='form-select' value={selectValues[index]} onChange={(e: any) => { handleSum(index, i, e.target.value); handleSum2(index, i, e.target.value) }}>
                                                                                            {[1, 2, 3, 4, 5, 6, 7, 8, 9]?.map((el: any) => <option value={el}>{el}</option>)}
                                                                                        </select>
                                                                                    </td> :
                                                                                    <td>
                                                                                        <input type={"number"} readOnly value={values[index + i]} className='form-control' />
                                                                                    </td>
                                                                        }
                                                                    </>
                                                                ))
                                                            }
                                                        </tr>
                                                    </>
                                                ))
                                            }
                                            <tr>
                                                <th>
                                                    Jumlah
                                                </th>
                                                {
                                                    datas?.map((val: any, i: number) => (
                                                        <td>
                                                            <input type={"number"} readOnly value={totals[i+1]} className='form-control' />
                                                        </td>
                                                    ))
                                                }
                                            </tr>
                                        </thead>
                                        {/* <tfoot>
                                            <tr>
                                                <th>
                                                    Jumlah
                                                </th>
                                                {
                                                    datas?.map((val: any, i: number) => (
                                                        <td>
                                                            <input type={"number"} readOnly value={totals} className='form-control' />
                                                        </td>
                                                    ))
                                                }
                                            </tr>
                                        </tfoot> */}
                                    </table>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={() => setDiffToggle(!diffToggle)}>
                                        Kembali
                                    </Button>
                                </Modal.Footer>

                            </Modal>
                        </> : ''
                    }
                </div>
            </div>
        </Layout >
    )
}
