'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from 'zod'
import { Hotel, Room } from '@prisma/client'
import React from 'react'
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"

    interface AddHotelFormProps {
        hotel:HotelWithRooms | null
    }
    export type HotelWithRooms = Hotel & {
        rooms: Room[]
    }

const formSchema = z.object({
  title: z.string().min(3,{message:'Hotel title is required'}),
  descripton: z.string().min(10,{message:'Hotel Description of min 10 characters is required'}),
  image: z.string().min(1,{message:'Hotel image is required'}),
  country : z.string().min(3,{message:'country is required'})  ,          
  state : z.string().optional(),             
  city : z.string().optional(),                 
  locationDescription: z.string().min(10,{message:'Hotel Location Description of min 10 characters is required'}), 
  gym :z.boolean().optional(),                
  spa :z.boolean().optional(),               
  bar :z.boolean().optional(),               
  laundry :z.boolean().optional(),             
  restraunt :z.boolean().optional(),          
  shopping :z.boolean().optional(),           
  freeParking :z.boolean().optional(),         
  bikeRental :z.boolean().optional(),          
  freeWifi  :z.boolean().optional(),            
  movieNights :z.boolean().optional(),          
  swimmingPool :z.boolean().optional(),         
  coffeeshop :z.boolean().optional(),          
  addedAt  :z.boolean().optional(),             
  updatedAt :z.boolean().optional(),            
})

const AddHotelForm = ({hotel}:AddHotelFormProps) => {
    const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        title: '', 
        descripton: '', 
        image: '', 
        country: '',              
        state : '',              
        city : '',                
        locationDescription : '',
        gym: false,                
        spa: false,                
        bar: false,                
        laundry: false,              
        restraunt: false,           
        shopping: false,            
        freeParking: false,          
        bikeRental: false,           
        freeWifi: false,              
        movieNights: false,           
        swimmingPool: false,          
        coffeeshop: false,           
        addedAt: false,               
        updatedAt: false,  
    },
  })

    function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

 return (<div>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className=" flex flex-col md:flex-row gap-6">
            <div className="flex-1 flex flex-col gap-6">          
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Hotel Title</FormLabel>
              <FormDescription>
                Provide your hotel name...
              </FormDescription>
              <FormControl>
                <Input placeholder="eg: Beach Hotel" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
            </div>
            <div className="flex-1 flex flex-col gap-6">part 2</div>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Form>
    </div>
  ) 

}

export default AddHotelForm