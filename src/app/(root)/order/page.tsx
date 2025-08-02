"use client"
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../store/store'
import Image from 'next/image'
import Link from 'next/link'


export default function OrderPage() {
  const orders = useSelector((state: RootState) => state.order.items)

  console.log(orders)

  return (
    <div className="p-6 min-h-[70vh]">
      <h1 className="text-4xl text-center mt-12 lg:text-5xl text-indigo-500 font-bold mb-4">Orders Details Page</h1>

      {orders.length === 0 ? (
        <div className="flex items-center w-full  flex-col justify-center">
  <Image
            src="/Mobile payments-rafiki.svg"
            alt="empty_order"
            width={500}
            height={500}
            className="object-cover mx-auto"
          />

             <h1 className=" text-2xl text-indigo-500 lg:text-4xl font-bold">
          You haven't placed any orders yet.
          </h1>
          <Link href="/">
            <button className="px-6 py-2 mt-6 bg-indigo-500 text-white rounded cursor-pointer hover:bg-indigo-800 transition">
              Shop Now
            </button>
          </Link>
        </div>
      ) : (
        <div className='overflow-x-auto w-full'>
            <table className="min-w-full bg-white border border-gray-300 rounded shadow">
  <thead className="bg-indigo-200">
    <tr>
      <th className="text-left p-2 border">Order ID</th>
      <th className="text-left p-2 border">Name</th>
      <th className="text-left p-2 border">Address</th>
      <th className="text-left p-2 border">Phone</th>
      <th className="text-left p-2 border">Total Items</th>
      <th className="text-left p-2 border">Total Amount</th>
      <th className="text-left p-2 border">Date</th>
    </tr>
  </thead>
  <tbody>
    {orders.map(order => (
      <tr key={order.orderId} className="hover:bg-gray-100">
        <td className="p-2 border">{order.orderId}</td>
        <td className="p-2 border">{order.customer.name}</td>
        <td className="p-2 border">{order.customer.address}</td>
        <td className="p-2 border">{order.customer.phone}</td>
        <td className="p-2 border">{order.totalItems}</td>
        <td className="p-2 border">${order.totalAmount}</td>
        <td className="p-2 border">{order.orderDate}</td>
      </tr>
    ))}
  </tbody>
</table>
        </div>
      )}
    </div>
  )
}
