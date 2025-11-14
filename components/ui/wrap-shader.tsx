import { Warp } from "@paper-design/shaders-react"

type Props = {
  className?: string
  style?: React.CSSProperties
}

export default function WarpShaderHero({ className = "absolute inset-0", style }: Props) {
  return (
    <div className={className} style={style}>
      <div className="absolute inset-0 pointer-events-none">
        <Warp
          style={{ height: "100%", width: "100%" }}
          proportion={0.45}
          softness={1}
          distortion={0.25}
          swirl={0.8}
          swirlIterations={10}
          shape="checks"
          shapeScale={0.1}
          scale={1}
          rotation={0}
          speed={1}
          colors={[
            "hsl(200, 100%, 20%)",
            "hsl(160, 100%, 75%)",
            "hsl(180, 90%, 30%)",
            "hsl(170, 100%, 80%)",
          ]}
        />
      </div>
    </div>
  )
}
