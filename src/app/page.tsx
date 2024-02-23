import Image from 'next/image';

export default function Home() {
  return (
    <div className='flex justify-center items-center h-[100vh] bg-white'>
      <div className='flex flex-col items-center h-[95vh] w-[95vw] bg-[#FEBC5A] rounded-lg'>
        <h1 className='text-4xl font-thin pt-[10px]'>Atelier Panaceia</h1>
        {/* <div className='flex flex-col h-[25%] w-[75%] pt-[10px]'>
          <Image src='/birds.png' width={300} height={50}></Image>
          <Image src='/bird.png' width={300} height={50}></Image>
          <Image src='/a-towels.png' width={300} height={50}></Image>
        </div> */}
      </div>
    </div>
  );
}
