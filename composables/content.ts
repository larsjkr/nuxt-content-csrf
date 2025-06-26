import type { NuxtApp } from "#app";

const isExpired = (expirationDate: number) =>
  new Date(expirationDate).getTime() < Date.now();

const getCachedData = (key: string, nuxtApp: NuxtApp) => {
  const data = nuxtApp.payload.data[key] || nuxtApp.static.data[key];

  if (!data || isExpired(data.expirationDate)) return;
  return data;
};

const transform = <T>(input: T) => {
  const DAYS_UNTIL_EXPIRATION = 7;
  const now = new Date();
  const expirationDate = now.setDate(now.getDate() + DAYS_UNTIL_EXPIRATION);

  return { ...input, expirationDate };
};

export const useContent = () => {
  const getFoo = () =>
    useAsyncData(
      "foo",
      () =>
        queryCollection("foo")
          .first()
          .catch((error) => {
            console.error("Failed to fetch foo data", error);
          }),
      {
        getCachedData,
        transform,
      }
    );

  return {
    getFoo,
  };
};
