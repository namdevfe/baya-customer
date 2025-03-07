'use client'

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
import { useState } from 'react'

const Header = () => {
  const [isToggleMenuMobile, setIsToggleMenuMobile] = useState<boolean>(false)

  const handleToggleMenuMobileClick = () => {
    setIsToggleMenuMobile(!isToggleMenuMobile)
  }

  return (
    <header className='header'>
      <div className='container-fluid'>
        <div className='header__left'>
          <button
            className={`header__left-hamburger ${
              isToggleMenuMobile ? '--close' : ''
            }`}
            onClick={handleToggleMenuMobileClick}
          >
            <span />
          </button>

          <Link href='/' className='header__left-logo'>
            <Image
              src='/images/logo.png'
              width={99}
              height={70}
              priority
              alt='logo'
            />
            <h1 hidden>Baya</h1>
          </Link>
        </div>

        <div className='header__middle'>
          {/* Search Input */}
          <form method='POST' className='header__middle-search'>
            <div className='search-input'>
              <input type='text' placeholder='Tìm kiếm sản phẩm...' />
              <Button className='btn-search'>
                <SearchIcon className='search-icon' />
              </Button>
            </div>

            {/* Product List
              - Success: display list of search results
              - Not found: display not found of search results
            */}
            <div className='products'>
              <div className='products__item'>
                <div className='products__item-content'>
                  <Link
                    href='/'
                    title='Đĩa sâu lòng sứ trắng họa tiết H3.6xD20 SAKURA -2002611'
                    className='name'
                  >
                    Đĩa sâu lòng sứ trắng họa tiết H3.6xD20 SAKURA -2002611
                  </Link>
                  <p className='price'>99,000₫</p>
                </div>
                <Link
                  href='/'
                  title='Đĩa sâu lòng sứ trắng họa tiết H3.6xD20 SAKURA -2002611'
                  className='products__item-thumb'
                >
                  <Image
                    src='/images/product-01.webp'
                    alt='product-01'
                    width={40}
                    height={40}
                    quality={80}
                  />
                </Link>
              </div>
              <div className='products__item'>
                <div className='products__item-content'>
                  <Link
                    href='/'
                    title='Đĩa sâu lòng sứ trắng họa tiết H3.6xD20 SAKURA -2002611'
                    className='name'
                  >
                    Đĩa sâu lòng sứ trắng họa tiết H3.6xD20 SAKURA -2002611
                  </Link>
                  <p className='price'>99,000₫</p>
                </div>
                <Link
                  href='/'
                  title='Đĩa sâu lòng sứ trắng họa tiết H3.6xD20 SAKURA -2002611'
                  className='products__item-thumb'
                >
                  <Image
                    src='/images/product-01.webp'
                    alt='product-01'
                    width={40}
                    height={40}
                    quality={80}
                  />
                </Link>
              </div>
              <div className='products__item'>
                <div className='products__item-content'>
                  <Link
                    href='/'
                    title='Đĩa sâu lòng sứ trắng họa tiết H3.6xD20 SAKURA -2002611'
                    className='name'
                  >
                    Đĩa sâu lòng sứ trắng họa tiết H3.6xD20 SAKURA -2002611
                  </Link>
                  <p className='price'>99,000₫</p>
                </div>
                <Link
                  href='/'
                  title='Đĩa sâu lòng sứ trắng họa tiết H3.6xD20 SAKURA -2002611'
                  className='products__item-thumb'
                >
                  <Image
                    src='/images/product-01.webp'
                    alt='product-01'
                    width={40}
                    height={40}
                    quality={80}
                  />
                </Link>
              </div>
              <Button variant='white' className='products__more'>
                Xem thêm 30 sản phẩm
              </Button>
            </div>
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
          <div className='header__cta-item' title='Tài khoản'>
            <UserIcon />
            <p>
              <span>Đăng nhập</span> / <span>Đăng ký</span>
            </p>
          </div>

          {/* Cart */}
          <div className='header__cta-item' title='Giỏ hàng'>
            <div className='badge'>
              <CartIcon />
              <span className='badge__count'>0</span>
            </div>
            <p>Giỏ hàng</p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
