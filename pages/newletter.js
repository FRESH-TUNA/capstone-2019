import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as NewLetterAction from '../states/newLetterStore/newLetterAction'
import * as Auth from '../states/authStore/authAction'

import Content from '../components/newletter/content'
import Template from '../components/newletter/template'
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
        <Template/>

        <div className="state">

        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    Auth: bindActionCreators(Auth, dispatch),
    NewLetterAction: bindActionCreators(NewLetterAction, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(WriteLetter)