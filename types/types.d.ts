declare module "default" {
  export interface UsefulLink {
    id: number;
    title: string;
    url: string;
  }

  export interface UsefulFile {
    id: number;
    title: string;
    file: string;
  }

  export interface Columns {
    label: string;
    accessor: string;
    sortable: boolean;
  }

  export interface Thesis {
    title: string;
    description: string;
    authors: string;
    course: string;
    accepted: boolean;
    members: {
      responsible: string;
      advisor: string;
      commitee: string;
    };
  }

  interface FileInterface {
    url: string;
    size: number;
    name: string;
  }

  export type Research = {
    id: number;
    title: string;
    description: string;
    author: Author;
    advisor_name: string;
    subject: string;
    approved: boolean;
    approved_at: date;
    committee: string;
    defense_date: date;
    invite: number;
    responsible: Responsible;
    file: string;
    file_name: string;
    file_size: string;
  };
}
