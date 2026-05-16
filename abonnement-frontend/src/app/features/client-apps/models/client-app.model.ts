export type ClientAppStatus = 'ACTIVE' | 'SUSPENDED';

export interface ClientApp {
  id: number;
  name: string;
  apiKey: string;
  contactEmail: string;
  status: ClientAppStatus;
}
