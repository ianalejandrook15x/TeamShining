import fetch from 'node-fetch'

export async function before(m, { conn }) {
//let img = await (await fetch(`https://tinyurl.com/299lyvo5`)).buffer()
let img = catalogo
 global.rcanal = {
    contextInfo: {
    	isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363319911129000@newsletter",
      serverMessageId: 100,
      newsletterName: 'Cԋαɳɳҽʅ Sԋιɳιɳɠ Mσσɳ 🌙',
    },
	    externalAdReply: {
				    showAdAttribution: true,
					title: botname,
					body: 'Hola',
					mediaUrl: null,
					description: null,
					previewType: "PHOTO",
					thumbnailUrl: 'https://qu.ax/HGOG.jpg',
		           sourceUrl: canal,
		           mediaType: 1,
                   renderLargerThumbnail: false
	    },
    },
  }

 global.adReply = {
	    contextInfo: { 
             forwardingScore: 9999, 
                 isForwarded: false, 
                    externalAdReply: {
				    showAdAttribution: true,
					title: botname,
					body: textbot,
					mediaUrl: null,
					description: null,
					previewType: "PHOTO",
					thumbnailUrl: img,
                    thumbnail: img,
		           sourceUrl: canal,
		           mediaType: 1,
                   renderLargerThumbnail: true
				}
			}
		}
}
