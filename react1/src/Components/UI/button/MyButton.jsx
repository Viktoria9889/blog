import React from "react"
import classes from './MyButton.module.css'

//({children, ...props}) - виципляєм з пропсів children щоб з загальної кнопки могти передати різне значення в різних компонентах
//а всі інші пропси лишаєм як є
//{...props} таким чином всі пропси які ми будем передавати в компонент MyButton
//будуть передаватись в цю кнопку
const MyButton = ({children, ...props}) => {
    return (
        <button {...props} className={classes.myBtn}>
            {children}
        </button>
    )
}

export default MyButton