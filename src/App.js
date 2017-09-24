import React, { Component } from 'react';
import { Row, Col, Input, Checkbox, Button } from 'antd';
import ContactFormComponent from './ContactFormComponent'
import './App.css';

function ContactComponent(props, /* context */) {
  const { contact } = props;
  const selectContact = () => {
    props.selectContact(props.contact)
  }

  return <div className="contact_Item" onClick={selectContact}><Row>{contact.name}</Row>
    <Row>{contact.isMan ? "Man" : "Woman"}</Row></div>
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [{ id: 1, name: "kris", isMan: true }, { id: 2, name: "adela", isMan: false },
      { id: 3, name: "jone", isMan: true }, { id: 4, name: "shine", isMan: false },
      { id: 5, name: "keen", isMan: true }, { id: 6, name: "miya", isMan: false }],
      currentContact: {}
    };
    this.selectContact = this.selectContact.bind(this);
    this.updateContact = this.updateContact.bind(this);
  }
  selectContact(contact) {
    this.setState({ currentContact: contact })
  }
  updateContact(inEditContact) {
    const { contacts } = this.state;

    let updatedContacts = contacts.filter(ct => {
      return ct.id === inEditContact.id ? inEditContact : ct;
    });

    this.setState({ contacts: updatedContacts })
  }
  render() {
    const { contacts, currentContact } = this.state;

    return (
      <div className="App">
        <Row>
          <Col span="8">
            {contacts.map((contact, key) =>
              <ContactComponent key={key} contact={contact} selectContact={this.selectContact} />
            )}
          </Col>
          <Col span="16">
            <ContactFormComponent currentContact={currentContact} updateContact={this.updateContact}></ContactFormComponent>
          </Col>
        </Row>

      </div>
    );
  }
}

export default App;
