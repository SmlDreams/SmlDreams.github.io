ping sur 192.168.1.51 voir si la bas c'est sur le même réseau

poe qu'est ce que c'est ?

infrastructure réseau Acfri :

1 parties bureau inocuppé, 1 partie atelier principale, 1 parties bureau principale + ancien server :
    - baie de raccordement partie inoccupé :
        - arrivé cable dans la baie de raccordement 
    - baie de raccordement partie atelier :
        - 1 routeur ( réseau présent ) : raccordement des 6-7 postes dans l'atelier ( électricien , magasinier , 4 postes pour machines et 1 reseponsable atelier )
        - arrivé cable dans la baie de raccordement 
    -  ancien server + baie de raccordement principale partie bureau :  
        - ancien server : 1 vm -> windows 2003 ( équivalent windows xp ).
        - baie de raccordement : 
            - arrivé cable dans la baie de raccordement 
            - 1 server : 
                - 4 vm : 
                    - 1 ad : 
                        - 6 groupe : gg_achat , gg_atelier , gg_commercial , gg_compta , gdr-RDS (accès à distance) , gdr-vpn (accès rds hors france)
                        - 16 postes utilisateurs présentiel + 1 hors site
                    - 1 rds 
                    - 1 prod : 
                        - infocob -> fireburn , client lourd -> logiciel sur server -> si deconnection du client -> perte de temps 
                        - Séquoia -> SQL , client léger -> logiciel en local sur les postes.
                        - Gestimum -> SQL , client lourd -> logiciel sur server -> si deconnection du client -> perte de temps
                    - 1 fichier
            - 2 switch : protocole de ralliement de switch, les 2 switchs fusionnent
            - firewall ( conf inconnu pour l'instant )
            - 2 boitier fibre ( sécurisation pour éviter la perte d'activité si crash ) :
                - 1 fibre pro -> 100 mb/s asc , 100 mb/s desc
                - 1 fibre perso ( secours ) -> 100 mb/s asc , 200-300 mb/s desc 

protocole de sécurité :

pour les postes clients 
