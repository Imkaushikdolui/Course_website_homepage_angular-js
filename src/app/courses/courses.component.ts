import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  courses = [
    {
      id: 1,
      title: 'AngularJS',
      duration: 30,
      type: 'paid',
      price: 2000.00,
      rating: 3.5,
      image: 'https://cdn.appdesign.dev/wp-content/uploads/2020/08/Agencia-desarrollo-Angular-JS.jpg',
      description: 'AngularJS is a JavaScript framework for building user interfaces.'
    },
    {
      id: 2,
      title: 'ReactJS',
      duration: 10,
      type: 'free',
      price: 0.00,
      rating: 3.5,
      image: 'https://shethink.in/wp-content/uploads/2021/07/react.js-img.png',
      description: 'ReactJS is a JavaScript framework for building user interfaces.'
    },
    {
      id: 3,
      title: 'VueJS',
      duration: 25,
      type: 'paid',
      price: 1000.00,
      rating: 3.5,
      image: 'https://miro.medium.com/v2/resize:fit:900/1*OrjCKmou1jT4It5so5gvOA.jpeg',
      description: 'VueJS is a JavaScript framework for building user interfaces.'
    },
    {
      id: 4,
      title: 'NodeJS',
      duration: 30,
      type: 'paid',
      price: 300.00,
      rating: 3.5,
      image: 'https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png?w=700&fm=webp',
      description: 'NodeJS is a JavaScript framework for building user interfaces.'
    },
    {
      id: 5,
      title: 'ExpressJS',
      duration: 20,
      type: 'free',
      price: 0.00,
      rating: 3.5,
      image: 'https://miro.medium.com/v2/resize:fit:1400/1*XP-mZOrIqX7OsFInN2ngRQ.png',
      description: 'ExpressJS is a JavaScript framework for building user interfaces.'
    },
    {
      id: 6,
      title: 'MongoDB',
      duration: 10,
      type: 'paid',
      price: 1000.00,
      rating: 3.5,
      image: 'https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png',
      description: 'MongoDB is a JavaScript framework for building user interfaces.'
    },
    {
      id: 7,
      title: 'MySQL',
      duration: 5,
      type: 'free',
      price: 100.00,
      rating: 3.5,
      image: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/difference_between_sql_and_mysql.jpg',
      description: 'MySQL is a JavaScript framework for building user interfaces.'
    },
    {
      id: 8,
      title: 'PostgreSQL',
      duration: 8,
      type: 'paid',
      price: 1000.00,
      rating: 3.5,
      image: 'https://digitalis.io/wp-content/uploads/2020/12/PostgreSQL600x340.jpg',
      description: 'PostgreSQL is a JavaScript framework for building user interfaces.'
    }
  ]
}
