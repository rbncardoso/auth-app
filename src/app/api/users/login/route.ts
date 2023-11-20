import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { connection } from "mongoose";
import jwt from "jsonwebtoken";

connect()

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json()
    const { email, password } = reqBody;
    console.log(reqBody);

    //check if the user exists
    const user = User.findOne({ email })
    if (!user) {
      return NextResponse.json({ error: "User does not exists" },
        { status: 400 })
    }

    //check if the password is corret
    const validPassword = await bcryptjs.compare(password, user.password)
    if (!validPassword) {
      return NextResponse.json({ error: "Invalid password" },
        { status: 400 })
    }
    //creat token data
    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email
    }
    //creating token
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, { expiresIn: "1h" })

    const response = NextResponse.json({
      message: "Login sucessful",
      success: true,
    })
    response.cookies.set("token", token, {
      httpOnly: true,
    })
    return response;

  } catch (error: any) {
    return NextResponse.json({ error: error.message },
      { status: 500 })
  }
}