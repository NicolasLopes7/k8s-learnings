## Pod

A Pod is the smallest, most basic deployable objects in Kubernetes. A Pod represents a single instance of a running process in your cluster. Pods contain one or more containers, such as Docker containers. (but ideally should only contain one container). 

When a Pod runs multiple containers, the containers are managed as a single entity and share the Pod's resources. Generally, running multiple containers in a single Pod is an advanced use case.

Pods also contain shared networking and storage resources for their containers:

- **Network:** Pods are automatically assigned unique IP addresses. Pod containers share the same network namespace, including IP address and network ports. Containers in a Pod communicate with each other inside the Pod on localhost.
- **Storage:** Pods can specify a set of shared storage volumes that can be shared among the containers.

A Pod is meant to run a single instance of your application on your cluster. However, it is not recommended to create individual Pods directly. Instead, you generally create a set of identical Pods, called replicas, to run your application.

A Pod contains a name and a label. Labels can be used to group multiple pods of the same "type"