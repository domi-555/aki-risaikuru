import React from 'react'
import Seo from '../components/Seo'
import BreadCrumbParent from '../components/BreadCrumbParent'
import Layout from '../components/Layout'
import PlanList from '../components/Plan_list'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from '@fortawesome/free-solid-svg-icons'

import { StaticImage } from "gatsby-plugin-image"

const pagemeta = {
  subTitle:`遺品整理・仏壇の引取り`,
  slug:`ihin_seiri`,
  parentTitle:`サービス一覧`,
  parentSlug:`service`
}

export default function ihinSeiri() {
  return (
    <>
      <Seo
      title="遺品整理・仏壇の引取り"
      description="広島・東広島の不用品回収・買取・引越しゴミ・家財整理・ゴミ屋敷・遺品整理 安芸リサイクルのサービス内容｜遺品整理・仏壇の引取り"
      />
        <Layout>
        <BreadCrumbParent
        title={pagemeta.subTitle}
        slug={pagemeta.slug}
        parentTitle={pagemeta.parentTitle}
        parentSlug={pagemeta.parentSlug}
        />

        <h3 className="main_title">サービス一覧</h3>
        
        <h4 className="service_title">遺品整理・仏壇の引取り<img src="../../images/service/service_icon03.png" className="icon_img" alt="" /></h4>

        <div><img src="../../images/service/ihin01.jpg" width={765} height={381} alt="遺品整理とは、大切な人が残していった思い出の品を整理、処分する事です。" /></div>
        <p>ご依頼をいただくご遺族の方にはそれぞれの事情がございます。<br />
          また、突然のことで、何から手をつけていいか分からない事ばかりで困惑するご遺族の方が多いのも確かです。<br />
          安芸リサイクルでは、遺品整理のプロアドバイザーが故人の想いを大切にし、ご遺族の気持を汲み取り、「こころ」で遺品の分別の お手伝い・回収・処理を行います。</p>

        <div className="service_list_box">
        <h4 className="service_list_title">こんな方はお気軽にご相談ください</h4>
        <ul className="check_list">
        <li><FontAwesomeIcon icon={faCheck} />故人との家が離れているので、中々整理する事がむずかしい。</li>
            <li><FontAwesomeIcon icon={faCheck} />遺品をリサイクルしてほしい。</li>
            <li><FontAwesomeIcon icon={faCheck} />遺品を供養してほしい。</li>
            <li><FontAwesomeIcon icon={faCheck} />遺品をゴミとして扱わないでほしい。</li>
            <li><FontAwesomeIcon icon={faCheck} />回収後、ハウスクリーニングしてほしい。</li>
            <li><FontAwesomeIcon icon={faCheck} />時間をかけて一緒に整理してほしい。</li>
        </ul>
          
          <p>などなど、上記の事はすべて対応可能です。是非ご連絡ください。</p>
        </div>

        <div><img src="../../images/service/ihin03.jpg" width={765} height={381} alt="生前整理を通じて身軽でポジティブなセカンドライフを迎えましょう！" /></div>

        <p>生前整理とは言わば人生の衣替えです。<br />
          不要なもの、お気に入りでないもの、様々な不便としがらみをスッキリ整理することにより新たなライフスタイルを心地よくそして安心して過ごすことができます。<br />
          不用品がなくなってスッキリした新しい空間であなたは何をしたいですか？<br />
          備えあれば憂いなしとよく言いますが、備蓄するのみが備えではありません。ケガや病気は何時襲ってくるかわかりません。思うように体の自由が利かない時、溢れるものの中から必要なものを取り出さなければいけないなんてぞっとしますよね。<br />
          まさに整理すれば憂いなし。<br />
          遺品整理は辛いものです。一度でも経験のある方ならよくお分かりだと思います。<br />
          あなたの大切な人たちのためにたくさん残すのは「楽しい思い出」と決め込んで所有物のダイエットにはげみましょう！</p>

        <div className="service_list_box">
          <h4 className="service_list_title">こんな方はお気軽にご相談ください</h4>
          <ul className="check_list">
            <li><FontAwesomeIcon icon={faCheck} />物が多すぎて生活が不便。</li>
              <li><FontAwesomeIcon icon={faCheck} />子供や孫が泊まりに来るけどスペースがない。</li>
              <li><FontAwesomeIcon icon={faCheck} />親族の遺品整理を経験し、自分の時は家族に負担をかけたくない。</li>
              <li><FontAwesomeIcon icon={faCheck} />最新家電、骨董品、調度品、アンティーク家具など買取り致します。<br />
                （買取りできないものもございます。）</li>
          </ul>
          <p>などなど、上記の事はすべて対応可能です。是非ご連絡ください。</p>
        </div>
        
        <h4 className="title01 mt60">お得で安心の定額パックプラン</h4>

        <PlanList />

        </Layout>
    </>
  )
}
