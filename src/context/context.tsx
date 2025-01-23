"use client"
import { createContext , useContext } from "react";
import { createClient } from "next-sanity";

const  AppContext = createContext({});

export async function AppWrapper({children}:{children:React.ReactNode;}) {
    // const products = await fetch("*[_type == 'food']");
    return (
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext);
}



const client = createClient({
    projectId: "ezturjob",
    dataset: "production",
    useCdn: false,
    token: "skQhVASKYNksU9WeyPPdGfHJXEogUrzcoUNjQhaxpQPWDf9aElmY3YlOLK9AoqbrvKXksiL7sKbiUR9LL5RewuawPZhx9nIuXcP81WHlpQEgOSURJsx7BUJi3foeZbm1Sue6RPphDv3RwQbFv2eaNCRF8kjigYuw1IaUBlBASjG8SSpHG9nc",
    apiVersion: '2021-08-31',
  });



export async function chefs() {
    const chefs = await client.fetch('*[_type == "chef"][]{name,position,image}')
    .then((res) => res.json())
    .catch((err) => console.log(err));

    return chefs

}