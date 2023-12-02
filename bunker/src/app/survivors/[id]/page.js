import React from "react";
import { SurvivorSheet } from "./components/survivor_sheet";

const dados = {
  "id": 1,
  "author": {
    "id": 1,
    "user": {
      "id": 1,
      "username": "admin",
      "email": "admin@example.com",
      "first_name": "",
      "last_name": "",
      "date_joined": "2023-11-15T20:14:24.597221Z",
      "is_active": true,
      "is_staff": true
    },
    "avatar": null,
    "created_at": "2023-11-15T20:14:24.952988Z",
    "updated_at": "2023-11-15T20:14:24.959975Z",
    "nickname": ""
  },
  "author_comment": "Professional fire student care increase cultural. Take partner start data another land evening how.",
  "cover": "/media/monsters/2023/11/16/italo.jpg",
  "created_at": "2023-11-16T02:40:41.322141Z",
  "updated_at": "2023-11-16T12:34:33.422966Z",
  "name": "Michael Wright",
  "characteristics": "Share development inside believe add. Minute than let management summer nor wife.\r\nChild first federal even can style feel. Return company option. Better soon which significant.",
  "torments": "Court set eight side billion strong. Toward recent everything deal piece own line. Task society such choice fact community number. Once task rock main allow hold treat.",
  "conditions": "Protect improve movie under drop statement nation. Image series continue agency member measure. Will speak small same.",
  "conviction": 1
}

export default function survivorPageID({params}) {

    return (

    <div className="flex items-center justify-center h-screen">
      <SurvivorSheet sheet={dados} ></SurvivorSheet>
    </div>
    
    );
    
}