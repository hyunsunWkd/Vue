/*
액션 정의
- 증가 버튼을 누르면 카운터 값이 증가된다
- 감소 버튼을 누르면 카운터 값이 감소된다
- 증감 입력창에 수치를 넣으면 해당 값으로 증감 단위가 결정된다
- 액션 상수들은 대문자로 표기
*/

// 액션 상수(타입) 정의
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'
export const COUNTER_DECREMENT = 'COUNTER_DECREMENT'
export const COUNTER_STEP_RATE = 'COUNTER_STEP_RATE'

// 액션 함수
export function increment()
{
    return { type:COUNTER_INCREMENT }
}
export function decrement()
{
    return { type:COUNTER_DECREMENT }
}
export function setStepRate( value )
{
    return { type:COUNTER_STEP_RATE, rate:value }
}