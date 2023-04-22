import React from 'react'
import Search from '../../../components/reusable/Search';
import DemoApp from '../../../components/schedule/DemoApp';

const Main = () => {
  return (
    <div className="relative flex basis-[60%] flex-col gap-4 bg-primary  p-8">
      <div className='flex justify-between'>
        <h1 className="text-[25px]">Schedule</h1>
        <Search />
      </div>
      <div>
        <DemoApp />
      </div>
    </div>
  );
}

export default Main