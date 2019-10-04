import React from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'
import { bindActionCreators } from 'redux'
import * as NewLetterStore from '../../states/newLetterStore/newLetterAction'

import './content.css'

// interface IProps {
//   announcementMessage: string
//   updateAnnouncement: any
// }

// interface IState {}

class Content extends React.Component {
    render() {
        return ( 
            <div className="content">
                <h2>정보 입력</h2>
                <input type="text" placeholder="신부 이름"/>
                <input type="text" placeholder="신랑 이름"/>
                <input type="text" placeholder="장소"/>
                <input type="text" placeholder="시간"/>
                <label for="jb-input-text">메세지</label>
                <textarea></textarea>
                <Link prefetch as={`/newletter/template`} href={`/newletter?componentState=template`}>
                    <button>다음 단계</button>
                </Link>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(Content)