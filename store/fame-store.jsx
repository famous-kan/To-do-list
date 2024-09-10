import React from 'react'
import {create} from 'zustand'
import { persist } from 'zustand/middleware'


const fameStore = (set) =>({

    // arr:[],
    // addArr: (newValue) => set((prev) => ({
    //     arr: [...prev.arr , newValue] })),
    // deArr: (newValue) => set((prev) => ({

    // }))

    arr: [],
        // {id: , title: ''},
        
    addArr: (newValue) => set((prev) => ({
        //   arr: [...prev.arr, {title:newValue, id: prev.arr[prev.arr.length-1].id+1}]
          arr: [...prev.arr, {title:newValue, id: Date.now()}]
        })),
    deArr: (id) => set((prev) => ({
          arr: prev.arr.filter((el) => el.id !== id)
        })),



})

const usePersist = {
    name: 'fame-store',
    getStorage : () => localStorage,
    partialize: (state) => ({
        arr : state.arr
    })
  }



const useStore = create(persist(fameStore,usePersist))

export default useStore