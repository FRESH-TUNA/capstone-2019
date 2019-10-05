import React from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'
import { bindActionCreators } from 'redux'
import * as NewLetterStore from '../../states/newLetterStore/newLetterAction'

import './content.css'


class Content extends React.Component {
    render() {
        return ( 
            <div className="content">
                <h2>정보 입력</h2>
                <input 
                    type="text" 
                    placeholder="신부 이름" 
                    value={this.props.bride}
                    onChange={(event) => this.props.setBride(event.target.value)}
                />
                <input 
                    type="text" 
                    placeholder="신랑 이름" 
                    value={this.props.groom}
                    onChange={(event) => this.props.setGroom(event.target.value)}
                />
                <input 
                    type="text" 
                    placeholder="장소" 
                    value={this.props.place}
                    onChange={(event) => this.props.setPlace(event.target.value)}
                />
                <input 
                    type="text" 
                    placeholder="시간" 
                    value={this.props.time}
                    onChange={(event) => this.props.setTime(event.target.value)}
                />
                <label for="jb-input-text">메세지</label>
                <textarea 
                    onChange={(event) => this.props.setMessage(event.target.value)}
                >{this.props.message}
                </textarea>
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