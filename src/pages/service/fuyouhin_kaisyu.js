import React from 'react'
import Seo from '../components/Seo'
import BreadCrumbParent from '../components/BreadCrumbParent'
import Layout from '../components/Layout'
import PlanList from '../components/Plan_list'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import { StaticImage } from "gatsby-plugin-image"

const pagemeta = {
    subTitle:`不用品回収・家財整理`,
    slug:`fuyouhin_kaisyu`,
    parentTitle:`サービス一覧`,
    parentSlug:`service`
}

export default function fuyouhinKaisyu() {
  return (
    <>
    <Seo
    title={pagemeta.subTitle}
    description="広島・東広島の不用品回収・買取・引越しゴミ・家財整理・ゴミ屋敷・遺品整理 安芸リサイクルのサービス内容｜不用品回収・家財整理"
    />
        <Layout>
        <BreadCrumbParent
        title={pagemeta.subTitle}
        slug={pagemeta.slug}
        parentTitle={pagemeta.parentTitle}
        parentSlug={pagemeta.parentSlug}
        />

        <h3 className="main_title">サービス一覧</h3>
        <h4 className="service_title">不用品回収・家財整理<img src="../../images/service/service_icon01.png" className="icon_img" alt="" /></h4>
        <div><img src="../../images/service/fuyouhin01.jpg" width={765} height={381} alt="" /></div>
        <p>小さい物一つでもお伺いします。<br />
          また仏壇や冷蔵庫、大型テレビ、ソファ、タンス、ベッド、食器棚などの重くて大きなものでも大丈夫。お気軽にご連絡ください。<br />
          ご依頼場所の規模や対象となる物の数などに制限はありません。<br />
          一部屋丸ごと、倉庫、物置、ガレージ等どのような規模のご依頼でもお伺いいたします。</p>

        <div className="service_list_box">
          <h4 className="service_list_title">こんな方はお気軽にご相談ください</h4>

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