import React from 'react'
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'

const ServiceList = () => {
  return (
    <>
      <p className="center img_100p"><img src="../../images/txt11.png" alt="安芸リサイクルのサービス一覧" width={1142} height={134} /></p>

      <div className="service">
        <div className="service_cont">
          <div className="service_inner">
            <div className="service_h">不用品回収<br />・家財整理</div>
            <div className="service_box">
              <div className="service_box_naka">
                <p className="center"><img src="../../images/top_pic01.png" width={207} height={70} /></p>
                <p>ご家庭やオフィスにある要らなくなったものを即日回収いたします！</p>
                <p className="center"><a href="/service/fuyouhin_kaisyu/" className="bt01">詳しくはこちら<FontAwesomeIcon icon={faCircleChevronRight} /></a></p>
              </div>
            </div>
          </div>
        </div>
        <div className="service_cont">
          <div className="service_inner">
          <div className="service_h">ゴミ屋敷の<br />片付け</div>
            <div className="service_box">
              <div className="service_box_naka">
                <p className="center"><img src="../../images/top_pic02.png" width={207} height={70} /></p>
                <p>ゴミが大量のお部屋もご安心ください！あっという間にキレイにします！</p>
                <p className="center"><a href="/service/gomi_yashiki/" className="bt01">詳しくはこちら<FontAwesomeIcon icon={faCircleChevronRight} /></a></p>
              </div>
            </div>
          </div>
        </div>
        <div className="service_cont">
          <div className="service_inner">
          <div className="service_h">遺品整理・<br />仏壇の引き取り</div>
            <div className="service_box">
              <div className="service_box_naka">
                <p className="center"><img src="../../images/top_pic03.png" width={207} height={70} /></p>
                <p>人様の大切な遺品を定年に整理させて頂きます。不用品の処分、清掃もお任せください！</p>
                <p className="center"><a href="/service/ihin_seiri/" className="bt01">詳しくはこちら<FontAwesomeIcon icon={faCircleChevronRight} /></a></p>
              </div>
            </div>
          </div>
        </div>
        <div className="service_cont">
          <div className="service_inner">
          <div className="service_h">引っ越しに伴う<br />粗大ゴミ回収</div>
            <div className="service_box">
              <div className="service_box_naka">
                <p className="center"><img src="../../images/top_pic04.png" width={207} height={70} /></p>
                <p>ご家庭やオフィスにある要らなくなったものを即日回収いたします！</p>
                <p className="center"><a href="/service/hikkoshi_gomi/" className="bt01">詳しくはこちら<FontAwesomeIcon icon={faCircleChevronRight} /></a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ServiceList
