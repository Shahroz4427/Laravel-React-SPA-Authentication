import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
import { axios } from './axios'; 

window.Pusher = Pusher;

const echo = new Echo({
    broadcaster: 'pusher',
    key: '3bacfa0835248e025cc7',
    cluster: 'ap1',
    wsHost: 'ws-ap1.pusher.com',
    wsPort: 80,
    wssPort: 443,
    forceTLS: false,
    authEndpoint: 'http://localhost:8000/broadcasting/auth',
    authorizer: (channel, options) => {
        return {
            authorize: (socketId, callback) => {
                axios.post('/api/broadcasting/auth', {
                    socket_id: socketId,
                    channel_name: channel.name
                })
                .then(response => {
                    callback(false, response.data); 
                })
                .catch(error => {
                    callback(true, error); 
                });
            }
        };
    },
    enabledTransports: ['ws', 'wss'],
});

export default echo;
