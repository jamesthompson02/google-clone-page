const resultsData = require('../data');

class Result {
    constructor(data) {
        this.id = data.id;
        this.category = data.category;
        this.title = data.title;
        this.link = data.link;
        this.description = data.description;
    }

    static get all(){
        const results = resultsData.map((result) => new Result(result));
        return results;
    }

    static findByCategory(searchTerm) {
        const resultData = resultsData.filter((result) => result.category === searchTerm);
        return resultData;
    }
}

module.exports = Result;