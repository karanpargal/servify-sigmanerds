import axios from 'axios';
import type { ServiceClientType } from '../../../server/services/services.schema';
import type { UserClientType } from '../../../server/users/users.schema';

export const axiosClient = axios.create({
  baseURL: 'http://localhost:8080/api/v1/',
});

export const fetchUserData = ({ address }: { address: string }) =>
  axiosClient.get<UserClientType>(`/users/${address}`).then((res) => res.data);

export const fetchProviderServiceListing = ({ uid }: { uid: string }) =>
  axiosClient
    .get<ServiceClientType[]>(`/services/seller/${uid}`)
    .then((res) => res.data);

export const fetchCustomerServiceListing = () =>
  axiosClient.get<ServiceClientType[]>(`/services/`).then((res) => res.data);

export const fetchServiceById = ({ id }: { id: string }) =>
  axiosClient.get<ServiceClientType>(`/services/${id}`).then((res) => res.data);
