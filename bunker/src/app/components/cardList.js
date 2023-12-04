import React from "react";
import { MyCard } from "./card";

export function CardList({ data, url }) {
  return(
    <div className="flex flex-col justify-center w-9/12 m-auto">
      {data.map(sheet => <MyCard key={sheet.id} sheet={sheet} url={url} />)}
    </div>
  );
}

// import React from "react";
// import { MyCard } from "./card";

// const dados = {
//     "id": 1,
//     "author": {
//         "id": 1,
//         "avatar": null,
//         "nickname": "admderespeito"
//     },
//     "author_comment": "See use memory power decide. Sister machine region decade unit own. Simple century section total party may environmental",
//     "cover": "https://img.olhardigital.com.br/wp-content/uploads/2023/08/pokemon-anime.jpg",
//     "created_at": "2023-11-16T02:29:40.089093Z",
//     "name": "John Spencer",
//     "codename": "brian84",
//   };

// export function CardList(){

//     return(
//         <div className="flex flex-col justify-center w-9/12 m-auto">
//             <MyCard sheet={dados}/>
//             <MyCard sheet={dados}/>
//             <MyCard sheet={dados}/>
//         </div>
//     );
    
// }