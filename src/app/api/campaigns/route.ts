import { NextResponse } from "next/server";
import { currentUser } from '@clerk/nextjs/server';
import Campaigns from "@/lib/models/campaigns.model";
import { connect } from "@/lib/db";
import crypto from 'crypto';

const generateToken = () => {
    return crypto.randomBytes(20).toString("hex");
};

export async function GET(req: Request) {
    try {
        const user = await currentUser(); // Get the current user
        if (!user) {
            return NextResponse.json({
                message: "unauthorized",
                campaigns: []
            });
        }

        await connect();

        // Get campaigns from the database for the user ID
        const campaigns = await Campaigns.find({ userId: user.id });
        console.log(campaigns)

        console.log(user.id)

        return NextResponse.json({
            message: "success",
            campaigns: campaigns
        });
    } catch (error) {

        return NextResponse.json({
            message: "error",
            campaigns: []
        });
    }
}


// create a new campaign
export async function POST(req: Request) {
    const { userId, campaignName, campaignDescription, campaignType } = await req.json();
    try {
        const user = await currentUser(); // Get the current user
        // if (!user) {
        //     return NextResponse.json({
        //         message: "unauthorized"
        //     }, { status: 401 });
        // }
        await connect();
        const campaign = await Campaigns.create({
            userId: userId,
            campaignId: generateToken(),
            campaignName,
            campaignDescription,
            campaignType,
        });
        return NextResponse.json({
            message: "post request successful",
            campaign
        });
    } catch (error) {
        return NextResponse.json({
            error: error,
            message: "An error occurred",
        }, { status: 500 });
    }
}

// delete a campaign
export async function DELETE(req: Request) {
    return NextResponse.json({
        message: "delete request successful"
    });
}