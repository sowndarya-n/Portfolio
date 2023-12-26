import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  projects:any = [
    {
      id: 1,
      title: 'FashioNet',
      desc: 'This project focuses on using different types of Generative Adversarial Networks or GAN to create new shirt designs. The GAN helps create new designs by generating new shirts from noise signals after being trained over a dataset of shirts. ',
      githurl: 'https://github.com/sowndarya-n',
      imgUrl: 'assets/images/GANs.png',
      tech: 'Generative Adversarial Networks (DCGAN & SRGAN)'
    },

    {
      id: 2,
      title: 'Cinema E-Booking System',
      desc: 'The Cinema E-Booking System is a comprehensive web-based application designed to streamline and enhance the movie booking experience for both administrators and users.',
      githurl: 'https://github.com/sowndarya-n/Cinema-E-Booking-System',
      imgUrl: 'assets/images/CinemaEBooking.png',
      tech: 'Angular, Java SpringBoot, MySQL'
    },
    {
      id: 3,
      title: 'EduConnect',
      desc: 'In this project, we provide a platform that gives students access to a range of classes and educational materials. The same platform allows instructors to set up and manage courses, track student development, and provide help and feedback. ',
      githurl: 'https://github.com/sowndarya-n/Edu-Connect',
      imgUrl: 'assets/images/EduConnect.png',
      tech: 'Tkinter, Python, Flask, Flask-SQLAlchemy, Flask-SocketIO'
    },

    {
      id: 4,
      title: 'Facebook Fake Account Detection',
      desc: 'Addressing the growing threat of fake accounts on social media platforms, this project employs machine learning algorithms, including Random Forest, Neural Network, and Support Vector Machines, for the detection of malicious accounts.',
      githurl: 'https://github.com/sowndarya-n/Fake-Account-Detection-on-Social-Media-using-Machine-Learning-Algorithms',
      imgUrl: 'assets/images/FacebookFake.png',
      tech: 'Python, Machine Learning Libraries such as numpy, pandas,scikit-learn'
    },


    {
      id: 5,
      title: 'Timesheet Management',
      desc: 'This project allows the user to add his/her tasks and lock the duration of each task for a particular day which is further used to evaluate the efforts of the user working in an organization to generate payroll.',
      githurl: 'https://github.com/sowndarya-n/Timesheet-Management',
      imgUrl: 'assets/images/TimeSheet.png',
      tech: 'React, Material-UI, Firebase'
    },
    {
      id: 6,
      title: 'Fraud Detection using Unsupervised Machine Learning',
      desc: 'This project focuses on implementing and comparing the performance of two powerful unsupervised machine learning algorithms: the Isolation Forest Algorithm and the Local Outlier Factor.',
      githurl: 'https://github.com/sowndarya-n/Credit-Card-Fraud-Detection-ML',
      imgUrl: 'assets/images/FraudDetection.png',
      tech: 'Python, NumPy, Pandas,Sklearn,Scipy,Seaborn, Matplotlib'
    },

    {
      id: 7,
      title: 'Online Bookstore System',
      desc: 'The Online Bookstore System is a web-based platform designed to facilitate the buying and selling of books in a convenient and efficient manner. Our system aims to bridge the gap between book buyers and sellers, offering a user-friendly interface that enhances the overall book purchasing experience.',
      githurl: 'https://github.com/sowndarya-n/Onlinebookstore_DBMS',
      imgUrl: 'assets/images/OnlineBookstore.png',
      tech: 'HTML, CSS, JS, Angular,Java Spring-Boot,MySQL'
    },
    {
      id: 8,
      title: 'Relational Algebra Operators in Database Management',
      desc: 'Project refines the implementation of five critical Relational Algebra operators, including Project, Select, Union, Minus, and Join, within the Table.java file. Notably, it introduces functionalities such as attribute-based extraction, data filtering, row merging, and various types of joins for analysis.',
      githurl: 'https://github.com/sowndarya-n/Relational-Algebra-operators_Project1_DB',
      imgUrl: 'assets/images/RelationalAlgebra.png',
      tech: 'Java, MySQL'
    },


    {
      id: 9,
      title: 'Linear Hash Indexing in Database Management',
      desc: 'Project focuses on implementing Indexing using the Linear Hashing technique for efficient database management. Linear Hashing is employed as a flexible and disk-based indexing method, adapting to changing data sizes and quickly locating records with specific keys.',
      githurl: 'https://github.com/sowndarya-n/React-Weather-App',
      imgUrl: 'assets/images/LinearHash.jpg',
      tech: 'Java, MySQL, Linear Hash Indexing'
    },


    {
      id: 10,
      title: 'Performance Testing of Linear Hashed Indexing',
      desc: 'Project focuses on conducting a comprehensive performance and speed test (measured in milliseconds per query) for the Project 2 code.',
      githurl: 'https://github.com/sowndarya-n/Performance-Test_Project3_DB',
      imgUrl: 'assets/images/PerformanceLinHash.png',
      tech: 'Java, MySQL, PostgreSQL, Linear Hash Indexing'
    },
    {
      id: 11,
      title: 'Personal Portfolio Using Angular',
      desc: 'This portfolio website, crafted with HTML, SCSS, TypeScript, Angular, and Bootstrap, showcases a seamless blend of creativity and functionality. The use of Angular provides a dynamic and interactive user experience, while Bootstrap ensures a responsive design for various devices. ',
      githurl: 'https://github.com/sowndarya-n/Portfolio',
      imgUrl: 'assets/images/Portfolio.png',
      tech: 'HTML, SCSS, TypeScript, Angular, Bootstrap'
    },
  ]
  about2 = `Software Developer with 2.5+ years of experience .
  Worked with Software Development Life Cycle(SDLC) and  agile methodologies .
  Expertise in Angular 2+ versions, React, Javascript,  Node JS and UI with Responsive Designs .
  Have good understanding of Python, Jquery, Bootstrap, HTML, CSS, SCSS, Java, R and MYSQL`

  about = "A motivated and passionate software developer who is eager to leverage my expertise by contributing to innovative projects by exploring new avenues of growth in the field of software development."
  resumeurl = "https://drive.google.com/file/d/1tYSxCyBm6iVNlcECGWMwE3O_4v7no1E8/view?usp=sharing"

  skillsData: any = [ 
    {
      'id': '1',
      'skill': 'HTML,CSS',
      'progress': '95%'
    },
    {
      'id': '2',
      'skill': 'ANGULAR 2+',
      'progress': '85%'
    },
    {
      'id': '3',
      'skill': 'NODE JS',
      'progress': '80%'
    },
    {
      'id': '4',
      'skill': 'JavaScript, jQuery, TypeScript',
      'progress': '80%'
    },
    {
      'id': '5',
      'skill': 'SQL , MYSQL',
      'progress': '75%'
    },
    {
      'id': '6',
      'skill': 'REACT JS',
      'progress': '70%'
    },
    {
      'id': '7',
      'skill': 'Django',
      'progress': '70%'
    },
    {
      'id': '8',
      'skill': 'PYTHON,JAVA',
      'progress': '70%'
    },
    {
      'id': '9',
      'skill': 'SalesForce, ServiceNow',
      'progress': '60%'
    },
    {
      'id': '10',
      'skill': 'Figma UX',
      'progress': '40%'
    },
    

  ];


  educationData: any = [
    {
      'id': '1',
      'from_to_year': 'January 2023 - December 2024',
      'education': 'Master\'s Degree',
      'stream': 'Computer Science',
      'gpa': 'Current GPA: 3.88 .',
      'institution': 'The University of Georgia'
    },
    {
      'id': '2',
      'from_to_year': '2013 - 2015',
      'education': 'Higher Secondary',
      'stream': 'Science and Mathematics',
      'institution': 'GYANDEEEP VIDHYALAYA,AHMEDABAD',
      'info': `The High School was mainly focus on the bases of science, mathematics, and Chemistry
There was also a good base on physics, mathematics and chemistry.
Completed my high school with 78%.`
    },
    {
      'id': '3',
      'from_to_year': '2012 - 2013',
      'education': 'Secondary  School',
      'stream': 'Science and Mathematics',
      'institution': 'GYANDEEEP VIDHYALAYA,AHMEDABAD',
      'info': `The Secondary aims at Maths , English , Science, Social Science, Litrature and Languages.
Completed my Secondary school with 84%.`
    }
  ];
  exprienceData: any = [
    {
      id: 1,
      company: 'Tata Consultancy Services',
      location: 'Hyderabad, India',
      timeline: 'August 2020 - December 2022',
      role: 'System Engineer',
      work: `Designed the front-end applications, user interactive (UI) web pages using web technologies like HTML and CSS, jQuery, JavaScript, and Pure CSS layouts to address the need of improving the existing application UI .
      Closely worked with Business System Analysts to understand the client requirements to design the right set of UI modules. Coordinated with the back-end developers in the process of building the API .
      Enhanced user experience, resulting in a 15% increase in client satisfaction and a 10% improvement in the application performance. `
    },
    {
      id: 2,
      company: 'Qubit AI Technologies',
      location: 'Hyderabad, India',
      timeline: 'February 2020 - July 2020',
      role: 'Front-End Developer Intern',
      work: `Revamped webpages to fix the compatibility and functionality issues by implementing HTML5, CSS, Bootstrap, JavaScript, and jQuery techniques .
      Successfully resolved existing bugs, significantly improving website functionality and reducing website load for enhanced user experience .
      Developed an entertainment-focused web and mobile application using Django .
      Achieved dynamic, cross-browser compatibility for webpages, resulting 25% improvement in website performance.`
    },
    {
      id: 3,
      company: 'ZettaMine Labs Pvt. Ltd.',
      location: 'Hyderabad, India',
      timeline: 'May 2018 - June 2018',
      role: 'Developement Intern',
      work: `Designed initial UI/UX for Customer Portfolio Management Software .
      Worked on the project named “FashioNet” by using two types of Generative Adversarial Networks(DCGAN and SRGAN) to create new shirt designs Coordinated with the back-end developers in the process of building the API .
      Worked on the concept of web scrapping to obtain the dataset from the e-commerce website and GANs are trained to generate new shirts images from noise signals contributing to a 25% increase in data quality.`
    },
  ]

  extraCircularInfo: any = [
    {
      id:1,
      title: 'Blogger',
      description: '',
      img: 'assets/images/Mehul Kothari – Medium1.png',
      url: 'https://mehulkothari05.medium.com/'
    },
    {
      id:1,
      title: 'Github',
      description: '',
      img: 'assets/images/Mehulkothari_github.png',
      url: 'https://github.com/sowndarya-n/'
    },
    {
      id:1,
      title: 'Freelancing',
      description: '',
      img: 'assets/images/mehul_freelancing.png',
      url: 'https://www.upwork.com/freelancers/~016d6f497a5629df4b'
    },
  ]
  // contactus(data: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'contact', data);
  // }

  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }

  extraCircular(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.extraCircularInfo;
  }
}
