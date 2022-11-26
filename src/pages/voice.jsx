import React from 'react'
import Seo from './components/Seo'
import Layout from './components/Layout'
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse,faAngleRight } from '@fortawesome/free-solid-svg-icons'

const voice = () => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
  return (
    <>
    <Seo title="お客様の声" />
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
                        お客様の声
                        </span>
                    </Link>
                    <meta itemprop="position" content="2" />
                </li>
            </ul>
        </div>
      <h3 className="main_title">お客様の声</h3>
        <p>お客様から嬉しいお言葉頂きました！！</p>
        <div className="top_voice_box">
          <div className="voice_r">
            <h4 className="voice_title02">引越しに伴って冷蔵庫や洋服ダンスなどの大型家具から、衣類・家電などまとめて回収していただきました。</h4>
            <p><span className="voice_age">30代女性</span>　T様《主婦》</p>
            <p>主人の仕事の都合で引越しをすることになり、ついでにベッドやソファーなどの買替えも考えていました。<br />
              何から始めたら良いか分からず戸惑いましたが、初めは引越し業者さんに問い合わせをして、引越し作業と不用品を引き取ってもらいたいと相談しました。<br />
              電話口で「粗大ゴミなどは専門業者にお願いした方が安いです」と教えてもらったので、インターネットで不用品回収の業者さんを比較するサイトを見ていて、安芸リサイクルさんが載っていたので問い合わせをしてみました。<br />
              スタッフの方の対応が丁寧で、引越しのタイミングに合わせていただけるとお話伺ったので、今回は安芸リサイクルさんに回収をお願いすることにしました。<br />
              回収当日は30分くらい前にご連絡をくださり、作業員の方も感じが良く好印象でした。<br />
              その時はマンションの4階に住んでいて、冷蔵庫や洋服ダンスやベッドなどの大きな家具もあったのですが、回収作業もテキパキと行ってもらえて大変助かりました。<br />
              また機会がございましたらよろしくお願いします。</p>
          </div>
          <div className="voice_l">
            <p className="center" style={{marginBottom: 0}}><img src="../images/voice_ilust01.png" width={60} /></p>
            <p className="voice_title01">ご利用サービス</p>
            <p>軽トラック ハーフプラン</p>
            <p><img src="../images/sarvice_01.png" width={155} height={160} /></p>
            <p className="voice_title01">お客様満足度</p>
            <ul className="hyoka_list">
                      <li><img src="../images/star_01.png" width={30} height={30} /></li>
                      <li><img src="../images/star_01.png" width={30} height={30} /></li>
                      <li><img src="../images/star_01.png" width={30} height={30} /></li>
                      <li><img src="../images/star_01.png" width={30} height={30} /></li>
                      <li><img src="../images/star_01.png" width={30} height={30} /></li>
                    </ul>
          </div>
        </div>
        
      </Layout>
    </>
  )
}

export default voice
