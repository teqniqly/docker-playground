[string]$imageName = "angular-nx"
[string]$containerName = "nxapp"

docker container rm -f $containerName
docker image build --tag $imageName .
docker container run -p 80:80 -d --name $containerName $imageName