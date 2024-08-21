import Templates from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import { db } from "@/utils/db";
import { AIoutput } from "@/utils/schema";
import { currentUser } from "@clerk/nextjs/server";
import { desc, eq } from "drizzle-orm";
import Image from "next/image";
import React from "react";
import { TEMPLATE } from "../_components/TemplateListSection";

export interface HISTORY {
  id: Number;
  formData: string;
  aiResponse: string;
  templateSlug: string;
  createdBy: string;
  createdAt: string;
}

async function History() {
  const user = await currentUser();

  {
    /*@ts-ignore*/
  }
  const HistoryList: HISTORY[] = await db
    .select()
    .from(AIoutput)
    .where(eq(AIoutput?.createdBy, user?.primaryEmailAddress?.emailAddress))
    .orderBy(desc(AIoutput.id));

  // const GetTemplateName = (slug:string) =>{
  //   const template:TEMPLATE|any = Templates?.find((item)=>item.slug){
  //     return template;
  //   }
  // }

  return (
    <div className="h-screen bg-white m-5 border rounded-md shadow-md">
      <h2 className="font-bold text-4xl mt-4 ml-4">History</h2>
      <p className="text-gray-500 font-medium ml-5">
        Search your previously generated content
      </p>
      <div className="m-4">
        <div className="grid grid-cols-4 font-bold bg-slate-200">
          <div className="flex flex-row m-2">TEMPLATE</div>
          <div className="flex flex-row m-2 justify-center items-center">AI RESP</div>
          <div className="flex flex-row m-2 justify-center items-center">DATE</div>
          <div className="flex flex-row m-2 justify-center items-center">COPY</div>
        </div>
          {HistoryList.map((item:any,index:any)=>{
            return(
              <div key={index} className="grid grid-cols-4 my-2 border rounded-lg">
              <p className="m-4 text-black ">{item.templateSlug}</p>
              <p className="overflow-hidden m-4 text-black ">{item.aiResponse.slice(0,300)+"..."}</p>
              <p className="m-4 text-black font-bold justify-center items-center flex">{item.createdAt}</p>
              <div className="justify-center items-center m-5 flex">
                <Button
                  className="w-[50%]"
                  // onClick={() => navigator.clipboard.writeText(item.templateSlug)}
                >
                  Copy
                </Button>
            </div>
        </div>
            )
          })}
        
      </div>
    </div>
  );
}

export default History;
