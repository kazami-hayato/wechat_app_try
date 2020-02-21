Component({
        properties: {
            envId: String,
            collection: String,
            groupId: String,
            groupName: String,
            userInfo: Object,
            onGetUserInfo: {
                type: Function,
            },
            getOpenID: {
                type: Function,
            },
            current:{
                type:Number
            }
        },

        data: {
            list: [
                {
                    "iconPath": "/assets/icons/home.png",
                    "selectedIconPath": "/assets/icons/home_a.png",
                    "pagePath": "/pages/Home/home"
                },
                {
                    "iconPath": "/assets/icons/book.png",
                    "selectedIconPath": "/assets/icons/book_a.png",
                    "pagePath": "/pages/Book/book"


                },
                {
                    "iconPath": "/assets/icons/bookmark.png",
                    "selectedIconPath": "/assets/icons/bookmark_a.png",
                    "pagePath": "/pages/Favorite/favorite"

                },
                {
                    "iconPath": "/assets/icons/person.png",
                    "selectedIconPath": "/assets/icons/person_a.png",
                    "pagePath": "/pages/Person/person"

                }]
        },

        methods: {
            tabChange(e) {
                let index=e.detail.index
                console.log(index)
                wx.switchTab({
                    url:"/pages/Person/person",

                });
            }
        }
    }
)
