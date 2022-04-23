import Link from 'next/link'
import { useRouter } from 'next/router'
import NeuButton from './NeuButton'

export default function NeuLinkButton({ children, href }) {
  const router = useRouter();
  return (
    <Link href={href}>
      <a>
        <NeuButton active={router.asPath === href ? true : false}>{children}</NeuButton>
      </a>
    </Link>
  )
}