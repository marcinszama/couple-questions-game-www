'use client'
import Link from 'next/link'
import { Menu, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || ''

export function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="ghost" size="icon">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-64">
        <div className="flex flex-col gap-6 mt-8">
          <a href="#features" className="text-lg font-medium text-foreground hover:text-primary transition-colors">Product</a>
          <Link href="/blog" className="text-lg font-medium text-foreground hover:text-primary transition-colors">Blog</Link>
          <a href="#faq" className="text-lg font-medium text-foreground hover:text-primary transition-colors">FAQ</a>
          <Link href="/about" className="text-lg font-medium text-foreground hover:text-primary transition-colors">About</Link>
          <Button asChild className="mt-4">
            <a href={`${APP_URL}/auth`} className="flex items-center gap-2">
              Try for free
              <ChevronRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
