import '../App.css';
import { useEffect, useMemo, useState } from 'react';
import Counter from '../Components/Counter';
import Input from '../Components/Input';
import Postlist from '../Components/PostList';
import AddNewPost from '../Components/AddNewPost';
import PostFilter from '../Components/PostFilter';
import MyModal from '../Components/UI/modal/MyModal';
import MyButton from '../Components/UI/button/MyButton';
import PostService from '../API/PostService';
import Loader from '../Components/UI/Loader/Loader';
import { useFetching } from '../Components/UI/hooks/useFetching';
import { getPageCount } from '../utils/pages';
import Pagination from '../Components/UI/pagination/Pagination';

function Posts() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'aaa', body: 'dgdg' },
    { id: 2, title: 'fbfb', body: 'hrrbf' },
    { id: 3, title: 'rhrh', body: 'dgfdh' },
  ])

  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  //состояниє яке відповідає чи видиме модальне вікно чи ні
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)

  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page)
    setPosts(response.data)
    // console.log(response.headers['x-total-count'])
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  })


  useEffect(() => {
    fetchPosts()
  }, [page])

  //получаєм post із дочірнього компоненту
  //Функция filter проходится по массиву и отбирает только те элементы, 
  //которые подходят под заданное условие. А те, которые не подходят, соответственно, игнорирует.
  const delatePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  //useMemo(callback, deps) перший параметр функція зворотнього визову другий параметр масив зависимостей
  // useMemo - это хук React, позволяющий кэшировать результат вычисления между повторными рендерингами.

  //функція для пошуку по списку
  const sortedPosts = useMemo(() => {
    // console.log('123')
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts
  }, [selectedSort, posts])

  //функція для сортування і фільтрації
  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()))
  }, [searchQuery, sortedPosts])

  //функція для сортування списку
  const sortPost = (sort) => {
    setSelectedSort(sort)
  }

  //функція для переключання сторінок
  const changePost = (page) => {
    setPage(page)
  }

  return (
    <div className="App">
      <MyButton style={{ marginTop: 30 }} onClick={() => setModal(true)}>
        Створити пост
      </MyButton>
      <MyModal
        visible={modal}
        setVisible={setModal}>
        <AddNewPost
          setPosts={setPosts}
          posts={posts}
          setModal={setModal} />
      </MyModal>
      <Counter />
      <Input />
      <hr style={{ margin: '15px 0' }} />
      <PostFilter
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        sortPost={sortPost}
        selectedSort={selectedSort} />
      {
        postError &&
        <h1>Виникла помилка! ${postError}</h1>
      }
      {
        isPostLoading
          ? <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Loader />
          </div>
          : <Postlist
            delate={delatePost}
            posts={sortedAndSearchedPosts}
            title='Список постів 1' />
      }
      <Pagination
        changePost={changePost}
        totalPages={totalPages}
        page={page} />
    </div >
  );
}

export default Posts;

