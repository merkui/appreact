import CartWidget from "./CartWidjet";

export const Navbar = () => {
    const brand =
'https://mhweb.net/todolimpieza/img/logo.png';
   return <header>
        <div className="logo-container">
          <img src={brand} alt="logo" />
        </div>
    <nav>
        <ul>
		<li><a href="#">Inicio</a></li>
		<li><a href="#">Limpieza</a></li>
		<li><a href="#">Ropa</a></li>
		<li><a href="#">Accesorios</a></li>
		
	 </ul>
    </nav>
     <CartWidget />
</header>
}