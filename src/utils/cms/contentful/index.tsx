import dayjs from "dayjs";

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
            content:contentCollection(limit: 10) {
              items {
                ... on ContentSection {
                  title
                  hideTitle
                  alignment
                  body {
                    json
                  }
                }
                ... on Image{
                  title
                  asset {
                    url
                    width
                    height
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

  static async getEvents() {
    const now = dayjs().format();

    try {
      const events = await this.gql(`
      {
        upcoming: eventCollection(where: {startDate_gte: "${now}"}) {
          items {
            sys {
              id
            }
            title
            startDate
            endDate
            subHeading
            location
            body {
              json
            }
            imagesCollection {
              items {
                title
                description
                url
                width
                height
              }
            }
          }
        }
        past: eventCollection(where: {startDate_lt: "${now}"}) {
          items {
            sys {
              id
            }
            title
            startDate
            endDate
            subHeading
            location
            body {
              json
            }
          }
        }
      }

      `);

      return { events };
    } catch (e) {
      console.log(e);
      return { events: { upcoming: [], past: [] } };
    }
  }

  static async getResources() {
    try {
      const response = await this.gql(`
      {
        page(id: "13qDVbw8AXFCEr7aRNrcAc") {
          title
          resourceTypes: contentCollection(limit: 5) {
            items {
              ... on ContentSection {
                title
                hideTitle
                alignment
                body {
                  links {
                    entries {
                      block {
                        ... on ContentSection {
                          title
                          body {
                            json
                            links {
                              assets {
                                block {
                                  title
                                  url
                                  contentType
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
      `);
      console.log(response);
      return response;
    } catch (e) {
      console.log(e);
      return { event: null };
    }
  }
}
