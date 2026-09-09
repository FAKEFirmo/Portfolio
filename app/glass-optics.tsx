export default function GlassOptics() {
  return (
    <svg width="0" height="0" aria-hidden="true" className="optical-defs">
      <defs>
        <filter
          id="glass-refraction"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.009 0.018"
            numOctaves="1"
            seed="8"
            result="optical-map"
          />
          <feGaussianBlur
            in="optical-map"
            stdDeviation="3"
            result="smooth-map"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="smooth-map"
            scale="12"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
}
