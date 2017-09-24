import React, { Component } from 'react';
import { Row, Col, Input, Checkbox, Button } from 'antd';
import './b.css';

class ContactFormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { inEditContact: {}, name: '', isMan: true }
        this.changeName = this.changeName.bind(this);
        this.changeSex = this.changeSex.bind(this);
        this.save = this.save.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        const { currentContact } = nextProps;
        this.setState({ inEditContact: currentContact, name: currentContact.name, isMan: currentContact.isMan })
    }
    changeName(e) {
        this.setState({ name: e.target.value })
    }
    changeSex(e) {
        this.setState({ isMan: e.target.checked })
    }
    save() {
        let { inEditContact, name, isMan } = this.state;
        inEditContact.name = name;
        inEditContact.isMan = isMan;
        this.props.updateContact(this.state.inEditContact)
    }
    render() {
        const { inEditContact, name, isMan } = this.state;

        return <div >
            <Row>
                <Col span="6"><label className="boldred">Name</label></Col>
                <Col span="12"><Input value={name} onChange={this.changeName}></Input></Col>
            </Row>
            <Row>
                <Col span="6"><label>IsMan</label></Col>
                <Col span="12"><Checkbox checked={isMan} onChange={this.changeSex}></Checkbox></Col>
            </Row>
            <Button type="primary" onClick={this.save}>Save</Button>
        </div>
    }
}

export default ContactFormComponent;
