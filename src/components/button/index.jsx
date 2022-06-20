import './button.css'

export const OrangeButton = ({text, handler, ...props}) => {
    return (
        <button type={props} className='button-orange' onClick={handler}>{text}</button>
    )
}