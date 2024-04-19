import Image from "next/image";
import Banner from "@/app/(Home)/components/Banner";
import BookList from "./(Home)/components/BookList";

export default function Home() {
  return (
   <>
   <Banner/>
   <BookList/>
   <h1>Welcome To books client app</h1>
   </>
  );
}
