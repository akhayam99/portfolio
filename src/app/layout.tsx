import Contacts from '@/components/custom/contacts/contacts'
import { ThemeProvider } from '@/utils/theme-context'
import { Inter } from 'next/font/google'
import '../assets/globals.scss'
import styles from './layout.module.scss'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

interface RootLayoutProps { children: React.ReactNode }

const RootLayout = ({ children }: RootLayoutProps) => (
  <ThemeProvider theme='light'>
    <html lang="en">
      <body className={`${inter.className} ${styles.page}`}>
        <Contacts />
        {children}
      </body>
    </html>
  </ThemeProvider>
)

export default RootLayout
