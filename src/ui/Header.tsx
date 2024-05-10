'use client'

import { ArrowRight, BookUser } from 'lucide-react'
import Link from 'next/link'
import { MaxWidthWrapper } from './MaxWidthWrapper'
import { Button } from './Button'
import { Dropdown } from './Dropdown'
import Image from 'next/image'
import { useState } from 'react'

export function Header () {
  const [ openedDropdown, setOpenedDropdown ] = useState<'Projects' | 'Roblox Projects' | ''>('')

  return (
    <header className='z-20 fixed w-full py-3 px-6 bg-neutral-900 bg-opacity-50 backdrop-blur-sm shadow-md select-none'>
      <MaxWidthWrapper className='mx-auto flex items-center'>
        <div className='w-1/4 flex justify-start'>
          <Link href='/' className='hover:animate-pulsating-glow'>
            <Image
              className='w-20'
              height={500}
              width={500}
              src='/logo.svg'
              alt='Site Logo'
            />
          </Link>
        </div>

        <div className='w-1/2 flex justify-center'>
          <Dropdown
            openedDropdown={openedDropdown}
            setOpenedDropdown={setOpenedDropdown}
            text='Projects'
          >
            <li>
              <Button variant='dropdown-button'>
                Example Project 1
              </Button>
            </li>

            <li>
              <Button variant='dropdown-button'>
                Example Project 2
              </Button>
            </li>
          </Dropdown>

          <Dropdown
            openedDropdown={openedDropdown}
            setOpenedDropdown={setOpenedDropdown}
            text='Roblox Projects'
          >
            <li>
              <Button variant='dropdown-button'>
                Example Roblox Project 1
              </Button>
            </li>

            <li>
              <Button variant='dropdown-button'>
                Example Roblox Project 2
              </Button>
            </li>
          </Dropdown>

          <Button className='z-30 flex items-center gap-2 group' variant='nav-button'>
            Past Employers
            <BookUser className='w-5 h-5 text-neutral-300 group-hover:text-white' />
          </Button>
        </div>

        <div className='w-1/4 flex justify-end'>
          <Button className='flex items-center gap-3' variant='outline-fill'>
            Contact Me
            <ArrowRight className='w-5 h-5' />
          </Button>
        </div>
      </MaxWidthWrapper>
    </header>
  )
}