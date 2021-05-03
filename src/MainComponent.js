
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import FooterComponent from './FooterComponent/FooterComponent'
import HomePageComponent from './pages/HomePageComponent/HomePageComponent'
import NavbarComponent from "./NavbarComponent/NavbarComponent"
import PodPage from "./PodPage/PodPage"

import PodPage2 from "./PodPage2/PodPage"
import PodPage3 from "./PodPage3/PodPage3"
import PodPage4 from "./PodPage4/PodPage4"
import PodPage5 from "./PodPage5/PodPage5"


import ScrollToTopComponent from "./ScrollToTopComponent"

export default function MainComponent() {



    return (
        <div id="main_component" style={{ backgroundColor: "white", overflow: "hidden" }}>
            <div id="content_wrap">
                <Router >
                    <ScrollToTopComponent />

                    {/* the navbar has to be inside the router since it uses LINK component which runs only inside router component */}
                    <NavbarComponent />

                    <Switch>
                        <Route exact path="/">
                            <HomePageComponent />
                        </Route>
                        <Route exact path="/pod1">
                            <PodPage />
                        </Route>
                        <Route exact path="/pod2">
                            <PodPage2 />
                        </Route>
                        <Route exact path="/pod3">
                            <PodPage3 />
                        </Route>
                        <Route exact path="/pod4">
                            <PodPage4 />
                        </Route>
                        <Route exact path="/pod5">
                            <PodPage5 />
                        </Route>

                    </Switch>
                </Router>
            </div>
            <FooterComponent />

        </div >

    )
}

