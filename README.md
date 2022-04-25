## Deterministic Wallets ##

To run a deterministic wallet:

```$node crypto/wallet.js```

## Sorting out dependencies ##

when we use a dependency, we have to npm install it

but we can make this simpler by using a package.json file

which remembers the deps.

then, we can install all deps by running:

```$npm install```


### Docker Commands ###

check what docker containers are running

```$docker ps```

check what images I have built

``` $docker image ls ```

remove all docker images/networks etc.

```docker system prune -a -f```

build an image

```$ docker build -t nci/erc20 .```

to run a docker image

```docker run --name nci_erc20 nci/erc20```

to kill a running docker container

```$docker kill <container name>```

### Docker Compose ###

to run a docker-compose instance:

```$docker-compose up```


### IPFS instructions ###

```$docker-compose up```

```$docker exec ipfs-host ipfs add -r export/myNFT.txt```

### NFT Instructions ###

1. deploy an ERC721

2. upload the image behind each number to IPFS

3. make sure you have a webpage delivering the metadata behind each number

4. Profit







