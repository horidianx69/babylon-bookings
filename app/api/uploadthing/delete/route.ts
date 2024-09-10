import { getAuth } from "@clerk/nextjs/server";  // Use getAuth from Clerk's server package
import { UTApi } from "uploadthing/server";
import { NextResponse, NextRequest } from "next/server";  // Import NextRequest

const utapi = new UTApi();

export async function POST(req: NextRequest) {  // Change the type of req to NextRequest
    const { userId } = getAuth(req);  // This now works with NextRequest

    if (!userId) return new NextResponse('Unauthorized', { status: 401 });

    const { imageKey } = await req.json();

    try {
        const res = await utapi.deleteFiles(imageKey);
        return NextResponse.json(res);
    } catch (error) {
        console.log("Error deleting image", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}



