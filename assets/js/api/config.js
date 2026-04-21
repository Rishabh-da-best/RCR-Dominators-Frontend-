// /assets/js/api/config.js
window.baseurl = "{{ site.baseurl }}";

if (location.hostname === "localhost") {
    window.pythonURI = "pythonURI";
} else {
    window.pythonURI = "https://rcr-user.opencodingsociety.com";
}

window.javaURI = "https://spring.opencodingsociety.com";

window.fetchOptions = {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
    credentials: 'include',
    headers: {
        'Content-Type': 'application/json',
        'X-Origin': 'client'
    },
};

window.login = function(options) {
    const requestOptions = {
        ...window.fetchOptions,
        method: options.method || 'POST',
        body: options.method === 'POST' ? JSON.stringify(options.body) : undefined
    };

    if (options.message) {
        document.getElementById(options.message).textContent = "";
    }

    fetch(options.URL, requestOptions)
    .then(response => {
        if (!response.ok) {
            const errorMsg = 'Login error: ' + response.status;
            console.log(errorMsg);
            if (options.message) {
                document.getElementById(options.message).textContent = errorMsg;
            }
            return response;
        }
        if (options.callback) {
            options.callback();
        }
    })
    .catch(error => {
        console.log('Possible CORS or Service Down error: ' + error);
        if (options.message) {
            document.getElementById(options.message).textContent = 'Possible CORS or service down error: ' + error;
        }
    });
};