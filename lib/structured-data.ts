const siteUrl = "https://www.seppesde.com";

type Pair = readonly [string, string];

type CollectionSchemaInput = {
  path: string;
  name: string;
  description: string;
  items: ReadonlyArray<{ name: string; path: string; image?: string }>;
  itemType?: "Product" | "Article" | "CreativeWork";
};

type ProductSchemaInput = {
  slug: string;
  name: string;
  description: string;
  image: string;
  category: string;
  series: string;
  parameters: ReadonlyArray<Pair>;
  faqs: ReadonlyArray<Pair>;
};

export function createFaqPageSchema(faqs: ReadonlyArray<Pair>) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
}

export function createCollectionPageSchema({
  path,
  name,
  description,
  items,
  itemType = "CreativeWork",
}: CollectionSchemaInput) {
  const url = `${siteUrl}${path}`;
  const listId = `${url}#item-list`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#webpage`,
        url,
        name,
        description,
        mainEntity: { "@id": listId },
        publisher: { "@id": `${siteUrl}/#organization` },
      },
      {
        "@type": "ItemList",
        "@id": listId,
        numberOfItems: items.length,
        itemListElement: items.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": itemType,
            name: item.name,
            url: `${siteUrl}${item.path}`,
            ...(item.image ? { image: `${siteUrl}${item.image}` } : {}),
          },
        })),
      },
    ],
  };
}

export function createProductPageSchema(product: ProductSchemaInput) {
  const url = `${siteUrl}/products/${product.slug}`;
  const productId = `${url}#product`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        name: product.name,
        description: product.description,
        image: `${siteUrl}${product.image}`,
        url,
        mainEntity: { "@id": productId },
        about: { "@id": productId },
        publisher: { "@id": `${siteUrl}/#organization` },
      },
      {
        "@type": "Product",
        "@id": productId,
        name: product.name,
        description: product.description,
        image: [`${siteUrl}${product.image}`],
        url,
        category: product.category,
        brand: { "@type": "Brand", name: "SEPPES" },
        manufacturer: { "@id": `${siteUrl}/#organization` },
        additionalProperty: [
          { "@type": "PropertyValue", name: "Series", value: product.series },
          ...product.parameters.map(([name, value]) => ({ "@type": "PropertyValue", name, value })),
        ],
      },
      { "@id": `${url}#faq`, ...createFaqPageSchema(product.faqs) },
    ],
  };
}

export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
