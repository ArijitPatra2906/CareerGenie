import React from 'react'
import Logo from './logo'
import { Github, Linkedin, Twitter } from 'lucide-react'
import { APP_NAME } from '@/lib/constants'
import Image from 'next/image'

function Footer() {
  return (
    <footer className='bg-white border-t border-gray-200'>
      <div className='container mx-auto px-4 md:px-6 py-12'>
        <div className='w-full text-center'>
          <div className='w-full text-center space-y-4'>
            <div className='flex justify-center w-full'>
              <Image
                src='/logo.png'
                alt='logo'
                width={90}
                height={90}
                className='w-[75px] sm:w-[100px] h-auto'
              />
            </div>
            <p className='text-gray-600'>
              Advance your career with personalized guidance, interview prep,
              and AI-powered tools for job success.
            </p>
            <div className=''>
              <h2 className='text-lg text-gray-800 text-center'>
                Connect with Me
              </h2>
              <div className='flex w-full items-center justify-center space-x-4'>
                {[
                  {
                    icon: <Twitter className='text-blue-500 w-6 h-6' />,
                    href: 'https://x.com/arijitpatra2000?t=jB_7W34BR04OjacUjWLpQw&s=09',
                  },
                  {
                    icon: <Linkedin className='text-blue-700 w-6 h-6' />,
                    href: 'https://www.linkedin.com/in/arijitpatra2906/',
                  },
                  {
                    icon: <Github className='text-gray-800 w-6 h-6' />,
                    href: 'https://github.com/ArijitPatra2906',
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className='hover:bg-gray-100 p-2 rounded-full transition-colors'
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className='mt-12 pt-8 border-t border-gray-200 text-center'>
          <p className='text-gray-600'>
            © {new Date().getFullYear()} {APP_NAME}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
