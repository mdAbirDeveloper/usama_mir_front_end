import React from 'react'
import DashboardLayout from './DashboardLayout';
import Layout from '../Layout/Layout';

const index = () => {
  return (
    <div className='min-h-screen mt-24 max-w-[1200px] text-center mx-auto'>
        <h1 className='text-3xl font-thin uppercase font-serif'>this is dashborad</h1>
    </div>
  )
}

export default index;

index.getLayout = function getLayout(page) {
  return (
      <DashboardLayout>{page}</DashboardLayout>
  )
}