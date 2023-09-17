export interface ApiResponse<T> {
  count: number;
  next: number;
  previous: number;
  results: T[];
}

export interface JWTResponse {
  refresh: string;
  access: string;
}

export interface RefreshTokenResponse {
  access: string;
}

interface Author {
  id: number;
  name: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  authors: Author[];
  advisor_name: string;
  subject: string;
  approved: boolean;
  approved_at: date;
  committee: null;
  defense_date: date;
  invite: number;
}

export interface Invite {
  id: number;
  subject: string;
  sender_name: string;
  receiver_name: string;
  created_at: string;
  accepted: boolean;
}
