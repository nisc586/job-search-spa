fetch("https://rest.arbeitsagentur.de/jobboerse/jobsuche-service/pc/v4/jobs", {
    headers: {
        "content-type": "application/json",
        "X-API-Key": "jobboerse-jobsuche"}
    })
    .then((response) => console.log(response))
    .catch((error) => console.error(error));