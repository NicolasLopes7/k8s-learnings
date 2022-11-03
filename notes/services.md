## Services

A Pod running in Kubernetes doesn't means that you can access your application, imagine that you have 10 Pods of the same application running, which one your client should access? To solve that kind of things we have the `Services`.

Let's wonder that we have the `service X`, and every time someone requests your API you choose another Pod, so if you have 3 Pods.

```
- Pod 1
- Pod 2
- Pod 3

- Request 1: Pod 1
- Request 2: Pod 2
- Request 3: Pod 3
```

But this seems too dumb, if the Pod 1 is doing a heavy work and the Pod 2 is almost free, why not use it?
So Kubernetes handles it and do a service discovery to figure out which is the best Pod to call at that moment!

### Types of Services

#### ClusterIP
In any given cluster node there can be multiple types of Pods viz

Each of these types of pods lying within an internal cluster will have a different internal network IP, which is liable to change. In order, to talk to each other. For example, the front-end pod may be talking to the backend pods, backend pods, in turn, may require to talk to Redis pods, there is the requirement for a more reliable and efficient mechanism, ClusterIP is our friend here.

It has to simply communicate to a ClusterIP service named backend, which is a single endpoint service managing the communication to all backend pods. Similarly, if backend pods need to access the Redis cache service it has to make a service call to cluster IP service named Redis, which will allow the backend pods to communicate to respective Redis pods.



## Useful Commands

> Tip: `svc` is the alias for `service`

- `kubectl get svc`
- `kubectl port-foward svc/<service-name> <host-port>:<container-port>`
