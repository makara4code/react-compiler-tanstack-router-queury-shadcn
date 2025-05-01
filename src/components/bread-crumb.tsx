import { useMatches } from "@tanstack/react-router";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Link } from "@tanstack/react-router";

export function Breadcrumbs() {
  // Get all matched routes
  const matches = useMatches();

  // Filter matches with a crumb property and map to breadcrumb items
  const breadcrumbs = matches
    .filter((match) => match.loaderData?.crumb) // Only include routes with crumb data
    .map((match) => ({
      title: match.loaderData?.crumb,
      path: match.pathname,
    }));

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map((breadcrumb, index) => (
          <BreadcrumbItem key={breadcrumb.path}>
            {index < breadcrumbs.length - 1 ? (
              <>
                <BreadcrumbLink asChild>
                  <Link to={breadcrumb.path}>{breadcrumb.title}</Link>
                </BreadcrumbLink>
                <BreadcrumbSeparator />
              </>
            ) : (
              <BreadcrumbPage>{breadcrumb.title}</BreadcrumbPage>
            )}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
