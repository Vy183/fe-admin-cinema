import React, { Component } from "react";
import { Modal, Button, Tab, Tabs } from "react-bootstrap";

import AddFilm from '../../pages/AddFilm/AddFilm';
import AddProducer from '../../pages/AddProducer/AddProducer';
import AddActors from '../../pages/AddActor/AddActor';
import AddDirector from '../../pages/AddDirector/AddDirector';

export default class TabsAdd extends Component {
  state = {
    show: false,
    key: 'addfilm',
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };
  render() {
    return (
      <div>
        <Button variant="primary" onClick={this.handleShow}>
            Thêm tất cả
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Body>
            <Tabs
              id="controlled-tab-example"
              activeKey={this.key}
              onSelect={(k) => this.setState({ key: k })}
            >
              <Tab eventKey="addDirector" title="Thêm dao dien">
                <AddDirector/>
              </Tab>
              <Tab eventKey="addproducer" title="Thêm NSX">
                <AddProducer />
              </Tab>
              <Tab eventKey="addactor" title="Thêm dien vien">
                <AddActors/>
              </Tab>
            </Tabs>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
