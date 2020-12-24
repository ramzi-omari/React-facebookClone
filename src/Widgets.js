import React from 'react'
import "./Widgets.css"

function Widgets() {
    return (
        <div className="widgets">
            {/* <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCleverProgrammerr%2F&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appID"
            
            width="340"
            height="100%"
            style={{border:"non", overflow:"hidden"}}
            scrolling="no"
            frameBorder="0"
            allowTransparency="true"
            allow="encrypted-media"
            
            ></iframe> */}
   

            <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FRealMadrid%2Fvideos%2F2749082542074635%2F&show_text=true&width=560"
              width="340"
              height="100%"
              style={{border:"non", overflow:"hidden"}}
              scrolling="no"
              frameBorder="0"
              allowTransparency="true"
              allow="encrypted-media"
            ></iframe>
        </div>

    )
}

export default Widgets
