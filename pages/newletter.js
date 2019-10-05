import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { useSelector, useDispatch } from "react-redux";
import * as NewLetterAction from '../states/newLetterStore/newLetterAction'
import * as Auth from '../states/authStore/authAction'

import Check from '../components/newletter/check'
import Content from '../components/newletter/content'
import Template from '../components/newletter/template'
import Complete from '../components/newletter/complete'
import './newletter.css'

// interface IProps {
//   announcementMessage: string
//   updateAnnouncement: any
// }

// interface IState {}
// The keys of the PAGES object can be used in the prop types to catch dev-time errors.

// class WriteLetter extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { componentState: 0 }
//     this.getComponent = this.getComponent.bind(this)
//   }

//   static getInitialProps({query}) {
//     return {query}
//   }
  
//   getComponent() {
//     switch (this.props.query.componentState) {
//       case 'content':
//         return <Content/>
//       case 'template':
//         return <Template/>
//       case 'check':
//         return <Check/>
//       case 'complete':
//         return <Complete/>
//     }
//   }

//   render() {
//     return (
//       <div className="newletter">
//         {this.getComponent()}

//         <div className="state">

//         </div>
//       </div>
//     )
//   }
// }

function WriteLetter(props) {
  const [count, setCount] = useState(0);
  const ui = useSelector(state => state.ui);
  const dispatch = useDispatch();

  const [bride, setBride] = useState('');
  const [groom, setGroom] = useState('');
  const [place, setPlace] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');

  const getComponent = () => {
    switch (props.query.componentState) {
      case 'content':
        return <Content 
          bride={bride} setBride={setBride}
          groom={groom} setGroom={setGroom}
          place={place} setPlace={setPlace}
          time={time} setTime={setTime}
          message={message} setMessage={setMessage}
        />
      case 'template':
        return <Template/>
      case 'check':
        return <Check/>
      case 'complete':
        return <Complete/>
    }
  }

  return (
    <div className="newletter">
      {getComponent()}
    <div className="state">

    </div>
  </div>
  );
}

WriteLetter.getInitialProps = ({ query }) => {
  return {query}
}

export default WriteLetter;

// const mapStateToProps = (state) => ({

// })

// const mapDispatchToProps = (dispatch) => ({
//     Auth: bindActionCreators(Auth, dispatch),
//     NewLetterAction: bindActionCreators(NewLetterAction, dispatch)
// })
// export default connect(mapStateToProps, mapDispatchToProps)(WriteLetter)