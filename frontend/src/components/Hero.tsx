import hero from "../assets/hero.jpeg"

const Hero = () => {
  return (
    <div className="">
        <img src={hero} className="w-full max-h-[600px] object-cover" />
    </div>
  )
}

export default Hero;