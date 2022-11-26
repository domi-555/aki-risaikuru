import React from 'react'
import Seo from './components/Seo'
import Layout from './components/Layout'
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse,faAngleRight } from '@fortawesome/free-solid-svg-icons'

const contact_thanks = () => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
  return (
    <>
      <Seo title="無料見積り・お問い合わせありがとうございました。" />
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
                    <Link to="/contact/" itemprop="item">
                        <span itemprop="name">
                        無料見積り・お問い合わせ
                        </span>
                    </Link>
                    <meta itemprop="position" content="2" />
                </li>
                <li class="breadcrumb__item" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                <FontAwesomeIcon icon={faAngleRight} />
                    <Link to={url} itemprop="item">
                        <span itemprop="name">
                        無料見積り・お問い合わせありがとうございました。
                        </span>
                    </Link>
                    <meta itemprop="position" content="2" />
                </li>
            </ul>
        </div>

      <h3 className="main_title">無料見積り・お問い合わせ</h3>

      <p className="larger dark-red bold">無料見積り・お問い合わせありがとうございました。</p>
         
         <p>■お電話よるお問い合わせ/年中無休 8：00～18：00 TEL：0120-28-3374<br />
         ■ご利用上の注意：下記の各記入欄に必要事項とお問い合わせ内容を入力し送信をして下さい。<br />
         なお、お客さまの個人情報は他の目的では使用いたしません。<br />
         送信にあたっては、事前に<Link to="/privacy/">プライバシーポリシー</Link>をご覧下さい。</p>
         
         <p>お問い合わせありがとうございました。お問い合せ内容を確認次第、翌営業日中までにはご返答いたしますので、今しばらくお待ちくださいますよう、よろしくお願い申し上げます。</p>
         
         <p><Link to="/">トップページに戻る</Link></p>
      
      </Layout>
    </>
  )
}

export default contact_thanks
