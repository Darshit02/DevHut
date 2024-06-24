import { HandHeart, Headset, Plus, Route } from 'lucide-react'
import React from 'react'

type Props = {}

const IconGroup = (props: Props) => {
  return (
    <div className="flex flex-col gap-10 mx-16">
                    <HandHeart size={40} className="rounded-full p-2 bg-[#57F2CC]"/>
                    <Headset size={40} className="rounded-full p-2 bg-[#57F2CC]" />
                    <Route size={40} className="rounded-full p-2 bg-[#57F2CC]" />
                    <Plus size={40} className="rounded-full p-2 bg-[#57F2CC]"/>
                </div>
  )
}

export default IconGroup