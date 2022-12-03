const json={} 
exports.setHeader = function(params) {
    json.status = params
}


exports.setResult = function(params) {
    json.result = params
}

exports.getJosn = () => json