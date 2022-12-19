import React from 'react'
import Seo from './components/Seo'
import BreadCrumb from './components/BreadCrumb'
import Layout from './components/Layout'
import { Link } from "gatsby"

const pagemeta = {
  subTitle:`サイトマップ`,
  slug:`sitemap`
}

export default function sitemap() {
  return (
    <>
    <Seo
    title={pagemeta.subTitle}
    description="広島・東広島の不用品回収・買取・引越しゴミ・家財整理・ゴミ屋敷・遺品整理 安芸リサイクルのサイトマップ"
    />
      <Layout>
        <BreadCrumb
          title={pagemeta.subTitle}
          slug={pagemeta.slug}
          />
        <h3 className="main_title">サイトマップ</h3>
        <ul className="sitemap_list">
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/service/">サービス一覧</Link>
            <ul>
              <li><Link to="/service/fuyouhin_kaisyu/">不用品回収・家財整理</Link></li>
              <li><Link to="/service/gomi_yashiki/">ゴミ屋敷の片付け</Link></li>
              <li><Link to="/service/ihin_seiri/">遺品整理・仏壇の引取り</Link></li>
              <li><Link to="/service/hikkoshi_gomi/">引越しに伴う粗大ゴミ回収</Link></li>
              <li><Link to="/service/house_cleaning/">ハウスクリーニング</Link></li>
            </ul>
          </li>
          <li><Link to="/recycle/">買取・回収・処分</Link></li>
          <li><Link to="/cleanup/">家財・片付け専門</Link></li>
          <li><Link to="/price/">料金</Link></li>
          <li><Link to="/faq/">よくあるご質問</Link></li>
          <li><Link to="/voice/">お客様の声</Link></li>
          <li><Link to="/area/">対応エリア</Link></li>
          <li><Link to="/flow/">ご利用までの流れ</Link></li>
          <li><Link to="/sitemap/">サイトマップ</Link></li>
          <li><Link to="/company/">会社概要</Link></li>
          <li><Link to="/privacy/">個人情報保護法</Link></li>
        </ul>
      </Layout>
    </>
  )
}
