import Image from "next/image";
import Banner from "@/app/(Home)/components/Banner";
import BookList from "./(Home)/components/BookList";
import { Suspense } from 'react';
import Loading from '@/components/Loading';
export default function Home() {
  return (
   <>
  <Banner />
            <Suspense fallback={<Loading />}>
                <BookList />
            </Suspense>
   {/* <h1>Welcome To books client app</h1> */}
   </>
  );
}
