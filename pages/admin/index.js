import React from 'react'
import Blog from '../../src/components/dashboard/Blog'
import SalesChart from '../../src/components/dashboard/SalesChart'
import TopCards from '../../src/components/dashboard/TopCards'
import FullLayout from '../../src/layouts/FullLayout'

export default function Home() {
  return (
    <div>
        <FullLayout>
          <SalesChart />
          <Blog />
        </FullLayout>
    </div>
  )
}
