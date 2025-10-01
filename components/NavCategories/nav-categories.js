"use client"
import Link from 'next/link';
import { usePathname } from "next/navigation";
import styles from './nav-categories.module.css'
export default function NavCategories({ data = [] }) {
  const pathname = usePathname();
  return (
    <div className={styles.NavItem}>
      {
        data && data.map(item => {
          const slug = `${encodeURI(item.titol).toLowerCase()}`;
          const link = `/categoria/${slug}`
          const isActive = pathname === link
          return (<Link href={link} key={ item.titol } className={isActive ? styles.active : ''}>{item.titol}</Link> )
        })
      }
    </div>
  )
}