[string]$imageName = "node-hello-world"
[string]$containerName = "node-hw-web"

docker container rm -f $containerName
docker image build --tag $imageName .
docker container run -p 80:9999 -d --name $containerName $imageName