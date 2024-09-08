import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined; //store instance of prismaclient
}

const prismadb =globalThis.prisma || new PrismaClient();
//If an instance exists (like when in development and the app is reloaded), it will reuse that instance.
//If no instance exists, it will create a new PrismaClient

if (process.env.NODE_ENV !== "production") globalThis.prisma = prismadb;
//This part of the code ensures that the prisma instance is stored globally in non-production environments (like development). During development, Next.js or other hot-reloading environments often restart the server multiple times, leading to new instances being created. To avoid memory leaks and redundant connections, we store the PrismaClient instance globally and reuse it.

export default prismadb;

//prismaclient class ka multiple instance na ho isiliye likha yeh code ek hi database connection  hoga.

//use of prismadb
//You can use prismadb in your API routes to handle database interactions such as creating, reading, updating, or deleting data.