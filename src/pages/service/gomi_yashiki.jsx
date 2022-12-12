import React from 'react'
import Seo from '../components/Seo'
import Layout from '../components/Layout'
import PlanList from '../components/Plan_list'
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse,faAngleRight,faCheck } from '@fortawesome/free-solid-svg-icons'

const gomi_yashiki = () => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
  return (
    <>
    <Seo
    title="ゴミ屋敷の片付け"
    description="広島・東広島の不用品回収・買取・引越しゴミ・家財整理・ゴミ屋敷・遺品整理 安芸リサイクルのサービス内容｜ゴミ屋敷の片付け"
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
                        ゴミ屋敷の片付け
                        </span>
                    </Link>
                    <meta itemprop="position" content="2" />
                </li>
            </ul>
        </div>

        <h3 className="main_title">サービス一覧</h3>
        <h4 className="service_title">ゴミ屋敷の片付け<img src="/images/service/service_icon02.png" className="icon_img" /></h4>
        <p><img src="../../images/service/gomi01.jpg" width={765} /></p>
        <p>精神的に疲れた。仕事に追われ時間がない。<br />
          などの理由で、後で片づけよう。がいつの間にか自分一人ではどうにもならない状況！！<br />
          又、「ゴミ」という言葉に対する概念も人それぞれ違います。もう何年も使用せず放置して ある物に対して ゴミだと考える方がいれば、いつか使う時の為に取り置きしていて必需品と考える方もいます。どちらの考えも間違えではないと思います。<br />
          後で、後でと延ばしているうちに、いつの間にか手が付けられなくなってしまったけど、なんとかしたいとお考えになる機会がありましたら、是非一度ご相談ください。</p>
        <div style={{backgroundColor: '#f7f6f0', borderRadius: '5px', padding: '5px 25px'}}>
        <h4 className="larger bold dark-red" style={{borderBottom: 'dashed 2px #ccc', margin: '25px 0'}}>こんな方はお気軽にご相談ください</h4>
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

export default gomi_yashiki
