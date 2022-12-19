import React from 'react'
import Seo from '../components/Seo'
import BreadCrumb from '../components/BreadCrumb'
import Layout from '../components/Layout'
import PlanList from '../components/Plan_list'
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'
import { StaticImage } from "gatsby-plugin-image"

const pagemeta = {
    subTitle:`サービス一覧`,
    slug:`service`
}

export default function service() {
  return (
    <>
        <Seo
        title={pagemeta.subTitle}
        description="広島・東広島の不用品回収・買取・引越しゴミ・家財整理・ゴミ屋敷・遺品整理 安芸リサイクルのサービス一覧"
        />
        <Layout>
            <BreadCrumb
            title={pagemeta.subTitle}
            slug={pagemeta.slug}
            /> 

            <h3 className="main_title">サービス一覧</h3>

            <p>安芸リサイクルでは、様々な不用品回収を始め、ゴミ屋敷のお片づけ、店舗や事務所の閉店や移転時に発生する不用品処分、故人様の遺品整理などを行っております。<br />
            お客様の状況を第一に考え、最適なご提案が出来ればと思っております。<br />
            ご要望やご不明な点等ございましたら、お気軽にご相談ください！</p>


            <div className="service_flow">
                <div className="service_h">不用品回収・家財整理<img src="../../images/service/service_icon01.png" className="icon_img" alt="" /></div>
                <div className="service_flow_inner">
                    <div className="service_flow_img"><img src="../../images/service/service001_2.jpg" width={180} className="b_radi5" alt="" /></div>
                    <div className="service_flow_txt"><p>ご家庭やオフィスにある要らなくなったものを即日回収いたします！</p>
                    <p><Link to="/service/fuyouhin_kaisyu/" className="bt01">詳しくはこちら<FontAwesomeIcon icon={faCircleChevronRight} /></Link></p></div>
                </div>
            </div>

            <div className="service_flow">
                <div className="service_h">ゴミ屋敷の片づけ<img src="../../images/service/service_icon02.png" className="icon_img" alt="" /></div>
                <div className="service_flow_inner">
                    <div className="service_flow_img"><img src="../../images/service/service002_2.jpg" width={180} className="b_radi5" alt="" /></div>
                    <div className="service_flow_txt"><p>ゴミが大量のお部屋もご安心ください！あっという間にキレイにします！</p>
                    <p><Link to="/service/gomi_yashiki/" className="bt01">詳しくはこちら<FontAwesomeIcon icon={faCircleChevronRight} /></Link></p></div>
                </div>
            </div>

            <div className="service_flow">
                <div className="service_h">遺品整理・仏壇の引取り<img src="../../images/service/service_icon03.png" className="icon_img" alt="" /></div>
                <div className="service_flow_inner">
                    <div className="service_flow_img"><img src="../../images/service/service003_2.jpg" width={180} className="b_radi5" alt="" /></div>
                    <div className="service_flow_txt"><p>人様の大切な遺品を定年に整理させて頂きます。<br />
                    不用品の処分、清掃もお任せください！</p>
                    <p><Link to="/service/ihin_seiri/" className="bt01">詳しくはこちら<FontAwesomeIcon icon={faCircleChevronRight} /></Link></p></div>
                </div>
            </div>

            <div className="service_flow">
                <div className="service_h">不用品回収・粗大ゴミ処分<img src="../../images/service/service_icon04.png" alt="" className="icon_img" /></div>
                <div className="service_flow_inner">
                    <div className="service_flow_img"><img src="../../images/service/service004_2.jpg" width={180} alt="" className="b_radi5" /></div>
                    <div className="service_flow_txt"><p>ご家庭やオフィスにある要らなくなったものを即日回収いたします！</p>
                    <p><Link to="/service/hikkoshi_gomi/" className="bt01">詳しくはこちら<FontAwesomeIcon icon={faCircleChevronRight} /></Link></p></div>
                </div>
            </div>

            <div className="service_flow">
                <div className="service_h">ハウスクリーニング</div>
                <div className="service_flow_inner">
                    <div className="service_flow_img"><img src="../../images/service/service005.jpg" width={180} height={118} alt="" /></div>
                    <div className="service_flow_txt"><p>キッチン・浴室などのお掃除から、お引越し前後など幅広い範囲で対応可能です！</p>
                    <p><Link to="/service/house_cleaning/" className="bt01">詳しくはこちら<FontAwesomeIcon icon={faCircleChevronRight} /></Link></p></div>
                </div>
            </div>

            <h4 className="title01 mt60">お得で安心の定額パックプラン</h4>

            <PlanList />
       
        </Layout>
    </>
  )
}