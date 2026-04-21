// /assets/js/api/config.module.js
// 专门给 ES6 模块使用的配置文件

let pythonURI, javaURI, baseurl, fetchOptions, login;

// 根据环境设置后端地址
if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
    pythonURI = "pythonURI";
} else {
    pythonURI = "https://rcr-user.opencodingsociety.com";
}

javaURI = "https://spring.opencodingsociety.com";
baseurl = "{{ site.baseurl }}";

fetchOptions = {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
    credentials: 'include',
    headers: {
        'Content-Type': 'application/json',
        'X-Origin': 'client'
    },
};

login = function(options) {
    const requestOptions = {
        ...fetchOptions,
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

// 导出所有内容
export default pythonURI;
export { pythonURI, javaURI, baseurl, fetchOptions, login };