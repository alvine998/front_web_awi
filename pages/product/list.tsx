import React, { useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import Layout from '../../components/Layout'
import { FaBox, FaPenSquare } from 'react-icons/fa'
import Input from '../../components/Inputs/input'

export default function List() {
    const [addToggle, setAddToggle] = useState<any>(false)

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
                                        <Input title='Kode Produk' placeholder='Masukkan kode Produk' name='code' />
                                        <Input title='Nama Produk' placeholder='Masukkan nama Produk' name="name" />
                                    </Form>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="warning" onClick={() => setAddToggle(!addToggle)}>
                                        Kembali
                                    </Button>
                                    <Button variant="success">
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
                                    <th scope="col">Kode Produk</th>
                                    <th scope="col">Nama Produk</th>
                                    <th scope="col">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>
                                        <a href='#'><FaPenSquare /></a>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>
                                        <a href='#'><FaPenSquare /></a>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry the Bird</td>
                                    <td>@twitter</td>
                                    <td>
                                        <a href='#'><FaPenSquare /></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
