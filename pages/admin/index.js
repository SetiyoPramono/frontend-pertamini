import React from 'react'
import SalesChart from '../../src/components/dashboard/SalesChart'
import TopCards from '../../src/components/dashboard/TopCards'
import FullLayout from '../../src/layouts/FullLayout'

export default function Home() {
  return (
    <div>
        <FullLayout>
          <SalesChart />
        </FullLayout>
    </div>
  )
}
