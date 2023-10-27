declare module "forms" {
  export type FormItem = {
    label: string;
    id: string;
    value: string;
    type: string;
    required?: boolean;
    readonly?: boolean;
  };

  export type FormConfig = FormItem[];

  export interface RegisterFormInterface {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    re_password: string;
  }
  export interface ProfileFormInterface {
    first_name: string;
    last_name: string;
    email: string;
  }

  export interface ChangePasswordFormInterface {
    new_password: string;
    current_password: string;
  }
}
