import Image from 'next/image'
import React from 'react'

type Props = {}

const ImageContainer = (props: Props) => {
  return (
    <section className='mr-5'>
            <Image src={'/assets/chat.svg'}
            width={500}
            height={500}
            alt='chat'
            className='boreder border-2 border-gray-300 shadow-xl rounded-md absolute'
            />
            <div className='pt-16 pl-[22rem]'>
            <Image src={'/assets/chat-mobilw.svg'}
            width={200}
            height={200}
            alt='chat'
            className='boreder border-2 border-gray-300 rounded-2xl relative shadow-2xl'/>
            </div>
        </section>
  )
}

export default ImageContainer