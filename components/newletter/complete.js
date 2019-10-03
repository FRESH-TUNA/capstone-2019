import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as NewLetterStore from '../../states/newLetterStore/newLetterAction'

import './complete.css'

// interface IProps {
//   announcementMessage: string
//   updateAnnouncement: any
// }

// interface IState {}

class Content extends React.Component {
    render() {
        return ( 
            <div className="complete">
               감사합니다
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(Content)