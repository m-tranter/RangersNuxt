FROM node:18-alpine as build
RUN apk update && apk upgrade && adduser -D nuxtuser
USER nuxtuser
WORKDIR /app
COPY --chown=nuxtuser:nuxtuser . /app
RUN npm install && npx nuxt build
FROM node:18-alpine
RUN apk update && apk upgrade && apk add dumb-init && adduser -D nuxtuser 
USER nuxtuser
WORKDIR /app
COPY --chown=nuxtuser:nuxtuser --from=build /app/.output ./
EXPOSE 3001
ENV HOST=0.0.0.0 PORT=3001 NODE_ENV=production
CMD ["dumb-init","node","/app/server/index.mjs"]
