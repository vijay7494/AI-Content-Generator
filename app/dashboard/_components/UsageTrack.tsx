"use client";
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db';
import { AIoutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';
import React, { useEffect } from 'react'

function UsageTrack() {

    const {user} = useUser();

    useEffect(() => {
        user && GetData();
    },[user]);

    const GetData = async() => {
        // const result = await db.select().from(AIoutput).where(eq(AIoutput.createdBy,user?.primaryEmailAddress?.emailAddress));

    }
    // const GetTotalUsage = () => {
    //     let total = 0;
    //     result.forEach(element => {
    //         total += Number(element.aiResponse?.length);
    //     });
    //     console.log(total);
    // }
  return (
    <div className='m-5'>
        <div className="bg-primary text-white p-3 rounded-lg">
            <h2 className='font-medium'>Credits</h2>
            <div className='h-2 bg-[#9981f9] w-full rounded-full mt-3'>
                <div className="h-2 bg-white rounded-full" style={{width:'35%'}}></div>
            </div>
            <h2 className='text-sm my-2'>350/1000 Credits are used</h2>
        </div>
        <Button variant={'secondary'} className='w-full my-3 text-primary'>Upgrade</Button>
    </div>
  )
}

export default UsageTrack