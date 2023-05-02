// import React from 'react'

export default function Scripts() {
    const script = document.createElement('script');
    script.src = "/assets/js/owl.carousel.min.js";
    script.src = "/assets/js/jquery.min.js";
    script.src = "/assets/js/bootstrap.bundle.min.js";
    script.src = "/assets/js/jquery.hoverIntent.min.js";
    script.src = "/assets/js/jquery.waypoints.min.js";
    script.src = "/assets/js/superfish.min.js";
    script.src = "/assets/js/bootstrap-input-spinner.js";
    script.src = "/assets/js/jquery.plugin.min.js";
    script.src = "/assets/js/jquery.magnific-popup.min.js";
    script.src = "/assets/js/jquery.countdown.min.j";
    script.src = "/assets/js/main.js";
    script.src = "/assets/js/demos/demo-4.js";
    
    script.async = true;
    document.body.appendChild(script);
}
