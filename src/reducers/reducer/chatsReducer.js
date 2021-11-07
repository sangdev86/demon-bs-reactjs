const initialState={
    toUser:{
            uid: 2,
            uName: 'Mike Litorus',
    },
    chats:
        [{
            content: 'Hello. What can I do for you?',
            times: '8:30 am',
            create_day: '19/02/2021',
            imgUser:'' ,
            toUid: 2,
            uid:1,
        },
        {
            content: 'Im just looking around. Will you tell me something about yourself ? ',
            times: '8:35 am',
            create_day: '20/02/2021',
            imgUser: '',
            toUid: 1,
            uid: 2,
        },
        {
            content: 'Where?',
            times: '8:35 am',
            create_day: '20/02/2021',
            imgUser: '',
            toUid: 2,
            uid: 1,
        },
        {
            content: 'Are you there? That time!',
            times: '8:40 am',
            create_day: '20/02/2021',
            imgUser: '',
            toUid: 1,
            uid: 2,
        },
        {
            content: 'OK, my name is Limingqiang. I like singing, playing basketballand so on.',
            times: '8:42 am',
            create_day: '20/02/2021',
            imgUser: '',
            toUid: 2,
            uid: 1,
        },
        {
            content: 'Consectetuorem ipsum dolor sit?',
            times: '8:50 am',
            create_day: '20/02/2021',
            imgUser: '',
            toUid: 1,
            uid: 2,
        },
        {
            content: 'ok?',
            times: '8:55 am',
            create_day: '20/02/2021',
            imgUser: '',
            toUid: 1,
            uid: 2,
        },
        {
            content: 'OK!',
            times: '9:00 am',
            create_day: '20/02/2021',
            imgUser: '',
            toUid: 2,
            uid: 1,
        },
        
    ],
}

const chatsReducer = (state = initialState, action) =>{
    switch (action.type) {
        case "value":
            
            break;
    
        default:
            break;
    }
    return {...state};
}
export default chatsReducer;