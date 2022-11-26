import React from 'react'
import Seo from '../components/Seo'
import Layout from '../components/Layout'
import PlanList from '../components/Plan_list'
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse,faAngleRight,faCheck } from '@fortawesome/free-solid-svg-icons'

const hikkoshi_gomi = () => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
  return (
    <>
      <Seo title="引越しに伴う粗大ゴミ回収" />
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
                        引越しに伴う粗大ゴミ回収
                        </span>
                    </Link>
                    <meta itemprop="position" content="2" />
                </li>
            </ul>
        </div>

        <h3 className="main_title">サービス一覧</h3>

        <h4 className="service_title">引越しに伴う粗大ゴミ回収<img src="/images/service/service_icon04.png" className="icon_img" /></h4>

        <p><img src="/images/service/hikkoshi01.jpg" width={765} /></p>
        <p>引越しの際に出る粗大ゴミや、不用品の処分を自分でやるのはとても労力がかかります。<br />
          弊社では、お得なパック料金を選ぶ事により、様々な粗大ゴミの処分や不用品の回収にも丁寧に対応いたします。<br />
          引越しのスケジュールに合わせて作業日を調整いたしますので、ご連絡の際は引越し日の日程にゆとりをもってご連絡下さい。</p>
        <div style={{backgroundColor: '#f7f6f0', borderRadius: '5px', padding: '5px 25px'}}>
        <h4 className="larger bold dark-red" style={{borderBottom: 'dashed 2px #ccc', margin: '25px 0'}}>こんな方はお気軽にご相談ください</h4>
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

export default hikkoshi_gomi
