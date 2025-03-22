// app/api/test/route.ts

export async function POST(req: Request) {
    console.log("Test endpoint reached!"); // Log a message
    return new Response("Test successful!", { status: 200 });
  }