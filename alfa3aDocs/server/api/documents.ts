
export default async () => {
    const docsApi = await $fetch('/api/documents')
// const data = queryContent("/documents")
//           .where({ app: "passage" })
//           .only(["title", "slug", "_path"])
//           .find();
        //   return data
          return JSON.stringify(docsApi)
      };

