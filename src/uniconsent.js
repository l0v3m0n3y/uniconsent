class uniconsent{
    constructor(){
        this.api = "https://cmp.uniconsent.com"
        this.headers={"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/73.0.3683.86 Chrome/73.0.3683.86 Safari/537.36","x-requested-with": "xmlhttprequest","Content-Type":"application/vnd.api+json"}
    }
    async req(url, data){
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'GET',
                headers: this.headers
            }).then(res => res.text()).then(data => {resolve(data);
            }).catch(err => reject(err));
        });
    }
    async my_ip(){
        return (await this.req(`${this.api}/json`));
    }
}
module.exports = {uniconsent};