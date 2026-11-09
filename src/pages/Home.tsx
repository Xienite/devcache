import Card from "../components/Card";
import { sections } from "../content/concepts";

function Home() {
  return (
    <main className="px-page-padding flex w-full flex-col gap-12 pb-16">
      {/* Quick jump links to each section */}
      <nav className="text-muted-foreground flex flex-wrap gap-x-4 gap-y-1 text-sm">
        {sections.map((section) => (
          <a key={section.id} href={`#${section.id}`} className="hover:text-foreground">
            {section.title}
          </a>
        ))}
      </nav>

      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="flex scroll-mt-4 flex-col items-start gap-4"
        >
          <h2 className="border-border w-full border-b pb-2 text-xl">
            {section.title}
            <span className="text-muted-foreground ml-2 text-sm">
              {section.concepts.length}
            </span>
          </h2>
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {section.concepts.map((c) => (
              <Card
                key={c.slug}
                Icon={c.icon}
                title={c.title}
                description={c.description}
                to={`/concepts/${c.slug}`}
              />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}

export default Home;
