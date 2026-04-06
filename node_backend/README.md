# Deployment Information

## Quick deploy on a Linux server

1. Copy the repository to the server.
2. Go to `node_backend`.
3. Copy `.env.example` to `.env` and set a real `SESSION_SECRET`.
4. Run `bash deploy.sh`.
5. Put NGINX in front of the app using `nginx.conf` and a real domain.

The included `docker-compose.yml` binds the Node app to `127.0.0.1:3000` so it is only reachable through the reverse proxy.

Change the Backend URL in GameEnv.  For a secure `https` connection use `wss` instead of ws
pages/assets/js/multiplayer/GameEnv.js

```nodejs
static socket = io(`ws://${window.location.host.split(":")[0]}:3000`); 
```

Use the Dockerfile and docker-compose in node_backend to adjust the actual output port in the docker-compose
In NGINX make sure to forward web socket traffic, here is an NGINX file from another project using socket.io.

```nginx
server {
    server_name platformer_ws.opencodingsociety.com;
    location / {
         proxy_pass http://localhost:300;

        # this magic is needed for WebSocket
        proxy_http_version  1.1;
        proxy_set_header    Upgrade $http_upgrade;
        proxy_set_header    Connection $connection_upgrade;
        proxy_set_header    Host $http_host;
        proxy_set_header    X-Real-IP $remote_addr;
    }
}
```
