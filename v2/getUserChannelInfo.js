const client_id='72wtxvzs6erokrj33lk105whmoo381'
const access_token=localStorage.getItem('access_token')
const auth_headers={
    'Authorization':'Bearer '+access_token,
    'Client-Id':client_id
}
export default function getUserChannelInfo(login=undefined){
    let userChannelInfo={}
    let url=new URL('https://api.twitch.tv/helix/users')
    if(login){
        url.searchParams.append('login',login)
    }
    return fetch(url,{headers:auth_headers})
    .then((response)=>response.json())
    .then(function(json){
        userChannelInfo=json.data[0]
        url=new URL('https://api.twitch.tv/helix/channels')
        url.searchParams.append('broadcaster_id',userChannelInfo.id)
        return fetch(url,{headers:auth_headers})
    }).then((response)=>response.json())
    .then(function(json){
        const channelInfo=json.data[0]
        userChannelInfo.game_id=channelInfo.game_id
        userChannelInfo.game_name=channelInfo.game_name
        userChannelInfo.title=channelInfo.title
        userChannelInfo.delay=channelInfo.delay
        return userChannelInfo
    })
}