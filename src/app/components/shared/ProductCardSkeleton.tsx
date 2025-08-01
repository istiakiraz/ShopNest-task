'use client'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function ProductCardSkeleton() {
  return (
    <div className="bg-indigo-200 rounded-2xl shadow-md p-4 space-y-3">
      <Skeleton height={200} className="w-full" />
      <Skeleton count={2} />
      <div className="flex justify-between items-center">
        <Skeleton width={60} height={20} />
        <Skeleton width={80} height={20} />
      </div>
    </div>
  )
}