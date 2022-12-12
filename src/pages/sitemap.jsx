import React from 'react'
import Seo from './components/Seo'
import Layout from './components/Layout'
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse,faAngleRight } from '@fortawesome/free-solid-svg-icons'

const sitemap = () => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
  return (
    <>
    <Seo
    title="サイトマップ"
    description="広島・東広島の不用品回収・買取・引越しゴミ・家財整理・ゴミ屋敷・遺品整理 安芸リサイクルのサイトマップ"
    />
      <Layout>
      <div id="breadcrumb">
            <ul class="breadcrumb__list" itemscope itemtype="https://schema.org/BreadcrumbList">
                <li class="breadcrumb__item" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                    <FontAwesomeIcon icon={faHouse} />
                    <Link to="/" itemprop="item">
                        <span itemprop="name">ホーム</span>
                    </Link>
                    <meta itemprop="position" content="1" />
                </li>
                <li class="breadcrumb__item" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                <FontAwesomeIcon icon={faAngleRight} />
                    <Link to={url} itemprop="item">
                        <span itemprop="name">
                        サイトマップ
                        </span>
                    </Link>
                    <meta itemprop="position" content="2" />
                </li>
            </ul>
        </div>
      <h3 className="main_title">サイトマップ</h3>
        <ul className="sitemap_list">
          <li><a href="/">HOME</a></li>
          <li><a href="/service/">サービス一覧</a>
            <ul>
              <li><a href="/service/fuyouhin_kaisyu/">不用品回収・家財整理</a></li>
              <li><a href="/service/gomi_yashiki/">ゴミ屋敷の片付け</a></li>
              <li><a href="/service/ihin_seiri/">遺品整理・仏壇の引取り</a></li>
              <li><a href="/service/hikkoshi_gomi/">引越しに伴う粗大ゴミ回収</a></li>
              <li><a href="/service/house_cleaning/">ハウスクリーニング</a></li>
            </ul>
          </li>
          <li><a href="/recycle/">買取・回収・処分</a></li>
          <li><a href="/cleanup/">家財・片付け専門</a></li>
          <li><a href="/price/">料金</a></li>
          <li><a href="/faq/">よくあるご質問</a></li>
          <li><a href="/voice/">お客様の声</a></li>
          <li><a href="/area/">対応エリア</a></li>
          <li><a href="/flow/">ご利用までの流れ</a></li>
          <li><a href="/sitemap/">サイトマップ</a></li>
          <li><a href="/company/">会社概要</a></li>
          <li><a href="/privacy/">個人情報保護法</a></li>
        </ul>
      </Layout>
    </>
  )
}

export default sitemap
