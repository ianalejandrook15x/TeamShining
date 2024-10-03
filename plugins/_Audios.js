//Código creador por matias-crypto colaborador De TeamShining 
//Audio puesto por ianalejandrook15x
//si usa el audio para su bot deje los créditos 
//No seas gey no quites los créditos 😑🇦🇱

import fs from 'fs';

let handler = async (m, { conn }) => {
  let text = m.text.toLowerCase(); 
  let user = global.db.data.users[m.sender];

  const audioMap = {
    'linda': './Shining/hdpta.mp3',
    'sin sentimiento': './Shining/elcorazon.mp3',
    'elcorazone': './Shiningu/elcorazon.mp3',
    'ayuda': './Shining/ayuda.mp3',
    'gey': './Shining/gey.mp3', 
    'negra': './Shining/negra.mp3', 
    'callate': './Shining/callate.mp3', 
    'super albañil': './Shining/super albañil.mp3', 
    'peruano': './Shining/peruano.mp3', 
    'viva venezuela': './Shining/viva venezuela.mp3', 
    'que me importa': './Shining/que me importa.mp3', 
    'mondongo': './Shining/mondongo.mp3',
    'bebitofiufiu': './Shining/bebitofiufiu.mp3',
    'lala': './Shining/lala.mp3',
    'dios': './Shining/dios.mp3', 
    'sad': './Shining/sad.mp3', 
    'risa': './Shining/jaja.mp3', 
    'motivar': './Shining/motivar.mp3',
    'se unió usando el enlace de invitación del este grupo': './Shining/se unió usando el enlace de invitación del este grupo.mp3',
    'calculadora': './Shining/calculadora.mp3', 
    'tengo novia': './Shining/tengo novia.mp3'
    
  };

  for (let key in audioMap) {
    if (text.includes(key)) {
      try {
        if (fs.existsSync(audioMap[key])) {
          await conn.sendFile(m.chat, audioMap[key], `${key}.mp3`, '', m, false, { mimetype: 'audio/mpeg', asDocument: user.useDocument });
        } else {
          m.reply('El audio correspondiente no se encontró.');
        }
      } catch (err) {
        console.error(err);
        m.reply('Ocurrió un error al intentar enviar el audio.');
      }
      break;
    }
  }
};

handler.help = ['ayuda', 'gey', 'ayuda', 'elcorazon', 'sin sentimiento', 'linda','negra', 'callate', 'super albañil', 'que me importa', 'mondongo', 'bebitofiufiu', 'lala', 'dios', 'risa', 'tengo novia', 'calculadora', 'motivar',
'peruano', 'se unió usando el enlace de invitación del este grupo', 'viva venezuela', 'sad']
handler.customPrefix = /^(hola|cómo estás|goku|gey|si te mueves|ayuda|sin sentimiento|linda|negra|eres tu|callate|super albañil|peruano|viva venezuela|que me importa|mondongo|bebitofiufiu|lala|dios|sad|jaja|motivar|calculadora|tengo novia|se unió usando el enlace de invitación del este grupo)/i;
handler.command = new RegExp;
handler.tags = ['Audios Dbz'] 
export default handler;
