import React, { useState } from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import Layout from '../../../components/Layout'
import { FaBox } from 'react-icons/fa'
import Input from '../../../components/Inputs/input'

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
                                        <Input title='Nama' placeholder='Masukkan nama' name='name' />
                                        <Input title='Email' placeholder='Masukkan email' name="email" type={"email"} />
                                        <Input title='Username' placeholder='Masukkan username' name="username" />
                                        <Input title='Level' placeholder='Masukkan level' name="level" />
                                        <Input title='Password' placeholder='Masukkan password' name="password" type={"password"} />
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
                                    <th scope="col">Nama</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Level</th>
                                    <th scope="col">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>Larry the Bird</td>
                                    <td>@twitter</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                    <td>@mdo</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
