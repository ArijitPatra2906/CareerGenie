import React from 'react'
import { Button } from './ui/button'
import {
  PenBox,
  LayoutDashboard,
  FileText,
  GraduationCap,
  ChevronDown,
  StarsIcon,
} from 'lucide-react'
import Link from 'next/link'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { checkUser } from '@/lib/checkUser'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Image from 'next/image'

const Header = async () => {
  await checkUser()

  return (
    <header className='fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60'>
      <nav className='container mx-auto flex items-center justify-between px-4 md:px-0'>
        <Link href='/'>
          <Image
            src='/logo.png'
            alt='logo'
            width={90}
            height={90}
            className='w-[75px] sm:w-[100px] h-auto'
          />
        </Link>

        {/* Action Buttons */}
        <div className='flex items-center space-x-2 md:space-x-4'>
          <SignedIn>
            <Link href='/dashboard'>
              <Button variant='outline'>
                <LayoutDashboard size={18} />
                <span className='hidden md:inline'> Industry Insights</span>
              </Button>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className='flex items-center gap-2'>
                  <StarsIcon className='h-4 w-4' />
                  <span className='hidden md:block'>Growth Tools</span>
                  <ChevronDown className='h-4 w-4' />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end' className='w-48'>
                <DropdownMenuItem asChild>
                  <Link href='/resume' className='flex items-center gap-2'>
                    <FileText className='h-4 w-4' />
                    Build Resume
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href='/ai-cover-letter'
                    className='flex items-center gap-2'
                  >
                    <PenBox className='h-4 w-4' />
                    Cover Letter
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href='/interview' className='flex items-center gap-2'>
                    <GraduationCap className='h-4 w-4' />
                    Interview Prep
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SignedIn>

          <SignedOut>
            <SignInButton>
              <Button variant='outline'>Sign In</Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: 'w-10 h-10',
                  userButtonPopoverCard: 'shadow-xl',
                  userPreviewMainIdentifier: 'font-semibold',
                },
              }}
              afterSignOutUrl='/'
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  )
}

export default Header
