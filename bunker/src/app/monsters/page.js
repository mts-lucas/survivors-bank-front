import {CardList} from "../components/cardList"
import {fetcher} from "../services/fetcher"


export default async function Page() {
  const data = await fetcher("https://bunkerapi.onrender.com/bunker/api/v1/monsters/");
  return (
  <div className="flex items-center justify-center h-screen">
      <CardList data={data.results} url={"monster"} />
  </div>
  )
}