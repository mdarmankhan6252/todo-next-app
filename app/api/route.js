import { ConnectDB } from "@/lib/config/db";
import TodoModel from "@/lib/models/TodoModel";
import { NextResponse } from "next/server";

const LoadDB = async () => {
   await ConnectDB();
}

LoadDB()

//get todos : http://localhost:3000/api
export async function GET(request) {
   const todos = await TodoModel.find({});
   return NextResponse.json({ todos })
}

// todo post : http://localhost:3000/api
export async function POST(request) {
   const { title, description } = await request.json();

   await TodoModel.create({
      title,
      description
   })

   return NextResponse.json({ message: 'Todo Created' })
}


// todo delete : http://localhost:3000/api

export async function DELETE(request) {
   const _id = await request.nextUrl.searchParams.get('_id')
   await TodoModel.findByIdAndDelete(_id)
   return NextResponse.json({ message: 'Todo Deleted' })
}

// todo delete : http://localhost:3000/api

export async function PUT(request) {
   const _id = await request.nextUrl.searchParams.get('_id')
   await TodoModel.findByIdAndUpdate(_id, {
      $set: {
         isCompleted: true
      }
   })
   return NextResponse.json({ message: 'Todo Updated' })
}




