## Deployment

The Deployment object it follows the same structure of replicaset, under the hood it uses the replicaSet.
so the deployment handle the new update changes once you apply a new deployment object.

The deployment handles the pod deletion and creation, so, by default there's no downtime using it.

The deployment don't kill the old replicasets, but it's only going to use the new replicaSet.