import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { Button, Dropdown, Modal } from 'react-bootstrap'
import {FaUserAlt} from 'react-icons/fa'

export default function Topbar({children}:any) {
  const [toggle, setToggle] = useState(false)
  const navigate = useRouter()
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top bg-light">
          <div className="container-fluid px-5">
            <a className="navbar-brand" href="#">PT Rekadaya Multi Adiprima</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              </ul>
              <p style={{ marginTop: 10 }} className="pe-3">Selamat Datang, </p>
              <div className="d-flex">
                <Modal show={toggle} onHide={() => setToggle(!toggle)}>
                  <Modal.Header closeButton>
                    <Modal.Title>Logout</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Apakah kamu yakin ingin keluar dari dashboard admin ?</Modal.Body>
                  <Modal.Footer>
                    <Button variant="warning" onClick={() => setToggle(!toggle)}>
                      Kembali
                    </Button>
                    <Button variant="danger" onClick={() => navigate.push('/login')}>
                      Ya
                    </Button>
                  </Modal.Footer>
                </Modal>
                <Dropdown>
                  <Dropdown.Toggle size='sm' variant="" id="dropdown-basic">
                    <FaUserAlt />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="/main/profil/user">Profil</Dropdown.Item>
                    <Dropdown.Item onClick={() => { setToggle(true) }}>Keluar</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                {/* <button class="btn btn-danger btn-sm" onClick={() => setToggle(true)}>Keluar</button> */}
              </div>
            </div>
          </div>
        </nav>
        <div style={{ marginTop: 50 }}>
          {children}
        </div>
      </div>
    </div>
  )
}
