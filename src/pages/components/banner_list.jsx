import React from 'react'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const BnList = () => {
  return (
    <>
        <p className="center pc"><Link to="http://www.hiroshima-ihinseiri.net/" target="_blank"><img src="../images/ihinseiri_banner.png" width={1142} height={180} alt="" /></Link></p>
        <p className="center smp"><Link to="http://www.hiroshima-ihinseiri.net/" target="_blank"><img src="../images/ihinseiri_banner_smp.png" alt="広島遺品整理サポート" /></Link></p>
        <p className="center pc"><Link to="https://www.bike110.net/" target="_blank"><img src="../images/bike_banner01.png" width={1142} height={180}  alt="" /></Link></p>
        <p className="smp"><Link to="https://www.bike110.net/" target="_blank"><img src="../images/bike_banner01_smp.png" width={1000} height={150} /></Link></p>
        <p className="center"><Link to="https://www.keitora.net/" target="_blank"><img src="../images/keitora_bn01.png" width={1142} height={190} /></Link></p>
    </>
  )
}

export default BnList
