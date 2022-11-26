import React from 'react'
import Seo from '../components/Seo'
import Layout from '../components/Layout'
import PlanList from '../components/Plan_list'
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse,faAngleRight,faCheck } from '@fortawesome/free-solid-svg-icons'

const house_cleaning = () => {
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

          <h4 className="service_title">ハウスクリーニング</h4>
        <div style={{backgroundColor: '#f7f6f0', borderRadius: '5px', padding: '5px 25px'}}>
          <h4 className="larger bold dark-red" style={{borderBottom: 'dashed 2px #ccc', margin: '25px 0'}}>清掃等 費用目安</h4>
          <table className="legal_notice">
            <tbody>
              <tr>
                <th>1Ｒ・1Ｋ</th>
                <td>25,000円～</td>
              </tr>
              <tr>
                <th>1ＤＫ</th>
                <td>30,000円～</td>
              </tr>
              <tr>
                <th>1LDK</th>
                <td>40,000円～</td>
              </tr>
              <tr>
                <th>2LDK</th>
                <td>45,000円～</td>
              </tr>
              <tr>
                <th>3LDK</th>
                <td>50,000円～</td>
              </tr>
              <tr>
                <th>戸 建</th>
                <td>55,000円～</td>
              </tr>
              <tr>
                <th>キッチン廻りのみ</th>
                <td>12,000円～</td>
              </tr>
              <tr>
                <th>浴室廻りのみ</th>
                <td>10,000円～</td>
              </tr>
              <tr>
                <th>トイレ・洗面所廻りのみ</th>
                <td>10,000円～</td>
              </tr>
              <tr>
                <th>エアコン分解洗浄</th>
                <td>8,500円～　清掃とセットの場合</td>
              </tr>
              <tr>
                <th>エアコン分解洗浄</th>
                <td>12,000円～　単発の場合</td>
              </tr>
            </tbody>
          </table>
          <p>※m²が広い場合や汚れ度合により費用単価 前後いたします</p>
          <h4 className="larger bold dark-red mt60" style={{borderBottom: 'dashed 2px #ccc', margin: '25px 0'}}>内装工事費用目安</h4>
          <table className="legal_notice">
            <tbody><tr>
                <th>壁紙クロス貼替</th>
                <td>850円/ｍ～</td>
              </tr>
              <tr>
                <th>畳 表替</th>
                <td>4,000円/帖～</td>
              </tr>
              <tr>
                <th>襖・障子 貼替</th>
                <td>3,500円/枚～</td>
              </tr>
              <tr>
                <th>網戸貼替</th>
                <td>3,000円/枚～</td>
              </tr>
              <tr>
                <th>床材貼替</th>
                <td>要 相談</td>
              </tr>
            </tbody></table>
        </div>
        <h4 className="title01 mt60">お得で安心の定額パックプラン</h4>

          <PlanList />

          </Layout>
      
    </>
  )
}

export default house_cleaning
