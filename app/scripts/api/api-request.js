import superagent from 'superagent';
class ApiRequest{
    get(url){
        return new Promise(function(resolve, reject){
            request
            .get(url)
            .end(function (res) {
                if (res.status === 404) {
                    reject();
                } else {
                    resolve(JSON.parse(res.text));
                }});
        });
    }
}

exports default new ApiRequest;