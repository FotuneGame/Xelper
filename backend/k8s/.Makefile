init:
    #loading nginx-ingress from comunity
    kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/mandatory.yaml

    #Создание tls и прокси nginx_ingress
    kubectl apply -f ./nginx_ingress/secret_tls.yaml
    kubectl apply -f ./nginx_ingress/ingress.yaml

    #deployment - ы бизенс логики
    kubectl apply -f ./deployments/user_deployment.yaml
    kubectl apply -f ./deployments/messenger_deployment.yaml
    kubectl apply -f ./deployments/shorts_deployment.yaml
    kubectl apply -f ./deployments/event_deployment.yaml

    #deployment - ы инструментов
    kubectl apply -f ./deployments/MongoDB_deployment.yaml

    #service - ы бизенс логики
    kubectl apply -f ./services/user_service.yaml
    kubectl apply -f ./services/messenger_service.yaml
    kubectl apply -f ./services/shorts_service.yaml
    kubectl apply -f ./services/event_service.yaml

    #service - ы инструментов
    kubectl apply -f ./services/MongoDB_services.yaml

check_info:
    kubectl get pods -n ingress-nginx
    kubectl get ingresses
    kubectl get deployments -n dev
    kubectl get svc -n dev