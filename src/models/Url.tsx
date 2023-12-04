import md5 from 'md5';


const Url = (base: string) => {  
        const PUBLIC_KEY = '3c56da187a31bd0f6051144d0f9702cd';
        const PRIVATE_KEY = '6bb05951844e25d7a233f45e1ef5dc035c736d10';
        const timestamp = new Date().getTime();
        const hash = md5(`${timestamp}${PRIVATE_KEY}${PUBLIC_KEY}`);
        const apiUrl = `${base}apikey=${PUBLIC_KEY}&ts=${timestamp}&hash=${hash}`;

  return apiUrl
  }


export default Url;