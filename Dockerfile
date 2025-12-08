#Builder stage
#==========================================
ARG NEXT_PUBLIC_TMDB_API_KEY
ARG NEXT_PUBLIC_TMDB_API_BASE_URL

FROM nodejs:24-alpine AS builderStage

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV NEXT_PUBLIC_TMDB_API_BASE_URL=${NEXT_PUBLIC_TMDB_API_BASE_URL}
ENV NEXT_PUBLIC_TMDB_API_KEY=${NEXT_PUBLIC_TMDB_API_KEY}

WORKDIR /app

COPY /package.json /package-lock.json ./

RUN npm ci --only=production

COPY . .

RUN npm run build

#Runner stage
#==========================================
ARG NODE_UID=1001
ARG NODE_GID=1001

FROM nodejs:24-alpine AS runnerStage

WORKDIR /app

RUN addgroup -g ${NODE_GID} rms1
RUN adduser -u ${NODE_UID} rms1 -G rms1

USER rms1

COPY --from=builderStage /app/package.json /app/package-lock.json ./
COPY --from=builderStage /app/.next/standalone ./
COPY --from=builderStage /app/.next/static ./.next/static
COPY --from=builderStage /app/public ./public

EXPOSE 3000

CMD ["node", "server.js"]