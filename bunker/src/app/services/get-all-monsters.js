import fetcher from './fetcher'

export async function getAllMonsters() {
    const monstersPerPage = 10;
    const respage = await fetch(`https://bunkerapi.onrender.com/bunker/api/v1/monsters/`, {next: {revalidate: 600}});
    const jsonpage = await respage.json();
  
    const totalMonsters = jsonpage.count;
    const npages = Math.ceil(totalMonsters / monstersPerPage);
  
    let allResults = jsonpage.results;
  
    for (let page = 2; page <= npages; page++) {
      const res = await fetch(`https://bunkerapi.onrender.com/bunker/api/v1/monsters/?page=${page}`);
      const json = await res.json();
      allResults = allResults.concat(json.results);
    }

    return allResults;
  }