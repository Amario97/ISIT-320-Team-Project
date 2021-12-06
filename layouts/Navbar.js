import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/logo.png" alt="site logo" width={128} height={77} />
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/browse"><a>Browse</a></Link>
      <Link href="/search/"><a>Search</a></Link>
      <Link href="/cart/"><a>Cart</a></Link>

      <Link href='/addComment'>
        <a className = 'nav-link'>Add comment</a>
      </Link>
      <Link href='/addCoupon'>
        <a className = 'nav-link'>Add coupon to account</a>
      </Link>
      <Link href='/commentBoard'>
        <a className = 'nav-link'>Comments board</a>
      </Link>
      <Link href='/developerCouponList'>
        <a className = 'nav-link'>Make Order</a>
      </Link>
    </nav>
  );
}
 
export default Navbar;