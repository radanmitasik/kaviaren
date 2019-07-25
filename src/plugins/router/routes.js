import Home from '@/views/Home'
import Products from '@/views/Products'
import Gallery from '@/views/Gallery'
import Contact from '@/views/Contact'
import Page404 from '@/views/Page404'

export default [
  { path: '/', name: 'home', component: Home },
  { path: '/productss', name: 'products', component: Products },
  { path: '/gallery', name: 'gallery', component: Gallery },
  { path: '/contact', name: 'contact', component: Contact },
  { path: '*', component: Page404 }
]
