import fs from "node:fs";

let response;

try {
    response = await fetch("https://rest.arbeitsagentur.de/jobboerse/jobsuche-service/pc/v4/jobs", {
        headers: {
            "content-type": "application/json",
            "X-API-Key": "jobboerse-jobsuche"}
        })
} catch (e) {
    console.error(e);
}

try {
    if (response.ok) {
        let content = await response.json()
        fs.writeFileSync("jobsuche.json", JSON.stringify(content))
    }
} catch (e) {
    console.error(e);
}

