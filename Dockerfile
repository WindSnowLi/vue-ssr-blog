FROM node:alpine

LABEL "author"="WindSnowLi"
LABEL "version"="1.0.1"
LABEL "email"="windsnowli@163.com"
# 配置环境变量支持中文
ENV LANG="en_US.UTF-8"

RUN mkdir -p /vue-ssr-blog
WORKDIR /vue-ssr-blog
COPY . /vue-ssr-blog

RUN npm install -g cnpm --registry=https://registry.npm.taobao.org
RUN cnpm install
RUN npm run build 

# 前台端口，为前台项目监听的端口，可在项目中修改
EXPOSE 3000

ENTRYPOINT ["sh", "-c", "npm run start"]
