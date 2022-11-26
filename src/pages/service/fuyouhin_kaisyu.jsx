import React from 'react'
import Seo from '../components/Seo'
import Layout from '../components/Layout'
import PlanList from '../components/Plan_list'
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse,faAngleRight,faCheck } from '@fortawesome/free-solid-svg-icons'

const fuyouhin_kaisyu = () => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
  return (
    <>
    <Seo title="不用品回収・家財整理" />
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
                    <Link to="/service/" itemprop="item">
                        <span itemprop="name">
                        サービス一覧
                        </span>
                    </Link>
                    <meta itemprop="position" content="2" />
                </li>
                <li class="breadcrumb__item" itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
                <FontAwesomeIcon icon={faAngleRight} />
                    <Link to={url} itemprop="item">
                        <span itemprop="name">
                        不用品回収・家財整理
                        </span>
                    </Link>
                    <meta itemprop="position" content="2" />
                </li>
            </ul>
        </div> 

        <h3 className="main_title">サービス一覧</h3>
        <h4 className="service_title">不用品回収・家財整理<img src="/images/service/service_icon01.png" className="icon_img" /></h4>
        <p><img src="../../images/service/fuyouhin01.jpg" width={765} /></p>
        <p>小さい物一つでもお伺いします。<br />
          また仏壇や冷蔵庫、大型テレビ、ソファ、タンス、ベッド、食器棚などの重くて大きなものでも大丈夫。お気軽にご連絡ください。<br />
          ご依頼場所の規模や対象となる物の数などに制限はありません。<br />
          一部屋丸ごと、倉庫、物置、ガレージ等どのような規模のご依頼でもお伺いいたします。</p>

        <div style={{backgroundColor: '#f7f6f0', borderRadius: '5px', padding: '5px 25px'}}>

        <h4 className="larger bold dark-red" style={{borderBottom: 'dashed 2px #ccc', margin: '25px 0'}}>こんな方はお気軽にご相談ください</h4>

        <ul className="check_list">
            <li><FontAwesomeIcon icon={faCheck} />TV１点だけなんですが…</li>
            <li><FontAwesomeIcon icon={faCheck} />一緒に分別しながら回収してほしい…</li>
            <li><FontAwesomeIcon icon={faCheck} />物置の中身と物置も回収してほしい…</li>
            <li><FontAwesomeIcon icon={faCheck} />分別してないのですが…</li>
            <li><FontAwesomeIcon icon={faCheck} />大型家具の処分をお願いしたいのですが、通路が狭くて…</li>
            <li><FontAwesomeIcon icon={faCheck} />何も準備してないけど見積もりに来てくれるの…</li>
            <li><FontAwesomeIcon icon={faCheck} />各部屋ごとに少量ずつ不用品があるけど…</li>
        </ul>
            
        <p>などなど、上記の事はすべて対応可能です。是非ご連絡ください。</p>

        </div>

        <h4 className="title01 mt60">お得で安心の定額パックプラン</h4>

        <PlanList />

        </Layout>
    </>
  )
}

export default fuyouhin_kaisyu
