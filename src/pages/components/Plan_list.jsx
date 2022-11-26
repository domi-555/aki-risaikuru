import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight,faChevronUp,faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'

const Plan_list = () => {
  return (
    <>

        <div className="plan_cont">
              <div className="plan_box">
                <div className="plan_box_inner">
                  <p><img src="/images/plan_title01.png" alt="軽トラック ハ-フプラン" width={450} height={45} /></p>
                  <p>1点の不用品から！</p>
                  <p className="center pt47"><img src="/images/plan_img01.png" width={400} height={364} /></p>
                </div>
                <p className="center"><a href="/price/#half" className="bt02"><FontAwesomeIcon icon={faAngleRight} />詳しくはこちら</a></p>
              </div>

              <div className="plan_box">
                <div className="plan_box_inner">
                  <p><img src="/images/plan_title02.png" alt="軽トラックに積み放題！プラン" width={450} height={45} /></p>
                  <p>金額の目安は「軽トラック」荷台にいっぱいでの金額です。荷台に半分の場合は金額も半分となります。</p>
                  <p className="center"><img src="/images/plan_img02.png" width={400} height={364} /></p>
                </div>
                <p className="center"><a href="/price/#kei" className="bt02"><FontAwesomeIcon icon={faAngleRight} />詳しくはこちら</a></p>
              </div>

              <div className="plan_box">
                <div className="plan_box_inner">
                  <p><img src="/images/plan_title03.png" alt="軽トラック幌車の積み放題プラン" width={450} height={45} /></p>
                  <p>金額の目安は「軽トラック幌車」荷台にいっぱいでの金額です。荷台に半分の場合は金額も半分となります。</p>
                  <p className="center"><img src="/images/plan_img03.png" width={400} height={364} /></p>
                </div>
                <p className="center"><a href="/price/#kei-horo" className="bt02"><FontAwesomeIcon icon={faAngleRight} />詳しくはこちら</a></p>
              </div>

              <div className="plan_box">
                <div className="plan_box_inner">
                  <p>
                    <img src="/images/plan_title04.png" alt="2ｔトラックに積み放題！プラン" width={450} height={45} />
                  </p>
                  <p>金額の目安は「2ｔトラック」荷台にいっぱいでの金額です。荷台に半分の場合は金額も半分となります。</p>
                  <p className="center"><img src="/images/plan_img04.png" width={400} height={364} /></p>
                </div>
                <p className="center"><a href="/price/#trak2t" className="bt02"><FontAwesomeIcon icon={faAngleRight} />詳しくはこちら</a></p>
              </div>

              <div className="plan_box">
                <div className="plan_box_inner">
                  <p><img src="/images/plan_title05.png" alt="軽トラックに積み放題！プラン" width={465} height={45} /></p>
                  <p>家電他家具等ゴミ一緒に回収します２ＤＫ～２ＬＤＫ程度のお部屋のお片付けにオススメの定額！Ｌパックプランです。</p>
                  <p className="center"><img src="/images/plan_img05.png" width={400} height={364} /></p>
                </div>
                <p className="center"><a href="/price/#trak2tl" className="bt02"><FontAwesomeIcon icon={faAngleRight} />詳しくはこちら</a></p>
              </div>
            </div>
      
    </>
  )
}

export default Plan_list
