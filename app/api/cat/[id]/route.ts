import connectMongoDB from "@/libs/mongoDb";
import Cat from "@/models/catSchema";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const {
    newCatName: catName,
    newBreed: breed,
    newColor: color,
  } = await request.json();

  await connectMongoDB();
  await Cat.findByIdAndUpdate(id, { catName, breed, color });
  return NextResponse.json(
    { message: "Cat Information's got updated." },
    { status: 200 }
  );
}

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  await connectMongoDB();
  const cat = await Cat.findOne({ _id: id });
  return NextResponse.json({ cat }, { status: 200 });
}
