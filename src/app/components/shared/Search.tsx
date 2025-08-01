import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { SearchIcon } from 'lucide-react'
import React from 'react'

export default function Search() {
  return (
    <Dialog>
        <DialogTrigger>
            <SearchIcon cursor={'pointer'} ></SearchIcon>
        </DialogTrigger>
        <DialogContent>
            <DialogTitle className="sr-only">Search</DialogTitle>
            <form >
               <input type="text" placeholder='Search' className='block w-full bg-gray-300 rounded-lg px-6 py-2 mt-4 outline-none' /> 
            </form>
        </DialogContent>
    </Dialog>
  )
}
