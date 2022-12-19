import React from 'react'
import Seo from './components/Seo'
import BreadCrumb from './components/BreadCrumb'
import Layout from './components/Layout'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const pagemeta = {
  subTitle:`料金プラン`,
  slug:`price`
}

export default function price() {
  return (
    <>
    <Seo
    title={pagemeta.subTitle}
    description="広島・東広島の不用品回収・買取・引越しゴミ・家財整理・ゴミ屋敷・遺品整理 安芸リサイクルの料金プラン"
    />
      <Layout>
        <BreadCrumb
        title={pagemeta.subTitle}
        slug={pagemeta.slug}
        />

      <h3 className="main_title">料金プラン</h3>
        <p className="pack_title2">お得なパック料金</p>
        <p>安芸リサイクルでは、他社では別料金になる搬出作業費・お掃除作業費・スタッフ追加料金・車両費・出張費・エアコン取り外し費用が全て込みの料金となっております。<br />
          <span className="dark-red bold">お見積り後の追加料金も一切ございません。</span><br />
          お客様の状況にあった最適なプランをご提案させて頂きます！</p>
        <p className="pack_title2">下記の項目が全てパック料金に含まれます！</p>
        <ul className="pack_list">
          <li><img src="../images/pack_price_list01.png" width={143} height={143} alt="" /></li>
          <li><img src="../images/pack_price_list02.png" width={143} height={143} alt="" /></li>
          <li><img src="../images/pack_price_list03.png" width={143} height={143} alt="" /></li>
          <li><img src="../images/pack_price_list04.png" width={143} height={143} alt="" /></li>
          <li><img src="../images/pack_price_list05.png" width={143} height={143} alt="" /></li>
          <li><img src="../images/pack_price_list06.png" width={143} height={143} alt="" /></li>
        </ul>
        <h4 className="title01">料金プランについて</h4>
        <p>安芸リサイクルでは、お客様の荷物の量に合わせて「軽トラック　ハーフプラン」と「軽トラックに積み放題！プラン」と「2tトラック積み放題プラン」の3種類の料金体制をご用意しております。どのプランを選べばいいかわからない方は、まずはお気軽にお問い合わせください。ご相談から現地でのお見積もりまで、無料で行っております。</p>
        <h5 className="price_title" id="half">軽トラック ハーフプラン</h5>
        <p><img src="../images/price/price01.png" alt="作業料金/1台 ～9,000円" width={660} height={176} /></p>
        <p>1点の不用品から！</p>
        <h5 className="price_title" id="kei">軽トラック に積み放題！プラン</h5>
        <p><img src="../images/price/price02.png" alt="作業料金/1台 ～19,000円" width={660} height={176} /></p>
        <p>金額の目安は「軽トラック」荷台にいっぱいでの金額です。荷台に半分の場合は金額も半分となります。</p>
        <p>積み込み例：冷蔵庫、洗濯機、布団1組、3段カラーボックス、コタツ、パソコン、テレビ、ミニコンポ、レンジ、扇風機、掃除機、ダンボール（Ｌサイズ）10箱など<br />
          ※押入れ・クローゼット～１Ｋ程度の量<br />
          ※キャビンの高さまで </p>
        
        <ul className="check_list">
            <li><FontAwesomeIcon icon={faCheck} />古くなった家具を引き取って欲しい</li>
            <li><FontAwesomeIcon icon={faCheck} />庭にある不用品を回収して欲しい</li>
            <li><FontAwesomeIcon icon={faCheck} />放置された倉庫を片付けたい</li>
            <li><FontAwesomeIcon icon={faCheck} />不要になった仏壇を処分したい</li>
            <li><FontAwesomeIcon icon={faCheck} />家庭の大掃除ででたゴミや小家電を処分したい</li>
        </ul>
        
        <p>といった上記の方にオススメのプランです。</p>
        <h5 className="price_title" id="kei-horo">軽トラック幌車の積み放題！プラン</h5>
        <p><img src="../images/price/price05.png" alt="作業料金/1台 ～27,000円" width={660} height={176} /></p>
        <p>金額の目安は「軽トラック」荷台にいっぱいでの金額です。荷台に半分の場合は金額も半分となります。</p>
        <p>積み込み例：冷蔵庫、洗濯機、布団1組、3段カラーボックス、コタツ、パソコン、テレビ、ミニコンポ、レンジ、扇風機、掃除機、ダンボール（Ｌサイズ）10箱など<br />
          ※押入れ・クローゼット～１Ｋ程度の量<br />
          ※キャビンの高さまで </p>
        
        <ul className="check_list">
            <li><FontAwesomeIcon icon={faCheck} />古くなった家具を引き取って欲しい</li>
            <li><FontAwesomeIcon icon={faCheck} />庭にある不用品を回収して欲しい</li>
            <li><FontAwesomeIcon icon={faCheck} />放置された倉庫を片付けたい</li>
            <li><FontAwesomeIcon icon={faCheck} />不要になった仏壇を処分したい</li>
            <li><FontAwesomeIcon icon={faCheck} />家庭の大掃除ででたゴミや小家電を処分したい</li>
        </ul>
        
        <p>といった上記の方にオススメのプランです。</p>
        <h5 className="price_title" id="trak2t">2ｔトラック に積み放題！プラン</h5>
        <p><img src="../images/price/price03.png" alt="作業料金/1台 ～48,000円" width={660} height={176} /></p>
        <p>金額の目安は「2ｔトラック」荷台にいっぱいでの金額です。荷台に半分の場合は金額も半分となります。</p>
        <p>積み込み例：洗濯機、冷蔵庫、タンス、ベッドなどの大型ものももちろん、小物類、中型家具までつみ放題！<br />
          ※１ＤＫ～一軒家</p>
        
        <ul className="check_list">
            <li><FontAwesomeIcon icon={faCheck} />オフィスでた大量の不用品を処理したい</li>
            <li><FontAwesomeIcon icon={faCheck} />住まいがゴミであふれかえっている</li>
            <li><FontAwesomeIcon icon={faCheck} />2部屋以上の大量の不用品を処理したい</li>
            <li><FontAwesomeIcon icon={faCheck} />大きな倉庫を丸ごと撤去したい</li>
            <li><FontAwesomeIcon icon={faCheck} />一軒家・マンションなど一括して遺品整理を行いたい</li>
        </ul>
        
        <p>といった上記の方にオススメのプランです。</p>
        <h5 className="price_title" id="trak2tl">2トントラックに積み放題！Ｌパックプラン</h5>
        <p><img src="../images/price/price04.png" alt="作業料金/1台 ～68,000円" width={660} height={176} /></p>
        <p>家電他家具等ゴミ一緒に回収します<br />
          ２ＤＫ～２ＬＤＫ程度のお部屋のお片付けにオススメの定額！Ｌパックプランです。<br />
          ※２ＤＫ～一軒家</p>

      </Layout>
    </>
  )
}

