## K8S Learnings

i'm using kind and kubectl on my local machine, so all the commands will be based on that.

> How to create a cluster?
```sh
> kind create cluster --config=<file-path>
```

> How to apply a pod/replicaSet/anything on your cluster?
```sh
kubectl apply -f <file-path>
```


- [Cluster](./notes/cluster.md)
- [Pod](./notes/pod.md)
- [ReplicaSet](./notes/replicaset.md)
- [Deployment](./notes/deployment.md)
- [Rollouts and Revisions](./notes/rollouts-and-revisions.md)
- [Service](./notes/services.md)