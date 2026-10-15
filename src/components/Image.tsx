import NextImage from "next/image";

type ImageProps = {
  type?: "character" | "flag";
  alt: string;
};

// Figma Image 컴포넌트. character 201px · flag 48px
export default function Image({ type = "character", alt }: ImageProps) {
  if (type === "flag") {
    return (
      <NextImage
        src="/images/flag.png"
        alt={alt}
        width={48}
        height={48}
        className="size-48 shrink-0 rounded-scaled-media object-cover"
      />
    );
  }
  return (
    <NextImage
      src="/images/character.png"
      alt={alt}
      width={201}
      height={201}
      className="size-201 shrink-0 object-cover"
    />
  );
}
