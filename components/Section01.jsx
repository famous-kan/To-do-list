import React, {useState} from 'react'
import useStore from '../store/fame-store'
import { toast } from 'react-toastify'
import '../src/index.css'

const Section01 =() => {
const [data,setData] = useState('')
const {arr,addArr,deArr} = useStore((state) => ({
    arr: state.arr,
    addArr: state.addArr,
    deArr: state.deArr

}))

const hdlChange = (e) =>{
    setData(e.target.value)
    console.log(data)
}

const hdlClick = () => {
    addArr(data)
    toast.success(`Add ${data} Success`)
}

const hdlDelete = (id) => {
    deArr(id)
    toast.error(`Delete ${data} Success`)
}


  return (
    <div> 
        <nav className='flex justify-between border bg-slate-700 h-10 items-end'>
            <div className='text-white'>
                NavBar
            </div>
            <div className='flex bg-red-400 gap-4'>
            <p>| Home</p>
            <p>| About</p>
            <p>| Login</p>
            </div>
        </nav>

        <div className='bg-pink-200 h-screen flex flex-col items-center gap-4'>
            <h1 className='text-4xl'>Todo List</h1>
                <div>
                    <input className='border mx-auto p-1 ' onChange={hdlChange} />
                    <button className='m-3 bg-pink-400 w-20' onClick= {hdlClick}>Add</button>
                </div>
            <ul className='w-[400px]'>
                {arr.map((el) => <li className='flex justify-between gap-3 bg-white border p-2' key={el.id}>{el.title}<button className='bg-pink-900 p-2 text-white' onClick={()=>hdlDelete(el.id)} >Delete</button></li>  )}
            </ul>
        </div>

    </div>
  )
}

export default Section01