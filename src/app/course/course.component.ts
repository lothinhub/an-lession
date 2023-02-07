import { Component } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  listdata = [


    {
      "albumId": 2,
      "course": "free",
      "id": 66,
      "title": "provident rerum voluptatem illo asperiores qui maiores",
      "url": "https://via.placeholder.com/600/ee0a7e",
      "thumbnailUrl": "https://via.placeholder.com/150/ee0a7e"
    },
    {
      "albumId": 2,
      "course": "free",
      "id": 67,
      "title": "veritatis labore ipsum unde aut quam dolores",
      "url": "https://via.placeholder.com/600/1279e9",
      "thumbnailUrl": "https://via.placeholder.com/150/1279e9"
    },
    {
      "albumId": 2,
      "course": "free",
      "id": 68,
      "title": "architecto aut quod qui ullam vitae expedita delectus",
      "url": "https://via.placeholder.com/600/e9603b",
      "thumbnailUrl": "https://via.placeholder.com/150/e9603b"
    },
    {
      "albumId": 2,
      "course": "free",
      "id": 69,
      "title": "et autem dolores aut porro est qui",
      "url": "https://via.placeholder.com/600/46e3b1",
      "thumbnailUrl": "https://via.placeholder.com/150/46e3b1"
    },
    {
      "albumId": 2,
      "course": "free",
      "id": 70,
      "title": "quam quos dolor eum ea in",
      "url": "https://via.placeholder.com/600/7375af",
      "thumbnailUrl": "https://via.placeholder.com/150/7375af"
    },
    {
      "albumId": 2,
      "course": "trial",
      "id": 71,
      "title": "illo qui vel laboriosam vel fugit deserunt",
      "url": "https://via.placeholder.com/600/363789",
      "thumbnailUrl": "https://via.placeholder.com/150/363789"
    },
    {
      "albumId": 2,
      "course": "free",
      "id": 72,
      "title": "iusto sint enim nesciunt facilis exercitationem",
      "url": "https://via.placeholder.com/600/45935c",
      "thumbnailUrl": "https://via.placeholder.com/150/45935c"
    },
    {
      "albumId": 2,
      "course": "primium",
      "id": 73,
      "title": "rerum exercitationem libero dolor",
      "url": "https://via.placeholder.com/600/1224bd",
      "thumbnailUrl": "https://via.placeholder.com/150/1224bd"
    },
    {
      "albumId": 2,
      "course": "free",
      "id": 74,
      "title": "eligendi quas consequatur aut consequuntur",
      "url": "https://via.placeholder.com/600/65ac19",
      "thumbnailUrl": "https://via.placeholder.com/150/65ac19"
    },
    {
      "albumId": 2,
      "course": "trial",
      "id": 75,
      "title": "aut magni quibusdam cupiditate ea",
      "url": "https://via.placeholder.com/600/a9ef52",
      "thumbnailUrl": "https://via.placeholder.com/150/a9ef52"
    },
    {
      "albumId": 2,
      "course": "primium",
      "id": 76,
      "title": "magni nulla et dolores",
      "url": "https://via.placeholder.com/600/7644fe",
      "thumbnailUrl": "https://via.placeholder.com/150/7644fe"
    },
    {
      "albumId": 2,
      "course": "free",
      "id": 77,
      "title": "ipsum consequatur vel omnis mollitia repellat dolores quasi",
      "url": "https://via.placeholder.com/600/36d137",
      "thumbnailUrl": "https://via.placeholder.com/150/36d137"
    },
    {
      "albumId": 2,
      "course": "free",
      "id": 78,
      "title": "aperiam aut est amet tenetur et dolorem",
      "url": "https://via.placeholder.com/600/637984",
      "thumbnailUrl": "https://via.placeholder.com/150/637984"
    },
    {
      "albumId": 2,
      "course": "primium",
      "id": 79,
      "title": "est vel et laboriosam quo aspernatur distinctio molestiae",
      "url": "https://via.placeholder.com/600/c611a9",
      "thumbnailUrl": "https://via.placeholder.com/150/c611a9"
    },
    {
      "albumId": 2,
      "course": "free",
      "id": 80,
      "title": "et corrupti nihil cumque",
      "url": "https://via.placeholder.com/600/a0c998",
      "thumbnailUrl": "https://via.placeholder.com/150/a0c998"
    },
    {
      "albumId": 2,
      "course": "primium",
      "id": 81,
      "title": "error magni fugiat dolorem impedit molestiae illo ullam debitis",
      "url": "https://via.placeholder.com/600/31a74c",
      "thumbnailUrl": "https://via.placeholder.com/150/31a74c"
    }
  ]
  getall() {
    return this.listdata.length;
  }
  getfree() {
    return this.listdata.filter(type => type.course === 'free').length;
  }
  getPrimium() {
    return this.listdata.filter(type => type.course === 'primium').length;
  }
  gettrial() {
    return this.listdata.filter(type => type.course === 'trial').length;
  }
  courseCountRadioButton: String = 'All';
  onChange(data: String) {
    this.courseCountRadioButton = data;
    // console.log(this.courseCountRadioButton);
  }
  searchText: string = '';

  onsearchTextInput(searchvalue: string) {
    this.searchText = searchvalue;
    console.log(this.searchText);
  }
}
