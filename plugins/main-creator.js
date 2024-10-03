let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:ianalejandrook15x;;\nFN:ianalejandrook15x \nORG:ianalejandrook15x 🌟\nTITLE:\nitem1.TEL;waid=51907376960:51907376960\nitem1.X-ABLabel:ianalejandrook15x 🌟\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:ianalejandrook15x  🌟\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'ianalejandrook15x.xyz⁩', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
