import fs from 'node:fs';
let client = fs.readFileSync('lib/client.js', 'utf8');
client = client.split("id: 'dsh-tribot-role-picker'").join("id: 'dsh-tribot-team'");
fs.writeFileSync('lib/client.js', client);
const host = fs.readFileSync('lib/index.js', 'utf8');
console.log('banner clean:', !client.includes('dsh-tribot-role-picker'));
console.log('npm skill has role card:', host.includes('角色卡'));
