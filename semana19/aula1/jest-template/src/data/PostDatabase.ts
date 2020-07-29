import knex from "knex";
import BaseDatabase from "./BaseDatabase";

export interface PostDTO {
  creator_id: string;
  picture: string;
  description: string;
  id: string;
}

export default class PostDatabase extends BaseDatabase {

  private static TABLE_NAME: string = "LbkPost";

  public async createNewPost(postDTO: PostDTO): Promise<void> {
    
    await this.getConnection().raw(
      `
      INSERT INTO ${PostDatabase.TABLE_NAME}(id, picture, description, creator_id, date)
      VALUES ("${postDTO.id}", "${postDTO.picture}", "${postDTO.description}", "${postDTO.creator_id}", CURDATE());
      `
    );
  }

  public async getById(postId: string): Promise<any> {
    
    const result = await this.getConnection().raw(
      `
      SELECT * 
      FROM ${PostDatabase.TABLE_NAME}
      WHERE id = "${postId}";
      `
    );

    return result[0];
  }
}
