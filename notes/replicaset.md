## Replicaset

A Pod is a very fragile entity, is the smallest object in Kubernetes as we said before. To mantain this up to date and always live we use a magic thing called ReplicaSet.

A ReplicaSet is defined with fields, including a selector that specifies how to identify Pods it can acquire, a number of replicas indicating how many Pods it should be maintaining, and a pod template specifying the data of new Pods it should create to meet the number of replicas criteria. 

A ReplicaSet then fulfills its purpose by creating and deleting Pods as needed to reach the desired number. When a ReplicaSet needs to create new Pods, it uses its Pod template.

But if you have a ReplicaSet with running Pods and you want to get a new version of the docker container image, you'll need to kill all the pods runnings and then wait for the new ones (with the new version) get created.

> Note
> To solve that we have another Kubernetes object called `Deployment`


## Useful Commands
- `kubectl get replicaset`