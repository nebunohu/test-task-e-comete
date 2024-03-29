# E-comete Test Task
Веб приложение представляет собой реализацию тестового задания для E-comete.<br>
На главной странице представлен список серий мультсериала Рик и Морти в виде таблиц, сгруппированных по сезонам, с возможностью поиска по названию эпизода в каждом из сезонов.
Каждая строка таблицы (эпизод) содержит базовую информацию об эпизоде: id, название, дата выхода и порядковый номер эпизода в сезоне, число персонажей. Колонки таблицы отключаемы, и сортируемы.
Каждый id-элемент строки кликабелен и весдёт на полную информацию об эпизоде с подробной информацией о каждом персонаже, участвующем в эпизоде.
Также реализованы страницы с подробной информацией о персонаже и его местоположении и страницы с подробной информацией о локации и всех присутствующих на ней персонажах.


Для реализации проекта использовался следующий стек технологий:
* HTML
* CSS
* TypeScript
* React
  * React-router
  * React-bootstrap
* Effector

Этот проект доступен по [ссылке](https://nebunohu.github.io/test-task-e-comete)

Для развертывания проекта локально необходимо введите в терминале команду:<br>
`git clone https://github.com/nebunohu/test-task-e-comete.git`<br>
Далее для установки зависимостей введите:<br>
`npm install`<br>
Для статического анализатора кода введите в терминале команду:<br>
`npm run lint`<br>
Для запуска приложения на [http://localhost:3000](http://localhost:3000) введите в терминале команду:<br>
`npm run start`<br>
Для размещения приложения на Github Pages введите в терминале команду:<br>
`npm run deploy`
