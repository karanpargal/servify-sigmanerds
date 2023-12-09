import axios from 'axios';
import type { ServiceType } from '../../../server/services/services.schema';
import type { UserType } from '../../../server/users/users.schema';

const axiosClient = axios.create({
  baseURL: 'http://localhost:8080/api/v1/',
});

export const fetchUserData = ({ address }: { address: string }) =>
  axiosClient
    .get<UserType & { _id: string }>(`/users/${address}`)
    .then((res) => res.data);

export const fetchProviderServiceListing = ({ uid }: { uid: string }) =>
  axiosClient
    .get<(ServiceType & { _id: string })[]>(`/services/seller/${uid}`)
    .then((res) => res.data);

export const fetchCustomerServiceListing = () =>
  axiosClient
    .get<(ServiceType & { _id: string })[]>(`/services/`)
    .then((res) => res.data);
