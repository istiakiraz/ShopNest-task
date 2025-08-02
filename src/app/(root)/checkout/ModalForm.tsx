"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

type Props = {
  totalItems: number;
  totalAmount: string;
}

type FormValues = {
  name: string;
  address: string;
  phone: string;
}

export default function ModalForm({ totalItems, totalAmount }: Props) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValues>()

  const onSubmit = (data: FormValues) => {
    const order = {
      orderId: Math.floor(Math.random() * 100000),
      customer: data,
      totalItems,
      totalAmount,
      orderDate: new Date().toLocaleString()
    }

    console.log("Order Created:", order)
    toast.success("Order placed successfully!")
    reset()
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-indigo-500 cursor-pointer hover:bg-indigo-700 mt-6">Pay Now</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Enter Your Details</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Input placeholder="Full Name" {...register("name", { required: true })} />
            {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
          </div>
          <div>
            <Input placeholder="Shipping Address" {...register("address", { required: true })} />
            {errors.address && <p className="text-red-500 text-sm">Address is required</p>}
          </div>
          <div>
            <Input placeholder="Phone Number" {...register("phone", { required: true, pattern: /^[0-9]{11}$/ })} />
            {errors.phone && <p className="text-red-500 text-sm">Valid phone number required</p>}
          </div>

          <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-800">Submit</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
