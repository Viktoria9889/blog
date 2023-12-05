import React from "react"
import cl from './MyModal.module.css'

const MyModal = ({children, visible, setVisible}) => {
    //функція яка скриває або показує модалку, задопомогою цього ми 
    //перевіряєм добавляти клас activ  чи ні
    const rootClasses = [cl.myModal]
    if (visible) {
        rootClasses.push(cl.active)
    }

    // onClick={() => setVisible(false)} цим ми реалізуєм закриття модального вікна по нажаттю на темну зону
    //onClick={(ev) => ev.stopPropagation() цим ми предотвращаєм щоб модальне вікно не закривалось коли натискають на його контентну частину
    return (
        <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
            <div className={cl.myModalContent} onClick={(ev) => ev.stopPropagation()}> 
                {children}
            </div>
        </div>
    )
}

export default MyModal