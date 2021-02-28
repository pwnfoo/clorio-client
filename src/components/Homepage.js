import React from 'react'
import {Row,Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import Logo from './Logo'

export default function Homepage() {
    return (
        <div className="block-container no-bg real-full-page-container center">
            <Row>
                <Col xs={12} className="full-width-align-center">
                    <div className="mx-auto fit-content">
                        <Logo big={true} />
                    </div>
                    <div className="v-spacer" />
                    <h4 className="full-width-align-center ">Mina's blockchain wallet</h4>
                    <div className="v-spacer" />
                        <Link to="/login">
                            <Button className="lightGreenButton__fullMono mx-auto" text="Access a wallet" />
                        </Link>
                        <div className="v-spacer" />
                        <Link to="/register">
                            <Button className="lightGreenButton__fullMono mx-auto" text="Create a wallet" />
                        </Link>
                    </Col>
                </Row>
        </div>
    )
}
