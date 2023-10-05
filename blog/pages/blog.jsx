import React from 'react'
import { useState,useEffect } from 'react';
import Link from 'next/link';
import Card from '@/components/Card';
import Button from '@/components/Button';
import Loader from '@/components/Loader';

const recentblog = () => {
    const [blogs,setBlogs]= useState([]);  
    const [isLoading, setLoading] = useState(true)
 
     useEffect(() => {
        fetchData();
  }, [])
 const fetchData = async () => {
     const res = await fetch("https://dev.to/api/articles?per_page=9");
     const data = await res.json();
     console.log(data);
     setBlogs(data);
     setLoading(false)
 }
  return (
    <div>
      <Link href={"./blog"} > <div className='container mx-auto mt-12'>
       <h2 className='font-bold text-2xl'>All Blog Post</h2>
       {isLoading && <Loader />}
       {!isLoading && (
          <div className="grid grid-cols-3 gap-3 justify-center">
          </div>
        )}
       <div className="grid grid-cols-3 gap-16 mx-12 my-12">
           {blogs.map((blog, i) => {
            return <Card blog={blog}/>
            })}
       </div>
       </div></Link>
       <Button/>
    </div>
  )
}

export default recentblog;
