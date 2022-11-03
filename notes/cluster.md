## Cluster
a cluster basically represents the group of machines that are running your code.
we call these machines as nodes, each node has one or more Pods, and a Pod is the
most atomic thing on kubernetes. Pod represents a single instance of a running process in your node,
in other words, your container.

ideally you should have only one container per Pod.


## Useful Commands
- `kind create cluster --config=<file-path>`
- `kind get clusters`