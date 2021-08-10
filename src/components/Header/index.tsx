import { ShoppingCart } from '../../svg/ShoppingCart'
import { ToggleThemeButton } from './ToggleThemeButton'
import SearchInput from '../Search/SearchInput'
import style from './style.module.scss'
import Link from 'next/link'
import Image from 'next/image'

export function Header() {
    return (
        <header className={style.header}>
            <div>
                <Link href="/">
                    <a>
                        <Image width={172} height={80} src="/images/logo.png" alt="Store Wars" />
                    </a>
                </Link>

                <SearchInput />
            </div>

            <div>
                <ToggleThemeButton />

                <Link href="/cart">
                <a aria-label="Abrir carrinho">
                    <ShoppingCart />
                </a>
                </Link>
            </div>
        </header>
    )
}