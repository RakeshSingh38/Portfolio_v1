export function ProfileImagesSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://rakeshsingh.com",
          },
          about: {
            "@type": "Person",
            name: "Rakesh Singh",
            description:
              "Full Stack Developer specializing in Next.js, TypeScript, and Blockchain development.",
          },
          associatedMedia: [
            {
              "@type": "ImageObject",
              contentUrl: "https://rakeshsingh.com/rakesh_singh.jpg",
              name: "Rakesh Singh - Full Stack Developer Primary Profile",
              description:
                "Primary profile photo of Rakesh Singh, Full Stack Developer",
              encodingFormat: "image/jpeg",
              width: "800",
              height: "800",
            },
            {
              "@type": "ImageObject",
              contentUrl: "https://rakeshsingh.com/profile.jpg",
              name: "Rakesh Singh - Full Stack Developer Alternate Profile",
              description:
                "Secondary profile photo of Rakesh Singh, showcasing professional appearance",
              encodingFormat: "image/jpeg",
              width: "800",
              height: "800",
            },
          ],
        }),
      }}
    />
  );
}
