import { STRAPI_API_ENDPOINT } from "@/helpers/endpoints";
import { PolicyProps } from "@/containers/PolicyPage/types";

import { CourseCardProps } from "@/components/CourseCard/types";
import { TeacherMinProps } from "@/components/TeacherCard/types";
import { FetchResponse } from "./types";
import { ImageApiProps } from "@/containers/types";
import { ArticleProps, NewsPageProps } from "@/containers/NewsPage/types";

const formatResponse = <T>(response: FetchResponse<T> | null) => {
  if (response?.status === 200) {
    return response.data;
  } else {
    return null;
  }
};

export const fetchData = async <T>(url: string): Promise<T | null> => {
  const response = await fetch(url)
    .then((res) => {
      return {
        data: res.json(),
        status: res.status,
      };
    })
    .catch(() => null);

  return formatResponse(response);
};

export const getTeachersData = async () => {
  const url = `${STRAPI_API_ENDPOINT}/teachers-page`;

  return fetchData<TeacherMinProps[]>(url);
};

export const getCoursesData = async () => {
  const url = `${STRAPI_API_ENDPOINT}/courses-page`;

  return fetchData<CourseCardProps[]>(url);
};

export const getPoliciesData = async () => {
  const url = `${STRAPI_API_ENDPOINT}/policy-page`;

  return await fetchData<PolicyProps[]>(url);
};

export const getPhotosPageData = async () => {
  const url = `${STRAPI_API_ENDPOINT}/photos-page`;

  return await fetchData<ImageApiProps[]>(url);
};

export const getNewsPageData = async () => {
  const url = `${STRAPI_API_ENDPOINT}/articles`;

  return await fetchData<ArticleProps[]>(url);
};

export const getNewsPageDataByPageAndCount = async (
  page: number = 1,
  pageCount: number = 5
) => {
  const url = `${STRAPI_API_ENDPOINT}/articles?pagination[page]=${page}&pagination[pageSize]=${pageCount}`;

  return await fetchData<NewsPageProps>(url);
};

export const getArticleDataBySlug = async (slug: string) => {
  const url = `${STRAPI_API_ENDPOINT}/articles?filters[slug]=${slug}`;

  return await fetchData<ArticleProps>(url);
};
