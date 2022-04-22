FROM node:16
WORKDIR /app/sample

# install packages
# RUN apt update && \
# 	apt install -y nodejs && \
# 	rm -rf /var/lib/apt/lists/*

# install dependencies
COPY package.json ./
RUN npm install

# copy source code
COPY . .

# exec application
CMD ["sh", "entrypoint.sh"]
