export default class ContentfulApi {
  static async gql(query: string) {
    const url = `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}`;

    const options = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    };

    try {
      return await fetch(url, options)
        .then((r) => r.json())
        .then((r) => r.data);
    } catch (error) {
      console.log(error);

      throw new Error("Could not fetch data from Contentful!");
    }
  }

  static async getPage(pageName: string) {
    try {
      const { pageCollection } = await this.gql(`
      {
        pageCollection(where: {name: "${pageName}"}) {
          items {
            name
            title
            content:contentSectionCollection {
              items {
                ... on ContentSection {
                  title
                  body {
                    json
                  }
                }
              }
            }
          }
        }
      }
      `);

      const { name, title, content } = pageCollection.items[0];

      return { page: { name, title, content: content.items } };
    } catch (e) {
      return { page: { name: "404" } };
    }
  }
}
