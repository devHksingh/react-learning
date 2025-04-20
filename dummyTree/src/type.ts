// types.ts
export interface OrgNode {
    name: string;
    email: string;
    description: string;
    children: OrgNode[];
  }
  