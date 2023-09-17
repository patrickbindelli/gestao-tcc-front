export interface FormConfig {
  labelText: string;
  labelId: string;
  type: string;
  value: string;
  link?: {
    linkText: string;
    linkUrl: string;
  };
  required?: boolean;
}

export interface RegisterForm {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  re_password: string;
}
