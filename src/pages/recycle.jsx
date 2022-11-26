import React from 'react'
import Seo from './components/Seo'
import Layout from './components/Layout'
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse,faAngleRight } from '@fortawesome/free-solid-svg-icons'

const recycle = () => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
  return (
    <>
        <Seo title="買取・引取" />
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
                        買取・引取
                        </span>
                    </Link>
                    <meta itemprop="position" content="2" />
                </li>
            </ul>
        </div>

        <h3 className="main_title">買取・引取</h3>
        <h4 className="title01">買取品目</h4>
        <p className="title02">家電（電化製品）</p>
        <div className="recycle_box">
          <div className="w25p center order2"><p><img src="../images/recycle/recycle_pic01.jpg" width={148} height={148} /></p></div>
          <div className="w75p">
            <p>冷蔵庫、冷凍庫、洗濯機、衣類乾燥機、エアコン、電子辞書、ミシン、オーブンレンジ、電子レンジ、電話機、ファックス（ＦＡＸ）、掃除機、アイロン、扇風機、除湿機、加湿機、空気清浄機、暖房機器、冷房器具、照明、マッサージ器（マッサージ機）、オーディオ・ステレオ類、スピーカー、アンプ、ＣＤプレーヤー、ＭＤプレーヤー、ＤＶＤプレーヤー、テレビ（ＴＶ）、ＡＶ機器・カメラ、パソコン関連、複合プリンター（複合機）、コピー機、インクジェットプリンター、レーザープリンター、スキャナー、ＰＤＡ、パーツ、パソコン周辺機器、パソコンソフトなど</p></div>
        </div>
        <p className="title02">オフィス家具・事務用品</p>
        <div className="recycle_box">
          <div className="w25p center"><p><img src="../images/recycle/recycle_pic02.jpg" width={148} height={148} /></p></div>
          <div className="w75p"><p>片袖デスク（片袖机）、両袖デスク（両袖机）、袖机、事務イス（オフィスチェアー）、ＯＡ機器、社長机、ミーティングテーブル（会議テーブル、会議机）、ミーティングチェア（会議イス、会議椅子）、応接セット、コピーボード、ロッカー、折りたたみテーブル（折りたたみ机）、折りたたみイス（折りたたみ椅子）、スタッキングチェア、受付カウンター、キャビネット、書庫、パーティション、ホワイトボード、コピー機、複合機、ビジネスホン（ビジネスフォン）、タイムレコーダー、タイムカード、シュレッダー他など</p></div>
        </div>
        <p className="title02">厨房機器</p>
        <div className="recycle_box">
          <div className="w25p center order2"><p><img src="../images/recycle/recycle_pic03.jpg" width={148} height={148} /></p></div>
          <div className="w75p"><p>製氷機、業務用冷凍庫、業務用冷蔵庫、台下冷蔵庫、コールドテーブル、ガスコンロ、ガスオーブン、コンベック、クラッシャー、食器洗い機、冷蔵ショーケース、ケーキケース、デザートケース、ビールケース、ストッカー、作業台、シンク、舟形シンク、炊飯器、タオルウォーマー、食器洗浄機、ヒゴグリラー、寸胴、茹で麺機、麺茹で機、アイススライサー、作業台、フードカッター、ソフトクリーマー、スープウォーマー、フリーザー、フライヤー、業務用レンジ、エスプレッソマシーン、ホットショーケース、焼台、シンク、ステンレス調理器具、什器、その他など</p></div>
        </div>
        <p className="title02">工具・道具類</p>
        <div className="recycle_box">
          <div className="w25p center"><p><img src="../images/recycle/recycle_pic04.jpg" width={148} height={148} /></p></div>
          <div className="w75p"><p>電動工具、充電工具、エアー工具、コンプレッサー、発電機、グラインダー、はつり、電動ドリル、電動ドライバー、ドリルドライバー、スクリュードライバー、インパクトドライバー、振動ドリル、ハンマードリル、丸ノコ、ジグソー、チェーンソー、セイバーソー、レシプロソー、インパクトレンチ、電動カンナ、エアコンプレッサー、溶接機、バッテリーウェルダー、ジェネレーター、発電機、ハツリ、ジョイントカッター、ルーター、集塵機、ブロアー、洗浄機、卓上丸ノコ、チェーンブロック、ウィンチ、ネイラー、ねじ切り機、セオドライト、くぎ打ち、大工道具など</p></div>
        </div>
        <p className="title02">スポーツ・ホビー・レジャー・健康</p>
        <div className="recycle_box">
          <div className="w25p center order2">
            <p><img src="../images/recycle/recycle_pic05.jpg" width={148} height={148} /></p>
          </div>
          <div className="w75p"><p>つり具、釣具、ゴルフクラブ、キャンプ用品、スポーツ用品、ウィンタースポーツ、スキー、スノーボード（スノボー）、スキー板、ブーツ、マリンスポーツ、サーフィン、サーフボード、ボディーボード、スキューバダイビング器材、おもちゃ、玩具、キャラクターグッズ、トレーディングカード（トレカ）、テレホンカード（テレカ）、コレクターズアイテム、ノベルティグッズ、アンティーク品、昭和レトロ、ビンテージ、ヴィンテージ、マニアグッズ、コレクション、レア品（レアグッズ）、希少品、限定品、骨董品、絵画、陶器、置物、掛け軸健康器具、美容器具など</p></div>
        </div>
        <p className="title02">自動車・バイク関連</p>
        <div className="recycle_box">
          <div className="w25p center">
            <p><img src="../images/recycle/recycle_pic06.jpg" width={148} height={148} /></p></div>
          <div className="w75p"><p>カーナビゲーション（カーナビ）、カーステレオ、カーオーディオ、アルミホイール、ホイール、外装パーツ類、内装パーツ類、タイヤ、スタッドレスタイヤ、タイヤチェーン、カー用品、モータースポーツ、バイク、スクーター、オートバイ、カブ、ヘルメットなど</p></div>
        </div>
        <h4 className="title01">買取り不可能な商品は、回収・引取・処分なども一緒にOK</h4>
        <div className="list_check2">
          <ul>
            <li>故障品、破損品、盗難品、キズや汚れのひどいもの、売れそうにないものは買取れません。</li>
            <li>家電製品は種類によって買取可能な製造年式が異なります。</li>
            <li>PSEマークがなくても買取りできる場合もありますので、ご相談下さい。</li>
            <li>家具は古いものやキズや汚れのひどいものは買取れません（ブランド、デザイナー、骨董を除く）</li>
            <li>ブランド品は本物と確認できるものでないと、買取できない場合がございます。</li>
            <li>長距離出張での少量で買取りは、かなり高価なものでない限り難しいです。</li>
          </ul>
        </div>

      </Layout>
    </>
  )
}

export default recycle
