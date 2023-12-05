//є два варіанти як це зробити
import React, { useRef, useState } from "react"
import MyButton from "./UI/button/MyButton"
import MyInput from "./UI/input/MyInput"

const AddNewPost = (props) => {
    //щоб не створювати багато состояній ми можемо створити один useState і передавати туди поля
    //як було =>
    // const [title, setTitle] = useState('title')
    // const [body, setBody] = useState('text')
    //як стало =>
    const [post, setPost] = useState({ title: '', body: '' })
    // // за допомогую хука useRef ми можем получати доступ напряму з домелементу
    // //але так робити не рекомендується
    // const bodyInputRef = useRef()

    const addNewPost = (ev) => {
        ev.preventDefault()
        // const newPost = {
        //     id: Date.now(),
        //     title,
        //     body
        // }
       
        // console.log(bodyInputRef.current.value)
        //setPosts([...props.posts, newPost]) ми не міняєм масив, ми розгортаєм старий масив і добавляєм до нього новий пост
        //так як вся інформація вже є в обєкті ось тут setPosts([...props.posts, newPost])
        //то створювати нову перемінну newPost не потрібно, створюєм новий обєкт прямо в масиві
        //замість newPost в setPosts([...props.posts, newPost]) пишем:
        props.setPosts([...props.posts, {...post, id:Date.now()}])
        //затираєм поля після добавляння поста
        setPost({ title: '', body: '' })
        props.setModal(false)
    }

    return (
        <div>
            <form>
                <MyInput
                    value={post.title}
                    onChange={ev => setPost({ ...post, title: ev.target.value })}
                    type='text'
                    placeholder='назва поста' />
                <MyInput
                    value={post.body}
                    onChange={ev => setPost({ ...post, body: ev.target.value })}
                    type='text'
                    placeholder='опис поста' />
                {/* <input ref={bodyInputRef} type="text"/> */}
                <MyButton onClick={addNewPost}>Створити пост</MyButton>
            </form>
        </div>
    )
}

export default AddNewPost
//ПЕРШИЙ ВАРІАНТ 
// import React, { useRef, useState } from "react"
// import MyButton from "./UI/button/MyButton"
// import MyInput from "./UI/input/MyInput"

// const AddNewPost = (props) => {
//     const [title, setTitle] = useState('title')
//     const [body, setBody] = useState('text')
//     // // за допомогую хука useRef ми можем получати доступ напряму з домелементу
//     // //але так робити не рекомендується
//     // const bodyInputRef = useRef()

//     const addNewPost = (ev) => {
//         ev.preventDefault()
//         const newPost = {
//             id: Date.now(),
//             title,
//             body
//         }
//         console.log(newPost)
//         // console.log(bodyInputRef.current.value)
//         //setPosts([...props.posts, newPost]) ми не міняєм масив, ми розгортаєм старий масив і добавляєм до нього новий пост
//         props.setPosts([...props.posts, newPost])
//         setTitle('')
//         setBody('')
//     }

//     return (
//         <div>
//             <form>
//                 <MyInput
//                     value={title}
//                     onChange={ev => setTitle(ev.target.value)}
//                     type='text'
//                     placeholder='назва поста' />
//                 <MyInput
//                     value={body}
//                     onChange={ev => setBody(ev.target.value)}
//                     type='text'
//                     placeholder='опис поста' />
//                 {/* <input ref={bodyInputRef} type="text"/> */}
//                 <MyButton onClick={addNewPost}>Створити пост</MyButton>
//             </form>
//         </div>
//     )
// }

// export default AddNewPost


//ДРУГИЙ ВАРІАНТ
// import React, { useRef, useState } from "react"
// import MyButton from "./UI/button/MyButton"
// import MyInput from "./UI/input/MyInput"

// const AddNewPost = (props) => {
//     const [post, setPost] = useState({ title: '', body: '' })

//     const addNewPost = (ev) => {
//         ev.preventDefault()
//         props.setPosts([...props.posts, {...post, id:Date.now()}])
//         //затираєм поля після добавляння поста
//         setPost({ title: '', body: '' })
//     }

//     return (
//         <div>
//             <form>
//                 <MyInput
//                     value={post.title}
//                     onChange={ev => setPost({ ...post, title: ev.target.value })}
//                     type='text'
//                     placeholder='назва поста' />
//                 <MyInput
//                     value={post.body}
//                     onChange={ev => setPost({ ...post, body: ev.target.value })}
//                     type='text'
//                     placeholder='опис поста' />
//                 <MyButton onClick={addNewPost}>Створити пост</MyButton>
//             </form>
//         </div>
//     )
// }

// export default AddNewPost

