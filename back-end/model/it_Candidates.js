const mongoose = require('mongoose')

const schema = mongoose.Schema;

const itCandidates = new schema({

});

module.exports = mongoose.model("it_candidates", itCandidates)
