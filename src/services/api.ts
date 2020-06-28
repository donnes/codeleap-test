import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { ApiConfig, DEFAULT_API_CONFIG } from './api-config';
import { CareerSnapshot } from '../models/career';

export class Api {
  api: AxiosInstance

  constructor(config: ApiConfig = DEFAULT_API_CONFIG) {
    this.api = axios.create({
      baseURL: config.url,
      timeout: config.timeout,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  public success<T>(response: AxiosResponse<T>):T {
    return response.data;
  }

  /**
   * Gets a list of careers.
   */
  public async getCareers():Promise<AxiosResponse<CareerSnapshot[]>> {
    const response = await this.api.get('/');
    return this.success(response);
  }

  /**
   * Creates a career.
   */
  public async createCareer(data: CareerSnapshot): Promise<AxiosResponse> {
    const response: AxiosResponse = await this.api.post('/', data);
    return this.success(response);
  }

  /**
   * Updates a career.
   */
  public async updateCareer(id: number, data: CareerSnapshot): Promise<AxiosResponse> {
    const response: AxiosResponse = await this.api.patch(`/${id}`, data);
    return this.success(response);
  }

  /**
   * Deletes a career.
   */
  public async deleteCareer(id: number, data: CareerSnapshot): Promise<AxiosResponse> {
    const response: AxiosResponse = await this.api.patch(`/${id}`, data);
    return this.success(response);
  }
}
