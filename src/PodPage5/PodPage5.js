import React from 'react'

import './PodPage5.css'





function PodPage5() {
    return (
        <div style={{ minHeight: "500px" }}>
            <div style={{ marginTop: "200px" }}>

                <iframe className="sound" style={{ minHeight: "200px", borderRadius: "20px" }} width="70%" height="200" scrolling="no" frameborder="no" allow="autoplay"

                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1040041342&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"

                >

                </iframe>
                <div>
                    <a
                        href="https://soundcloud.com/user-404118386"
                        title="CEBC MENA" target="_blank" style={{ color: "#cccccc", textDecoration: "none" }} >CEBC MENA</a> ·

                    <a
                        href="https://soundcloud.com/user-404118386/s2-ep3-alternative-fuels-and-powertrains-mena-vs-usa"
                        title="S2. E4: Mobility Behavior in MENA vs USA (Car Pride)"
                        target="_blank"
                        style={{ color: "#cccccc", textDecoration: "none" }}
                    >
                        {`S2. E4: Mobility Behavior in MENA vs USA (Car Pride)`}
                    </a>
                </div>

            </div>


            <div style={{ width: '70%', margin: 'auto', marginTop: '50px', display: 'flex' , justifyContent:'center' , flexWrap:'wrap' }}>


                <a href="https://lnkd.in/dXD6Gyg">
                    <div style={{
                        height: '60px', minWidth: '250px', width: '300px' , maxWidth:'90%', border: "1px solid #8080803d",
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

                <a href="https://lnkd.in/dFmAAxq">
                    
                        <div style={{
                            height: '60px', minWidth: '250px', width: '300px' , maxWidth:'90%', border: "1px solid #8080803d",
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
                <div style={{ margin: "50px", width: "70%",minWidth:'300px', margin: "auto" }}>
                    <iframe id="serviceFrameSend" src="5.html" width="100%" height="1000px" frameborder="0">
                    </iframe>
                </div>
            </div>
        </div >
    )
}

export default PodPage5
