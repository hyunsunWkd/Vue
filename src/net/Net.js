// 통신 담당
import axios from 'axios'

const MAIN_URL = 'http://jsonplaceholder.typicode.com'

// 글 하나 가져오기
export function getPost(post_id) {
    // promise를 리턴
    return axios.get(`${MAIN_URL}/posts/${post_id}`)
}

// 글 하나에 대한 댓글 여러개 가져오기
export function getComments(post_id) {
    // promise를 리턴
    return axios.get(`${MAIN_URL}/posts/${post_id}/comments`)
}
