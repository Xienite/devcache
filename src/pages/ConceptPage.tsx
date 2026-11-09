import { useEffect } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { allConcepts, sections } from "../content/concepts";

function ConceptPage() {
  const { slug } = useParams();

  // The router doesn't reset scroll position, so jump to the top on each new concept.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const index = allConcepts.findIndex((c) => c.slug === slug);
  const concept = allConcepts[index]; // undefined when index is -1
  const prev = allConcepts[index - 1];
  const next = allConcepts[index + 1];

  return (
    <div className="px-page-padding flex w-full gap-12 pb-16">
      {/* Sidebar: every concept, grouped by section */}
      <aside className="sticky top-4 hidden max-h-[calc(100vh-2rem)] w-64 shrink-0 self-start overflow-y-auto md:block">
        <nav className="flex flex-col gap-6 text-sm">
          {sections.map((section) => (
            <div key={section.id} className="flex flex-col gap-1">
              <span className="text-muted-foreground text-xs tracking-wide uppercase">
                {section.title}
              </span>
              {section.concepts.map((c) => (
                <NavLink
                  key={c.slug}
                  to={`/concepts/${c.slug}`}
                  className={({ isActive }) =>
                    isActive ? "text-primary" : "hover:text-primary text-foreground"
                  }
                >
                  {c.title}
                </NavLink>
              ))}
            </div>
          ))}
        </nav>
      </aside>

      <main className="max-w-3xl min-w-0 flex-1">
        {concept ? (
          <>
            <concept.Content />

            <div className="border-border mt-12 flex justify-between gap-4 border-t pt-4 text-sm">
              {prev ? (
                <Link to={`/concepts/${prev.slug}`} className="hover:text-primary flex items-center gap-2">
                  <ArrowLeftIcon className="h-4 w-4" />
                  {prev.title}
                </Link>
              ) : (
                <span />
              )}
              {next && (
                <Link to={`/concepts/${next.slug}`} className="hover:text-primary flex items-center gap-2">
                  {next.title}
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              )}
            </div>
          </>
        ) : (
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl">Concept not found</h1>
            <p className="text-muted-foreground">No concept with the slug "{slug}".</p>
            <Link to="/" className="text-primary">
              Back to all concepts
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}

export default ConceptPage;
