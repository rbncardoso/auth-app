import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { connection } from "mongoose";

connect()

export async function POST(request: NextRequest) {
  try {
    
  } catch ( error: any) {
    return NextResponse.json({error: error.message},
      {status: 500})
  }
}