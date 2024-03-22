export const messengerRoutes={
    main:"/messenger",
    chat:{
        base:"/messenger/chat",
        create:"/messenger/chat/create",
        refactor:"/messenger/chat/refactor",
        add_friend:"/messenger/chat/add_friend",
        all_info:{
            users:"/messenger/chat/all_info/users",
            media:"/messenger/chat/all_info/media",
            link:"/messenger/chat/all_info/link",
        }
    },
    friend:{
        refactor_list:"/messenger/friend/refactor_list",
        search:"/messenger/friend/search"
    }
}