import React, {Component} from "react"
import './Post.css'
import './Ani.css'
import { CommentList } from "../"

// Post 컴포넌트로 전달된 props를 분해하여 전달
// 함수형 => 클래스형 전환한다: props나 state의 값변화에 대한 이벤트를 알아야 하므로
class Post extends Component {
    // props의 값들을 상태값에 저장하여 애니메이션을 제어
    constructor (props) {
        super(props)
        // 최초 전달글이 세팅
        this.state = {
            // 글
            post: {
                title: null,
                body: null,
                comments: []
            },
            // 애니메이션 여부
            isAni: false,
            // 방향
            dir: 'left'
        }
    }
    // 다음 글 혹은 이전 글에 대한 정보가 이쪽으로 전달됨
    componentWillReceiveProps(nextProps) {
        // 화면에 보여질 글정보를 처리한다.
        const {title, body, comments} = nextProps
        // 애니메이션을 위한 처리 => 종료
        // 현재글과 다음에 들어오는 mextProps 상에다음글 번호가 다르면 애니메이션 상황
        if(this.props.post_id !== nextProps.post_id) {
            // 현재글<다음글 => 다음글 클릭 => right
            // 현재글>다음글 => 이전글 클릭 => left
            const dir = this.props.id < nextProps.post_id ? 'right' : 'left'
            // 상태 변화 => 현재 글박스가 사라진다
            this.setState({
                dir, // 변수명 같으므로 그냥 선언만하면 됨
                isAni: true
            })
            return 
        }
        // 포스트 처리
        // 변수 나열하면 구조분해를 통해 자동으로 세팅됨
        this.setState({
            post: {
                title,
                body,
                comments
            }
        })
    }

    render() {
        const {title, body, comments} = this.state.post
        // 최초에 아무런 글이 없을 때 화면을 그리지 않는다
        if(title === null) return null
        // 글이 빠진다 -> ..out..
        const ani_value = this.state.isAni ? 
            (this.state.dir==='left' ? 'bounceOutLeft' : 'bounceOutRight')
             : (this.state.dir==='left' ? 'bounceInLeft' : 'bounceInRight')

        return (
            <div className={`Post animated ${ani_value}`}>
                <h2>{title}</h2>
                <p>{body}</p>
                {/* 댓글리스트 */}
                <CommentList data={comments} />
            </div>
        )
    }
} 
export default Post