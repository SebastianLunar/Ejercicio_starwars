export const GetData = async () => {
    try {
        const resp = await fetch("https://raw.githubusercontent.com/jennymontoya1001/endpointheroesjson/main/starwars.json");
        const data = await resp.json();
        return data.results;
    } catch (err) {
        console.log(err)
    }
}