
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
