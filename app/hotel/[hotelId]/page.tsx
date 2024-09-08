import { getHotelById } from '@/actions/getHotelById'
import AddHotelForm from '@/components/hotel/AddHotelForm'
import { auth } from '@clerk/nextjs/server'
import React from 'react'

interface HotelPageProps {
    params: {
        hotelId: string
    }
}

const Hotel = async({params }: HotelPageProps) => {
    const hotel = await getHotelById(params.hotelId)
    const {userId} = auth()

    if(!userId) return <div>Please sign in to view your hotel bookings</div>

    if(hotel && hotel.userId !== userId) return <div>You are not authorized to view this hotel</div>

  return (
    <div>
        <AddHotelForm hotel={hotel}/>
    </div>
  )
}

export default Hotel