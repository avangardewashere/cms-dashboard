import { ICatData } from "@/components/Forms/addCatForm";
import connectMongoDb from "@/libs/mongoDb";
import Cat from "@/models/catSchema";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data: ICatData = await req.json();
    const { catName, breed, color } = data;

    await connectMongoDb();

    await Cat.create({ catName, breed, color });

    return NextResponse.json(
      {
        message: "A new cat information has been added.",
        data,
      },
      { status: 201 }
    );
  } catch (e: any) {
    console.log("Error: ", e);
    return NextResponse.json(
      {
        message: "Error in creating a new cat information",
        error: e.message,
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  await connectMongoDb();
  const cats = await Cat.find();
  return NextResponse.json({ cats });
}
