import React from 'react'
import Seo from './components/Seo'
import Layout from './components/Layout'
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse,faAngleRight } from '@fortawesome/free-solid-svg-icons'

const privacy = () => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
  return (
    <>
      <Seo
      title="個人情報の取り扱いについて"
      description="広島・東広島の不用品回収・買取・引越しゴミ・家財整理・ゴミ屋敷・遺品整理 安芸リサイクルの個人情報の取り扱いについて"
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
                        個人情報の取り扱いについて
                        </span>
                    </Link>
                    <meta itemprop="position" content="2" />
                </li>
            </ul>
        </div>

        <h3 class="main_title">個人情報保護法</h3>

        <h4 className="title02">個人情報の取り扱いについて</h4>
        <p>安芸リサイクルは、個人情報保護の重要性を認識し、その適切な管理を行うことが重要な社会的責務と考えております。そこで安芸リサイクルが運営するこのウェブサイトにおけるプライバシーポリシーを次のとおり定め、このプライバシーポリシーに従ってお客様の個人情報を取扱 い、お客様が安心してご利用頂けるよう、ウェブサイトの運営・管理に努めます。安芸リサイクルは、ウェブサイトを通じてお客様の個人情報をご提供頂いた時は、これを本プライバシーポリシーに従って取扱います。但し、個人情報をご提供頂く特定のウェブページにおいて、本プライバシーポリシーと異なる定めをした場合、かかる定めが本プライバシーポリシーに優先して適用されるものとします。</p>
        <h4 className="title02">個人情報とは</h4>
        <p>安芸リサイクルが、インターネットを通じて、お客様から提供を受けた住所、氏名、電話番号、E-mailアドレス等、その他の記述等により個人を識別できるも の、個人に帰属する番号・記号によって個人を識別できるもの、その情報だけでは個人を識別できなくても、他の情報と容易に照合することができ、それにより 個人を識別できる固有の情報を意味します。</p>
        <h4 className="title02">個人情報の収集</h4>
        <p>お客様に個人情報のご提供をお願いする時は、予めその利用目的を明示いたします。お客様にご提供頂いた個人情報は、利用目的の範囲内で利用し、お客様の同意なく利用目的以外に利用致しません。お客様が安芸リサイクルへの個人情報の提供を希望されない場合は、お客様自身のご判断により、個人情報の提供を拒否することが出来ます。この場合、安芸リサイクルのウェブサイトにおけるサービスをご利用になれない場合がございますので、予めご了承ください。</p>
        <h4 className="title02">個人情報の第三者提供</h4>
        <p>お客様に個人情報のご提供をお願いする時は、予めその利用目的を明示いたします。しかし、次のいずれかに該当する場合はその限りではありません。</p>
        <ol>
          <li>お客様の同意がある場合。</li>
          <li>安芸リサイクルと機密保持契約を締結している協力企業、提携会社及び業務委託会社に対してお客様に明示した収集目的を実施すべく個人情報を開示する必要がある場合。<br />
            (例：招待状やハガキの発送を運送業者に委託する場合)</li>
          <li>統計的なデータとしてお客様個人を識別できない状態に加工した場合。</li>
          <li>法令等に基づき、提供に応じなければならない場合。</li>
        </ol>
        <h4 className="title02">個人情報の安全管理</h4>
        <p>お客様から個人情報をご提供頂く際には、個人情報をご提供頂く特定のウェブページに、その管理元を予め明示致します。管理元はご提供頂いた個人情報を厳重に保管・管理し第三者の不正なアクセスによる個人情報の漏洩・流用・改ざん等を防止するため、ファイアーウォール設置・コンピュータウィルス対策、その他合理的なセキュリティ対策を講じるものとします。</p>
        <h4 className="title02">個人情報の照会・訂正・削除について</h4>
        <p>安芸リサイクルにご提供頂いた個人情報の内容に関して、照会・訂正・削除等を希望される場合は、管理元にご請求ください。ご請求頂いた方がお客様ご本人であることが確認されましたら、合理的な期間内に、お客様の個人情報を開示、訂正又は、削除等を致します。</p>
        <h4 className="title02">リンク先における個人情報の保護</h4>
        <p>安芸リサイクルは、本ウェブサイトからリンクするウェブサイトにおける個人情報の安全確保については責任を負うことが出来ません。リンク先の個人情報保護につきましては、当該リンク先におけるプライバシーポリシー等をお客様ご自身でご確認頂きますようお願い致します。</p>
        <h4 className="title02">お問合せ対応窓口</h4>
        <p>お客様がご提供された個人情報についてご不明な点につきましては、個人情報をご提供頂く特定のウェブページに記載の<a href="/contact/">お問合せ窓口</a>までお問合せ下さい。</p>

        </Layout>
    </>
  )
}

export default privacy
