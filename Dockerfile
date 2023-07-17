FROM node:18-alpine as build
RUN apk update && apk upgrade 
WORKDIR /app
COPY  . /app
RUN npm install && npx nuxt build
FROM node:18-alpine
RUN apk update && apk upgrade && apk add dumb-init
WORKDIR /app
COPY --from=build /app/.output ./
EXPOSE 3001
ENV HOST=0.0.0.0 PORT=3001 NODE_ENV=production
CMD ["dumb-init","node","/app/server/index.mjs"]
