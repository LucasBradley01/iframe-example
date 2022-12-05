function fingerprint() {
    fpPromise
        .then(fp => fp.get({ extendedResult: true }))
        .then(result => {
            console.log(result);
        })
}

window.addEventListener('message', event => {
    fingerprint();
});

// Initialize the agent at application startup.
const fpPromise = import('https://lbradley.net/md5b6gfzugxmodsw/tc75k3wbsz4lwoqr?apiKey=9LPPFowgE7CqfuxXzBNq')
    .then(FingerprintJS => FingerprintJS.load({
        endpoint: "https://lbradley.net/md5b6gfzugxmodsw/a6o524dghkp4r4rf"
    }))

