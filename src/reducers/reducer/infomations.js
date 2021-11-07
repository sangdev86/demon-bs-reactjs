
const initialState ={
    //witgets
    revenue: 100,
    userCounts:900,
    projectCounts:99,
    TaskCounts: 600,
    //barCharts
    labelsBar: ["2006", "2007", "2008", "2009", "2010", "2011", "2012"],
    datasetsBar: [
        {
            label: "test1",
            backgroundColor: [
                "rgb(11, 98, 164)",
            ],
            data: [100, 75, 50, 75, 89, 20, 67]
        },
        {
            label: "test2",
            backgroundColor: [
                "rgb(122, 146, 163)",
            ],
            data: [90, 65, 40, 65, 15, 11, 30]
        },
        {
            label: "test3",
            backgroundColor: [
                "rgb(77, 167, 77)",
            ],
            data: [0, 20, 10, 25, 89, 43, 67]
        },
        {
            label: "test4",
            backgroundColor: [
                "rgb(175, 216, 248)",
            ],
            data: [0, 55, 55, 55, 55, 55, 55]
        }
    ],
    //productStatus
    labelsProductStatus: ['1906', '1907', '1908', '1909'],
    datasetsProductStatus: [{
            label: 'test1',
            data: [65, 59, 80, 81],
            fill: false,
            borderColor: "rgb(11, 98, 164)",
            tension: 0.1
        },
        {
            label: 'test2',
            data: [100, 75, 50, 75],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        },
        {
            label: 'test3',
            data: [0, 20, 10, 25],
            fill: false,
            borderColor: "rgb(77, 167, 77)",
            tension: 0.1
        },
        {
            label: 'test4',
            data: [0, 55, 53, 35],
            fill: false,
            borderColor: "rgb(175, 216, 248)",
            tension: 0.1
        },
    ],
    //projectStatus
    datasetsProjectStatus: [{
            label: 'Projects',
            value: 45,
        },
        {
            label: 'Clients',
            value: 15,
        },
        {
            label: 'Tasks',
            value: 45
        },
        {
            label: 'Messages',
            value: 30,
        },
        {
            label: 'Employees',
            value: 20,
        }
    ],
    //tastStatus
    labelsTaskStatus: ['1906', '1907', '1908', '1909'],
    datasetsTaskStatus: [{
            label: 'test1',
            data: [65, 59, 80, 81],
            fill: true,
            backgroundColor: [
                "rgba(11, 98, 164,0.2)",
            ],
            borderColor: "rgb(11, 98, 164)",
            tension: 0.1
        },
        {
            label: 'test2',
            data: [110, 75, 50, 75],
            fill: true,
            backgroundColor: [
                "rgba(77, 167, 77,0.2)",
            ],
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        },
    ],
    departments:[
        {
            id: 1,
            departmentName: 'Web Development',
        },
        {
            id: 2,
            departmentName: 'Application Development',
        },
        {
            id: 3,
            departmentName: 'IT Management',
        },
        {
            id: 4,
            departmentName: 'Accounts Management',
        },
        {
            id: 5,
            departmentName: 'Support Management',
        },
        {
            id: 6,
            departmentName: 'Marketing',
        }
    ],
    designations:[
        {
            id: 1,
            designationName: 'Web Developer',
            departmentName: 'Web Development',
        }, {
            id: 2,
            designationName: 'Web Designer',
            departmentName: 'Web Development',
        }, {
            id: 3,
            designationName: 'Android Developer',
            departmentName: 'Application Development',
        }, {
            id: 4,
            designationName: 'IOS Developer',
            departmentName: 'Application Development',
        }, {
            id: 5,
            designationName: 'UI Designer',
            departmentName: 'Application Development',
        }, {
            id: 6,
            designationName: 'UX Designer',
            departmentName: 'Application Development',
        }, {
            id: 7,
            designationName: 'IT Technician',
            departmentName: 'Application Development',
        }, {
            id: 8,
            designationName: 'Product Manager',
            departmentName: 'Application Development',
        }, {
            id: 9,
            designationName: 'SEO Analyst',
            departmentName: 'Application Development',
        }, {
            id: 10,
            designationName: 'Front End Designer',
            departmentName: 'Application Development',
        }, {
            id: 11,
            designationName: 'Systems Engineer',
            departmentName: 'Application Development',
        }, {
            id: 12,
            designationName: 'Technical Lead',
            departmentName: 'Application Development',
        }, {
            id: 13,
            designationName: 'Systems Administrator',
            departmentName: 'Application Development',
        }
    ],
    holidays:[{
            id:1,
            title: 'New Year',
            holidayDate: '1 Jan 2017',
            day: 'Sunday',
            complete: true,
        },
        {
            id: 2,
            title: 'Good Friday',
            holidayDate: '14 Apr 2017',
            day: 'Friday',
            complete: true,
        },
        {
            id: 3,
            title: 'May Day',
            holidayDate: '1 Jan 2017',
            day: 'Monday',
            complete: true,
        },
        {
            id: 4,
            title: 'Memorial Day',
            holidayDate: '28 May 2017',
            day: 'Monday',
            complete: true,
        },
        {
            id: 5,
            title: 'Ramzon',
            holidayDate: '26 May 2017',
            day: 'Monday',
            complete: true,
        },
        {
            id: 6,
            title: 'Bakrid',
            holidayDate: '2 Sep 2017',
            day: 'Saturday',
            complete: false,
        },
        {
            id: 7,
            title: 'Deepavali',
            holidayDate: '18 Oct 2017',
            day: 'Wednesday',
            complete: false,
        },
        {
            id: 8,
            title: 'Christmas',
            holidayDate: '25 Dec 2017',
            day: 'Monday',
            complete: false,
        }
    ],
    products:[
        {   
            id: 1,
            title: 'Apple Macbook Air MQD42HN/A 13-inch Laptop',
            img: '../assets/img/product/product-01.jpg',
            price: 1918,
            createDate: '1 Sep 2017',
            quantity: 18,
            orders: 10,
            status: 1,
            },
        {
            id: 2,
            title: 'Apple Macbook Air MQD42HN/A 13-inch Laptop',
            img: '../assets/img/product/product-02.jpg',
            price: 1918,
            createDate: '1 Sep 2017',
            quantity: 18,
            orders: 10,
            status: 2,
            },
        {
            id: 3,
            title: 'Apple Macbook Air MQD42HN/A 13-inch Laptop',
            img: '../assets/img/product/product-03.jpg',
            price: 1918,
            createDate: '1 Sep 2017',
            quantity: 18,
            orders: 10,
            status: 3,
            },
        {
            id: 4,
            title: 'Apple Macbook Air MQD42HN/A 13-inch Laptop',
            img: '../assets/img/product/product-04.jpg',
            price: 1918,
            createDate: '1 Sep 2017',
            quantity: 18,
            orders: 10,
            status: 3,
            },
        {
            id: 5,
            title: 'Apple Macbook Air MQD42HN/A 13-inch Laptop',
            img: '../assets/img/product/product-01.jpg',
            price: 1918,
            createDate: '1 Sep 2017',
            quantity: 18,
            orders: 10,
            status: 1,
            },
        {
            id: 6,
            title: 'Apple Macbook Air MQD42HN/A 13-inch Laptop',
            img: '../assets/img/product/product-04.jpg',
            price: 1918,
            createDate: '1 Sep 2017',
            quantity: 18,
            orders: 10,
            status: 1,
            },
        {
            id:7,
            title: 'Apple Macbook Air MQD42HN/A 13-inch Laptop',
            img: '../assets/img/product/product-01.jpg',
            price: 1918,
            createDate: '1 Sep 2017',
            quantity: 18,
            orders: 10,
            status: 1,
            },
        {
            id: 8,
            title: 'Apple Macbook Air MQD42HN/A 13-inch Laptop',
            img: '../assets/img/product/product-01.jpg',
            price: 1918,
            createDate: '1 Sep 2017',
            quantity: 18,
            orders: 10,
            status: 1,
            },
        {
            id: 9,
            title: 'Apple Macbook Air MQD42HN/A 13-inch Laptop',
            img: '../assets/img/product/product-01.jpg',
            price: 1918,
            createDate: '1 Sep 2017',
            quantity: 18,
            orders: 10,
            status: 1,
            }
    ],
    listNews: [
        {
            id: 1,
            title: 'Do You Know the ABCs of Health Care?',
            content: `Lorem ipsum dolor sit amet, consectetur em adipiscing elit,
            sed do eiusmod tempor incididunt ut labore etmis dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris.`,
            img: '../assets/img/blog/blog-01.jpg',
            likes: 21,
            views: 8,
            comments: 18,
            createDate: 'December 6, 2017',
        },
        {
            id: 2,
            title: 'Do You Know the ABCs of Health Care?',
            content: `Lorem ipsum dolor sit amet, consectetur em adipiscing elit,
            sed do eiusmod tempor incididunt ut labore etmis dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris.`,
            img: '../assets/img/blog/blog-02.jpg',
            likes: 21,
            views: 8,
            comments: 18,
            createDate: 'December 6, 2017',
        },
        {
            id: 3,
            title: 'Do You Know the ABCs of Health Care?',
            content: `Lorem ipsum dolor sit amet, consectetur em adipiscing elit,
            sed do eiusmod tempor incididunt ut labore etmis dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris.`,
            img: '../assets/img/blog/blog-03.jpg',
            likes: 21,
            views: 8,
            comments: 18,
            createDate: 'December 6, 2017',
        },
        {
            id: 4,
            title: 'Do You Know the ABCs of Health Care?',
            content: `Lorem ipsum dolor sit amet, consectetur em adipiscing elit,
            sed do eiusmod tempor incididunt ut labore etmis dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco sit laboris.`,
            img: '../assets/img/blog/blog-04.jpg',
            likes: 21,
            views: 8,
            comments: 18,
            createDate: 'December 6, 2017',
        }
    ],
    newsDetails:{
        id: 4,
        title: 'Do You Know the ABCs of Health Care?',
        content: `
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.

                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.Nemo enim ipsam
            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.Neque
            porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
            velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem.Ut enim ad minima veniam, quis nostrum
            exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
            consequatur ? Quis autem vel eum iure reprehenderit qui in ea voluptate velit
            esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
            voluptas nulla pariatur ?

                Vestibulum id ligula porta felis euismod semper.Sed posuere consectetur est
            at lobortis.Aenean eu leo quam.Pellentesque ornare sem lacinia quam
            venenatis vestibulum.Duis mollis, est non commodo luctus, nisi erat
            porttitor ligula, eget lacinia odio sem nec elit.Donec ullamcorper nulla
            non metus auctor fringilla.Vestibulum id ligula porta felis euismod semper. 
            
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
            praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias
            excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
            officia deserunt mollitia animi, id est laborum et dolorum fuga.Et harum quidem
            rerum facilis est et expedita distinctio.Nam libero tempore, cum soluta nobis
            est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere
            possimus, omnis voluptas assumenda est, omnis dolor repellendus.Temporibus
            autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet
            ut et voluptates repudiandae sint et molestiae non recusandae.Itaque earum
            rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores
            alias consequatur aut perferendis doloribus asperiores repellat.
        `,
        img: '../assets/img/blog/blog-04.jpg',
        likes: 21,
        views: 8,
        comments: 18,
        createDate: 'December 6, 2017',
    }
}

const infomations = (state = initialState, action) => {
    switch (action.Type) {
        case 'a':
            break;
    
        default:
            break;
    }
    return{...state};
}
export default infomations;