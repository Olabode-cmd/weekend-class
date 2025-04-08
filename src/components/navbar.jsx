import { Link } from 'react-router'

const Navbar = () => {
    return (
        <>
            <div className='flex items-center justify-between'>
                <h1>Navbar</h1>

                <div className='flex items-center space-x-3'>
                    <Link to='/'>Home</Link>
                    <Link to='/products'>Products</Link>
                    <Link to='/profile'>Profile</Link>
                </div>

                <button className='px-3 py-2.5 bg-blue-500 text-sm rounded-md'>Login</button>
            </div>
        </>
    )
}

export default Navbar;