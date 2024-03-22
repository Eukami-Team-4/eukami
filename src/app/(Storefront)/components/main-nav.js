import Link from "next/link";

const StorefrontRoutes = [
    {
        name: "Shop", href: '/shop',
    },
    {
        name: "Headphones", href: '/collections/headphones',
    },
    {
        name: "Speakers", href: '/collections/speakers',
    },
    {
        name: "Earphones", href: '/collections/earphones',
    },
    {
        name: "About Us", href: '/aboutus',
    },
    {
        name: "Contact", href: '/contact',
    },
]

const MainNav = ({...props}) => {
    return (
        <nav {...props}>
            <ul className="flex flex-col items-center gap-4 uppercase md:flex-row md:gap-12">
                {StorefrontRoutes.map((route, index) => (
                    <li key={index} className="p-2 transition-all hover:text-brightOrange hover:tracking-widest hover:-translate-y-1">
                        <Link href={route.href}>{route.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default MainNav;