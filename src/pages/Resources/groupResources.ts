import type { Resource, ResourceCategory } from "@/types/resource";

export function groupResourcesByCategory(resources: Resource[]): Record<ResourceCategory, Resource[]> {
  return resources.reduce(
    (acc, r) => {
      acc[r.category] = acc[r.category] ? [...acc[r.category], r] : [r];
      return acc;
    },
    {} as Record<ResourceCategory, Resource[]>
  );
}
