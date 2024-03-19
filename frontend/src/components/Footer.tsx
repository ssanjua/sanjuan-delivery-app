const Footer = () => {
  return (
    <div className="bg-red-500 py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <span className="text-2xl text-white font-bold tracking-tight">
                ssanjuanDelivery.com
            </span>
            <span className="text-white flex gap-4">
                <span>Políticas de privacidad</span>
                <span>Términos de servicio</span>
            </span>
        </div>
    </div>
  )
}

export default Footer;