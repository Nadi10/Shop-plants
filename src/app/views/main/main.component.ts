import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../shared/services/product.service";
import {ProductType} from "../../../types/product.type";
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    constructor(private productService: ProductService) {
    }
    reviews = [
        {
            name: 'Ирина',
            image: 'review1.png',
            text: 'В ассортименте я встретила все комнатные растения, которые меня интересовали. Цены - лучшие в городе. Доставка - очень быстрая и с заботой о растениях. '
        },
        {
            name: 'Анастасия',
            image: 'review2.png',
            text: 'Спасибо огромное! Цветок арека невероятно красив - просто бомба! От него все в восторге! Спасибо за сервис - все удобно сделано, доставили быстро. И милая открыточка приятным бонусом. '
        },

        {
            name: 'Илья',
            image: 'review3.png',
            text: 'Магазин супер! Второй раз заказываю курьером, доставлено в лучшем виде. Ваш ассортимент комнатных растений впечатляет! Спасибо вам за хорошую работу! '
        },
        {
            name: 'Вадим',
            image: 'review4.jpg',
            text: 'Хочу поблагодарить всю команду за помощь в подборе подарка для моей мамы! Все просто в восторге от мини-сада! А самое главное, что за ним удобно ухаживать, ведь в комплекте мне дали целую инструкцию. '
        },
        {
            name: 'Марина',
            image: 'review5.jpg',
            text: 'Для меня всегда важным аспектом было наличие не только физического магазина, но и онлайн-маркета, ведь не всегда есть возможность прийти на место. Ещё нигде не встречала такого огромного ассортимента!'
        },
        {
            name: 'Яника',
            image: 'review6.jpg',
            text: 'Спасибо большое за мою обновлённую коллекцию суккулентов! Сервис просто на 5+: быстро, удобно, недорого. Что ещё нужно клиенту для счастья?'
        },
    ]
    products: ProductType[] = [];
    customOptions: OwlOptions = {
        loop: true,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        margin: 24,
        dots: false,
        navSpeed: 700,
        navText: ['', ''],
        responsive: {
            0: {
                items: 1
            },
            624: {
                items: 2
            },
            800: {
                items: 3
            },
            1160: {
                items: 4
            }
        },
        nav: false
    }
    customOptionsReviews: OwlOptions = {
        loop: true,
        mouseDrag: false,
        touchDrag: false,
        pullDrag: false,
        margin: 26,
        dots: false,
        navSpeed: 700,
        navText: ['', ''],
        responsive: {
            0: {
                items: 1
            },
            746: {
                items: 2
            },
            960: {
                items: 3
            }
        },
        nav: false
    }


    ngOnInit(): void {
        this.productService.getBestProducts()
            .subscribe((data: ProductType[]) => {
                this.products = data;
            })
    }
}
