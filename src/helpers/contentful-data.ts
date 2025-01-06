import * as contentful from "contentful";

const client = contentful.createClient({
  space: "uhwxx3c2cp45",
  environment: "master",
  accessToken: "Rg1vcAWVUKyqxOQEyyE2VsSUkgFO77xvgdLA3jiNOU4",
});

export async function getEntries({
  content_type,
  fields_popular,
  fields_slug,
  fields_categories,
}: {
  content_type: string;
  fields_popular?: boolean;
  fields_slug?: string;
  fields_categories?: string;
}) {
  try {
    const data = await client.getEntries({
      content_type: content_type,
      "fields.popular": fields_popular,
      "fields.slug": fields_slug,
      "fields.categories": fields_categories,
    });

    return data.items;
  } catch (error) {
    console.error(error);
    return null;
  }
}
