export default async (req, res) => {
    if(!req.query.todo) {
        return res.status(400).send("todo parameter required.")
    }
    let todo = encodeURI(req.query.todo)
 
    const token = "AYrjACQgNjdiNTU1YmItZmI5ZC00YzkxLWFkNzQtZGE2YzhkZjM0M2E2MTkyMTU2ZTUwM2QzNDViYmIwODkxMTA0OThmMGUwY2Q=";
    const url = "https://us1-finer-starling-35555.upstash.io/lrem/todo/1/" + todo + "?_token=" + token;
 
    return fetch(url)
        .then(r => r.json())
        .then(data => {
            let result = JSON.stringify(data.result)
            return res.status(200).json(result)
        })
 }