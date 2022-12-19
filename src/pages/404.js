import React from 'react'
import Seo from './components/Seo'
import BreadCrumb from './components/BreadCrumb'
import Layout from './components/Layout'
import { Link } from "gatsby"

const pagemeta = {
    subTitle:`ページが見つかりません`,
    slug:`404`
}

export default function notFound() {
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
      <h3 className="main_title">404 Not Found</h3>
      <h3>お探しの記事は見つかりませんでした。</h3>
          <p className="center">安芸リサイクルのWEBサイトをご覧頂きありがとうございます。<br />
          大変申し訳ないのですが、あなたがアクセスしようとしたページは削除されたかURLが変更されています。<br />
          お手数をおかけしますが、以下の方法からもう一度目的のページをお探し下さい。</p>
          <p className="center"><Link to="/" className='bt01'>トップページへ戻る</Link></p>
      </Layout>
    </>
  )
}
