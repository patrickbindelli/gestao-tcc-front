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
