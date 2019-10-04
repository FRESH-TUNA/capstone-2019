import React from 'react'
import { connect } from 'react-redux'

import './check.css'

// interface IProps {
//   announcementMessage: string
//   updateAnnouncement: any
// }

// interface IState {}

class Content extends React.Component {
    render() {
        return ( 
            <div className="check">
                <h2>청첩장 확인</h2>
                <div className="letter">

                </div>
                <h2>회원 정보 입력</h2>
                <div className="userdata">
                    <input type="text" placeholder="신부 이름"/>
                    <input type="text" placeholder="신랑 이름"/>
                    <input type="text" placeholder="장소"/>
                    <input type="text" placeholder="시간"/>
                </div>
                <button onClick={() => this.props.setComponentState(3)}>만들기</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(Content)