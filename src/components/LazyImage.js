import React from "react";

/**
 * Component to lazily load an image with a low quality version in its place.
 * @param props
 * @returns An img tag that will change its src to a high quality version when it loads.
 */
const LazyImage = (props) => {
  const { lowQualitySrc, highQualitySrc, alt, ...rest } = props;
  const [src, setSrc] = React.useState(lowQualitySrc);

  React.useEffect(() => {
    setSrc(lowQualitySrc);

    // Start loading the high quality version.
    const img = new Image();
    img.src = highQualitySrc;
    img.onload = () => {
      setSrc(highQualitySrc);
    };
  }, [lowQualitySrc, highQualitySrc]);

  const blur = src === lowQualitySrc;

  return (
    <img
      src={src}
      alt={alt}
      style={{
        filter: blur ? "blur(15px)" : "none",
        transition: blur ? "none" : "filter 0.3s ease-out",
      }}
      {...rest}
    />
  );
};

export { LazyImage };
