import { Suspense } from 'react'
import { FaRegEnvelope } from 'react-icons/fa'
import { BsWhatsapp, BsInstagram, BsLinkedin } from 'react-icons/bs'
import { TbBrandUpwork } from 'react-icons/tb'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/atoms/accordion'
import { AsideLink } from '@/components/atoms/aside-link'
import { FadeInStagger, FadeIn } from '@/components/atoms/fade-in'
import { ENV } from '@/lib/constants'
import { generateSEO } from '@/lib/generateSEO'

const title = 'guest-book'
const description = 'Leave a message to me'
const url = `${ENV.NEXT_PUBLIC_WEBSITE_URL}/guest-book`
const image = `${ENV.NEXT_PUBLIC_WEBSITE_URL}/api/og?title=${title}`

export const metadata = generateSEO(title, description, image, url)

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <section className='grid grid-cols-12 overflow-hidden'>
      <aside className='md:col-span-3 lg:col-span-2 border-r border-lines md:block hidden overflow-y-auto'>
        <Accordion type='single' collapsible defaultValue='item-0'>
          {data.map((item, i) => (
            <AccordionItem value={`item-${i}`} key={i}>
              <AccordionTrigger className='border-b border-lines px-5 py-2.5 text-left' data-umami-event='Guest book accordion'>
                {item.title}
              </AccordionTrigger>
              <AccordionContent className='mt-5 space-y-1'>
                <FadeInStagger faster>
                  {item.list.map((listItem, j) => (
                    <FadeIn key={j}>
                      <Suspense fallback={<>Loading...</>}>
                        <AsideLink href={listItem.href} startWith='/about' data-umami-event={`Guest book ${listItem.title} link`}>
                          <span className='shrink-0'>{listItem.icon}</span>
                          {listItem.title}
                        </AsideLink>
                      </Suspense>
                    </FadeIn>
                  ))}
                </FadeInStagger>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </aside>
      <section className='md:col-span-9 lg:col-span-10 col-span-12 overflow-y-auto relative h-[84vh] md:h-auto'>{children}</section>
    </section>
  )
}

const data = [
  {
    title: 'Guest Book',
    list: [
      {
        title: 'Email',
        href: 'mailto:wwicaksono96@gmail.com',
        icon: <FaRegEnvelope className='w-4 h-4' />
      },
      {
        title: 'Upwork',
        href: 'https://www.upwork.com/freelancers/~01df34d78e05fa69bf',
        icon: <TbBrandUpwork className='w-4 h-4' />
      },
      {
        title: 'WhatsApp',
        href: 'https://wa.me/+6287885002327',
        icon: <BsWhatsapp className='w-4 h-4' />
      },
      {
        title: 'LinkedIn',
        href: 'https://www.linkedin.com/in/wiscaksono/',
        icon: <BsLinkedin className='w-4 h-4' />
      },
      {
        title: 'Instagram',
        href: 'https://www.instagram.com/amachoker/',
        icon: <BsInstagram className='w-4 h-4' />
      }
    ]
  }
]
