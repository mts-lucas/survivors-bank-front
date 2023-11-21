import React from "react"
import { MyCard } from "./components/card"

const dados = {
  "id": 1,
  "author": {
      "id": 1,
      "avatar": null,
      "nickname": "admderespeito"
  },
  "author_comment": "See use memory power decide. Sister machine region decade unit own. Simple century section total party may environmental fly.",
  "cover": "/media/survivors/2023/11/16/italo.jpg",
  "created_at": "2023-11-16T02:29:40.089093Z",
  "name": "John Spencer",
  "codename": "brian84",
};

export default function Home() {
  return (
    <div className="bg-black">
      <MyCard></MyCard>
    </div>
    
  )
}