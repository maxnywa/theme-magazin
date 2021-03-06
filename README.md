# Проект FOXTAR MARKET PLACE


## Структура папок


Название файлов | Содержание
----------------|----------------------
www             | Директория с готовым проектом
www/css         | Готовые стили к продакшену
www/js          | Готовый js к продакшену
www/img         | Готовые картинки к продакшену
www/fonts       | Шрифты            
guide.html      | Страница с примером использования стандартных компонентов и классов
index.html      | Основная страница, для проверки вносимых изменений
***.html        | Cтраницы проекта, для проверки вносимых изменений



## Используемые в проекте технологии

Библиотека JavaScript - jQuery

## Фреймверк

Bootstrap 4

## Плагины

* slick-slider - стилизация карусели
* slick-nav - стилизация мобильного меню
* formstyler - стилизация форм
* jquery-ui - стилизация блока Price range

## Шрифты и иконки

***Иконки***

* Font-Awesome - иконочный шрифт

***Шрифты:***
* Lato: 400,700;
* Raleway:700;
* Roboto:400,500,700;

## Стилизация стандартных компонентов и классов

***1. Cтандартные блоки***

* Контейнер с максимальной шириной 1200px
```css
.container
```
* Контейнер на всю ширину
```css
.container-fluid
```
* Стандартный блок
```css
.default-section
```
***2. Заголовки***

* Основной класс для заголовков,задаст шрифт 'Roboto', заглавные буквы и черный цвет текста
```css
.title
```
* Основной класс для заголовков, цвет текста белый 
```css
.title.title-white
```
* Стандартные заголовки секций с отступом 40px
```css
.title.section-title
```
* Стандартный текст
```css
.default-text
```
***3. Стандартные кнопки***
* Класс для стандартной кнопки, задаст шрифт, внутренние отступы
```css
.btn-custom
```
* Стандартная кнопка разных размеров
```css
.btn-custom.btn-small
.btn-custom.btn-medium
.btn-custom.btn-large
```
* Стандартная кнопка с закругленными углами
```css
.btn-custom.btn-rounded
```
* Изменение цвета фона и шрифта стандартной кнопки
```css
.btn-custom.btn-red
.btn-custom.btn-blue
.btn-custom.btn-green
.btn-custom.btn-light-blue
```
* Изменение цвета фона и шрифта при наведении
```css
.btn-custom.btn-red:hover
.btn-custom.btn-blue:hover
.btn-custom.btn-green:hover
.btn-custom.btn-light-blue:hover
```
***6. Цвет фона***
* Класс задаст белый цвет фона
```css
.bg-white
```
* Класс задаcт темно синий фона
```css
.bg-dark-blue
```
Для адаптивного дизайна используются префиксы в названиях классов для колонок, которые соответствуют контрольным точкам media-запросов.
Имена префиксов для контрольных точек указаны в подразделе ***Основные контрольные точки media-запросов***.

Пример использование префиксов
 ```css
.col-sm-1
.col-md-3
.col-lg-12
```
---

## Основные контрольные точки media-запросов
```
@media (max-width: 1200px) - устройства c разрешением до 1200px, префикс кля колонок -lg
@media (max-width: 991px) - устройства c разрешением до 991px,префикс кля колонок -md
@media (max-width: 767px) - устройства c разрешением до 767px,префикс кля колонок -sm
@media (max-width: 576px) - мобильные устройства c разрешением до 576px,префикс кля колонок -xs

```
---

##### Стилизируем ***.cards*** : 
* Основные карточки *
```scss /* или css */
.card, .card.large-card 
```
* Средние карточки *
```scss /* или css */
.card.medium-card 
.card.aside-card
.card.main-card
```
* Горизонтальные карточки *
```scss /* или css */
.card.row
.card.row-small-card 
```
* Для переключения .card.medium-card в .card.row-card используем запись в init.js *
```scss /* или css */
// Switch product items view
$('.grid-thumbs').on('click', function(){
    // Find cards and remove class row-card
    $('.all-items-container .medium-card').removeClass('row-card');
    $('.all-items-container .col-4').removeClass('col-12');
   
});

$('.grid-list').on('click', function () {
    //Find cards and add class row-card
    $('.medium-card').addClass('row-card');
    $('.all-items-container .col-4').addClass('col-12');
   
  });
```
##### Подключаем ***Price range*** c помощью range.js и переопределяем стили:

```scss /* или css */

.ui-widget.ui-widget-content 
.ui-slider .ui-slider-range 
.ui-slider .min-value, .ui-slider .max-value
.ui-slider .ui-state-default.ui-slider-handle 
```
##### Стилизируем ***.pagination***, переопределяем стили Bootstrap:

```scss /* или css */
.pagination-lg
.pagination-lg .page-link
.page-link 
.page-link:hover, .page-link:focus 
.pagination-lg .page-item:last-child .page-link
.pagination-lg .page-item:first-child .page-link 
```
##### Переопределяем стили Forms для страницы upload-products:
```scss /* или css */

.form-group-row .label-col 
.upload-products-wrapper .form-search .input-group .form-control 
.upload-form .jq-selectbox__select 
.upload-form .jq-selectbox.focused .jq-selectbox__select
.form-group-row 
.form-group-row .form-col 
.upload-form .form-col .form-control, .upload-form-bottom .form-col .form-control 
.jq-file:hover .jq-file__browse
.jq-file:active .jq-file__browse 
.jq-file.focused .jq-file__name 
.jq-file__browse 
.jq-file
.jq-file__name 
.upload-form textarea
```
##### Стилизируем aside и скрываем его в мобильной версии с помощью aside.js:
```scss /* или css */

.aside-section 
.aside-section .aside-section-title
@media (max-width:991px){
    .mobile-aside 
    .mobile-aside.left 
    .mobile-aside.right
    .overlay 
    #main 
    #main.show-aside .mobile-aside.left, #main.show-aside .mobile-aside.right 
    #main.show-aside .overlay 
}
```
