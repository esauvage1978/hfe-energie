import communesData from "./service-area-communes.json";

export type ServiceAreaCommune = {
  name: string;
  code: string;
  postalCodes: string[];
  department: string;
  distanceKm: number;
};

export type ServiceAreaDepartment = {
  code: string;
  name: string;
  communes: ServiceAreaCommune[];
};

export type ServiceAreaData = {
  generatedAt: string;
  center: { lat: number; lng: number; label: string };
  radiusKm: number;
  totalCount: number;
  departments: ServiceAreaDepartment[];
  communes: ServiceAreaCommune[];
};

export const serviceAreaData = communesData as ServiceAreaData;

export const SERVICE_AREA_RADIUS_KM = serviceAreaData.radiusKm;

export function getServiceAreaDepartments(): ServiceAreaDepartment[] {
  return serviceAreaData.departments;
}

export function getServiceAreaCommunes(): ServiceAreaCommune[] {
  return serviceAreaData.communes;
}
