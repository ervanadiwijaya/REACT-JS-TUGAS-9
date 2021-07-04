import React from "react";
import { useState } from "react";
import { Spinner, Breadcrumb, Navbar, Nav, NavDropdown, Form, FormControl, Button, Container, Tab, Tabs, Table, ProgressBar, Pagination, OverlayTrigger, Popover, Collapse } from "react-bootstrap";

function App() {
  const [open, setOpen] = useState(false);
  const popover = (
    <Popover id="popover-basic">
      <Popover.Title as="h3">Informasi Website</Popover.Title>
      <Popover.Content>
        Website ini dibuat untuk memudahkan dalam pencarian informasi terkini tentang berita olahraga
      </Popover.Content>
    </Popover>
  );

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Akses Sport</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#">Berita</Nav.Link>
          <Nav.Link href="#">Live Score</Nav.Link>
          <NavDropdown title="Piala & Liga" id="basic-nav-dropdown">
            <NavDropdown.Item href="#">Action</NavDropdown.Item>
            <NavDropdown.Item href="#">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#">Separated link</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#">Transfer Pemain</Nav.Link>
          <Nav.Link href="#">Tim</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
      <Container>
        <div className="d-flex justify-content-end">
          <Breadcrumb>
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
              Liga Inggris
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Transfer Pemain</Breadcrumb.Item>
          </Breadcrumb>
        </div>

        <div className="d-flex justify-content-between">
          <div>
            <h3>Rumor Transfer Pemain</h3>
          </div>
          <div className="mx-3">
            <Spinner animation="border" variant="success" />
          </div>
        </div>

        <div>
          <Tabs defaultActiveKey="all" id="uncontrolled-tab-example">
            <Tab eventKey="all" title="Semua Transfer">
              <div>
                <Table responsive="md">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Nama Pemain</th>
                      <th>Tim</th>
                      <th>Transfer</th>
                      <th>Proses Transfer</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td><ProgressBar animated now={85} label={`${85}%`} /></td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td><ProgressBar animated now={55} label={`${55}%`} /></td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td><ProgressBar animated now={95} label={`${95}%`} /></td>

                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td><ProgressBar animated now={100} label={`${100}%`} /></td>

                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td><ProgressBar animated now={50} label={`${50}%`} /></td>

                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td><ProgressBar animated now={100} label={`${100}%`} /></td>

                    </tr>
                  </tbody>
                </Table>
              </div>
            </Tab>
            <Tab eventKey="england" title="Liga Primer Inggris">
            </Tab>
            <Tab eventKey="contact" title="Seria A">
            </Tab>
            <Tab eventKey="contact" title="Divisi Primera">
            </Tab>
            <Tab eventKey="contact" title="Bundes Liga">
            </Tab>
            <Tab eventKey="contact" title="Liga 1 Indonesia">
            </Tab>
          </Tabs>
        </div>
        <div>
          <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item active>{1}</Pagination.Item>
            <Pagination.Ellipsis />

            <Pagination.Item>{10}</Pagination.Item>
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Item>{14}</Pagination.Item>

            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </div>
        <div className="d-flex">
          <div className="pr-2">
            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
              <Button variant="primary">Informasi</Button>
            </OverlayTrigger>
          </div>
          <div>
            <Button
              onClick={() => setOpen(!open)}
              aria-controls="example-collapse-text"
              aria-expanded={open}
            >
              Versi Website
            </Button>
            <Collapse in={open}>
              <div id="example-collapse-text">
                Website V1.0
              </div>
            </Collapse>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
