import React from 'react'

function PodPage() {
    return (


        <div style={{ minHeight: "500px" }}>
            <div style={{ marginTop: "200px" }}>

                <iframe className="sound" style={{ minHeight: "200px", borderRadius: "20px" }} width="70%" height="200" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1001702329&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div
                ><a href="https://soundcloud.com/user-404118386" title="CEBC MENA" target="_blank"
                    style={{ color: "#cccccc", textDecoration: "none" }}
                >CEBC MENA</a> · <a href="https://soundcloud.com/user-404118386/s2-ep-2-impact-of-covid-19-on-public-transit-and-shared-mobility-in-mena-vs-usa" title="S2. Ep. 2: Impact of COVID-19 on Public Transit and Shared Mobility in MENA vs USA" target="_blank"
                    style={{ color: "#cccccc", textDecoration: "none" }}
                >S2. Ep. 2: Impact of COVID-19 on Public Transit and Shared Mobility in MENA vs USA</a></div>



            </div>

            <div style={{ marginTop: "50px", width: "100%" }} >
                <div style={{ marginTop: "20px", margin: "auto", width: "70%" }} >

                    <iframe className="apple" allow="autoplay *; encrypted-media *; fullscreen *" frameborder="0" width="100%" height="200"
                        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.podcasts.apple.com/ae/podcast/s2-ep-2-impact-covid-19-on-public-transit-shared-mobility/id1531090426?i=1000511569093"></iframe>
                </div>
            </div>



            <div style={{ marginTop: "50px", marginBottom: "50px" }}>
                <div style={{ margin: "50px", width: "70%", margin: "auto" }}>

                    <iframe id="serviceFrameSend" src="1.html" width="100%" height="1000px" frameborder="0">

                    </iframe>
                </div>
            </div>
        </div >










    )
}

export default PodPage
