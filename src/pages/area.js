import React from 'react'
import Seo from './components/Seo'
import BreadCrumb from './components/BreadCrumb'
import Layout from './components/Layout'

const pagemeta = {
    subTitle:`対応エリア`,
    slug:`area`
}

export default function area() {
  return (
    <>
    <Seo
    title={pagemeta.subTitle}
    description="広島不用品回収対応エリア(広島市中区・東区・南区・安佐南区・安佐北区・西区・佐伯区・廿日市市・安芸区・海田・坂・熊野・東広島市・西条・八本松・黒瀬町・安芸津町・安浦町・呉市・江田島市・音戸町・倉橋町)"
    />
        
    <Layout>
      <BreadCrumb
      title={pagemeta.subTitle}
      slug={pagemeta.slug}
      />
  
      <h3 className="main_title">対応エリア</h3>
      <p className="larger dark-red bold">即日お見積り・即日対応が可能です！</p>
      <h3 className="title01">対応エリア一覧</h3>
      <p>広島市中区・東区・南区・安佐南区・安佐北区・西区・佐伯区・廿日市市・安芸区・海田・坂・熊野・東広島市・西条・八本松・黒瀬町・安芸津町・安浦町・呉市・江田島市・音戸町・倉橋町</p>
      <h4 className="title01 mt60">お電話でのお問い合わせ・無料見積・メールでのお問い合わせ</h4>
      <p>当店に直接持ち込みできない方のために、出張買取＆引取もできます。出張の場合、買取金額が持ち込みの場合の半額程度になることをご了承ください。また、現地にて作業が発生する場合は作業料が発生します。出張料（実費）もいただきます。これらの費用は、お見積もりいたしますので、事前にお問い合わせください。</p>
        
    </Layout>
    </>
  )
}

