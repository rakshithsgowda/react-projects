import { Button } from 'antd'

export default function Home() {
  return (
    <div className='flex flex-col justify-center gap-2 items-center h-screen'>
      <h1>hOme page</h1>
      <Button type='primary'>homepage</Button>
      <Button type='default'>next page</Button>
    </div>
  )
}
