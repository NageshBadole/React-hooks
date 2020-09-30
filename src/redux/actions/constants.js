import qs from 'qs';

const data = qs.stringify({

    'client_id': 'b7cf0e1d3cdb1010fd01e3d2509d695d',
    'grant_type': 'password',
    'client_secret': ',#L{,{dC,]',
    'username': 'admin',
    'password': 'zfHLT9Wjp6Up'
})
export const config ={

      method: 'post',
      url: 'https://dev104173.service-now.com/oauth_token.do', 
      headers: { 
                'Content-type': 'application/x-www-form-urlencoded',
                'Accept-Encoding': 'gzip'
              },
      data: data
} 