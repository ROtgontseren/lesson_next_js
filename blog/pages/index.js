import Image from 'next/image';
import { Inter } from 'next/font/google';
import Container from '@/components/Container';
import Recentblog from './blog';

export default function Home() {
  
  return (
    <main className='container mx-auto mt-12'>
       <Container/>    
       <Recentblog/>
    </main>
  )
}
