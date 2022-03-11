declare module "@app-types" {
  export type UserDocCardProps = {
    name: string;
    profession: string;
    avatar?: string;
    linkedin?: string;
  };
  export type UsersDocProps = {
    users: UserDocCardProps[];
    title: string;
    message: string;
  };
}
