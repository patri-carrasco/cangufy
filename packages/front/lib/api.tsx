import axios from 'axios';
import RenderResult from 'next/dist/server/render-result';
import React, {useEffect } from 'react';

const apiBaseURL = 'http://localhost:3001';

const api = axios.create({ baseURL: apiBaseURL });

export const getParents = async () => {
    const res = await api.get('/Parents');
    console.log(res)
    return res.data;
};


export const addParents = async (data)=>{
  console.log("add parents",data)
  const res = await api.post('/parents',data)
  console.log("add parents después del post",res.data)
  return res.data
}

export const addBooking= async (data)=>{
   const res = await api.post('/booking',data)
   console.log("add booking",res.data)
   return res.data
 }
 export const getBooking = async () => {
  const res = await api.get('/Booking');
  console.log(res)
  return res.data;
};

 export const addNanny = async (data)=>{
  console.log("data desde nanny", data)
 const res = await api.post('/nanny',data)
 console.log("add nanny",res.data)
 return res.data
}
