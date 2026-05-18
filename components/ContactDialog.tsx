'use client'
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog'

export function ContactDialog() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button className="hover:text-background transition-colors">Contact</button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Contact Us</AlertDialogTitle>
          <AlertDialogDescription>
            If you have any questions, please contact us at{' '}
            <a href="mailto:support@couplequestionsgame.com" className="text-primary hover:underline font-medium">
              support@couplequestionsgame.com
            </a>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction>Close</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
