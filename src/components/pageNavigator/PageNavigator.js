import React from "react"
import { Button } from "semantic-ui-react";
import './PageNavigator.css'

const PageNavigator = ({page, onClick})=>{
    return (
        <div className='PageNavigator'>
           {/* 이전글 버튼 */}
           <Button color='orange' 
                content='이전글'
                icon='left arrow'
                labelPosition='left'
                onClick={ ()=>{
                    onClick(-1)
                } }
                />
           {/* 현재글 표시 */}
           <div className='pn_title'>
            현재글 / {page}
           </div>
           {/* 다음글 버튼 */} 
           <Button color='orange' 
                content='다음글'
                icon='right arrow'
                labelPosition='right' 
                className='pn_next_btn'
                onClick={ ()=>{
                    onClick(1)
                } }
           />
        </div>
    )
}
export default PageNavigator