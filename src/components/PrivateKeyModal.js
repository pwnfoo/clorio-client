import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from '../components/Button'
import Input from './Input'

export default function PrivateKeyModal(props) {
  return (
    <div className="mx-auto">
        <h2>Insert Private Key</h2>
        <div className="v-spacer"/>
        <h5 className="align-center mx-auto">In order to continue <br/> 
        please insert your private key</h5>
        <div className="v-spacer"/>
        <Input inputHandler={(e)=>{props.setPrivateKey(e.currentTarget.value)}} placeholder="Insert your private key"/>
        <div className="v-spacer"/>
        <Row>
            <Col xs={6} >
                <Button onClick={props.closeModal} className="link-button" text="Cancel"/>
            </Col>
            <Col xs={6} >
                <Button onClick={props.confirmPrivateKey} className="lightGreenButton__fullMono" text="Confirm" />
            </Col>
        </Row>
    </div>
  )
}