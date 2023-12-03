export async function getAllSurvivors() {
    const survivorsPerPage = 10;
    const respage = await fetch(`https://bunkerapi.onrender.com/bunker/api/v1/survivors/`, {next: {revalidate: 1800}});
    const jsonpage = await respage.json();
  
    const totalsurvivors = jsonpage.count;
    const npages = Math.ceil(totalsurvivors / survivorsPerPage);
  
    let allResults = jsonpage.results;
  
    for (let page = 2; page <= npages; page++) {
      const res = await fetch(`https://bunkerapi.onrender.com/bunker/api/v1/survivors/?page=${page}`);
      const json = await res.json();
      allResults = allResults.concat(json.results);
    }

    return allResults;
  }