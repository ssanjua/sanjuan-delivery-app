const Footer = () => {
  return (
    <div className="bg-red-600 py-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-white">
            <div className="flex flex-col mf:flex-row md:items-center">
              <span className="text-xl  font-bold tracking-tight">
                  yarcoDelivery.com</span>
              <span className="block mt-1 md:inline md:ml-4 text-sm">
                  hecho con amor por ssanjua 🤍 </span>
            </div>
            <div className="text-sm flex gap-4">
                <span>Políticas de privacidad</span>
                <span>Términos de servicio</span>
                
            </div>
        </div>
    </div>
  )
}

export default Footer;