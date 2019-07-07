если у вас уже есть mongod то просто $ sudo service mongod start а иначи:

//////////////////////////////////////////////////////////////////////////////////////

Установка MongoDB на компьютер. Можно руководствоваться официальной инструкцией:

https://docs.mongodb.com/manual/administration/install-community/

Таким образом, выбрав нужный пункт, устанавливаете на свою операционную систему.

Для Ubuntu-подобных ОС: https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/

Сначала устанавливаем ключ (этот шаг для всех одинаковый)

sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 9DA31620334BD75D9DCB49F368818C72E52529D4

Для самой Ubuntu:

$ cat /etc/os-release | grep VERSION


Для Mint или другого Linux, основанного на Ubuntu:

cat /etc/upstream-release/lsb-release


Смотрим версию ОС. Например, для 14.04 будет написано "Trusty Tahr", для 16.06 "Xenial Xerus"


Соответственно этой версии вводим команду:


Для 18.04:

echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list

Теперь обновляем пакетный мессенджер и устанавливаем:

$ sudo apt-get update

$ sudo apt-get install -y mongodb-org


После этого нужно запустить сервис mongo:


$ sudo service mongod start

////////////////////////////////////////////////////////////////////////////

после start mongod

вы открываете терминал и переходите на эту деректорию в нашем случае это наш проект( cd Task-test/test-task-app/)

и там запускаете ( npm start )

после чего заходите таким же образон на backend (cd Task-test-app-back)

и набираете команду ( npm run seed для того чтобы запустить fixtures.js ) после ( npm run dev для того чтобы запустить сервер)