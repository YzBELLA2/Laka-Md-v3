const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "𝐋ᴀᴋᴀ-𝐌ᴅ=R15DHCjL#CE-SPX1P9X3Ikm-fZ4OLOgH4qmKZIBiNh_hIMNZx_-Q",
POSTGRESQL_URL: process.env.POSTGRESQL_URL === undefined ? 'postgresql://postgres:lakamd@db.ndduyrkebubwlbwiljee.supabase.co:5432/postgres' : process.env.POSTGRESQL_URL
};
