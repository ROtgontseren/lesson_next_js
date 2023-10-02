import Image from 'next/image';
import { Inter } from 'next/font/google';
import { useState, useEffect } from 'react';
import Card from '@/components/Card';
import Button from '@/components/Button';
import Container from '@/components/Container';

export default function Home() {
  const [blogs,setBlogs]= useState([]);  
 
     useEffect(() => {
        fetchData();
  }, [])
 const fetchData = async () => {
     const res = await fetch("https://dev.to/api/articles?per_page=9");
     const data = await res.json();
     console.log(data);
     setBlogs(data);
 }
  return (
    <main className='container mx-auto mt-12'>
       <Container/>    
       <h2 className='font-bold text-2xl'>All Blog Post</h2>
       <div className="grid grid-cols-3 gap-16 mx-12 my-12">
           {blogs.map((blog, i) => {
            return <Card blog={blog}/>
            })}
       </div>
       <Button/>
    </main>
  )
}
