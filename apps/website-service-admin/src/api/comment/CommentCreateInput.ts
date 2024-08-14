import { PostWhereUniqueInput } from "../post/PostWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CommentCreateInput = {
  content?: string | null;
  post?: PostWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
