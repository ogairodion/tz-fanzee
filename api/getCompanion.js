import { useRuntimeConfig } from '#imports';

export default async function getCompanion(id, opts) {
  const config = useRuntimeConfig();

  try {
    const headers = {
      Accept: 'application/vnd.api+json',
    };

    const { data } = await useAsyncData(`companion-${id}`, () =>
      $fetch(`/v1/companions/${id}`, {
        baseURL: config.public.baseURL,
        headers,
        method: 'GET',
        params: {
          ...opts,
        },
      }),
    );

    return data.value.data;
  } catch {
    return [];
  }
}
