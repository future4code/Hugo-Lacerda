import PostDatabase, { PostDTO } from "../src/data/PostDatabase";

describe('performPurchase', () => {

    const postDB = new PostDatabase();

    test("Criar post", async () => {
        const post: PostDTO = {
          id: "AC343",
          picture: "Título",
          description: "Descrição",
          creator_id: "1b1aadc0-6a80-4544-8970-d46325ae9ddf"
        };
    
        await postDB.createNewPost(post);
        const postFromDb = await postDB.getById(post.id);
    
        expect(postFromDb).not.toBe(undefined);
        expect(postFromDb.description).toEqual("Descrição");
      });
  })