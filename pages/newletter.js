import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Auth from '../states/authStore/authAction'

import './newletter.css'

// interface IProps {
//   announcementMessage: string
//   updateAnnouncement: any
// }

// interface IState {}

class WriteLetter extends React.Component {
  render() {
    return (
      <div className="newletter">
        <div className="info">
          <h2>정보 입력</h2>
          <input type="text" placeholder="신부 이름"/>
          <input type="text" placeholder="신랑 이름"/>
          <input type="text" placeholder="장소"/>
          <input type="text" placeholder="시간"/>
          <label for="jb-input-text">하객들에게 보내는 메세지</label>
          <textarea></textarea>
          <button>다음 단계</button>
        </div>

        <div className="state">

        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    Auth: bindActionCreators(Auth, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(WriteLetter)