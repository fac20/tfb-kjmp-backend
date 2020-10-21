require("dotenv").config();
const airtable = require("airtable");

const base = airtable.base(process.env.AIRTABLE_BASE);

const lawsDB = base("Laws");

module.exports = lawsDB;
