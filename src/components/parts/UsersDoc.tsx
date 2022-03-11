import { UsersDocProps } from "@app-types";
import React from "react";
import { UserDocCard } from "../cards";

export function UsersDoc(props: UsersDocProps) {
  const { users, title, message } = props;

  return (
    <div>
      <UserDocCard
        name={users[0].name}
        avatar={users[0].avatar}
        profession={users[0].profession}
        linkedin={users[0].linkedin}
      />
    </div>
  );
}
