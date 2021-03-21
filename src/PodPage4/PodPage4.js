import React from 'react'

import './PodPage4.css'









function PodPage4() {
    return (
        <div style={{ minHeight: "500px" }}>
            <div style={{ marginTop: "200px" }}>

                <iframe className="sound" style={{ minHeight: "200px", borderRadius: "20px" }} width="70%" height="200" scrolling="no" frameborder="no" allow="autoplay"

                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1011763705&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"

                >

                </iframe>
                <div>
                    <a
                        href="https://soundcloud.com/user-404118386"
                        title="CEBC MENA" target="_blank" style={{ color: "#cccccc", textDecoration: "none" }} >CEBC MENA</a> ·

                    <a
                        href="https://soundcloud.com/user-404118386/s2-ep3-alternative-fuels-and-powertrains-mena-vs-usa"
                        title="S2. Ep3: Alternative fuels and powertrains: MENA vs USA"
                        target="_blank"
                        style={{ color: "#cccccc", textDecoration: "none" }}
                    >
                        S2. Ep3: Alternative fuels and powertrains: MENA vs USA
                    </a>
                </div>

            </div>


            <div style={{ width: '70%', margin: 'auto', marginTop: '50px', display: 'flex' , justifyContent:'center' }}>


                <a href=" https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zb3VuZGNsb3VkLmNvbS91c2Vycy9zb3VuZGNsb3VkOnVzZXJzOjg3MDY3Njg3Ni9zb3VuZHMucnNz/episode/dGFnOnNvdW5kY2xvdWQsMjAxMDp0cmFja3MvMTAxMTc2MzcwNQ?sa=X&ved=0CAUQkfYCahcKEwiAtvmO5r7vAhUAAAAAHQAAAAAQAQ">
                    <div style={{
                        height: '60px', minWidth: '250px', width: '300px', border: "1px solid #8080803d",
                        borderRadius: "20px",
                        boxShadow: "0px 3px 0 0 #0000002b",
                        display: 'flex',
                        justifyContent: 'left',
                        alignContent: 'center',
                        alignItems: 'center',
                        margin:'20px'

                    }}>
                        <img src={'Google.png'} alt="google" style={{ height: '50px', width: 'auto', margin: '10px' }} />

                        <div className="pod_card_text">
                            google podcasts
                        </div>
                    </div>
                </a>

                <a href=" https://podcasts.apple.com/ae/podcast/cebc-mena/id1531090426#episodeGuid=tag%3Asoundcloud%2C2010%3Atracks%2F1011763705">
                    
                        <div style={{
                            height: '60px', minWidth: '250px', width: '300px', border: "1px solid #8080803d",
                            borderRadius: "20px",
                            boxShadow: "0px 3px 0 0 #0000002b",
                            display: 'flex',
                            justifyContent: 'left',
                            alignContent: 'center',
                            alignItems: 'center',
                            margin:'20px'

                        }}>
                            <img src={'apple.png'} alt="apple" style={{ height: '50px', width: 'auto', margin: '10px' }} />
                            <div className="pod_card_text">
                                apple podcasts
                        
                        </div>
                    </div>
                </a>




            </div>




            <div style={{ marginTop: "50px", marginBottom: "50px" }}>
                <div style={{ margin: "50px", width: "70%", margin: "auto" }}>
                    <iframe id="serviceFrameSend" src="4.html" width="100%" height="1000px" frameborder="0">
                    </iframe>
                </div>
            </div>
        </div >
    )
}

export default PodPage4
