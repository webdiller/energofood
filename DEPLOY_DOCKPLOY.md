# Deploy to Dockploy (VPS)

## What is configured

- `Dockerfile` uses multi-stage build:
  - Build Astro project with Node 22
  - Serve `dist` with Nginx on port `80`
- `nginx.conf` serves static Astro output
- `.dockerignore` keeps image builds fast and clean

## Dockploy settings

- **Source**: your Git repository
- **Build type**: Dockerfile
- **Dockerfile path**: `./Dockerfile`
- **Container port**: `80`
- **Health check path** (optional): `/`
- **Auto deploy**: enable on push (optional)

## Local verification

```bash
npm run build
docker build -t food-app .
docker run --rm -p 8080:80 food-app
```

Then open `http://localhost:8080`.

