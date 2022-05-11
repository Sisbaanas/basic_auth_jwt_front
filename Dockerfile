
# based on node image
FROM  node:alpine

# app directory
WORKDIR /usr/src/app

# copy file from devlopment directory too image directory
COPY package.json .
COPY package-lock.json .

# install all modules
RUN npm install

# copy all code (node_modules too if they are not ignored in .dockerignore)
COPY . .

# port used inside container
EXPOSE 4200

# how to run the app
CMD /usr/src/app/node_modules/.bin/ng serve --host 0.0.0.0 --disableHostCheck


# build  image
# docker build -t test-app -f Dockerfile .

# to run app in port 4200(docker) and expose to 4201 ( our machine)
#  docker run --rm -it -p 4201:4200 test-app