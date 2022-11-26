import React from 'react'
import Seo from './components/Seo'
import Layout from './components/Layout'
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse,faAngleRight } from '@fortawesome/free-solid-svg-icons'

const company = () => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
  return (
    <>
    <Seo title="会社概要" />
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
                        会社概要
                        </span>
                    </Link>
                    <meta itemprop="position" content="2" />
                </li>
            </ul>
        </div>

    <h3 className="main_title">会社概要</h3>
        <h3 className="title01">安芸リサイクル 本店</h3>
        <table className="legal_notice">
          <tbody><tr>
              <th>社名</th>
              <td>安芸リサイクル</td>
            </tr>
            <tr>
              <th>事業部</th>
              <td>広島遺品整理士サポート　単身引越し　バイク廃棄110番</td>
            </tr>
            <tr>
              <th>所在地</th>
              <td>《本店》〒736-0085<br />広島市安芸区矢野西三丁目68番13号</td>
            </tr>
            <tr>
              <th>電話</th>
              <td>0120-28-3374</td>
            </tr>
            <tr>
              <th>FAX番号</th>
              <td>082-888-6203</td>
            </tr>
            <tr>
              <th>営業時間</th>
              <td>8:00～18:00</td>
            </tr>
            <tr>
              <th>定休日</th>
              <td>年中無休<br />※引き取りなどで不在の場合があります。<br />ご電話でご確認の上、ご来店ください。</td>
            </tr>
            <tr>
              <th>代表社員</th>
              <td>高宮久司</td>
            </tr>
            <tr>
              <th>事業内容</th>
              <td>不用品の回収及び処分　一部買取　生前整理　遺品整理<br />
                家丸ごと片付け整理　ゴミ屋敷の片付け整理　お掃除<br />
                事務所の整理　お引越し　ハウスクリーニング　その他</td>
            </tr>
            <tr>
              <th>古物許可番号</th>
              <td>第731071800004号</td>
            </tr>
            <tr>
              <th>軽貨物運送業許可</th>
              <td>営業ナンバー取得</td>
            </tr>
            <tr>
              <th>産業廃棄物収集運搬業</th>
              <td>第03409225140号</td>
            </tr>
            <tr>
              <th>金属屑業</th>
              <td>第10705号</td>
            </tr>
            <tr>
              <th>一般社団法人</th>
              <td>遺品整理士認定協会認定番号　第ＩＳ02241号, 第ＩＳ26109号</td>
            </tr>
            <tr>
              <th>一般社団法人</th>
              <td>日本リュース、リサイクル回収事業者組合会員 Ｎo00265</td>
            </tr>
            <tr>
              <th>一般社団法人</th>
              <td>事故現場特殊清掃士　第CSC01564号</td>
            </tr>
            <tr>
              <th>契約企業</th>
              <td>一般廃棄物収集運搬業者</td>
            </tr>
            <tr>
              <th>会社の営業方針</th>
              <td>安芸リサイクルでは法令に則って不用品・粗大ごみの回収処分代行サービスを行っております。回収した不用品の中でも再利用可能な品物（電化製品）、資源として再利用できるもの（木材・金属材・プラスチック等）は一般ごみとは分類してリサイクルに努めており、地球環境に優しい企業になるために日々努力を重ねております。<br />
                リサイクル、リユース可能な物は自社で買取を行います。<br />
                このようなサービスでお客様の負担する必要経費を最小限に抑えるよう、努力をしております。それ以外の一般ごみについては法令に従い、分別を行うなど適切な処理を行っています。</td>
            </tr>
            <tr>
              <th>アクセスマップ</th>
              <td><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3294.262020794459!2d132.5216368152227!3d34.343808980527626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x355aa05ad9b1f8a9%3A0xf0bbff04c436ea2c!2z44CSNzM2LTAwODUg5bqD5bO255yM5bqD5bO25biC5a6J6Iq45Yy655-i6YeO6KW_77yT5LiB55uu77yW77yY4oiS77yR77yT!5e0!3m2!1sja!2sjp!4v1625491005362!5m2!1sja!2sjp" width="100%" height={250} style={{border: 0}} allowFullScreen loading="lazy" /><br /><small>より大きな地図で <a href="https://www.google.com/maps/place/%E3%80%92736-0085+%E5%BA%83%E5%B3%B6%E7%9C%8C%E5%BA%83%E5%B3%B6%E5%B8%82%E5%AE%89%E8%8A%B8%E5%8C%BA%E7%9F%A2%E9%87%8E%E8%A5%BF%EF%BC%93%E4%B8%81%E7%9B%AE%EF%BC%96%EF%BC%98%E2%88%92%EF%BC%91%EF%BC%93/@34.343809,132.5216368,17z/data=!3m1!4b1!4m5!3m4!1s0x355aa05ad9b1f8a9:0xf0bbff04c436ea2c!8m2!3d34.343809!4d132.5238255" style={{color: '#0000FF', textAlign: 'left'}}>安芸リサイクル（本店）</a> を表示</small></td>
            </tr>
          </tbody></table>

    </Layout>      
    </>
  )
}

export default company
