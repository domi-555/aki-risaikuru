import React from 'react'
import Seo from '../components/Seo'
import BreadCrumbParent from '../components/BreadCrumbParent'
import Layout from '../components/Layout'
import PlanList from '../components/Plan_list'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import { StaticImage } from "gatsby-plugin-image"

const pagemeta = {
    subTitle:`ゴミ屋敷の片付け`,
    slug:`gomi_yashiki`,
    parentTitle:`サービス一覧`,
    parentSlug:`service`
}

export default function gomiYashiki() {
  return (
    <>
    <Seo
    title={pagemeta.subTitle}
    description="広島・東広島の不用品回収・買取・引越しゴミ・家財整理・ゴミ屋敷・遺品整理 安芸リサイクルのサービス内容｜ゴミ屋敷の片付け"
    />
    <Layout>
        <BreadCrumbParent
        title={pagemeta.subTitle}
        slug={pagemeta.slug}
        parentTitle={pagemeta.parentTitle}
        parentSlug={pagemeta.parentSlug}
        />

        <h3 className="main_title">サービス一覧</h3>
        <h4 className="service_title">ゴミ屋敷の片付け<img  src="../../images/service/service_icon02.png" className="icon_img" alt="" /></h4>
        <div><img  src="../../images/service/gomi01.jpg" width={765} height={381} alt="" /></div>
        <p>精神的に疲れた。仕事に追われ時間がない。<br />
          などの理由で、後で片づけよう。がいつの間にか自分一人ではどうにもならない状況！！<br />
          又、「ゴミ」という言葉に対する概念も人それぞれ違います。もう何年も使用せず放置して ある物に対して ゴミだと考える方がいれば、いつか使う時の為に取り置きしていて必需品と考える方もいます。どちらの考えも間違えではないと思います。<br />
          後で、後でと延ばしているうちに、いつの間にか手が付けられなくなってしまったけど、なんとかしたいとお考えになる機会がありましたら、是非一度ご相談ください。</p>
        <div className="service_list_box">
          <h4 className="service_list_title">こんな方はお気軽にご相談ください</h4>
            <ul className="check_list">
                <li><FontAwesomeIcon icon={faCheck} />家を引越しないといけないが、1人ではどうすることも出来ない…</li>
                <li><FontAwesomeIcon icon={faCheck} />大量のゴミがありどうしたらよいかわからない…</li>
                <li><FontAwesomeIcon icon={faCheck} />部屋を明け渡すので現状復帰したい…</li>
                <li><FontAwesomeIcon icon={faCheck} />近所に知られずゴミを処分したい…</li>
                <li><FontAwesomeIcon icon={faCheck} />臭いがきついのですが…</li>
                <li><FontAwesomeIcon icon={faCheck} />虫が大量発生しているのですが…</li>
                <li><FontAwesomeIcon icon={faCheck} />早急に処分したいのですが…</li>
            </ul>
          
          <p>などなど、上記の事はすべて対応可能です。是非ご連絡ください。</p>
        </div>
        <h4 className="title01 mt60">お得で安心の定額パックプラン</h4>

        <PlanList />
        
    </Layout>
    </>
  )
}
