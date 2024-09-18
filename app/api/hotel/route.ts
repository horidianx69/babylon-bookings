import { NextResponse } from "next/server"

export async function Post(req: Request) {
    try{
        const body = await req.json();
    }catch(error){
        console.log ("Error at /api/hotel POST",error)
        return new NextResponse('Internal Server Error',{status:500})
    }
}