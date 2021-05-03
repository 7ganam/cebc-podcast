import React from 'react'
import { Link } from "react-router-dom";


import "./HomePageComponent.css"
import { Col, Container, Row } from 'reactstrap';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

import p1 from "./posts/p1/CEBC-MENA-Podcast_Season2_Episode2_LinkedIn-3 (1).png"

export default function HomePageComponent(props) {



    return (
        <div>
            <div id="title_header" style={{ marginTop: "150px ", marginBottom: "100px " }} >
                CEBC PODCAST
                <div>
                    <i class="fas fa-headphones"></i></div>

            </div>


            <Container style={{ marginTop: "100px ", marginBottom: "100px " }}>
                <Row style={{ display: "flex", justifyContent: "center" }}>
                    <Col md={4} style={{ maxWidth: "300px", marginTop: "20px" }} >
                        <Card style={{ boxShadow: "rgb(0 0 0 / 10%) 0px 0px 9px 5px", padding: "8px" }} >
                            <CardImg top width="100%" src={p1} alt="Card image cap" />
                            <CardBody>
                                <CardTitle tag="h5">Season 2. Episode 2:</CardTitle>
                                <CardSubtitle>
                                    Impact of COVID-19 on Public Transit and Shared Mobility in MENA
                                </CardSubtitle>
                                <Link className="nav_link" to="/pod1">
                                    <button type="button" class="mt-2 btn btn-warning">
                                        Visit podcast
                                    <i class="ml-2 fas fa-headphones"></i>
                                    </button>
                                </Link>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={4} style={{ maxWidth: "300px", marginTop: "20px" }} >
                        <Card style={{ boxShadow: "rgb(0 0 0 / 10%) 0px 0px 9px 5px", padding: "8px" }} >
                            <CardImg top width="100%" src="2.png" alt="Card image cap" />
                            <CardBody>
                                <CardTitle tag="h5">Season 2. Episode 1: </CardTitle>
                                <CardSubtitle>
                                    Electric Vehicles in MENA: Everything you need to know.
                                </CardSubtitle>
                                <Link className="nav_link" to="/pod2">
                                    <button type="button" class="mt-4 btn btn-warning">
                                        Visit podcast
                                    <i class="ml-2 fas fa-headphones"></i>
                                    </button>
                                </Link>

                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={4} style={{ maxWidth: "300px", marginTop: "20px" }} >
                        <Card style={{ boxShadow: "rgb(0 0 0 / 10%) 0px 0px 9px 5px", padding: "8px" }} >
                            <CardImg top width="100%" src="3.png" alt="Card image cap" />
                            <CardBody>
                                <CardTitle tag="h5">
                                    Season 1. Episode 12:
                                </CardTitle>
                                <CardSubtitle>
                                    Women in Clean Energy in MENA and the USA: Challenges and Opportunities Transcript
                                </CardSubtitle>
                                <Link className="nav_link" to="/pod3">
                                    <button type="button" class="mt-2 btn btn-warning">
                                        Visit podcast
                                    <i class="ml-2 fas fa-headphones"></i>
                                    </button>
                                </Link>                       </CardBody>
                        </Card>
                    </Col>



                    <Col md={4} style={{ maxWidth: "300px", marginTop: "20px" }} >
                        <Card style={{ boxShadow: "rgb(0 0 0 / 10%) 0px 0px 9px 5px", padding: "8px" }} >
                            <CardImg top width="100%" src="4.png" alt="Card image cap" />
                            <CardBody>
                                <CardTitle tag="h5">
                                    Season 2. Episode 3:
                                </CardTitle>
                                <CardSubtitle>
                                    S2. Ep3: Alternative fuels and powertrains: MENA vs USA
                                </CardSubtitle>
                                <Link className="nav_link" to="/pod4">
                                    <button type="button" class="mt-2 btn btn-warning">
                                        Visit podcast
                                    <i class="ml-2 fas fa-headphones"></i>
                                    </button>
                                </Link>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col md={4} style={{ maxWidth: "300px", marginTop: "20px" }} >
                        <Card style={{ boxShadow: "rgb(0 0 0 / 10%) 0px 0px 9px 5px", padding: "8px" }} >
                            <CardImg top width="100%" src="5.jpg" alt="Card image cap" />
                            <CardBody>
                                <CardTitle tag="h5">
                                    Season 2. Episode 4:
                                </CardTitle>
                                <CardSubtitle>
                                    S2. E4: Mobility Behavior in MENA vs USA (Car Pride)
                                </CardSubtitle>
                                <Link className="nav_link" to="/pod5">
                                    <button type="button" class="mt-2 btn btn-warning">
                                        Visit podcast
                                    <i class="ml-2 fas fa-headphones"></i>
                                    </button>
                                </Link>
                            </CardBody>
                        </Card>
                    </Col>






                </Row>
            </Container>
        </div >

    )
}
