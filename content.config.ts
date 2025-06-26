import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    foo: defineCollection({
      type: "data",
      source: "foo.json",
      schema: z.object({}),
    }),
  },
});
