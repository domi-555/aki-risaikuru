import React from 'react'
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons'

const TelList = () => {
  return (
    <>
        <p className="center"><Link to="tel:0120-28-3374"><img src="/images/free_dial_bt.png" width={1142} height={300} alt="タップして電話かけてね！！tel:0120-28-3374" /></Link></p>
        <p className="center"><Link to="/contact/" className="contact_bt">オンライン無料お見積もりはこちら<FontAwesomeIcon icon={faCircleChevronRight} /></Link></p>
    </>
  )
}

export default TelList
