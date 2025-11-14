import { ContainerAnimated, ContainerInset, ContainerScroll, ContainerStagger } from "@/components/blocks/hero-video"
import { Button } from "@/components/ui/button"
import WarpShaderHero from "@/components/ui/wrap-shader"

const HeroSection = () => {
  return (
    <ContainerScroll className="bg-linear-to-b from-blue-50 to-indigo-100 text-center text-gray-900 dark:bg-linear-to-b dark:from-gray-900 dark:to-gray-800 dark:text-white pt-32">
      {/* Shader background placed under hero content */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <WarpShaderHero />
      </div>

      <div className="relative z-10">
        <ContainerStagger viewport={{ once: false }}>
          <ContainerAnimated animation="top">
          <h1 className="text-5xl md:text-6xl font-black leading-none tracking-tighter">
            Premium Surfboards
          </h1>
        </ContainerAnimated>
        <ContainerAnimated animation="bottom">
          <h1 className="text-2xl md:text-3xl font-semibold leading-none tracking-tight mt-4">
            Ride the perfect waves with our elite collection
          </h1>
        </ContainerAnimated>

        <ContainerAnimated animation="blur" className="my-8">
          <p className="text-lg md:text-xl leading-relaxed tracking-tight max-w-2xl mx-auto">
             Hand-crafted surfboards designed for every skill level<br />
             Premium materials for maximum performance<br />
             Expert crafted by world-class shaping artisans
          </p>
        </ContainerAnimated>

        <ContainerAnimated
          animation="blur"
          className="flex justify-center gap-4 flex-wrap"
        >
          <Button
            className="rounded-full px-8 py-2 bg-blue-600 hover:bg-blue-700 text-white"
            size="lg"
          >
            Get Started
          </Button>
          <Button
            variant={"outline"}
            className="rounded-full border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950"
            size="lg"
          >
            Learn more
          </Button>
        </ContainerAnimated>
        </ContainerStagger>

        <ContainerInset className="mx-4 md:mx-8 mt-12">
        <video
          width="100%"
          height="100%"
          loop
          playsInline
          autoPlay
          muted
          className="relative z-10 block h-auto max-h-full max-w-full object-contain align-middle rounded-2xl shadow-2xl"
        >
          <source
            src="/7433_Surfer_Beach_1920x1080.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        </ContainerInset>
      </div>
    </ContainerScroll>
  )
}

export default HeroSection
