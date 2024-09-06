function Footer() {
    return(
        <>
            <section className="footerSection w-full h-auto bg-black text-white grid grid-cols-1 gap-2 font-serif">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 h-auto p-4">
                    <div className="text-sm sm:text-lg pt-12 md:pt-0">
                        <p>Good on people, the planet and animals. Good on you</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2 text-sm">
                        <h1 className="text-lg font-bold text-yellow-200 tracking-widest">Connect</h1>
                        <h3 className="cursor-pointer hover:underline hover:decoration-sky-500 hover:underline-offset-4">Instagram</h3>
                        <h3 className="cursor-pointer hover:underline hover:decoration-sky-500 hover:underline-offset-4">Facebook</h3>
                        <h3 className="cursor-pointer hover:underline hover:decoration-sky-500 hover:underline-offset-4">Twitter</h3>
                        <h3 className="cursor-pointer hover:underline hover:decoration-sky-500 hover:underline-offset-4">Threads</h3>
                    </div>
                    <div className="flex flex-col items-center justify-center md:justify-start gap-2 text-sm">
                        <h1 className="text-lg font-bold text-red-500 tracking-widest">Help</h1>
                        <h3 className="cursor-pointer hover:underline hover:decoration-sky-500 hover:underline-offset-4">FAQ</h3>
                        <h3 className="cursor-pointer hover:underline hover:decoration-sky-500 hover:underline-offset-4">Contact Us</h3>
                    </div>
                    <div className="flex flex-col items-center justify-center md:justify-start gap-2 text-sm">
                        <h1 className="text-lg font-bold text-blue-300 tracking-widest">About</h1>
                        <h3 className="cursor-pointer hover:underline hover:decoration-sky-500 hover:underline-offset-4">Our Story</h3>
                        <h3 className="cursor-pointer hover:underline hover:decoration-sky-500 hover:underline-offset-4">Our Team</h3>
                        <h3 className="cursor-pointer hover:underline hover:decoration-sky-500 hover:underline-offset-4">Our Vision</h3>
                    </div>
                </div>
                <div className="text-black flex justify-between items-center py-2 px-4 bg-slate-300">
                    <h2 className="cursor-pointer">&copy; 2024 SHOPPYGLOBE</h2>
                    <h2 className="cursor-pointer">Made by Human</h2>
                    <img src="../src/assets/cart.png" alt="footer pic" className="w-7 cursor-pointer"/>
                </div>
            </section>
        </>
    )
}

export default Footer;