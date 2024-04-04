import { projectsData } from "@/lib/data";
import React, { useState } from "react";

type ParamsType = {
  params: string;
};

const page = ({ params }: ParamsType) => {

  return <main>{params}</main>;
};

export default page;
