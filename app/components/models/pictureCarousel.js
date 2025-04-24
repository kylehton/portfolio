import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export default function PictureCarousel({ images, picwidth }) {

    return (
        <div className='w-full h-auto flex justify-center items-center'>
            <Carousel className="w-[75%] lg:w-[27.5%] flex justify-center items-center">
            <CarouselContent>
                {images.map((child, index) => (
                    <CarouselItem key={index} className="basis-full">
                        <img 
                            src={child} 
                            alt={"image here"}
                            className="w-full h-full object-cover rounded-lg border-2 border-zinc-500"
                        />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className='bg-zinc-300 text-gray' />
            <CarouselNext className='bg-zinc-300 text-gray'/>
            </Carousel>
        </div>
    );
}