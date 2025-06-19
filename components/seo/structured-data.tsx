export function PersonSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Rakesh Singh",
          url: "https://rakeshsingh.com",
          sameAs: [
            "https://github.com/RakeshSingh38",
            "https://www.linkedin.com/in/RakeshSingh61/",
            "https://x.com/RakeshSingh38"
          ],
          jobTitle: "Full Stack Developer",
          knowsAbout: ["Web Development", "Blockchain", "TypeScript", "React", "Next.js"],
          image: "/profile.jpg",
          description: "Full Stack Developer specializing in Next.js, TypeScript, and Blockchain development."
        })
      }}
    />
  );
} 