import React from "react"
import MySelect from './UI/select/MySelect'
import MyInput from './UI/input/MyInput'

const PostFilter = ({searchQuery, setSearchQuery, selectedSort, sortPost}) => {
    return (
        <div>
            <MyInput type='text' placeholder='пошук поста'
                value={searchQuery}
                onChange={ev => setSearchQuery(ev.target.value)}
            />
            <MySelect
                value={selectedSort}
                onChange={sortPost}
                defaultValue='Сордування'
                options={[
                    { value: 'title', name: 'По назві' },
                    { value: 'body', name: 'По опису' },
                ]}
            />
        </div>
    )
}

export default PostFilter