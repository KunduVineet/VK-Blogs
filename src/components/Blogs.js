import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Spinner } from './Spinner';


export const Blogs = () => {
    const {loading,post} = useContext(AppContext);
  return (
    <div>
        loading ? (<Spinner />) : (
            post.length === 0 ?(<div>No Post Found</div>) : 
            (post.map( (post) => {<Card />}))
        )
    </div>
  )
}
