import React from 'react'
import { connect } from 'react-redux'
import Link from 'next/link'

import './template.css'

// interface IProps {
//   announcementMessage: string
//   updateAnnouncement: any
// }

// interface IState {}

class Content extends React.Component {
    render() {
        return ( 
            <div className="content">
                <h2>템플릿 선택</h2>
                <div className="templates">
                    <div>

                    </div>
                    <div>
                        
                    </div>
                    <div>
                        
                    </div>
                </div>
                <Link prefetch as={`/newletter/content`} href={`/newletter?componentState=content`}>
                    <button>이전 단계</button>
                </Link>
                <Link prefetch as={`/newletter/check`} href={`/newletter?componentState=check`}>
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