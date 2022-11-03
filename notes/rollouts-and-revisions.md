## Rollouts and Revisions

You can see all the revisions that you did using the following command:

```sh
> kubectl rollout history <kubernetes-object-type> <pod-name>

## Example
> kubectl rollout history deployment node-server

# You will get a simillar output:
# REVISION  CHANGE-CAUSE
# 1         <none>
# 2         <none>
```

So, you can undo the last change you did and go back to the last deployed version using that command:

```sh

> kubectl rollout undo <kubernetes-object-type> <pod-name>

## Example
> kubectl rollout undo deployment node-server
```

You can also specify a parameter called `--to-revision=<revision-number>`, so you just need to get the revision number and add that flag on the command above.
