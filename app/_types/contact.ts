export interface ContactType {
  id: string;
  name: string;
  email: string;
  userId: string | undefined;
}

export interface ContactFormProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  action: (prevState: any, formData: FormData) => Promise<any>;
  contact?: ContactType;
}
