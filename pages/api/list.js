export default async (req, res) => {
    const token = "AYrjACQgNjdiNTU1YmItZmI5ZC00YzkxLWFkNzQtZGE2YzhkZjM0M2E2MTkyMTU2ZTUwM2QzNDViYmIwODkxMTA0OThmMGUwY2Q=";
    const url = "https://us1-finer-starling-35555.upstash.io/lrange/todo/0/100?_token=" + token

    return fetch(url)
    .then(res => res.json())
    .then(data => {
        let result = JSON.stringify(data.result)
        return res.status(200).json(result)
    })
}