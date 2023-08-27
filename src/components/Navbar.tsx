import LogoBlue from '../assets/images/LogoBlue.svg'

const Navbar = () => {
  return (
    <div className='flex justify-between py-4 items-center px-8'>
        <img src={LogoBlue} alt="ServisGo Logo" />
        <ul className='flex'>
            <li><button className='p-4 text-gray-500 font-medium'>How to use</button></li>
            <li><button className='p-4 text-gray-500 font-medium'>Safety</button></li>
            <li><button className='p-4 text-gray-500 font-medium'>Support</button></li>
            <li><button className='p-4 text-gray-500 font-medium'>Download</button></li>
            <li><button className='p-4 text-gray-500 font-medium'>Apply to be a Partner</button></li>
        </ul>
    </div>
  )
}

export default Navbar