import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import PictureCarousel from "./pictureCarousel";
import { useState } from "react";
import BookRecForm from "./BookRecForm";
import Image from "next/image";

export function AboutTabs() {    

    // arrays to hold file names for pics
    const personalContent = [
        "/images/aboutme/personal/burlington.jpeg",
        "/images/aboutme/personal/christmas.jpeg",
        "/images/aboutme/personal/famjapan.jpeg",
        "/images/aboutme/personal/gentlemonster.jpeg",
        "/images/aboutme/personal/kbbq.jpeg",
        "/images/aboutme/personal/nemo.jpeg",
        "/images/aboutme/personal/pizza.jpeg",
        "/images/aboutme/personal/seaside.jpeg",
        "/images/aboutme/personal/thesource.jpeg",
        "/images/aboutme/personal/graduation.jpeg",
        "/images/aboutme/personal/venicebeach.jpeg",
        "/images/aboutme/personal/jaydenhironori.jpeg",
    ];
    const foodContent = [
        "/images/aboutme/food/brewstory.jpeg",
        "/images/aboutme/food/caffeincoffee.jpeg",
        "/images/aboutme/food/calixtos.jpeg",
        "/images/aboutme/food/cortado.jpeg",
        "/images/aboutme/food/kei.jpeg",
        "/images/aboutme/food/nepcafe.jpeg",
        "/images/aboutme/food/nookcoffeebar.jpeg",
        "/images/aboutme/food/northitalia.jpeg",
        "/images/aboutme/food/nostimobingsoo.jpeg",
        "/images/aboutme/food/stereoscope.jpeg"
      ];
      
    const bookContent = [
        "/images/aboutme/books/bookshelf.jpeg",  
    ];

  return (
    <Tabs defaultValue="me" className="w-full">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="me">fam + friends</TabsTrigger>
        <TabsTrigger value="food">good eats</TabsTrigger>
        <TabsTrigger value="books">books</TabsTrigger>

      </TabsList>
      <TabsContent value="me">
        <Card>
          <CardHeader>
            <CardTitle className='text-xl'>family and friends</CardTitle>
            <CardDescription className='text-xs mx-auto lg:w-[95%]'>
              i love hanging with family and friends, and exploring new places.
              ive started playing pickleball and have been playing throughout college. 
              lmk if youre down to hit sometime!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 justify-center items-center">
                <PictureCarousel images={personalContent} />
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="food">
        <Card>
          <CardHeader>
            <CardTitle className='text-xl'>good eats</CardTitle>
            <CardDescription className='text-xs mx-auto lg:w-[95%]'>
              i absolutely love good eats, and cafe hopping while studying/working on stuff!
              below are some of my recents:
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
          <PictureCarousel images={foodContent} />

          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="books">
        <Card>
          <CardHeader>
            <CardTitle className='text-xl'>my current bookshelf!</CardTitle>
            <CardDescription className='text-xs mx-auto lg:w-[95%]'>
                i have been reading a lot of books recently, mainly productivity, self-improvement,
                and emotionally introspective books. some favorites are atomic habits,
                dont believe everything you think, and the obstacle is the way.
                feel free to drop any book recs below!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="flex flex-col items-center text-center space-y-2 w-full">
                    <Image 
                        src={bookContent[0]}
                        alt={"image here"}
                        className="w-[75%] lg:w-[25%] h-auto object-cover rounded-lg border-2 border-zinc-500"
                        width="250"
                        height="300"
                    />
                <BookRecForm />
            </div>
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
