import React from 'react'

import Seo from './components/Seo'
import Header from './components/Header'
import PlanList from './components/Plan_list'
import ServiceList from './components/Service_list'
import BnList from './components/banner_list'
import TelList from './components/Tel_List'
import MainR from './components/MainR'
import Footer from './components/Footer'

import { AnchorLink } from "gatsby-plugin-anchor-links";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronUp,faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'

const Home = ({ data }) => {
  return (
    <>
    <Seo />

    <div id='content'>
      <div className='maincontent'>
      
      <Header />

      <p id="page-top" data-sal="slide-bottom" viewOffset="0.2" data-sal-delay="200" data-sal-easing="ease"><AnchorLink offset="0" to="#pagetop" title="Pagetop"><FontAwesomeIcon icon={faChevronUp} /></AnchorLink></p>
        
      <ul className="area_list pc">
        <li><img src="../images/area_01.png" width={157} height={59} alt="広島市" /></li>
        <li><img src="../images/area_02.png" width={157} height={59} alt="安芸郡" /></li>
        <li><img src="../images/area_03.png" width={157} height={59} alt="東広島市" /></li>
        <li><img src="../images/area_04.png" width={157} height={59} alt="呉市" /></li>
      </ul>
      <ul className="area_list pc">
        <li><img src="../images/area_05.png" width={120} height={45} alt="大竹市" /></li>
        <li><img src="../images/area_06.png" width={120} height={45} alt="廿日市市" /></li>
        <li><img src="../images/area_07.png" width={120} height={45} alt="竹原市" /></li>
        <li><img src="../images/area_08.png" width={120} height={45} alt="三原市" /></li>
        <li><img src="../images/area_09.png" width={120} height={45} alt="三次市" /></li>
      </ul>
      <div id="mainimage">
        <div id="mainimage-inner">
          <div className="pc">
            <p><img src="../images/txt01.png" alt="各種クレジットカード対応 " width={1142} height={80} /></p>
            <h2 className="center"><img src="../images/top_medal.png" alt="お客様満足度97％　安心と実績の20年　女性スタッフ同行可能。" width={1000} height={270} /></h2>
            <p className="center"><img src="../images/txt02.png" width={332} height={42} alt="詳しくはお問合せください" /></p>
            <h2 className="center"><img src="../images/txt03.png" alt="不用品回収なら当日予約OKの安芸リサイクルにお任せください！" width={716} height={36} /></h2>
            <p><img src="../images/txt04.png" width={1000} height={410} /></p>
          </div>
          <div className="smp"><img src="../images/mainimage_smp.jpg" /></div>
        </div>
      </div>
      

      <section>
        <div className='main-content'>
            <p className="center pc"><img src="../images/txt05.png" width={808} height={78} /></p>
            <p className="center pc"><img src="../images/txt06.png" width={680} height={82} /></p>

            <TelList />

            <p className="center"><img src="../images/txt07.png" width={1142} height={165} /></p>
            <p className="pack_title">下記の項目が全てパック料金に含まれます！</p>

            <ul className="pack_list">
              <li><img src="../images/pack_price_list01.png" width={143} height={143} alt="" /></li>
              <li><img src="../images/pack_price_list02.png" width={143} height={143} alt="" /></li>
              <li><img src="../images/pack_price_list03.png" width={143} height={143} alt="" /></li>
              <li><img src="../images/pack_price_list04.png" width={143} height={143} alt="" /></li>
              <li><img src="../images/pack_price_list05.png" width={143} height={143} alt="" /></li>
              <li><img src="../images/pack_price_list06.png" width={143} height={143} alt="" /></li>
            </ul>

            <p>安芸リサイクルでは、他社では別料金になる搬出作業費・お掃除作業費・スタッフ追加料金・車両費・出張費・エアコン取り外し費用が全て込みの料金となっております。<span class="dark-red b_900">お見積り後の追加料金も一切ございません。</span><br />
            お客様の状況にあった最適なプランをご提案させて頂きます！</p>

            <PlanList />

            <div className="kaisyu_box">
              <h3>【回収品一覧】</h3>
              <p>冷蔵庫、洗濯機、テレビ、エアコン、窓用エアコン、パソコン、ノートパソコン、ドラム式洗濯乾燥機、食器棚、ソファー、洋服タンス、整理タンス、シングルベッド、マットレス、学習机、ダイニングテーブル、ガラステーブル、ＴＶ台、布団、毛布、電子レンジ、トースター、電気ポット、炊飯器、掃除機、医療乾燥機、ふとん乾燥機、アイロン、草刈機、ホットカーペット、コタツ、ストーブ、オイルヒーター、ファンヒーター、電気ストーブ、扇風機、空気清浄機、除湿機、加湿器、換気扇、冷風機、キーボード、ウォーターベッド、座椅子、ジュータンその他</p>
              <p className="pc center"><img src="../images/itiran_img.png" width={673} height={144} alt="" /></p>
              <p className="smp center"><img src="../images/itiran_img_smp.png" width={673} height={144} alt="" /></p>
            </div>

            <TelList />

            <BnList />

            <p className="center"><img src="../images/txt09.png" alt="安芸リサイクルからお客様への3つのお約束！" width={1142} height={134} /></p>

            <div className="promise_box">
              <div><img src="../images/txt10_1.png" width={330} height={154} alt="" /></div>
              <div><img src="../images/txt10_2.png" width={330} height={154} alt="" /></div>
              <div><img src="../images/txt10_3.png" width={331} height={154} alt="" /></div>
            </div>

            

            <ServiceList />

            <TelList />

            <div className="recycle_txt">
              当社は倉庫にてリサイクル商品も販売しています。<br />
              家電販売　家具販売　小物類～その他生活品多数揃っています。<br className="pc" />
              広島で一番安いリサイクルショップ、是非一度お問い合わせください。
            </div>

            <p className="center"><a href="service/house-cleaning.html"><img src="../images/house-cleaning-bn.png" width={1142} height={190} alt="" /></a></p>

            <BnList />
          </div>
        </section>

        <section>
          <div className='main-content'>

            <div className="flex-wrap">

              <div id="main_l">
                <h3 className="title01">粗大ゴミ・不用品回収（ゴミ屋敷お片付け）までの流れ</h3>

                <div className="flex-center top_kaisyu_flow">
                  <div>
                    <p>
                    <img src="../images/top_flow01_1.png" width={385} height={113} alt="" />
                    </p>
                  </div>
                  <div>
                    <p>
                    <img src="../images/top_flow01_2.png" width={270} height={113} alt="" />
                    </p>
                  </div>
                </div>

                <p className="center"><a href="flow.html" className="bt01">詳しくはこちら<FontAwesomeIcon icon={faCircleChevronRight} /></a></p>

                <h3 className="title01">こんな粗大ゴミや不用品を何とかしたい！</h3>

                <div className="top_flow_cont">

                  <div className="top_flow_box">
                    <h4 className="before_title">Before</h4>
                    <div className="top_flow_inner">                    
                    <p className="center"><img src="../images/jirei_before01.jpg" width={260} height={145} /></p>
                    <p className="orange b_900 txt140p">● 回収品</p>
                    <p>・洗濯機・冷蔵庫・机・いす・デスクトップパソコン・ちゃぶ台方机・その他細々したもの</p>
                    </div>
                  </div>

                  <div className="top_flow_arrow"><img src="../images/arrow_03.png" width={30} /></div>

                  <div className="top_flow_box">
                    <h4 className="after_title">After</h4>
                    <div className="top_flow_inner">
                      <p className="center"><img src="../images/jirei_after01.jpg" width={260} height={145} /></p>
                      <p className="orange b_900 txt140p">● 回収料金</p>
                      <p className="price">33,000<span className="yen">円(税込)</span></p>
                    </div>
                  </div>

                </div>
              
                <p><a href="tel:0120-28-3374"><img src="../images/free_dial_bt_s.png" width={765} height={200} alt="タップして電話かけてね！！tel:0120-28-3374" /></a></p>

                <h3 className="title01 mt60">対応エリア一覧</h3>

                <p>広島市中区・東区・南区・安佐南区・安佐北区・西区・佐伯区・廿日市市・安芸区・海田・坂・熊野・東広島市・西条・八本松・黒瀬町・安芸津町・安浦町・呉市・江田島市・音戸町・倉橋町</p>
                <h3 className="title01 mt60">お客様の声</h3>

                <p>不用品回収・ゴミ屋敷・遺品整理・引越し時のお片付けなど、安芸リサイクルをご利用いただいたお客様のお声をご紹介しております。<br />
                  また安芸リサイクルでは、ご利用いただいたお客様に感謝の気持ちを込めて「39コール」を行っております。<br />
                  お客様により良いサービスがご提供できるよう努めてまいりますので、ご意見・ご要望などがございましたらお気軽にお申し付けください。</p>

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
                    <p className="center"><img src="../images/voice_ilust01.png" width={60} /></p>
                    <p className="voice_title01">ご利用サービス</p>
                    <p>軽トラック ハーフプラン</p>
                    <p className="center"><img src="../images/sarvice_01.png" width={155} height={160} /></p>
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

                <p className="center"><a href="voice.html" className="bt01">詳しくはこちら<FontAwesomeIcon icon={faCircleChevronRight} /></a></p>
                <p><a href="tel:0120-28-3374"><img src="../images/free_dial_bt_s.png" width={765} height={200} alt="タップして電話かけてね！！tel:0120-28-3374" /></a></p>

              </div>

              <MainR />
                
            </div>
            

          </div>
        </section>

        <Footer />

        </div>
      </div>
    </>
  )
}

export default Home


