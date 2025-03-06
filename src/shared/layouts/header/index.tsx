import {
  Button,
  CartIcon,
  HomeIcon,
  PhoneIcon,
  SearchIcon,
  TruckIcon,
  UserIcon
} from '@/shared/components'
import Image from 'next/image'
import Link from 'next/link'
import './header.scss'

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <Link href='/' className='header__logo'>
          <Image
            src='/images/logo.png'
            width={99}
            height={70}
            priority
            alt='logo'
          />
          <h1 hidden>Baya</h1>
        </Link>

        <div className='header__middle'>
          {/* Search Input */}
          <form method='POST' className='header__middle-search'>
            <input type='text' placeholder='Tìm kiếm sản phẩm...' />
            <Button className='btn-search'>
              <SearchIcon />
            </Button>
          </form>

          {/* Services */}
          <div className='header__middle-services'>
            <div className='item'>
              <TruckIcon className='item__icon' />
              <p>Giao hàng toàn quốc</p>
            </div>
            <div className='item'>
              <HomeIcon className='item__icon' />
              <p>Hệ thống cửa hàng BAYA</p>
            </div>
            <div className='item'>
              <PhoneIcon className='item__icon' />
              <p>Hotline: 1900 63 64 76 (9-21h)</p>
            </div>
          </div>
        </div>
        <div className='header__cta'>
          {/* Account Dropdown */}
          <div className='header__cta-item'>
            <UserIcon />
            <p>
              <span>Đăng nhập</span> / <span>Đăng ký</span>
            </p>
          </div>

          {/* Cart */}
          <div className='header__cta-item'>
            <CartIcon />
            <p>Giỏ hàng</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
