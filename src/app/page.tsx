import Image from 'next/image'

export default function Home() {
  return (
    <div>
      Hello world This is first website project
      Hello world This is first website project1
      Hello world This is first website project
      Hello world This is first website project
      Hello world This is first website project
      Hello world This is first website project
      <Image src={'/images/1.png'} alt={'image'} width={400} height={500}/>
      <Image src={'/images/1.png'} alt={'image1'} width={200} height={500}/>
      <Image src={'/images/p1.png'} alt={'image2'} width={400} height={500}/>
    </div>
  )

}
