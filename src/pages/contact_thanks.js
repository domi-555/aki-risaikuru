import React from 'react'
import Seo from './components/Seo'
import BreadCrumbParent from './components/BreadCrumbParent'
import Layout from './components/Layout'
import { Link } from "gatsby"

const pagemeta = {
  subTitle:`無料見積り・お問い合わせありがとうございました。`,
  slug:`contact_thanks`,
  parentTitle:`お問い合わせ`,
  parentSlug:`contact`
}

export default function contact_thanks() {
  return (
    <>
      <Seo
      title={pagemeta.subTitle}
      description="お問い合わせ完了｜広島・東広島の不用品回収・買取・引越しゴミ・家財整理・ゴミ屋敷・遺品整理 安芸リサイクル"
      />
      <Layout>

        <BreadCrumbParent
        title={pagemeta.subTitle}
        slug={pagemeta.slug}
        parentTitle={pagemeta.parentTitle}
        parentSlug={pagemeta.parentSlug}
        />

        <h3 className="main_title">無料見積り・お問い合わせ</h3>

        <p className="larger dark-red bold">無料見積り・お問い合わせありがとうございました。</p>
         
        <p>■お電話よるお問い合わせ/年中無休 8：00～18：00 TEL：0120-28-3374<br />
        ■ご利用上の注意：下記の各記入欄に必要事項とお問い合わせ内容を入力し送信をして下さい。<br />
        なお、お客さまの個人情報は他の目的では使用いたしません。<br />
        送信にあたっては、事前に<Link to="/privacy/">プライバシーポリシー</Link>をご覧下さい。</p>
         
        <p>お問い合わせありがとうございました。お問い合せ内容を確認次第、翌営業日中までにはご返答いたしますので、今しばらくお待ちくださいますよう、よろしくお願い申し上げます。</p>
        
        <p><Link to="/" className='bt01 center'>トップページに戻る</Link></p>
      
      </Layout>
    </>
  )
}
