const FingerprintJS = require('@fingerprintjs/fingerprintjs-pro')

// Initialize an agent at application startup.
const fpPromise = FingerprintJS.load({
    apiKey: '9LPPFowgE7CqfuxXzBNq',
    scriptUrlPattern: [
        // This endpoint will be used primarily
        'https://lbradley.net/v<version>/<apiKey>/loader_v<loaderVersion>.js',

        // The default endpoint will be used if the primary fails
        FingerprintJS.defaultScriptUrlPattern
    ]
})



// Analyze the visitor when necessary.
fpPromise
    .then(fp => fp.get())
    .then(result => console.log(result.requestId, result.visitorId))
