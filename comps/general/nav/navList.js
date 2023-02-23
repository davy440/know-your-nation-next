import Link from "next/link";

const NavList = ({listStyle, linkStyle}) => {

    const navData = [
        {text: "Home", href: "/"},
        {text: "All Nations", href: "/all-nations"},
        {text: "Categories", href: "#"}
    ]

    return(
        <ul className='kyn__topNavList'>
                {
                    navData.map(({text, href}, index) => {
                        return (
                            <li
                            className={listStyle}
                            key={text.replace(/\W+/g, '-').toLowerCase + `-${index}`}
                            >
                                <Link
                                className={linkStyle}
                                href={href}>
                                    {text}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
    )
}

export default NavList;