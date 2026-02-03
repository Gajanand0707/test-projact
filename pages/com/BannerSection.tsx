import Image from "next/image";
import Link from "next/link";

export interface BannerSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
  primaryButton?: {
    label: string;
    href: string;
  };
  secondaryButton?: {
    label: string;
    href: string;
  };
  align?: "left" | "center";
}

export default function BannerSection({
  title,
  subtitle,
  description,
  backgroundImage,
  primaryButton,
  secondaryButton,
  align = "center",
}: BannerSectionProps) {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0 -z-10">
          <Image
            src={backgroundImage}
            alt="Banner background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      )}

      {/* Content */}
      <div
        className={`container mx-auto px-6 py-24 flex ${
          align === "center" ? "text-center items-center" : "text-left items-start"
        }`}
      >
        <div className={`max-w-3xl ${align === "center" ? "mx-auto" : ""}`}>
          {subtitle && (
            <p className="text-sm uppercase tracking-wide text-gray-300 mb-3">
              {subtitle}
            </p>
          )}

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h1>

          {description && (
            <p className="text-gray-200 text-base md:text-lg mb-8">
              {description}
            </p>
          )}

          {(primaryButton || secondaryButton) && (
            <div
              className={`flex gap-4 ${
                align === "center" ? "justify-center" : "justify-start"
              }`}
            >
              {primaryButton && (
                <Link
                  href={primaryButton.href}
                  className="px-6 py-3 rounded-lg bg-white text-black font-medium hover:bg-gray-200 transition"
                >
                  {primaryButton.label}
                </Link>
              )}

              {secondaryButton && (
                <Link
                  href={secondaryButton.href}
                  className="px-6 py-3 rounded-lg border border-white text-white hover:bg-white hover:text-black transition"
                >
                  {secondaryButton.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
