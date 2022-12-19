import React from 'react'
import Seo from '../components/Seo'
import Layout from '../components/Layout'
import BreadCrumbParent from '../components/BreadCrumbParent'
import PlanList from '../components/Plan_list'

const pagemeta = {
  subTitle:`ハウスクリーニング`,
  slug:`house_cleaning`,
  parentTitle:`サービス一覧`,
  parentSlug:`service`
}

export default function houseCleaning() {
  return (
    <>
      <Seo
      title={pagemeta.subTitle}
      description="広島・東広島の不用品回収・買取・引越しゴミ・家財整理・ゴミ屋敷・遺品整理 安芸リサイクルのサービス内容｜ハウスクリーニング"
      />
      <Layout>
        <BreadCrumbParent
        title={pagemeta.subTitle}
        slug={pagemeta.slug}
        parentTitle={pagemeta.parentTitle}
        parentSlug={pagemeta.parentSlug}
        />
  
        <h3 className="main_title">サービス一覧</h3>

        <h4 className="service_title">ハウスクリーニング</h4>
        <div className="service_list_box">
        <h4 className="service_list_title">清掃等 費用目安</h4>
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
          <p>※m&sup2;が広い場合や汚れ度合により費用単価 前後いたします</p>

          <h4 className="service_list_title mt60">内装工事費用目安</h4>

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