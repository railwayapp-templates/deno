FROM denoland/deno:alpine-1.25.1

WORKDIR /app

USER deno

ADD . .
RUN deno cache src/index.ts

CMD ["run", "--allow-net", "--allow-env", "src/index.ts"]
