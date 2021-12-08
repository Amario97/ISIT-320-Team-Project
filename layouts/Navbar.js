import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div class="container-fluid px-0">
      <div className="logo">
        <Image src="/logo.png" alt="site logo" width={128} height={77} />
      </div>
      <nav class="navbar navbar-expand-md bg-dark navbar-dark">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
          <div class="navbar-nav">
            <Link href="/" class="nav-item">
              <a className = 'nav-link'>Home</a>
            </Link>      
            <Link href="/search/" class="nav-item">
              <a className = 'nav-link'>Search</a>
            </Link>
            <Link href="/cart/" class="nav-item">
              <a className = 'nav-link'>Cart</a>
            </Link>
            <Link href='/addComment' class="nav-item">
              <a className = 'nav-link'>Add comment</a>
            </Link>
            <Link href='/addCoupon' class="nav-item">
              <a className = 'nav-link'>Add coupon to account</a>
            </Link>
            <Link href='/commentBoard' class="nav-item">
              <a className = 'nav-link'>Comments board</a>
            </Link>
            <Link href='/developerCouponList' class="nav-item">
              <a className = 'nav-link'>Make Order</a>
            </Link>
          </div>
        </div>
      </nav>


    </div>

  );
}
 
export default Navbar;