import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json({
    message: "Hello this is the API route!",
    status: "success",
  });
};
