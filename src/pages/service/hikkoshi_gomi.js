import React from 'react'
import Seo from '../components/Seo'
import BreadCrumbParent from '../components/BreadCrumbParent'
import Layout from '../components/Layout'
import PlanList from '../components/Plan_list'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { StaticImage } from "gatsby-plugin-image"

const pagemeta = {
  subTitle:`引越しに伴う粗大ゴミ回収`,
  slug:`hikkoshi_gomi`,
  parentTitle:`サービス一覧`,
  parentSlug:`service`
}

export default function hikkoshiGomi() {
  return (
    <>
      <Seo
      title={pagemeta.subTitle}
      description="広島・東広島の不用品回収・買取・引越しゴミ・家財整理・ゴミ屋敷・遺品整理 安芸リサイクルのサービス内容｜引越しに伴う粗大ゴミ回収"
      />
        <Layout>
        <BreadCrumbParent
        title={pagemeta.subTitle}
        slug={pagemeta.slug}
        parentTitle={pagemeta.parentTitle}
        parentSlug={pagemeta.parentSlug}
        />

        <h3 className="main_title">サービス一覧</h3>

        <h4 className="service_title">引越しに伴う粗大ゴミ回収<img  src="../../images/service/service_icon04.png" className="icon_img" alt="" /></h4>

        <div><img  src="../../images/service/hikkoshi01.jpg" width={765} height={381} alt="" /></div>
        <p>引越しの際に出る粗大ゴミや、不用品の処分を自分でやるのはとても労力がかかります。<br />
        弊社では、お得なパック料金を選ぶ事により、様々な粗大ゴミの処分や不用品の回収にも丁寧に対応いたします。<br />
        引越しのスケジュールに合わせて作業日を調整いたしますので、ご連絡の際は引越し日の日程にゆとりをもってご連絡下さい。</p>
        <div className="service_list_box">
          <h4 className="service_list_title">こんな方はお気軽にご相談ください</h4>
          <ul className="check_list">
              <li><FontAwesomeIcon icon={faCheck} />引越しを機に一斉に整理したい。</li>
              <li><FontAwesomeIcon icon={faCheck} />引越し作業も一緒に行って欲しい。</li>
              <li><FontAwesomeIcon icon={faCheck} />引越しから不用品の回収までやって欲しい。</li>
          </ul>
          <p>などなど、上記の事はすべて対応可能です。是非ご連絡ください。</p>
        </div>

        <h4 className="title01 mt60">お得で安心の定額パックプラン</h4>

        <PlanList />

      </Layout>
    </>
  )
}
